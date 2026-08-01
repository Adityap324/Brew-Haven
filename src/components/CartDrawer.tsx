import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, X, Trash2, Plus, Minus, CheckCircle2, Tag } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (cartId: string, delta: number) => void;
  onRemoveItem: (cartId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [discountCode, setDiscountCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [discountError, setDiscountError] = useState('');
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  const subtotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
  const discountAmount = (subtotal * appliedDiscount) / 100;
  const tax = (subtotal - discountAmount) * 0.08;
  const grandTotal = subtotal - discountAmount + tax;

  const handleApplyDiscount = () => {
    if (discountCode.trim().toUpperCase() === 'BREWHAVEN20' || discountCode.trim().toUpperCase() === 'GOLD20') {
      setAppliedDiscount(20);
      setDiscountError('');
    } else {
      setDiscountError('Invalid code. Try "BREWHAVEN20"');
    }
  };

  const handleCheckout = () => {
    setCheckoutComplete(true);
    setTimeout(() => {
      onClearCart();
    }, 4000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex justify-end">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        />

        {/* Drawer Content */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="relative z-10 w-full max-w-md bg-white border-l border-zinc-200 shadow-2xl h-full flex flex-col justify-between"
        >
          {/* Header */}
          <div className="p-6 border-b border-zinc-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#7C3AED] p-[1px]">
                <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                  <ShoppingBag className="w-4 h-4 text-[#B8860B]" />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-zinc-900">Your Order Bag</h3>
                <span className="text-[10px] text-zinc-500 font-mono uppercase">
                  {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-zinc-100 text-zinc-600 hover:text-zinc-900 border border-zinc-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {checkoutComplete ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-zinc-900">Pre-Order Received!</h4>
                <p className="text-xs text-zinc-600 leading-relaxed px-4">
                  Your artisanal order is scheduled for pickup at <strong className="text-[#B8860B]">Barista Counter #1</strong> in approximately 12 minutes.
                </p>
                <button
                  onClick={() => {
                    setCheckoutComplete(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-bold text-[#B8860B]"
                >
                  Close Drawer
                </button>
              </div>
            ) : cartItems.length === 0 ? (
              <div className="text-center py-20 text-zinc-400 space-y-3">
                <ShoppingBag className="w-12 h-12 text-zinc-300 mx-auto" />
                <p className="text-sm font-medium text-zinc-600">Your order bag is currently empty.</p>
                <p className="text-xs text-zinc-500">Explore our menu to add artisanal brews and French desserts.</p>
              </div>
            ) : (
              cartItems.map((cartItem) => (
                <div
                  key={cartItem.cartId}
                  className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 flex items-center gap-4"
                >
                  <img
                    src={cartItem.item.image}
                    alt={cartItem.item.name}
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 rounded-xl object-cover shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif text-sm font-bold text-zinc-900 truncate">
                      {cartItem.item.name}
                    </h4>

                    {/* Customization Details */}
                    <div className="text-[11px] text-zinc-600 space-y-0.5 mt-0.5">
                      {cartItem.selectedMilk && <div>• {cartItem.selectedMilk}</div>}
                      {cartItem.selectedSweetness && <div>• {cartItem.selectedSweetness}</div>}
                      {cartItem.extraShots && <div>• +{cartItem.extraShots} Extra Ristretto Shot</div>}
                    </div>

                    <div className="text-xs font-mono text-[#B8860B] font-bold mt-2">
                      ₹{cartItem.totalPrice.toFixed(0)}
                    </div>
                  </div>

                  {/* Quantity Stepper */}
                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => onRemoveItem(cartItem.cartId)}
                      className="text-zinc-400 hover:text-rose-500 p-1"
                      title="Remove item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-1.5 bg-white border border-zinc-200 rounded-lg p-0.5 shadow-sm">
                      <button
                        onClick={() => onUpdateQuantity(cartItem.cartId, -1)}
                        className="w-5 h-5 text-zinc-600 hover:text-zinc-900 flex items-center justify-center"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold text-zinc-900 px-1">{cartItem.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(cartItem.cartId, 1)}
                        className="w-5 h-5 text-zinc-600 hover:text-zinc-900 flex items-center justify-center"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Totals & Checkout */}
          {cartItems.length > 0 && !checkoutComplete && (
            <div className="p-6 bg-zinc-50 border-t border-zinc-200 space-y-4">
              
              {/* Discount Code Box */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder='Promo code (Try "BREWHAVEN20")'
                      value={discountCode}
                      onChange={(e) => setDiscountCode(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-xs focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                  <button
                    onClick={handleApplyDiscount}
                    className="px-4 py-2 rounded-xl bg-zinc-200 hover:bg-zinc-300 text-xs text-zinc-900 font-semibold"
                  >
                    Apply
                  </button>
                </div>
                {discountError && <p className="text-[10px] text-rose-500">{discountError}</p>}
                {appliedDiscount > 0 && (
                  <p className="text-[10px] text-emerald-600 font-mono font-medium">20% VIP Connoisseur Discount Applied!</p>
                )}
              </div>

              {/* Price Calculation */}
              <div className="space-y-1.5 text-xs text-zinc-600 border-t border-zinc-200/80 pt-3">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="text-zinc-900 font-mono">₹{subtotal.toFixed(0)}</span>
                </div>
                {appliedDiscount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-medium">
                    <span>Discount (20%):</span>
                    <span className="font-mono">-₹{discountAmount.toFixed(0)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>GST (5%):</span>
                  <span className="text-zinc-900 font-mono">₹{(subtotal * 0.05).toFixed(0)}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-zinc-900 border-t border-zinc-200 pt-2">
                  <span>Total Amount:</span>
                  <span className="text-[#B8860B] font-serif">₹{(subtotal - discountAmount + subtotal * 0.05).toFixed(0)}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#7C3AED] text-white font-bold text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-md"
              >
                Pre-Order For Express Pickup
              </button>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
