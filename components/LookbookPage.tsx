import React, { useState } from 'react';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';

const LOOKBOOK_IMAGES = [
    { id: 1, src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=1200&fit=crop&auto=format&q=75', title: 'Street Essential', desc: 'Oversized Tee in Charcoal' },
    { id: 2, src: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=1200&fit=crop&auto=format&q=75', title: 'Urban Minimalist', desc: 'Beige Structure Tee' },
    { id: 3, src: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=800&h=1200&fit=crop&auto=format&q=75', title: 'City Walks', desc: 'Midnight Black Heavy' },
    { id: 4, src: 'https://images.unsplash.com/photo-1507680434567-5739c80be1ac?w=800&h=1200&fit=crop&auto=format&q=75', title: 'Summer Vibes', desc: 'Essential Oversized Tee' },
    { id: 5, src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=1200&fit=crop&auto=format&q=75', title: 'Effortless Cool', desc: 'Urban Crop Top' },
    { id: 6, src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&h=1200&fit=crop&auto=format&q=75', title: 'Modern Classic', desc: 'Minimalist Graphic Tee' },
];

interface LookbookPageProps {
    onShop: () => void;
}

export const LookbookPage: React.FC<LookbookPageProps> = ({ onShop }) => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const nextImage = () => {
        if (selectedImage !== null) {
            setSelectedImage((selectedImage + 1) % LOOKBOOK_IMAGES.length);
        }
    };

    const prevImage = () => {
        if (selectedImage !== null) {
            setSelectedImage((selectedImage - 1 + LOOKBOOK_IMAGES.length) % LOOKBOOK_IMAGES.length);
        }
    };

    return (
        <div className="pt-24 pb-12 min-h-screen">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Lookbook</h1>
                    <p className="text-gray-600 text-lg">Spring/Summer 2024 Collection</p>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {LOOKBOOK_IMAGES.map((img, index) => (
                        <div
                            key={img.id}
                            className="group relative aspect-[3/4] overflow-hidden cursor-pointer rounded-lg"
                            onClick={() => setSelectedImage(index)}
                        >
                            <img
                                src={img.src}
                                alt={img.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end p-6">
                                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                                    <h3 className="text-xl font-bold">{img.title}</h3>
                                    <p className="text-sm opacity-80">{img.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <button
                        onClick={onShop}
                        className="bg-black text-white px-10 py-4 font-semibold text-sm tracking-widest hover:bg-gray-800 transition-colors"
                    >
                        SHOP THE LOOK
                    </button>
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage !== null && (
                <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-6 right-6 text-white hover:text-gray-300"
                    >
                        <X size={32} />
                    </button>

                    <button
                        onClick={prevImage}
                        className="absolute left-4 md:left-8 text-white hover:text-gray-300"
                    >
                        <ArrowLeft size={32} />
                    </button>

                    <div className="max-w-4xl max-h-[90vh] px-4">
                        <img
                            src={LOOKBOOK_IMAGES[selectedImage].src}
                            alt={LOOKBOOK_IMAGES[selectedImage].title}
                            className="max-h-[80vh] mx-auto object-contain"
                        />
                        <div className="text-center text-white mt-4">
                            <h3 className="text-2xl font-bold">{LOOKBOOK_IMAGES[selectedImage].title}</h3>
                            <p className="text-gray-400">{LOOKBOOK_IMAGES[selectedImage].desc}</p>
                        </div>
                    </div>

                    <button
                        onClick={nextImage}
                        className="absolute right-4 md:right-8 text-white hover:text-gray-300"
                    >
                        <ArrowRight size={32} />
                    </button>
                </div>
            )}
        </div>
    );
};
