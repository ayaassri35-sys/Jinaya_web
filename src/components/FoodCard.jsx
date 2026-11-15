// src/components/FoodCard.jsx
import { useState } from 'react';
import { Plus, Check, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

export default function FoodCard({ item, onSelect }) {
  const { dispatch } = useCart();
  const { lang, t } = useThemeLanguage();
  const [added, setAdded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const itemName = typeof item.name === 'object' ? item.name[lang] || item.name.fr : item.name;
  const itemDesc = typeof item.description === 'object' ? item.description[lang] || item.description.fr : item.description;
  const itemBadge = item.badge ? (typeof item.badge === 'object' ? item.badge[lang] || item.badge.fr : item.badge) : null;

  const handleAdd = (e) => {
    e.stopPropagation();
    dispatch({ type: 'ADD_ITEM', item });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <article
      onClick={() => onSelect(item)}
      className="card-hover cursor-pointer bg-charcoal-900 rounded-2xl overflow-hidden border border-charcoal-800/60 flex flex-col animate-fadeInUp group transition-all"
    >
      {/* Image container */}
      <div className="relative overflow-hidden h-48 sm:h-52 bg-charcoal-800">
        <img
          src={item.image}
          alt={itemName}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Hover prompt to view details */}
        <div className="absolute inset-0 bg-charcoal-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-charcoal-950/80 text-white text-xs font-semibold backdrop-blur-sm border border-gold-500/40">
            <Eye className="w-3.5 h-3.5 text-gold-400" />
            {t.viewDetails}
          </span>
        </div>

        {/* Badge */}
        {itemBadge && (
          <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border backdrop-blur-sm bg-gold-500/20 text-gold-400 border-gold-500/40 shadow-sm">
            {itemBadge}
          </span>
        )}

        {/* Category label */}
        <span className="absolute bottom-3 right-3 text-[10px] font-medium uppercase tracking-wider px-2 py-1 rounded-full bg-charcoal-950/80 text-charcoal-400 backdrop-blur-sm border border-charcoal-700/40">
          {item.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-serif font-semibold text-white mb-1.5 leading-snug group-hover:text-gold-400 transition-colors">
          {itemName}
        </h3>
        <p className="text-sm text-charcoal-400 leading-relaxed flex-1 mb-4 line-clamp-2">
          {itemDesc}
        </p>

        {/* Price + button */}
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-charcoal-800/40">
          <span className="text-xl font-bold text-gold-400 font-serif">
            {item.price} <span className="text-sm font-medium text-gold-600">MAD</span>
          </span>
          <button
            onClick={handleAdd}
            aria-label={`${t.add} ${itemName}`}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 shadow-md ${
              added
                ? 'bg-emerald-600 text-white scale-95'
                : 'bg-gold-500 text-charcoal-950 hover:bg-gold-400 hover:shadow-gold-500/30'
            }`}
          >
            {added ? (
              <><Check className="w-3.5 h-3.5" /> {t.added}</>
            ) : (
              <><Plus className="w-3.5 h-3.5" /> {t.add}</>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}
