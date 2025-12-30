import React from 'react';
import { Package, RefreshCw, CheckCircle, XCircle } from 'lucide-react';

export const ReturnsPage: React.FC = () => {
    return (
        <div className="pt-24 pb-12 min-h-screen">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Returns & Exchanges</h1>
                    <p className="text-gray-600 text-lg">Easy, hassle-free returns within 30 days</p>
                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {[
                        { step: 1, icon: Package, title: 'Start Return', desc: 'Log into your account and select items to return' },
                        { step: 2, icon: RefreshCw, title: 'Ship It Back', desc: 'Use our prepaid label to send items back free' },
                        { step: 3, icon: CheckCircle, title: 'Get Refunded', desc: 'Refund processed within 5-7 business days' },
                    ].map((item) => (
                        <div key={item.step} className="bg-gray-50 p-6 rounded-2xl text-center">
                            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                                {item.step}
                            </div>
                            <item.icon className="mx-auto mb-3 text-gray-700" size={32} />
                            <h3 className="font-bold mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Policy Details */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white border p-6 rounded-2xl">
                        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                            <CheckCircle className="text-green-500" /> Eligible for Return
                        </h3>
                        <ul className="space-y-2 text-gray-600">
                            <li>• Items purchased within last 30 days</li>
                            <li>• Unworn and unwashed items</li>
                            <li>• Items with original tags attached</li>
                            <li>• Items in original packaging</li>
                            <li>• Sale items (store credit only)</li>
                        </ul>
                    </div>
                    <div className="bg-white border p-6 rounded-2xl">
                        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                            <XCircle className="text-red-500" /> Not Eligible
                        </h3>
                        <ul className="space-y-2 text-gray-600">
                            <li>• Items purchased over 30 days ago</li>
                            <li>• Worn, washed, or altered items</li>
                            <li>• Items without tags</li>
                            <li>• Custom/personalized items</li>
                            <li>• Gift cards</li>
                        </ul>
                    </div>
                </div>

                {/* Exchange Info */}
                <div className="bg-black text-white p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold mb-4">Need a Different Size?</h3>
                    <p className="text-gray-300 mb-6">
                        Exchanges are easy! If your item doesn't fit, we'll send you a new size for free.
                        Just start a return and select "Exchange" as your preference.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-white text-black px-6 py-3 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                            Start an Exchange
                        </button>
                        <button className="border border-white text-white px-6 py-3 font-semibold rounded-lg hover:bg-white/10 transition-colors">
                            View Size Guide
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
