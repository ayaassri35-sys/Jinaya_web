// src/App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeBanner from './components/MarqueeBanner';
import SignatureBurgers from './components/SignatureBurgers';
import WhyChooseUs from './components/WhyChooseUs';
import MenuPreview from './components/MenuPreview';
import TestimonialsSection from './components/TestimonialsSection';
import ReservationSection from './components/ReservationSection';
import Footer from './components/Footer';
import ShoppingCartDrawer from './components/ShoppingCartDrawer';
import ItemModal from './components/ItemModal';

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 'cheese-lava',
      name: 'CHEESE LAVA BEAST',
      price: 14.99,
      image: '/bjorbun/cheese-lava.png',
      quantity: 1,
    },
  ]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 2400);
  };

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((i) => i.id === item.id);
      if (existing) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + (item.quantity || 1) } : i
        );
      }
      return [...prevItems, { ...item, quantity: item.quantity || 1 }];
    });
    showToast(`Added ${item.name} to order! 🍔`);
  };

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToReservation = () => {
    const el = document.getElementById('reservation');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToMenu = () => {
    const el = document.getElementById('menu-preview');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#0e372b] text-[#f6e7b9] selection:bg-[#f6e7b9] selection:text-[#0e372b]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#f6e7b9] text-[#0e372b] px-6 py-3 rounded-full font-display text-xs sm:text-sm tracking-wider uppercase shadow-2xl border-2 border-[#0e372b] animate-fadeInUp flex items-center gap-2">
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
        onOpenBooking={scrollToReservation}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section matching reference image */}
        <Hero
          onOpenBooking={scrollToReservation}
          onOpenMenu={scrollToMenu}
        />

        {/* Scrolling cream ribbon banner */}
        <MarqueeBanner />

        {/* Our Signature Burgers */}
        <SignatureBurgers
          onSelectBurger={(burger) => setSelectedItem(burger)}
          onAddToCart={handleAddToCart}
        />

        {/* Why People Love Our Burgers */}
        <WhyChooseUs />

        {/* Menu Preview with 3 Circular Categories & Interactive Products Grid */}
        <MenuPreview
          onAddToCart={handleAddToCart}
          onSelectItem={(item) => setSelectedItem(item)}
        />

        {/* What Our Customers Say */}
        <TestimonialsSection />

        {/* Come Enjoy With Us / Reservation Form */}
        <ReservationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Cart Drawer */}
      <ShoppingCartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Product Detail & Customizer Modal */}
      <ItemModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}
