// src/components/ShoppingCart.jsx
import { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import CheckoutForm from './CheckoutForm';

export default function ShoppingCart({ isOpen, onClose }) {
  const { cart, dispatch, totalItems, subtotal } = useCart();
  const { lang, t } = useThemeLanguage();
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderDone, setOrderDone] = useState(false);

  const handleOrderSuccess = () => {
    setOrderDone(true);
    setShowCheckout(false);
    dispatch({ type: 'CLEAR_CART' });
    setTimeout(() => {
      setOrderDone(false);
      onClose();
    }, 4000);
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 overlay"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={t.myCart}
        className={`cart-panel fixed top-0 ${lang === 'ar' ? 'left-0' : 'right-0'} h-full w-full max-w-md z-50 bg-charcoal-950 border-x border-charcoal-800/60 flex flex-col shadow-2xl ${isOpen ? 'open' : ''}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-charcoal-800/60">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-gold-400" />
            <h2 className="text-lg font-serif font-semibold text-white">{t.myCart}</h2>
            {totalItems > 0 && (
              <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-gold-500 text-charcoal-950">
                {totalItems}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label={t.close}
            className="p-2 rounded-lg hover:bg-charcoal-800 transition-colors text-charcoal-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Order success banner */}
        {orderDone && (
          <div className="m-4 p-4 rounded-xl bg-emerald-900/40 border border-emerald-600/50 text-center animate-fadeInUp">
            <p className="text-emerald-400 font-semibold text-base mb-1">{t.orderSuccess}</p>
            <p className="text-emerald-300 text-xs">{t.orderSuccessSub}</p>
          </div>
        )}

        {/* Checkout form */}
        {showCheckout && !orderDone && (
          <div className="flex-1 overflow-y-auto">
            <CheckoutForm
              subtotal={subtotal}
              cart={cart}
              onSuccess={handleOrderSuccess}
              onBack={() => setShowCheckout(false)}
            />
          </div>
        )}

        {/* Cart items */}
        {!showCheckout && !orderDone && (
          <>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <ShoppingBag className="w-20 h-20 text-charcoal-800 mb-4" />
                  <h3 className="text-lg font-serif text-charcoal-400 mb-2">{t.cartEmpty}</h3>
                  <p className="text-charcoal-600 text-sm mb-6 max-w-xs">{t.cartEmptySub}</p>
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 rounded-full text-sm font-semibold bg-gold-500 text-charcoal-950 hover:bg-gold-400 transition-colors"
                  >
                    {t.browseMenu}
                  </button>
                </div>
              ) : (
                cart.map(item => (
                  <CartItem key={item.id} item={item} dispatch={dispatch} lang={lang} />
                ))
              )}
            </div>

            {/* Footer totals */}
            {cart.length > 0 && (
              <div className="border-t border-charcoal-800/60 p-6 space-y-4 bg-charcoal-950">
                <div className="flex justify-between text-sm text-charcoal-400">
                  <span>{t.subtotal}</span>
                  <span className="font-semibold text-white">{subtotal} MAD</span>
                </div>
                <div className="flex justify-between text-sm text-charcoal-400">
                  <span>{t.delivery}</span>
                  <span className="text-emerald-400 font-medium">{t.free}</span>
                </div>
                <div className="flex justify-between font-bold text-white text-lg border-t border-charcoal-800/60 pt-3">
                  <span className="font-serif">{t.total}</span>
                  <span className="text-gold-400 font-serif">{subtotal} MAD</span>
                </div>
                <button
                  onClick={() => setShowCheckout(true)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold bg-gold-500 text-charcoal-950 hover:bg-gold-400 transition-all duration-200 shadow-lg hover:shadow-gold-500/30"
                >
                  <span>{t.checkout}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => dispatch({ type: 'CLEAR_CART' })}
                  className="w-full text-center text-xs text-charcoal-500 hover:text-red-400 transition-colors"
                >
                  {t.clearCart}
                </button>
              </div>
            )}
          </>
        )}
      </aside>
    </>
  );
}

function CartItem({ item, dispatch, lang }) {
  const [imgError, setImgError] = useState(false);
  const itemName = typeof item.name === 'object' ? item.name[lang] || item.name.fr : item.name;

  return (
    <div className="flex gap-3 p-3 rounded-xl bg-charcoal-900/60 border border-charcoal-800/40">
      <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-charcoal-800">
        {imgError ? (
          <div className="w-full h-full flex items-center justify-center text-2xl">🍽️</div>
        ) : (
          <img
            src={item.image}
            alt={itemName}
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold text-white truncate">{itemName}</h4>
        <p className="text-xs text-charcoal-500 mt-0.5">{item.price} MAD × {item.qty}</p>
        <p className="text-sm font-bold text-gold-400 mt-1">{item.price * item.qty} MAD</p>
      </div>
      <div className="flex flex-col items-center gap-1.5">
        <button
          onClick={() => dispatch({ type: 'INCREASE_QTY', id: item.id })}
          aria-label="Plus"
          className="w-7 h-7 rounded-full bg-charcoal-800 hover:bg-gold-500 hover:text-charcoal-950 flex items-center justify-center transition-colors text-charcoal-300"
        >
          <Plus className="w-3.5 h-3.5" />
        </button>
        <span className="text-xs font-bold text-white w-6 text-center">{item.qty}</span>
        <button
          onClick={() => {
            if (item.qty === 1) dispatch({ type: 'REMOVE_ITEM', id: item.id });
            else dispatch({ type: 'DECREASE_QTY', id: item.id });
          }}
          aria-label="Moins"
          className="w-7 h-7 rounded-full bg-charcoal-800 hover:bg-red-600/80 hover:text-white flex items-center justify-center transition-colors text-charcoal-300"
        >
          {item.qty === 1 ? <Trash2 className="w-3.5 h-3.5" /> : <Minus className="w-3.5 h-3.5" />}
        </button>
      </div>
    </div>
  );
}
