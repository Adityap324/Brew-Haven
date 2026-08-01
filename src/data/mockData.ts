import { MenuItem, GalleryItem, Testimonial, PillarItem } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  // Coffee
  {
    id: 'c1',
    name: 'Velvet Gold Espresso',
    category: 'coffee',
    description: 'Double shot of single-origin Ethiopian Yirgacheffe, crowned with edible 24k gold leaf and bright citrus undertones.',
    price: 350,
    rating: 4.9,
    reviewsCount: 320,
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=800',
    notes: 'Jasmine, Bergamot, Dark Honey',
    isPopular: true,
    origin: 'Ethiopia (Single Origin)',
    roastLevel: 'Light',
    calories: '5 kcal'
  },
  {
    id: 'c2',
    name: 'Reserve Royal Cappuccino',
    category: 'coffee',
    description: 'Velvety microfoam over a rich Colombian Supremo base, dusted with raw Madagascar cocoa powder.',
    price: 280,
    rating: 4.8,
    reviewsCount: 245,
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=800',
    notes: 'Toasted Almond, Milk Chocolate',
    isPopular: true,
    origin: 'Colombia',
    roastLevel: 'Medium',
    calories: '120 kcal'
  },
  {
    id: 'c3',
    name: 'Smoked Vanilla Bourbon Latte',
    category: 'coffee',
    description: 'House-made Bourbon vanilla bean syrup infusion, espresso, steamed oat milk, and a torch-smoked oak wood finish.',
    price: 380,
    rating: 5.0,
    reviewsCount: 410,
    image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&q=80&w=800',
    notes: 'Smoked Oak, Vanilla Bean, Caramel',
    isPopular: true,
    origin: 'Guatemala & Brazil Blend',
    roastLevel: 'Signature Roast',
    calories: '180 kcal'
  },
  {
    id: 'c4',
    name: 'Midnight Dark Mocha',
    category: 'coffee',
    description: '70% Valrhona dark chocolate melted directly into double espresso and silky steamed whole milk.',
    price: 320,
    rating: 4.9,
    reviewsCount: 180,
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800',
    notes: 'Dark Truffle, Black Cherry',
    isPopular: false,
    origin: 'Brazil Santos',
    roastLevel: 'Dark',
    calories: '220 kcal'
  },
  {
    id: 'c5',
    name: '24-Hour Nitro Cold Brew',
    category: 'coffee',
    description: 'Slow cold steeped for 24 hours and infused with nitrogen for a silky, cascading stout-like head.',
    price: 300,
    rating: 4.8,
    reviewsCount: 290,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=800',
    notes: 'Toffee, Creamy Mouthfeel, Cocoa',
    isPopular: true,
    origin: 'Sumatra Mandheling',
    roastLevel: 'Medium',
    calories: '10 kcal'
  },
  {
    id: 'c6',
    name: 'Affogato al Caffe Royale',
    category: 'coffee',
    description: 'Artisanal Tahitian vanilla bean gelato drowned in a freshly pulled double ristretto shot.',
    price: 360,
    rating: 4.9,
    reviewsCount: 165,
    image: 'https://images.unsplash.com/photo-1592663527359-cf6642f54cff?auto=format&fit=crop&q=80&w=800',
    notes: 'Vanilla Cream, Espresso Intensity',
    isPopular: false,
    origin: 'Italy Inspired / Kenya Peaberry',
    roastLevel: 'Dark',
    calories: '210 kcal'
  },

  // Desserts
  {
    id: 'd1',
    name: 'Madagascar Vanilla Cheesecake',
    category: 'desserts',
    description: 'Silky smooth cream cheese base with fresh vanilla seeds on a golden macadamia crust, topped with fresh raspberries.',
    price: 420,
    rating: 4.95,
    reviewsCount: 280,
    image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?auto=format&fit=crop&q=80&w=800',
    notes: 'Bourbon Vanilla, Raspberry Glaze',
    isPopular: true,
    calories: '380 kcal'
  },
  {
    id: 'd2',
    name: 'Salted Caramel Hazelnut Brownie',
    category: 'desserts',
    description: 'Warm dense Belgian dark chocolate brownie swirled with fleur de sel caramel and roasted hazelnuts.',
    price: 380,
    rating: 4.9,
    reviewsCount: 310,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=800',
    notes: 'Fleur de Sel, Hazelnut Crunch',
    isPopular: true,
    calories: '420 kcal'
  },
  {
    id: 'd3',
    name: 'Artisan Pistachio Croissant',
    category: 'desserts',
    description: 'Hand-laminated 81-layer French butter croissant filled with rich Sicilian pistachio praline cream.',
    price: 340,
    rating: 4.85,
    reviewsCount: 220,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800',
    notes: 'Flaky Butter, Sicilian Pistachio',
    isPopular: true,
    calories: '340 kcal'
  },
  {
    id: 'd4',
    name: 'Venetian Tiramisu Reserve',
    category: 'desserts',
    description: 'Savoiardi ladyfingers soaked in our signature espresso & dark rum, layered with whipped mascarpone & Valrhona dust.',
    price: 450,
    rating: 5.0,
    reviewsCount: 390,
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=800',
    notes: 'Dark Rum, Creamy Mascarpone',
    isPopular: true,
    calories: '360 kcal'
  },

  // Specialty
  {
    id: 's1',
    name: 'Kyoto Ceremonial Matcha Lavender',
    category: 'specialty',
    description: 'First-harvest Uji matcha whisked to order with organic lavender blossom syrup and creamy oat milk.',
    price: 350,
    rating: 4.9,
    reviewsCount: 210,
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&q=80&w=800',
    notes: 'Uji Grassland, Floral Lavender',
    isPopular: true,
    calories: '110 kcal'
  },
  {
    id: 's2',
    name: 'Imperial Golden Chai Elixir',
    category: 'specialty',
    description: 'Freshly crushed cardamom, ginger, cinnamon, black tea, and raw honey steamed with macadamia milk.',
    price: 290,
    rating: 4.8,
    reviewsCount: 140,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800',
    notes: 'Warming Spice, Honeyed Cream',
    isPopular: false,
    calories: '130 kcal'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'The Haven Interior Lounge',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200',
    alt: 'Luxury café interior with warm brass lighting and leather seating',
    description: 'Designed with Aesop-inspired minimalism, warm cedar wood, and brushed brass details.'
  },
  {
    id: 'g2',
    title: 'Golden Extraction Artistry',
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=1200',
    alt: 'Espresso extraction on custom Slayer espresso machine',
    description: 'Precision brewing at 9 bars of pressure for perfect tiger-stripe crema.'
  },
  {
    id: 'g3',
    title: 'Artisan Pastry Display',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1200',
    alt: 'Freshly baked croissants and tarts on marble counter',
    description: 'Handcrafted every morning by our French pastry chef using AOP Isigny butter.'
  },
  {
    id: 'g4',
    title: 'Evening Jazz & Espresso',
    category: 'ambience',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=1200',
    alt: 'Moody evening atmosphere with ambient candle lighting',
    description: 'Warm moody lighting and vinyl jazz selections every evening after 6 PM.'
  },
  {
    id: 'g5',
    title: 'Master Barista Crafting Pour Over',
    category: 'baristas',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200',
    alt: 'Barista pouring water from gooseneck kettle into Chemex',
    description: 'Our world-class baristas bring passion and precision to every single cup.'
  },
  {
    id: 'g6',
    title: 'Single-Origin Green Beans Selection',
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=1200',
    alt: 'Fresh roasted coffee beans spilling over burlap sack',
    description: 'Direct trade beans sourced ethically from high-altitude micro-lots.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Victoria Sterling',
    role: 'Interior Architect',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
    comment: 'Brew Haven is an absolute masterpiece of sensory design. The Smoked Vanilla Bourbon Latte is otherworldly, and the atmosphere feels like a private club in Milan.',
    rating: 5,
    verified: true,
    favoriteItem: 'Smoked Vanilla Bourbon Latte'
  },
  {
    id: 't2',
    name: 'Julian Vance',
    role: 'Creative Director',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
    comment: 'As someone who travels between Tokyo, London, and NY, Brew Haven sets a new international benchmark for coffee craftsmanship and hospitality.',
    rating: 5,
    verified: true,
    favoriteItem: 'Velvet Gold Espresso'
  },
  {
    id: 't3',
    name: 'Elena Rostova',
    role: 'Food & Wine Critic',
    photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=300',
    comment: 'The Pistachio Croissant is 81 layers of pure perfection, paired with their 24hr Nitro Cold Brew. The online reservation process is seamless.',
    rating: 5,
    verified: true,
    favoriteItem: 'Pistachio Croissant'
  }
];

export const PILLARS: PillarItem[] = [
  {
    id: 'p1',
    title: 'Single-Origin Beans',
    description: 'Directly sourced from high-elevation micro-lots in Ethiopia, Colombia, and Guatemala. Roasted in small batches weekly.',
    iconName: 'Bean',
    highlight: 'Top 1% Global Harvest'
  },
  {
    id: 'p2',
    title: 'Fresh Artisan Pastries',
    description: 'Baked fresh every morning at 5:00 AM using imported French AOP butter, Belgian dark chocolate, and organic fruits.',
    iconName: 'Croissant',
    highlight: 'Handcrafted Daily'
  },
  {
    id: 'p3',
    title: 'Gigabit Fiber Wi-Fi',
    description: 'Ultra-high-speed, secure, silent workspace seating with discreet power outlets integrated into every mahogany desk.',
    iconName: 'Wifi',
    highlight: 'Seamless Connectivity'
  },
  {
    id: 'p4',
    title: 'Aesthetic Atmosphere',
    description: 'A sanctuary of acoustics, Aesop-inspired aromatherapy, custom brass finishes, and curated vinyl record playlists.',
    iconName: 'Award',
    highlight: 'Aesop & Ralph Lauren Vibe'
  },
  {
    id: 'p5',
    title: 'White-Glove Service',
    description: 'Baristas trained at world championship levels deliver personalized recommendations with genuine warmth.',
    iconName: 'Clock',
    highlight: 'Hospitality First'
  },
  {
    id: 'p6',
    title: 'Pet-Friendly Outdoor Lounge',
    description: 'Heated outdoor patio with artisan water stations and organic oat treats for your four-legged companions.',
    iconName: 'Heart',
    highlight: 'Dogs Welcome'
  }
];

export const INSTAGRAM_POSTS = [
  {
    id: 'ig1',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=600',
    likes: '1,420',
    comments: '88',
    caption: 'Morning rituals at the Haven. Double espresso with velvet crema. ☕️✨'
  },
  {
    id: 'ig2',
    image: 'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?auto=format&fit=crop&q=80&w=600',
    likes: '2,150',
    comments: '134',
    caption: 'Fresh out of the oven: 81-layer Sicilian Pistachio Croissant. 🥐'
  },
  {
    id: 'ig3',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=600',
    likes: '980',
    comments: '62',
    caption: 'Sunlight filtering through the mahogany wood lounge. Come find your corner.'
  },
  {
    id: 'ig4',
    image: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&q=80&w=600',
    likes: '3,210',
    comments: '210',
    caption: 'Our Smoked Vanilla Bourbon Latte in the making with torch-smoked oak. 🔥'
  },
  {
    id: 'ig5',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600',
    likes: '1,890',
    comments: '105',
    caption: 'Latte art poured with millimeter precision by Head Barista Marco.'
  },
  {
    id: 'ig6',
    image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&q=80&w=600',
    likes: '2,740',
    comments: '190',
    caption: 'Late night espresso martini & jazz vibes. Doors open till 11 PM.'
  }
];
