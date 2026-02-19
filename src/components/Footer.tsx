import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Linkedin, Twitter, Instagram, ArrowRight } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-brand-ink text-brand-cream pt-32 pb-12 relative overflow-hidden">
            <div className="max-w-[1800px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 mb-20 md:mb-32">
                    <div className="lg:col-span-5">
                        <div className="flex items-center gap-3 mb-8 md:mb-12">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-green rounded-full flex items-center justify-center">
                                <Leaf className="text-brand-cream w-6 h-6 md:w-7 md:h-7" />
                            </div>
                            <span className="font-serif text-3xl md:text-4xl font-bold tracking-tighter">Stronach & Sons</span>
                        </div>
                        <h3 className="text-2xl md:text-5xl font-serif italic mb-10 md:mb-12 leading-tight max-w-md">
                            Expertise and <br />
                            <span className="text-brand-gold">Excellence</span> in Produce.
                        </h3>
                        <div className="flex gap-4 md:gap-6">
                            {[Linkedin, Twitter, Instagram].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-ink hover:border-brand-gold transition-all duration-500">
                                    <Icon className="w-5 h-5 md:w-6 md:h-6" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div className="grid grid-cols-2 sm:grid-cols-1 gap-12">
                            <div>
                                <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-gold mb-6 md:mb-10">Company</h5>
                                <ul className="space-y-4 md:space-y-6 text-[13px] md:text-sm font-medium text-brand-cream/40">
                                    <li><Link to="/about" className="hover:text-white transition-colors">Our Legacy</Link></li>
                                    <li><Link to="/documentation" className="hover:text-white transition-colors">Documentation</Link></li>
                                    <li><Link to="/#partners" className="hover:text-white transition-colors">Partnerships</Link></li>
                                    <li><a href="mailto:stronson@stronachandosons.ca" className="hover:text-white transition-colors">Contact</a></li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-gold mb-6 md:mb-10">Brands</h5>
                                <ul className="space-y-4 md:space-y-6 text-[13px] md:text-sm font-medium text-brand-cream/40">
                                    <li><a href="#" className="hover:text-white transition-colors">Little Bear</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Washington Fruit</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Dole</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Collins Farms</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-1 lg:col-span-1">
                            <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-gold mb-6 md:mb-10">Inquiries</h5>
                            <p className="text-[13px] md:text-sm text-brand-cream/40 mb-8 leading-relaxed">Partner with a leader at the Ontario Food Terminal.</p>
                            <a
                                href="mailto:stronson@stronachandosons.ca"
                                className="inline-flex group items-center gap-4 text-sm font-bold uppercase tracking-widest text-white hover:text-brand-gold transition-colors"
                            >
                                Send Message
                                <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand-gold transition-colors">
                                    <ArrowRight className="w-4 h-4" />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-brand-cream/20">
                    <div>© 2026 Stronach & Sons 2020. All Rights Reserved.</div>
                    <div className="flex gap-12">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
