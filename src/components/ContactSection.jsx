// src/components/ContactSection.jsx
import { MapPin, Phone, Mail, Clock, Globe, Camera, MessageCircle } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

export default function ContactSection() {
  const { t } = useThemeLanguage();

  return (
    <section id="contact" className="py-20 bg-charcoal-900 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-3">{t.findUs}</p>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white gold-underline">{t.contactTitle}</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Info cards */}
          <div className="space-y-4">
            {[
              { Icon: MapPin, title: t.addressTitle, lines: [t.addressText] },
              { Icon: Phone,  title: t.phoneTitle,   lines: ['+212 5 22 45 78 90', '+212 6 00 00 00 00'] },
              { Icon: Mail,   title: t.emailTitle,   lines: ['contact@bellataste.ma'] },
              { Icon: Clock,  title: t.openingHours, lines: [t.hoursLine1, t.hoursLine2] },
            ].map(({ Icon, title, lines }) => (
              <div key={title} className="flex gap-4 p-4 rounded-2xl bg-charcoal-950/50 border border-charcoal-800/40">
                <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-0.5">{title}</h4>
                  {lines.map(l => <p key={l} className="text-xs text-charcoal-400">{l}</p>)}
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="p-4 rounded-2xl bg-charcoal-950/50 border border-charcoal-800/40">
              <h4 className="text-sm font-bold text-white mb-3">{t.followUs}</h4>
              <div className="flex gap-3">
                {[
                  { Icon: Globe,         href: '#', label: 'Site Web' },
                  { Icon: Camera,        href: '#', label: 'Instagram' },
                  { Icon: MessageCircle, href: '#', label: 'WhatsApp' },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 rounded-xl bg-charcoal-800 border border-charcoal-700/40 flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 hover:text-charcoal-950 text-charcoal-400 transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="lg:col-span-2 rounded-3xl overflow-hidden border border-charcoal-800/60 bg-charcoal-950 relative min-h-80">
            <iframe
              title="Localisation Bella Taste"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.846!2d-7.5898!3d33.5731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca!5e0!3m2!1sfr!2sma!4v1699999999999"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '340px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute bottom-4 left-4 bg-charcoal-950/90 backdrop-blur-sm rounded-xl px-4 py-2 border border-charcoal-800/60">
              <p className="text-xs text-gold-400 font-bold">Bella Taste</p>
              <p className="text-[11px] text-charcoal-400">{t.addressText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
