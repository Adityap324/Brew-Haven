import React, { useState } from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { FeaturedMenu } from './components/FeaturedMenu';
import { MenuItemModal } from './components/MenuItemModal';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Gallery } from './components/Gallery';
import { ReservationSection } from './components/ReservationSection';
import { InstagramFeed } from './components/InstagramFeed';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BrewQuizModal } from './components/BrewQuizModal';
import { CartDrawer } from './components/CartDrawer';
import { MenuItem, CartItem } from './types';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null);
  const [isBrewQuizOpen, setIsBrewQuizOpen] = useState(false);

  // Cart operations
  const handleAddToCart = (newItem: CartItem) => {
    setCartItems((prev) => [...prev, newItem]);
  };

  const handleUpdateQuantity = (cartId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.cartId === cartId) {
            const newQty = item.quantity + delta;
            if (newQty <= 0) return null;
            const singleUnitPrice = item.totalPrice / item.quantity;
            return {
              ...item,
              quantity: newQty,
              totalPrice: singleUnitPrice * newQty,
            };
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (cartId: string) => {
    setCartItems((prev) => prev.filter((item) => item.cartId !== cartId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToReservation = () => {
    const resEl = document.getElementById('reservation');
    if (resEl) {
      resEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-zinc-900 selection:bg-[#7C3AED] selection:text-white font-sans antialiased relative">
      {/* Scroll Progress Bar at Very Top */}
      <ScrollProgress />

      {/* Desktop Custom Glowing Cursor */}
      <CustomCursor />

      {/* Main Glass Header Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={scrollToReservation}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onOpenReservation={scrollToReservation}
          onOpenBrewQuiz={() => setIsBrewQuizOpen(true)}
        />

        {/* 2. About Section */}
        <About />

        {/* 3. Featured Menu */}
        <FeaturedMenu onSelectItem={(item) => setSelectedMenuItem(item)} />

        {/* 4. Why Choose Us */}
        <WhyChooseUs />

        {/* 5. Gallery Section */}
        <Gallery />

        {/* 6. Reservation Section */}
        <ReservationSection />

        {/* 8. Instagram Feed Section */}
        <InstagramFeed />

        {/* 9. Contact & Maps Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Item Customization & Add-To-Cart Modal */}
      <MenuItemModal
        item={selectedMenuItem}
        onClose={() => setSelectedMenuItem(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Flavor Profiler Brew Quiz Modal */}
      <BrewQuizModal
        isOpen={isBrewQuizOpen}
        onClose={() => setIsBrewQuizOpen(false)}
        onSelectRecommended={(item) => {
          setSelectedMenuItem(item);
        }}
      />

      {/* Order Bag Slide-Over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
