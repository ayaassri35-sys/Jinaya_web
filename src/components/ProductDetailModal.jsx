// src/components/ProductDetailModal.jsx
import { X, Plus, Check, Clock, Flame, Tag, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

export default function ProductDetailModal({ item, onClose }) {
  const { dispatch } = useCart();
  const { lang, t } = useThemeLanguage();
  const [added, setAdded] = useState(false);

  if (!item) return null;

  const itemName = typeof item.name === 'object' ? item.name[lang] || item.name.fr : item.name;
  const itemDesc = typeof item.description === 'object' ? item.description[lang] || item.description.fr : item.description;
  const itemLongDesc = typeof item.longDescription === 'object' ? item.longDescription[lang] || item.longDescription.fr : item.longDescription || itemDesc;
  const itemBadge = item.badge ? (typeof item.badge === 'object' ? item.badge[lang] || item.badge.fr : item.badge) : null;

  const handleAdd = () => {
    dispatch({ type: 'ADD_ITEM', item });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overlay"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-charcoal-900 border border-charcoal-700/70 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row animate-fadeInUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-charcoal-950/80 hover:bg-gold-500 hover:text-charcoal-950 text-white transition-colors"
          aria-label={t.close}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-charcoal-800 flex-shrink-0">
          <img
            src={item.image}
            alt={itemName}
            className="w-full h-full object-cover"
          />
          {itemBadge && (
            <span className="absolute top-4 left-4 text-xs font-bold tracking-wider px-3 py-1 rounded-full bg-gold-500 text-charcoal-950 shadow-md">
              {itemBadge}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-wider text-gold-500">
              <Tag className="w-3.5 h-3.5" />
              <span>{item.category}</span>
            </div>

            <h3 className="text-2xl font-serif font-bold text-white mb-3">
              {itemName}
            </h3>

            {/* Quick Metrics */}
            <div className="flex items-center gap-4 py-2 border-y border-charcoal-800/60 text-xs text-charcoal-400 mb-4">
              {item.prepTime && (
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-gold-400" />
                  <span>{item.prepTime}</span>
                </div>
              )}
              {item.calories && (
                <div className="flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-amber-500" />
                  <span>{item.calories}</span>
                </div>
              )}
              <div className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>{lang === 'ar' ? 'طازج يومياً' : 'Frais du jour'}</span>
              </div>
            </div>

            <p className="text-sm text-charcoal-300 leading-relaxed mb-6">
              {itemLongDesc}
            </p>
          </div>

          <div className="pt-4 border-t border-charcoal-800/60 flex items-center justify-between gap-4">
            <div>
              <span className="text-xs text-charcoal-500 block uppercase tracking-wider">{t.total}</span>
              <span className="text-2xl font-bold font-serif text-gold-400">
                {item.price} <span className="text-sm font-medium text-gold-600">MAD</span>
              </span>
            </div>

            <button
              onClick={handleAdd}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all shadow-lg ${
                added
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gold-500 text-charcoal-950 hover:bg-gold-400 hover:shadow-gold-500/30'
              }`}
            >
              {added ? (
                <><Check className="w-5 h-5" /> {t.added}</>
              ) : (
                <><Plus className="w-5 h-5" /> {t.add}</>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
