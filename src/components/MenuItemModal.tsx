import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Star, ShoppingBag, Plus, Minus, Flame, Check, Info } from 'lucide-react';
import { MenuItem, CartItem } from '../types';

interface MenuItemModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (cartItem: CartItem) => void;
}

export const MenuItemModal: React.FC<MenuItemModalProps> = ({
  item,
  onClose,
  onAddToCart,
}) => {
  if (!item) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedMilk, setSelectedMilk] = useState('Whole Milk');
  const [selectedRoast, setSelectedRoast] = useState(item.roastLevel || 'Medium');
  const [selectedSweetness, setSelectedSweetness] = useState('Standard (100%)');
  const [extraShots, setExtraShots] = useState(0);
  const [addedToast, setAddedToast] = useState(false);

  const milkOptions = ['Whole Milk', 'Oat Milk (+ ₹40)', 'Almond Milk (+ ₹40)', 'Macadamia Milk (+ ₹50)', 'No Milk'];
  const sweetnessOptions = ['Unsweetened (0%)', 'Low Sweetness (50%)', 'Standard (100%)', 'Honey Infused (+ ₹30)'];

  const extraShotPrice = 60;
  const milkUpgradePrice = selectedMilk.includes('₹40') ? 40 : selectedMilk.includes('₹50') ? 50 : 0;
  const sweetnessUpgradePrice = selectedSweetness.includes('₹30') ? 30 : 0;

  const unitPrice = item.price + (extraShots * extraShotPrice) + milkUpgradePrice + sweetnessUpgradePrice;
  const totalPrice = unitPrice * quantity;

  const handleAdd = () => {
    const cartItem: CartItem = {
      cartId: `${item.id}-${Date.now()}`,
      item,
      quantity,
      selectedMilk: item.category === 'coffee' || item.category === 'specialty' ? selectedMilk : undefined,
      selectedRoast: item.category === 'coffee' ? selectedRoast : undefined,
      selectedSweetness: item.category === 'coffee' || item.category === 'specialty' ? selectedSweetness : undefined,
      extraShots: extraShots > 0 ? extraShots : undefined,
      totalPrice,
    };

    onAddToCart(cartItem);
    setAddedToast(true);
    setTimeout(() => {
      setAddedToast(false);
      onClose();
    }, 1000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl border border-zinc-200 overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-zinc-100 text-zinc-600 hover:text-zinc-900 border border-zinc-200 hover:border-[#D4AF37] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="overflow-y-auto p-6 sm:p-8 flex-1 space-y-6">
            {/* Header Image & Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <div className="relative rounded-2xl overflow-hidden border border-zinc-200 h-56 group">
                <img
                  src={item.image}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
                {item.isPopular && (
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#D4AF37] text-white font-bold text-[10px] uppercase tracking-wider shadow-sm">
                    Signature Brew
                  </span>
                )}
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs text-[#B8860B] font-mono uppercase tracking-widest mb-1">
                  <span>{item.category}</span>
                  {item.origin && <span>• {item.origin}</span>}
                </div>

                <h3 className="font-serif text-2xl font-bold text-zinc-900 mb-2">
                  {item.name}
                </h3>

                <div className="flex items-center gap-3 mb-3 text-xs">
                  <div className="flex items-center gap-1 text-[#B8860B]">
                    <Star className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                    <span className="font-bold text-zinc-900">{item.rating}</span>
                  </div>
                  <span className="text-zinc-500">({item.reviewsCount} Connoisseur reviews)</span>
                  {item.calories && (
                    <span className="text-zinc-600 bg-zinc-100 px-2 py-0.5 rounded-full border border-zinc-200">
                      {item.calories}
                    </span>
                  )}
                </div>

                <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-600 flex items-center gap-2">
                  <Info className="w-4 h-4 text-[#7C3AED] shrink-0" />
                  <span>Aroma Notes: <strong className="text-zinc-900">{item.notes}</strong></span>
                </div>
              </div>
            </div>

            {/* Customization Options for Coffee / Specialty */}
            {(item.category === 'coffee' || item.category === 'specialty') && (
              <div className="space-y-5 border-t border-zinc-100 pt-5">
                <h4 className="text-xs font-mono text-[#B8860B] uppercase tracking-widest font-bold">
                  Customize Your Cup
                </h4>

                {/* Milk Selection */}
                <div>
                  <label className="text-xs text-zinc-600 block mb-2 font-medium">Milk & Dairy Option</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {milkOptions.map((milk) => (
                      <button
                        key={milk}
                        onClick={() => setSelectedMilk(milk)}
                        className={`px-3 py-2 rounded-xl text-xs font-medium text-left transition-all border ${
                          selectedMilk === milk
                            ? 'bg-[#7C3AED]/10 border-[#D4AF37] text-zinc-900 shadow-sm'
                            : 'bg-zinc-50 border-zinc-200 text-zinc-600 hover:text-zinc-900'
                        }`}
                      >
                        {milk}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sweetness Selection */}
                <div>
                  <label className="text-xs text-zinc-600 block mb-2 font-medium">Sweetness Level</label>
                  <div className="grid grid-cols-2 gap-2">
                    {sweetnessOptions.map((sweet) => (
                      <button
                        key={sweet}
                        onClick={() => setSelectedSweetness(sweet)}
                        className={`px-3 py-2 rounded-xl text-xs font-medium text-left transition-all border ${
                          selectedSweetness === sweet
                            ? 'bg-[#7C3AED]/10 border-[#D4AF37] text-zinc-900 shadow-sm'
                            : 'bg-zinc-50 border-zinc-200 text-zinc-600 hover:text-zinc-900'
                        }`}
                      >
                        {sweet}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Extra Shot Stepper */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-50 border border-zinc-200">
                  <div>
                    <div className="text-xs font-bold text-zinc-900">Extra Ristretto Shot</div>
                    <div className="text-[11px] text-zinc-500">+₹60 per shot</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setExtraShots(Math.max(0, extraShots - 1))}
                      className="w-7 h-7 rounded-lg bg-zinc-200 text-zinc-700 hover:text-zinc-900 flex items-center justify-center"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-sm font-bold text-zinc-900 w-4 text-center">{extraShots}</span>
                    <button
                      onClick={() => setExtraShots(extraShots + 1)}
                      className="w-7 h-7 rounded-lg bg-zinc-200 text-zinc-700 hover:text-zinc-900 flex items-center justify-center"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer Bar */}
          <div className="p-6 bg-zinc-50 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 w-full sm:w-auto justify-between">
              <div>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest block font-mono">Total Price</span>
                <span className="font-serif text-2xl font-bold text-[#B8860B]">
                  ₹{totalPrice}
                </span>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-3 bg-white border border-zinc-200 rounded-xl p-1 shadow-sm">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-lg hover:bg-zinc-100 text-zinc-700 flex items-center justify-center"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-sm font-bold text-zinc-900 px-2">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-lg hover:bg-zinc-100 text-zinc-700 flex items-center justify-center"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <button
              onClick={handleAdd}
              disabled={addedToast}
              className={`w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2 ${
                addedToast
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gradient-to-r from-[#D4AF37] to-[#7C3AED] text-white hover:brightness-110 active:scale-95'
              }`}
            >
              {addedToast ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added To Order Bag</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add To Order • ${totalPrice.toFixed(2)}</span>
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
