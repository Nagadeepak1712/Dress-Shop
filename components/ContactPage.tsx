import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export const ContactPage: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="pt-24 pb-12 min-h-screen">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Get In Touch</h1>
                    <p className="text-gray-600 text-lg">We'd love to hear from you. Reach out anytime.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-gray-50 p-8 rounded-2xl">
                            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                                        <Mail className="text-white" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Email</p>
                                        <p className="font-medium">hello@urbanthreads.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                                        <Phone className="text-white" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Phone</p>
                                        <p className="font-medium">+1 (555) 123-4567</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                                        <MapPin className="text-white" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Address</p>
                                        <p className="font-medium">123 Fashion District, LA, CA 90015</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-black text-white p-8 rounded-2xl">
                            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                            <div className="space-y-2 text-gray-300">
                                <p>Monday - Friday: 9AM - 6PM PST</p>
                                <p>Saturday: 10AM - 4PM PST</p>
                                <p>Sunday: Closed</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white border p-8 rounded-2xl">
                        {submitted ? (
                            <div className="h-full flex flex-col items-center justify-center text-center">
                                <CheckCircle className="text-green-500 mb-4" size={64} />
                                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                                <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Email</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Subject</label>
                                    <select
                                        required
                                        value={formData.subject}
                                        onChange={e => setFormData({ ...formData, subject: e.target.value })}
                                        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
                                    >
                                        <option value="">Select a topic</option>
                                        <option value="order">Order Inquiry</option>
                                        <option value="return">Returns & Exchanges</option>
                                        <option value="product">Product Question</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Message</label>
                                    <textarea
                                        required
                                        rows={4}
                                        value={formData.message}
                                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black resize-none"
                                        placeholder="How can we help?"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-black text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
                                >
                                    Send Message <Send size={18} />
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
