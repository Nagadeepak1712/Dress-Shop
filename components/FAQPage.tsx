import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ_DATA = [
    {
        category: 'Orders & Shipping',
        questions: [
            { q: 'How long does shipping take?', a: 'Standard shipping takes 5-7 business days. Express shipping (2-3 days) is available for $12. Free shipping on orders over $100.' },
            { q: 'Do you ship internationally?', a: 'Yes! We ship to over 50 countries. International shipping typically takes 10-14 business days.' },
            { q: 'How can I track my order?', a: 'Once your order ships, you\'ll receive an email with a tracking number. You can also check order status in your account.' },
        ]
    },
    {
        category: 'Products & Sizing',
        questions: [
            { q: 'What size should I order?', a: 'Check our size guide on each product page. Our tees run true to size, but oversized styles are designed to fit 1-2 sizes larger.' },
            { q: 'What materials do you use?', a: 'All our tees are made from 100% GOTS-certified organic cotton, grown without harmful pesticides.' },
            { q: 'How should I care for my tees?', a: 'Machine wash cold with like colors. Tumble dry low or hang dry. Do not bleach. Iron on low if needed.' },
        ]
    },
    {
        category: 'Returns & Exchanges',
        questions: [
            { q: 'What is your return policy?', a: 'We offer free returns within 30 days of delivery. Items must be unworn, unwashed, and have tags attached.' },
            { q: 'How do I start a return?', a: 'Log into your account, go to Order History, and click "Start Return" on the item you wish to return.' },
            { q: 'When will I receive my refund?', a: 'Refunds are processed within 5-7 business days after we receive your return. It may take additional time to appear on your statement.' },
        ]
    },
];

export const FAQPage: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<string | null>(null);

    const toggleQuestion = (id: string) => {
        setOpenIndex(openIndex === id ? null : id);
    };

    return (
        <div className="pt-24 pb-12 min-h-screen">
            <div className="max-w-3xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">FAQ</h1>
                    <p className="text-gray-600 text-lg">Find answers to common questions</p>
                </div>

                <div className="space-y-8">
                    {FAQ_DATA.map((section, sIndex) => (
                        <div key={sIndex}>
                            <h2 className="text-xl font-bold mb-4 pb-2 border-b">{section.category}</h2>
                            <div className="space-y-3">
                                {section.questions.map((item, qIndex) => {
                                    const id = `${sIndex}-${qIndex}`;
                                    const isOpen = openIndex === id;
                                    return (
                                        <div key={id} className="border rounded-lg overflow-hidden">
                                            <button
                                                onClick={() => toggleQuestion(id)}
                                                className="w-full p-4 flex justify-between items-center text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                                            >
                                                <span className="font-medium">{item.q}</span>
                                                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                            </button>
                                            {isOpen && (
                                                <div className="p-4 bg-white text-gray-600 animate-fade-in-down">
                                                    {item.a}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-black text-white p-8 rounded-2xl text-center">
                    <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
                    <p className="text-gray-300 mb-4">Our support team is here to help.</p>
                    <a href="mailto:hello@urbanthreads.com" className="inline-block bg-white text-black px-6 py-3 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                        Contact Support
                    </a>
                </div>
            </div>
        </div>
    );
};
