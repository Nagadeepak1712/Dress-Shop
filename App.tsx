import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, User, Menu, X, ArrowRight, Star, Heart, Sliders, Filter } from 'lucide-react';
import { PRODUCTS, HERO_SLIDES, REVIEWS } from './constants';
import { Product, CartItem, ViewState, FilterState } from './types';
import { AIStylist } from './components/AIStylist';
import { StoryPage } from './components/StoryPage';
import { ContactPage } from './components/ContactPage';
import { FAQPage } from './components/FAQPage';
import { ReturnsPage } from './components/ReturnsPage';
import { LookbookPage } from './components/LookbookPage';

// --- Components defined inline to adhere to file structure request efficiently ---

// 1. Navbar
const Navbar = ({
  cartCount,
  onOpenCart,
  onNav
}: {
  cartCount: number;
  onOpenCart: () => void;
  onNav: (view: ViewState) => void;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6 text-urban-black'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Logo */}
        <div
          className="text-2xl font-bold font-serif tracking-tighter cursor-pointer"
          onClick={() => onNav('HOME')}
        >
          URBAN THREADS.
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
          <button onClick={() => onNav('HOME')} className="hover:text-gray-500 transition-colors">HOME</button>
          <button onClick={() => onNav('SHOP')} className="hover:text-gray-500 transition-colors">SHOP</button>
          <button onClick={() => onNav('LOOKBOOK')} className="hover:text-gray-500 transition-colors">LOOKBOOK</button>
          <button onClick={() => onNav('DESIGNER')} className="hover:text-gray-500 transition-colors">DESIGN</button>
          <button onClick={() => onNav('STORY')} className="hover:text-gray-500 transition-colors">STORY</button>
        </div>

        {/* Icons */}
        <div className="flex gap-4 items-center">
          <Search className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
          <div className="relative cursor-pointer hover:scale-110 transition-transform" onClick={onOpenCart}>
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </div>
          <User className="w-5 h-5 cursor-pointer hidden sm:block hover:scale-110 transition-transform" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t md:hidden flex flex-col p-4 shadow-lg animate-fade-in-down">
          <button onClick={() => { onNav('HOME'); setIsMenuOpen(false); }} className="py-2 text-left font-medium">Home</button>
          <button onClick={() => { onNav('SHOP'); setIsMenuOpen(false); }} className="py-2 text-left font-medium">Shop</button>
          <button onClick={() => { onNav('LOOKBOOK'); setIsMenuOpen(false); }} className="py-2 text-left font-medium">Lookbook</button>
          <button onClick={() => { onNav('DESIGNER'); setIsMenuOpen(false); }} className="py-2 text-left font-medium">Design Lab</button>
          <button onClick={() => { onNav('STORY'); setIsMenuOpen(false); }} className="py-2 text-left font-medium">Our Story</button>
          <button onClick={() => { onNav('CONTACT'); setIsMenuOpen(false); }} className="py-2 text-left font-medium">Contact</button>
        </div>
      )}
    </nav>
  );
};

// 2. Hero
const Hero = ({ onShopNow, onLookbook }: { onShopNow: () => void; onLookbook: () => void }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gray-200">
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={slide.image} alt="Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      ))}

      <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 leading-tight">
            {HERO_SLIDES[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 opacity-90">
            {HERO_SLIDES[currentSlide].subtitle}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={onShopNow}
              className="bg-white text-black px-8 py-3 font-semibold text-sm tracking-widest hover:bg-gray-100 transition-colors"
            >
              SHOP NOW
            </button>
            <button
              onClick={onLookbook}
              className="border border-white text-white px-8 py-3 font-semibold text-sm tracking-widest hover:bg-white/10 transition-colors"
            >
              VIEW LOOKBOOK
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-2 h-2 rounded-full transition-all ${idx === currentSlide ? 'bg-white w-6' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </section>
  );
};

// 3. Product Card
interface ProductCardProps {
  product: Product;
  onClick: (p: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div
      className="group cursor-pointer flex flex-col gap-2"
      onClick={() => onClick(product)}
    >
      <div className="relative overflow-hidden aspect-[4/5] bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {product.isNew && <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 uppercase tracking-wider">New</span>}
        {product.isBestSeller && <span className="absolute top-2 left-2 bg-white text-black text-xs px-2 py-1 uppercase tracking-wider font-bold">Best Seller</span>}

        <div className="absolute bottom-4 right-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button className="bg-white p-3 rounded-full shadow-lg hover:bg-black hover:text-white transition-colors">
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>
      <div className="flex justify-between items-start mt-1">
        <div>
          <h3 className="font-medium text-lg text-gray-900 group-hover:underline decoration-1 underline-offset-4">{product.name}</h3>
          <p className="text-gray-500 text-sm">{product.category}</p>
        </div>
        <div className="flex flex-col items-end">
          <span className="font-semibold text-gray-900">${product.price}</span>
          <div className="flex items-center text-xs text-yellow-500 mt-1">
            <Star size={10} fill="currentColor" />
            <span className="ml-1 text-gray-500">{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// 4. Shop View
const ShopView = ({
  onProductClick
}: {
  onProductClick: (p: Product) => void
}) => {
  const [filter, setFilter] = useState<FilterState>({
    category: 'All',
    type: 'All',
    sort: 'newest'
  });

  const filteredProducts = PRODUCTS
    .filter(p => filter.category === 'All' || p.category === filter.category)
    .filter(p => filter.type === 'All' || p.type === filter.type)
    .sort((a, b) => {
      if (filter.sort === 'price-low') return a.price - b.price;
      if (filter.sort === 'price-high') return b.price - a.price;
      if (filter.sort === 'rating') return b.rating - a.rating;
      // Mock popularity/newest
      return 0;
    });

  return (
    <div className="pt-24 pb-12 max-w-7xl mx-auto px-4 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b pb-4 gap-4">
        <div>
          <h1 className="text-4xl font-serif font-bold mb-2">Shop All</h1>
          <p className="text-gray-500">Essential pieces for the modern wardrobe.</p>
        </div>

        <div className="flex flex-wrap gap-4 items-center">
          {/* Category Filter */}
          <div className="flex items-center gap-2 border px-3 py-2 rounded-lg bg-white hover:border-gray-400 transition-colors">
            <Sliders size={16} />
            <select
              className="bg-transparent focus:outline-none text-sm cursor-pointer"
              value={filter.category}
              onChange={(e) => setFilter({ ...filter, category: e.target.value })}
            >
              <option value="All">All Categories</option>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Unisex">Unisex</option>
              <option value="Kids">Kids</option>
            </select>
          </div>

          {/* Type Filter */}
          <div className="flex items-center gap-2 border px-3 py-2 rounded-lg bg-white hover:border-gray-400 transition-colors">
            <Filter size={16} />
            <select
              className="bg-transparent focus:outline-none text-sm cursor-pointer"
              value={filter.type}
              onChange={(e) => setFilter({ ...filter, type: e.target.value })}
            >
              <option value="All">All Styles</option>
              <option value="Graphic">Graphic</option>
              <option value="Oversized">Oversized</option>
              <option value="Minimal">Minimal</option>
              <option value="Basic">Basic</option>
            </select>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2 border px-3 py-2 rounded-lg bg-white hover:border-gray-400 transition-colors">
            <span className="text-sm text-gray-500">Sort by:</span>
            <select
              className="bg-transparent focus:outline-none text-sm font-medium cursor-pointer"
              value={filter.sort}
              onChange={(e) => setFilter({ ...filter, sort: e.target.value as any })}
            >
              <option value="newest">Newest</option>
              <option value="rating">Rating: High to Low</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-20">
          <h3 className="text-xl font-medium text-gray-500">No products match your filters.</h3>
          <button
            onClick={() => setFilter({ category: 'All', type: 'All', sort: 'newest' })}
            className="mt-4 text-black underline underline-offset-4"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map(p => (
            <ProductCard key={p.id} product={p} onClick={onProductClick} />
          ))}
        </div>
      )}
    </div>
  );
};

// 5. Product Detail View
const ProductDetail = ({
  product,
  onBack,
  onAddToCart
}: {
  product: Product;
  onBack: () => void;
  onAddToCart: (item: CartItem) => void;
}) => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [activeImg, setActiveImg] = useState(0);

  const handleAdd = () => {
    onAddToCart({
      ...product,
      cartId: Math.random().toString(),
      selectedSize,
      quantity: 1
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <div className="pt-24 pb-12 max-w-7xl mx-auto px-4 min-h-screen">
      <button onClick={onBack} className="mb-6 text-sm text-gray-500 hover:text-black flex items-center gap-1">
        ← Back to Shop
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Gallery */}
        <div className="space-y-4">
          <div className="aspect-[4/5] bg-gray-100 overflow-hidden rounded-lg">
            <img
              src={product.gallery[activeImg] || product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-4 overflow-x-auto">
            {product.gallery.map((img, i) => (
              <div
                key={i}
                onClick={() => setActiveImg(i)}
                className={`w-20 aspect-square cursor-pointer border-2 ${activeImg === i ? 'border-black' : 'border-transparent'}`}
              >
                <img src={img} alt="Thumb" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-6">
          <div>
            <div className="flex justify-between items-start">
              <h1 className="text-4xl font-serif font-bold mb-2">{product.name}</h1>
              <Heart className="cursor-pointer hover:fill-black transition-colors" />
            </div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-medium">${product.price}</span>
              <div className="flex text-yellow-500 text-sm items-center">
                <Star size={14} fill="currentColor" />
                <span className="ml-1 text-gray-500">{product.rating} ({product.reviews} reviews)</span>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="border-t border-b py-6 space-y-4">
            <div>
              <span className="font-semibold block mb-2">Select Size</span>
              <div className="flex flex-wrap gap-2">
                {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 flex items-center justify-center border transition-all ${selectedSize === size ? 'bg-black text-white border-black' : 'hover:border-black'
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleAdd}
              className="flex-1 bg-black text-white py-4 font-semibold hover:bg-gray-800 transition-colors"
            >
              ADD TO CART
            </button>
            <button className="flex-1 border border-black py-4 font-semibold hover:bg-black hover:text-white transition-colors">
              BUY NOW
            </button>
          </div>

          <div className="text-xs text-gray-500 space-y-2 pt-4">
            <p>🚚 Free shipping on orders over $100</p>
            <p>♻️ Sustainably sourced 100% organic cotton</p>
            <p>🛡️ 30-day easy return policy</p>
          </div>
        </div>
      </div>

      {/* Recommended */}
      <div className="mt-20">
        <h2 className="text-2xl font-serif font-bold mb-6">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {PRODUCTS.slice(0, 4).map(p => (
            <ProductCard key={`rec-${p.id}`} product={p} onClick={() => { }} />
          ))}
        </div>
      </div>
    </div>
  );
};

// 6. Cart Drawer
const CartDrawer = ({
  isOpen,
  onClose,
  items,
  onRemove
}: {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
}) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex justify-between items-center border-b">
          <h2 className="text-xl font-bold font-serif">Your Cart ({items.length})</h2>
          <button onClick={onClose}><X /></button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="text-center text-gray-500 mt-10">Your cart is empty.</div>
          ) : (
            items.map(item => (
              <div key={item.cartId} className="flex gap-4">
                <img src={item.image} alt={item.name} className="w-20 h-24 object-cover rounded bg-gray-100" />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-medium">{item.name}</h3>
                    <button onClick={() => onRemove(item.cartId)} className="text-gray-400 hover:text-red-500"><X size={16} /></button>
                  </div>
                  <p className="text-sm text-gray-500">Size: {item.selectedSize}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-gray-500">Qty: {item.quantity}</span>
                    <span className="font-semibold">${item.price * item.quantity}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-6 border-t bg-gray-50">
          <div className="flex justify-between mb-4 text-lg font-bold">
            <span>Subtotal</span>
            <span>${total}</span>
          </div>
          <p className="text-xs text-gray-500 mb-4 text-center">Shipping & taxes calculated at checkout.</p>
          <button className="w-full bg-black text-white py-4 font-bold hover:bg-gray-800 transition-colors">
            CHECKOUT
          </button>
        </div>
      </div>
    </>
  );
};

// 7. Designer (Simple Mock)
const Designer = () => {
  const [text, setText] = useState('YOUR TEXT');
  const [color, setColor] = useState('white');
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="pt-24 pb-12 max-w-7xl mx-auto px-4 min-h-screen">
      <h1 className="text-4xl font-serif font-bold mb-8 text-center">Design Lab</h1>

      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Preview Area */}
        <div className="flex-1 relative w-full max-w-lg aspect-[4/5] bg-gray-100 rounded-lg shadow-inner flex items-center justify-center overflow-hidden">
          {/* Base Shirt */}
          <div className={`w-[80%] h-[80%] transition-colors duration-300 ${color === 'white' ? 'bg-white' : color === 'black' ? 'bg-gray-900' : 'bg-orange-100'}`}
            style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 100%, 0% 100%, 0% 20%)' }}>
            {/* Very rough CSS shape for demo, imagine a transparent PNG overlay of a shirt here */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="opacity-10 text-6xl font-bold uppercase rotate-45">T-Shirt Mockup</span>
            </div>
          </div>

          {/* User Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            {file && <img src={URL.createObjectURL(file)} className="w-32 h-32 object-contain mb-2" alt="upload" />}
            <h2 className="text-2xl font-bold uppercase mix-blend-difference text-gray-500">{text}</h2>
          </div>
        </div>

        {/* Controls */}
        <div className="flex-1 w-full max-w-md space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-lg border">
            <h3 className="font-bold mb-4">Customize</h3>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">T-Shirt Color</label>
              <div className="flex gap-2">
                {['white', 'black', 'cream'].map(c => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    className={`w-8 h-8 rounded-full border ${c === 'black' ? 'bg-gray-900' : c === 'cream' ? 'bg-orange-100' : 'bg-white'} ${color === c ? 'ring-2 ring-blue-500' : ''}`}
                  />
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Add Text</label>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full border p-2 rounded"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Upload Graphic</label>
              <input
                type="file"
                onChange={(e) => e.target.files && setFile(e.target.files[0])}
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-black file:text-white
                  hover:file:bg-gray-800
                "
              />
            </div>

            <button className="w-full bg-black text-white py-3 rounded font-bold">
              ADD TO CART - $45.00
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// 8. Footer
const Footer = ({ onNav }: { onNav: (view: ViewState) => void }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-urban-charcoal text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div>
          <h4 className="text-2xl font-serif font-bold mb-4 cursor-pointer" onClick={() => onNav('HOME')}>URBAN THREADS.</h4>
          <p className="text-gray-400 text-sm">Elevating everyday essentials with sustainable materials and timeless design.</p>
        </div>
        <div>
          <h5 className="font-bold mb-4">Shop</h5>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><button onClick={() => onNav('SHOP')} className="hover:text-white transition-colors">New Arrivals</button></li>
            <li><button onClick={() => onNav('SHOP')} className="hover:text-white transition-colors">Best Sellers</button></li>
            <li><button onClick={() => onNav('SHOP')} className="hover:text-white transition-colors">Men</button></li>
            <li><button onClick={() => onNav('SHOP')} className="hover:text-white transition-colors">Women</button></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-4">Support</h5>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><button onClick={() => onNav('CONTACT')} className="hover:text-white transition-colors">Order Status</button></li>
            <li><button onClick={() => onNav('RETURNS')} className="hover:text-white transition-colors">Returns</button></li>
            <li><button onClick={() => onNav('FAQ')} className="hover:text-white transition-colors">FAQ</button></li>
            <li><button onClick={() => onNav('CONTACT')} className="hover:text-white transition-colors">Contact Us</button></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-4">Newsletter</h5>
          <form onSubmit={handleSubscribe} className="flex">
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/10 p-2 text-sm outline-none text-white w-full focus:bg-white/20 transition-colors"
            />
            <button type="submit" className="bg-white text-black px-4 font-bold text-sm hover:bg-gray-200 transition-colors">JOIN</button>
          </form>
          {subscribed ? (
            <p className="text-xs text-green-400 mt-2">✓ Thanks for subscribing!</p>
          ) : (
            <p className="text-xs text-gray-500 mt-2">Get 10% off your first order.</p>
          )}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>&copy; 2024 Urban Threads. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <span className="bg-white/10 px-3 py-1 rounded">VISA</span>
          <span className="bg-white/10 px-3 py-1 rounded">MASTERCARD</span>
          <span className="bg-white/10 px-3 py-1 rounded">PAYPAL</span>
        </div>
      </div>
    </footer>
  );
};

// --- Main App Component ---

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('HOME');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const addToCart = (item: CartItem) => {
    setCartItems(prev => [...prev, item]);
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.cartId !== id));
  };

  const navigateToProduct = (product: Product) => {
    setSelectedProduct(product);
    setView('PRODUCT_DETAIL');
  };

  return (
    <div className="font-sans text-urban-black bg-white min-h-screen">
      <Navbar
        cartCount={cartItems.length}
        onOpenCart={() => setIsCartOpen(true)}
        onNav={setView}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemove={removeFromCart}
      />

      {view === 'HOME' && (
        <main>
          <Hero onShopNow={() => setView('SHOP')} onLookbook={() => setView('LOOKBOOK')} />

          {/* Categories / Collections */}
          <section className="py-20 max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold mb-8 text-center">Featured Collections</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Graphic Tees', img: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&h=800&fit=crop&auto=format&q=75' },
                { title: 'Oversized Basics', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop&auto=format&q=75' },
                { title: 'Summer Edit', img: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=800&fit=crop&auto=format&q=75' }
              ].map((cat, i) => (
                <div key={i} className="group relative aspect-[3/4] overflow-hidden cursor-pointer" onClick={() => setView('SHOP')}>
                  <img
                    src={cat.img}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white mb-2">{cat.title}</h3>
                      <span className="text-white text-sm border-b border-white pb-1">EXPLORE</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Best Sellers Preview */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex justify-between items-end mb-8">
                <h2 className="text-3xl font-serif font-bold">Best Sellers</h2>
                <button onClick={() => setView('SHOP')} className="flex items-center gap-2 hover:gap-4 transition-all">
                  View All <ArrowRight size={16} />
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {PRODUCTS.filter(p => p.isBestSeller).slice(0, 4).map(p => (
                  <ProductCard key={p.id} product={p} onClick={navigateToProduct} />
                ))}
              </div>
            </div>
          </section>

          {/* Reviews */}
          <section className="py-20 max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold mb-12 text-center">Community Love</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {REVIEWS.map(review => (
                <div key={review.id} className="bg-gray-50 p-8 rounded-2xl">
                  <div className="flex text-yellow-500 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill={i < review.rating ? "currentColor" : "none"} />
                    ))}
                  </div>
                  <p className="text-lg italic mb-6">"{review.comment}"</p>
                  <div className="flex items-center gap-3">
                    <img src={review.image} alt="User" className="w-10 h-10 rounded-full object-cover" />
                    <span className="font-bold text-sm">{review.user}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Brand Story */}
          <section className="relative py-32 bg-fixed bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=800&fit=crop&auto=format&q=75')` }}>
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative max-w-4xl mx-auto text-center text-white px-4">
              <h2 className="text-4xl font-serif font-bold mb-6">Ethically Made. Effortlessly Cool.</h2>
              <p className="text-xl leading-relaxed opacity-90">
                At Urban Threads, we believe style shouldn't cost the earth. Every tee is crafted from 100% organic cotton in fair-trade facilities. We define modern streetwear by quality, not hype.
              </p>
            </div>
          </section>
        </main>
      )}

      {view === 'SHOP' && (
        <ShopView onProductClick={navigateToProduct} />
      )}

      {view === 'PRODUCT_DETAIL' && selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onBack={() => setView('SHOP')}
          onAddToCart={addToCart}
        />
      )}

      {view === 'DESIGNER' && (
        <Designer />
      )}

      {view === 'STORY' && (
        <StoryPage onNav={setView} />
      )}

      {view === 'CONTACT' && (
        <ContactPage />
      )}

      {view === 'FAQ' && (
        <FAQPage />
      )}

      {view === 'RETURNS' && (
        <ReturnsPage />
      )}

      {view === 'LOOKBOOK' && (
        <LookbookPage onShop={() => setView('SHOP')} />
      )}

      <Footer onNav={setView} />
      <AIStylist />
    </div>
  );
};

export default App;