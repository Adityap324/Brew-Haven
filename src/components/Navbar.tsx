import React, { useState, useEffect } from 'react';
import { Coffee, ShoppingBag, Menu, X, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenReservation,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section
      const sections = ['home', 'about', 'menu', 'why-us', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Menu', href: '#menu', id: 'menu' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-md border-b border-zinc-200/80 shadow-sm py-3'
          : 'bg-gradient-to-b from-white/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="group flex items-center gap-3 cursor-pointer"
        >
          <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#7C3AED] to-[#FAF8F5] p-[1px] shadow-[0_0_15px_rgba(212,175,55,0.2)] group-hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all duration-300">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
              <Coffee className="w-5 h-5 text-[#B8860B] group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold tracking-wider text-zinc-900 group-hover:text-[#B8860B] transition-colors">
              BREW HAVEN
            </span>
            <span className="text-[10px] tracking-[0.25em] text-zinc-500 uppercase font-cinzel">
              Café & Reserve
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`relative text-sm tracking-wide transition-colors py-1 ${
                  isActive ? 'text-[#B8860B] font-bold' : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#7C3AED]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action Controls */}
        <div className="flex items-center gap-4">
          {/* Cart Icon Button */}
          <button
            onClick={onOpenCart}
            aria-label="View Order Bag"
            className="relative p-2.5 rounded-full bg-white border border-zinc-200/80 hover:border-[#D4AF37]/60 text-zinc-700 hover:text-zinc-900 transition-all shadow-sm group"
          >
            <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#D4AF37] text-white text-[11px] font-bold flex items-center justify-center shadow-md animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          {/* Book Table Button */}
          <button
            onClick={onOpenReservation}
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#B8860B] to-[#D4AF37] text-white font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Table</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            className="md:hidden p-2.5 rounded-xl bg-white border border-zinc-200 text-zinc-700 hover:text-zinc-900 shadow-sm"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 border-b border-zinc-200 backdrop-blur-xl overflow-hidden shadow-lg"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-base text-zinc-700 hover:text-[#B8860B] py-2 border-b border-zinc-100 font-serif"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenReservation();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#7C3AED] text-white font-bold text-xs uppercase tracking-widest shadow-md"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve A Table</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
