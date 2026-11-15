// src/components/MenuSection.jsx
import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, X, ChefHat } from 'lucide-react';
import { menuItems, categories } from '../data/menuData';
import FoodCard from './FoodCard';
import ProductDetailModal from './ProductDetailModal';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

export default function MenuSection() {
  const { lang, t } = useThemeLanguage();
  const [activeCategory, setActiveCategory] = useState('tout');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('default');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filtered = useMemo(() => {
    let items = menuItems;

    if (activeCategory !== 'tout') {
      items = items.filter(i => i.category === activeCategory);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter(i => {
        const nameFr = typeof i.name === 'object' ? i.name.fr : i.name;
        const nameAr = typeof i.name === 'object' ? i.name.ar : '';
        const descFr = typeof i.description === 'object' ? i.description.fr : i.description;
        const descAr = typeof i.description === 'object' ? i.description.ar : '';

        return (
          nameFr.toLowerCase().includes(q) ||
          nameAr.toLowerCase().includes(q) ||
          descFr.toLowerCase().includes(q) ||
          descAr.toLowerCase().includes(q)
        );
      });
    }

    if (sort === 'asc')  items = [...items].sort((a, b) => a.price - b.price);
    if (sort === 'desc') items = [...items].sort((a, b) => b.price - a.price);

    return items;
  }, [activeCategory, search, sort]);

  return (
    <section id="menu" className="py-20 bg-charcoal-950 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-14">
          <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-3">
            {t.selection}
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4 gold-underline">
            {t.ourMenu}
          </h2>
          <p className="mt-6 text-charcoal-400 max-w-xl mx-auto text-base">
            {t.menuSubtitle}
          </p>
        </div>

        {/* Search + Sort row */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-500 pointer-events-none" />
            <input
              type="search"
              placeholder={t.searchPlaceholder}
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-11 pr-10 py-3 rounded-xl bg-charcoal-900 border border-charcoal-700/60 text-white placeholder-charcoal-500 text-sm focus:outline-none focus:border-gold-500 transition-colors"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                aria-label="Effacer"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal-500 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Sort */}
          <div className="relative">
            <SlidersHorizontal className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-500 pointer-events-none" />
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              aria-label={t.sortByPrice}
              className="pl-9 pr-8 py-3 rounded-xl bg-charcoal-900 border border-charcoal-700/60 text-white text-sm appearance-none focus:outline-none focus:border-gold-500 transition-colors cursor-pointer"
            >
              <option value="default">{t.sortDefault}</option>
              <option value="asc">{t.sortAsc}</option>
              <option value="desc">{t.sortDesc}</option>
            </select>
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-10 scrollbar-hide snap-x">
          {categories.map(cat => {
            const label = typeof cat.label === 'object' ? cat.label[lang] || cat.label.fr : cat.label;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`snap-start flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-gold-500 text-charcoal-950 shadow-lg shadow-gold-500/25'
                    : 'bg-charcoal-900 text-charcoal-300 border border-charcoal-700/60 hover:border-gold-600/40 hover:text-gold-400'
                }`}
              >
                <span>{cat.emoji}</span>
                <span>{label}</span>
              </button>
            );
          })}
        </div>

        {/* Grid or empty */}
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <ChefHat className="w-16 h-16 text-charcoal-700 mb-4" />
            <h3 className="text-xl font-serif text-charcoal-400 mb-2">{t.noDishesFound}</h3>
            <p className="text-charcoal-500 text-sm max-w-xs mb-6">
              {t.noDishesSub}
            </p>
            <button
              onClick={() => { setSearch(''); setActiveCategory('tout'); }}
              className="px-6 py-2.5 rounded-full text-sm font-semibold border border-gold-600/40 text-gold-400 hover:bg-gold-500/10 transition-colors"
            >
              {t.resetFilters}
            </button>
          </div>
        ) : (
          <>
            <p className="text-charcoal-500 text-sm mb-6">
              {filtered.length} {t.dishesFound}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {filtered.map((item, idx) => (
                <div key={item.id} style={{ animationDelay: `${idx * 40}ms` }}>
                  <FoodCard item={item} onSelect={setSelectedProduct} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          item={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}
