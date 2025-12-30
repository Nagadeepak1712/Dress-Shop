import React from 'react';
import { ArrowRight, Leaf, Heart, Globe } from 'lucide-react';

interface StoryPageProps {
    onNav: (view: 'SHOP') => void;
}

export const StoryPage: React.FC<StoryPageProps> = ({ onNav }) => {
    return (
        <div className="pt-24 pb-12 min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1920&h=800&fit=crop&auto=format&q=75"
                    alt="Our Story"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4">Our Story</h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto">Born from a passion for sustainable fashion and timeless design</p>
                </div>
            </section>

            {/* Mission */}
            <section className="py-20 max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-serif font-bold mb-6">The Urban Threads Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    Founded in 2020, Urban Threads was born from a simple belief: everyday essentials should be extraordinary.
                    We saw a gap in the market for high-quality, sustainably-made basics that don't compromise on style or ethics.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                    Every piece we create is designed in-house, crafted from 100% organic cotton, and produced in fair-trade
                    certified facilities. We believe fashion should look good, feel good, and do good.
                </p>
            </section>

            {/* Values */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-serif font-bold mb-12 text-center">What We Stand For</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Leaf, title: 'Sustainability', desc: '100% organic cotton, zero plastic packaging, carbon-neutral shipping.' },
                            { icon: Heart, title: 'Ethical Production', desc: 'Fair wages, safe conditions, and respect for every worker in our supply chain.' },
                            { icon: Globe, title: 'Community First', desc: '5% of profits go to environmental and social justice organizations.' }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm text-center">
                                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                                    <item.icon className="text-white" size={28} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Image */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&auto=format&q=75"
                        alt="Our Team"
                        className="rounded-2xl shadow-lg"
                    />
                    <div>
                        <h2 className="text-3xl font-serif font-bold mb-6">Meet the Team</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            We're a small but mighty team of designers, makers, and dreamers based in Los Angeles.
                            United by our love for great design and sustainable living, we work every day to bring you
                            clothes that you'll love wearing for years to come.
                        </p>
                        <button
                            onClick={() => onNav('SHOP')}
                            className="flex items-center gap-2 font-semibold hover:gap-4 transition-all"
                        >
                            Explore Our Collection <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};
