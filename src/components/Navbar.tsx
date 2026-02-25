import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Leaf, Menu, X, Instagram, Linkedin } from 'lucide-react';
import { cn } from '../lib/utils';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    const scrollToTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Produce', path: '/produce' },
        { name: 'Partners', path: '/partners' },
        { name: 'Team', path: '/team' },
        { name: 'Logistics', path: '/logistics' }
    ];

    return (
        <>
        <nav className={cn(
            "fixed top-0 left-0 w-full z-50 transition-all duration-700 px-6 md:px-12 py-6",
            isScrolled || !isHome ? "bg-brand-cream/95 backdrop-blur-md lg:backdrop-blur-xl py-4 border-b border-brand-ink/5" : "bg-brand-cream/95 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none border-b border-brand-ink/5 lg:border-transparent"
        )}>
            <div className="max-w-[1800px] mx-auto flex justify-between items-center">
                <Link to="/" onClick={scrollToTop} className="flex items-center gap-3 group cursor-pointer">
                    <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center transition-transform group-hover:rotate-12">
                        <Leaf className="text-brand-cream w-6 h-6" />
                    </div>
                    <div className="flex flex-col leading-none">
                        <span className="font-serif text-2xl font-bold tracking-tighter text-brand-green whitespace-nowrap">Stronach and Sons 2020</span>
                        <span className="text-[8px] uppercase tracking-[0.3em] font-black text-brand-olive ml-1">Est. 1954</span>
                    </div>
                </Link>

                <div className="hidden lg:flex items-center gap-12">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            onClick={item.path === '/' ? scrollToTop : undefined}
                            className={cn(
                                "text-[11px] font-bold uppercase tracking-[0.2em] transition-colors relative group",
                                isScrolled || !isHome ? "text-brand-ink" : "text-white"
                            )}
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-gold transition-all group-hover:w-full" />
                        </Link>
                    ))}
                    <a
                        href="/wholesale-catalog.pdf"
                        download
                        className={cn(
                            "text-[11px] font-bold uppercase tracking-[0.2em] transition-colors relative group",
                            isScrolled || !isHome ? "text-brand-ink" : "text-white"
                        )}
                    >
                        Wholesale Catalog
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-gold transition-all group-hover:w-full" />
                    </a>
                </div>

                <div className="hidden md:flex items-center gap-6">
                    <a
                        href="mailto:stronson@stronachandosons.ca"
                        className={cn(
                            "text-xs font-bold uppercase tracking-widest transition-colors",
                            isScrolled || !isHome ? "text-brand-ink" : "text-white"
                        )}
                    >
                        Contact
                    </a>
                    <a href="mailto:stronson@stronachandosons.ca" className="bg-brand-ink text-brand-cream px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-green transition-all transform hover:-translate-y-1 shadow-lg shadow-brand-ink/10 inline-block text-center cursor-pointer">
                        Wholesale Inquiry
                    </a>
                </div>

                <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X className="text-brand-green" /> : <Menu className="text-brand-green" />}
                </button>
            </div>

        </nav>

            {createPortal(
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed inset-0 z-[9999] p-12 flex flex-col justify-between"
                            style={{ backgroundColor: '#F5F2ED' }}
                        >
                            <div className="flex justify-between items-center">
                                <span className="font-serif text-3xl font-bold text-brand-green">Stronach and Sons 2020</span>
                                <button onClick={() => setIsMenuOpen(false)} className="p-2 bg-brand-ink text-brand-cream rounded-full">
                                    <X />
                                </button>
                            </div>
                            <div className="flex flex-col gap-8">
                                {navItems.map((item, idx) => (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        key={item.name}
                                    >
                                        <Link
                                            to={item.path}
                                            className="text-5xl font-serif italic hover:text-brand-gold transition-colors"
                                            onClick={() => { setIsMenuOpen(false); if (item.path === '/') scrollToTop(); }}
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: navItems.length * 0.1 }}
                                >
                                    <a
                                        href="/wholesale-catalog.pdf"
                                        download
                                        className="text-5xl font-serif italic hover:text-brand-gold transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Wholesale Catalog
                                    </a>
                                </motion.div>
                            </div>
                            <div className="flex justify-between items-end">
                                <div className="text-xs uppercase tracking-widest text-brand-ink/40">
                                    © 2026 Stronach and Sons 2020
                                </div>
                                <div className="flex gap-4">
                                    <a href="https://www.instagram.com/stronachandsons" target="_blank" rel="noopener noreferrer"><Instagram className="w-5 h-5" /></a>
                                    <a href="https://www.linkedin.com/company/stronach-and-sons" target="_blank" rel="noopener noreferrer"><Linkedin className="w-5 h-5" /></a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </>
    );
};
