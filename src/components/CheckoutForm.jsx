// src/components/CheckoutForm.jsx
import { useState } from 'react';
import { ArrowLeft, Send, AlertCircle, User, Phone, MapPin, FileText, MessageSquare } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

export default function CheckoutForm({ subtotal, cart, onSuccess, onBack }) {
  const { lang, t } = useThemeLanguage();
  const [form, setForm] = useState({ name: '', phone: '', address: '', notes: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Restaurant WhatsApp Number (format international, Maroc: +212600000000)
  const RESTAURANT_WHATSAPP = '212600000000';

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = t.reqName;
    if (!form.phone.trim())   e.phone   = t.reqPhone;
    else if (!/^\+?[\d\s\-]{8,}$/.test(form.phone.trim())) e.phone = t.reqPhoneValid;
    if (!form.address.trim()) e.address = t.reqAddress;
    return e;
  };

  const generateWhatsAppMessage = () => {
    const isAr = lang === 'ar';
    const itemsText = cart.map(item => {
      const name = typeof item.name === 'object' ? item.name[lang] || item.name.fr : item.name;
      return `• ${item.qty}x ${name} (${item.price * item.qty} MAD)`;
    }).join('\n');

    if (isAr) {
      return encodeURIComponent(
`*🍽️ طلب جديد من مطعم Bella Taste*
----------------------------------------
*👤 معلومات الزبون:*
• الاسم: ${form.name}
• الهاتف: ${form.phone}
• العنوان: ${form.address}
${form.notes ? `• ملاحظات: ${form.notes}` : ''}

*📋 تفاصيل الوجبات:*
${itemsText}

----------------------------------------
*💰 المجموع الإجمالي: ${subtotal} MAD*
*🛵 التوصيل: مجاني*

شكراً لكم، المرجو تأكيد الطلب وتوقيت التوصيل.`
      );
    }

    return encodeURIComponent(
`*🍽️ Nouvelle Commande - Bella Taste*
----------------------------------------
*👤 Informations Client:*
• Nom: ${form.name}
• Téléphone: ${form.phone}
• Adresse de livraison: ${form.address}
${form.notes ? `• Notes: ${form.notes}` : ''}

*📋 Détails de la commande:*
${itemsText}

----------------------------------------
*💰 Total: ${subtotal} MAD*
*🛵 Livraison: Gratuite*

Merci de me confirmer la réception et le délai estimé de livraison.`
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);

    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${RESTAURANT_WHATSAPP}?text=${message}`;

    setTimeout(() => {
      setLoading(false);
      // Open WhatsApp in new tab
      window.open(whatsappUrl, '_blank');
      onSuccess();
    }, 800);
  };

  const field = (id, label, Icon, type = 'text', placeholder = '') => (
    <div>
      <label htmlFor={id} className="block text-xs font-semibold text-charcoal-400 uppercase tracking-wider mb-1.5">
        {label} <span className="text-red-500">*</span>
      </label>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-500 pointer-events-none" />
        <input
          id={id}
          type={type}
          value={form[id]}
          onChange={e => { setForm(f => ({ ...f, [id]: e.target.value })); setErrors(er => ({ ...er, [id]: '' })); }}
          placeholder={placeholder}
          className={`w-full pl-10 pr-4 py-3 rounded-xl bg-charcoal-900 border text-white text-sm placeholder-charcoal-600 focus:outline-none transition-colors ${
            errors[id] ? 'border-red-500' : 'border-charcoal-700/60 focus:border-gold-500'
          }`}
        />
      </div>
      {errors[id] && (
        <p className="flex items-center gap-1 text-xs text-red-400 mt-1">
          <AlertCircle className="w-3 h-3" /> {errors[id]}
        </p>
      )}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-5" noValidate>
      {/* Back button */}
      <button
        type="button"
        onClick={onBack}
        className="flex items-center gap-2 text-charcoal-400 hover:text-gold-400 text-sm transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> {t.backToCart}
      </button>

      <div className="flex items-center gap-2">
        <MessageSquare className="w-5 h-5 text-emerald-400" />
        <h3 className="text-lg font-serif font-semibold text-white">{t.completeOrder}</h3>
      </div>

      {/* WhatsApp info badge */}
      <div className="flex gap-2.5 p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-600/40">
        <Send className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-emerald-300 leading-relaxed">
          {lang === 'ar'
            ? 'عند النقر على تأكيد، سيتم فتح محادثة واتساب تلقائياً مع تفاصيل طلبك وعنوانك للتواصل المباشر مع المطعم.'
            : 'En cliquant sur Confirmer, votre commande complète sera transmise directement au restaurant sur WhatsApp.'
          }
        </p>
      </div>

      {/* Order summary */}
      <div className="rounded-xl bg-charcoal-900/60 border border-charcoal-800/40 p-4 space-y-2">
        <h4 className="text-xs font-semibold text-charcoal-400 uppercase tracking-wider mb-2">
          {t.orderSummary}
        </h4>
        {cart.map(item => {
          const name = typeof item.name === 'object' ? item.name[lang] || item.name.fr : item.name;
          return (
            <div key={item.id} className="flex justify-between text-sm text-charcoal-300">
              <span>{item.qty}× {name}</span>
              <span>{item.price * item.qty} MAD</span>
            </div>
          );
        })}
        <div className="border-t border-charcoal-800/60 pt-2 flex justify-between font-bold text-white">
          <span>{t.total}</span>
          <span className="text-gold-400">{subtotal} MAD</span>
        </div>
      </div>

      {/* Form fields */}
      {field('name',    t.fullName,         User,    'text',  lang === 'ar' ? 'محمد بناني' : 'Ahmed Bennani')}
      {field('phone',   t.phone,            Phone,   'tel',   '+212 6XX XXX XXX')}
      {field('address', t.deliveryAddress,  MapPin,  'text',  lang === 'ar' ? 'حي المعاريف، زنقة 15، الدار البيضاء' : 'Bd d\'Anfa, Maarif, Casablanca')}

      {/* Notes textarea */}
      <div>
        <label htmlFor="notes" className="block text-xs font-semibold text-charcoal-400 uppercase tracking-wider mb-1.5">
          {t.notes}
        </label>
        <div className="relative">
          <FileText className="absolute left-3 top-3.5 w-4 h-4 text-charcoal-500 pointer-events-none" />
          <textarea
            id="notes"
            value={form.notes}
            onChange={e => setForm(f => ({ ...f, notes: e.target.value }))}
            placeholder={lang === 'ar' ? 'بدون بصل، صلصة إضافية، تعليمات التوصيل...' : 'Sauce à part, sans oignons, instructions...'}
            rows={2}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-charcoal-900 border border-charcoal-700/60 text-white text-sm placeholder-charcoal-600 focus:outline-none focus:border-gold-500 transition-colors resize-none"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold bg-emerald-600 hover:bg-emerald-500 text-white disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-xl shadow-emerald-900/30"
      >
        {loading ? (
          <><span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> {t.sending}</>
        ) : (
          <><Send className="w-4 h-4" /> {t.sendWhatsApp}</>
        )}
      </button>
    </form>
  );
}
