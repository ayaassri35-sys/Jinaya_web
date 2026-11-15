// src/components/AboutSection.jsx
import { Leaf, Award, Heart, Clock } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

export default function AboutSection() {
  const { t } = useThemeLanguage();

  const pillars = [
    {
      Icon: Leaf,
      title: t.freshIng,
      description: t.freshIngDesc,
    },
    {
      Icon: Award,
      title: t.culinaryExc,
      description: t.culinaryExcDesc,
    },
    {
      Icon: Heart,
      title: t.passion,
      description: t.passionDesc,
    },
    {
      Icon: Clock,
      title: t.attentiveService,
      description: t.attentiveServiceDesc,
    },
  ];

  return (
    <section id="about" className="py-20 bg-charcoal-900 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images mosaic */}
          <div className="relative grid grid-cols-2 gap-3 h-96 lg:h-[500px]">
            <div className="rounded-2xl overflow-hidden row-span-2">
              <img
                src="/dishes/about-chef.jpg"
                alt="Chef en cuisine"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/dishes/about-food.jpg"
                alt="Plat gastronomique"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/dishes/about-interior.jpg"
                alt="Salle du restaurant"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 rtl:-left-auto rtl:-right-4 bg-gold-500 text-charcoal-950 rounded-2xl p-4 sm:p-5 shadow-2xl">
              <div className="text-3xl font-serif font-bold">15+</div>
              <div className="text-xs font-bold uppercase tracking-wider">{t.yearsExp}</div>
            </div>
          </div>

          {/* Text content */}
          <div>
            <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-3">{t.aboutBadge}</p>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6 leading-tight gold-underline">
              {t.aboutTitle}
            </h2>
            <p className="text-charcoal-300 leading-relaxed mb-4 mt-6 text-base">
              {t.aboutP1}
            </p>
            <p className="text-charcoal-400 leading-relaxed mb-10 text-sm">
              {t.aboutP2}
            </p>

            {/* Pillars */}
            <div className="grid sm:grid-cols-2 gap-5">
              {pillars.map(({ Icon, title, description }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">{title}</h4>
                    <p className="text-xs text-charcoal-400 leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
