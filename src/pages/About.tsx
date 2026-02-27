import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Leaf, Award, Globe, Heart } from 'lucide-react';
import { useDocumentHead } from '../hooks/useDocumentHead';

const AboutPage = () => {
    useDocumentHead({
        title: 'About Us',
        description: 'Learn about Stronach and Sons 2020, a wholesale produce supplier founded in 1954 at the Ontario Food Terminal. Over 70 years of expertise in fresh fruits and vegetables distribution.',
        canonical: '/about',
    });

    return (
        <div className="min-h-screen bg-brand-cream">
            <Navbar />

            <main className="pt-24 lg:pt-32">
                {/* Hero Section */}
                <section className="relative px-6 md:px-12 py-16 md:py-24 overflow-hidden">
                    <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-black mb-6 md:mb-8 block">Our Foundation</span>
                            <h1 className="text-5xl md:text-8xl font-serif mb-8 md:mb-12 leading-[0.9] tracking-tighter">
                                Stronach and <span className="italic text-brand-olive">Sons 2020</span>.
                            </h1>
                            <p className="text-brand-ink/70 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                                Founded in 1954 at the Ontario Food Terminal, Stronach and Sons 2020 is a leading wholesale produce supplier in Ontario. Under new ownership since 2020, the company is built on over 70 years of expertise and a renewed commitment to excellence.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="relative px-4"
                        >
                            <div className="mask-oval aspect-square overflow-hidden bg-brand-ink shadow-2xl">
                                <img
                                    src="/images/about_wholesale_produce.png"
                                    alt="Fresh wholesale produce sourced by Stronach and Sons 2020"
                                    loading="lazy"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 md:-bottom-12 md:-left-12 bg-white p-8 md:p-12 rounded-[1.5rem] md:rounded-[2rem] shadow-xl border border-brand-ink/5 max-w-[200px] md:max-w-[280px]">
                                <div className="text-brand-gold text-3xl md:text-4xl font-serif mb-3 md:mb-4">1954</div>
                                <p className="text-[9px] md:text-[10px] uppercase tracking-widest font-black text-brand-ink/40 leading-relaxed">
                                    Founded at the heart of Ontario's food distribution.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Core Values / Detailed Content */}
                <section className="py-20 md:py-32 bg-white">
                    <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
                            <div className="space-y-12">
                                <div>
                                    <h2 className="text-3xl font-serif mb-6 text-brand-green">Uncompromising Quality</h2>
                                    <p className="text-brand-ink/70 text-base md:text-lg leading-relaxed font-light">
                                        Quality is at the core of everything we do. As an established produce wholesaler in Ontario, we carefully source, inspect, and deliver fresh fruits and vegetables that meet the highest standards for freshness, consistency, and reliability. Every shipment reflects our commitment to providing customers with produce they can trust - whether for restaurants, retailers, or foodservice operations.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                                    {[
                                        { icon: Award, label: "Top-Tier Quality" },
                                        { icon: Leaf, label: "Daily Inspections" },
                                        { icon: Globe, label: "North American Reach" },
                                        { icon: Heart, label: "Strong Partnerships" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex flex-col gap-4 p-8 bg-brand-cream rounded-[2rem] border border-brand-ink/5">
                                            <item.icon className="w-8 h-8 text-brand-gold" />
                                            <span className="text-xs font-bold uppercase tracking-widest text-brand-ink/60">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-12">
                                <div>
                                    <h2 className="text-3xl font-serif mb-6 text-brand-green">Strategic Alliances</h2>
                                    <p className="text-brand-ink/70 text-base md:text-lg leading-relaxed font-light mb-8">
                                        We believe the best produce comes from strong partnerships. That’s why we proudly support local Ontario growers such as Collins Farms and Saliba Farms, while maintaining long-standing relationships with top North American producers including Little Bear Produce, Dole Fresh Vegetables, and Washington Fruit.
                                    </p>
                                    <p className="text-brand-ink/70 text-base md:text-lg leading-relaxed font-light">
                                        This diverse sourcing network allows us to deliver premium local and imported produce year-round, ensuring our clients never have to compromise on variety or peak-season freshness.
                                    </p>
                                </div>

                                <div className="p-10 md:p-12 bg-brand-green rounded-[2.5rem] md:rounded-[3rem] text-brand-cream relative overflow-hidden">
                                    <div className="relative z-10">
                                        <h2 className="text-2xl md:text-3xl font-serif mb-6">Future-Focused Growth</h2>
                                        <p className="text-brand-cream/70 text-base md:text-lg leading-relaxed font-light">
                                            Looking ahead, Stronach and Sons 2020 is focused on intentional, sustainable growth. We are expanding our customer and vendor portfolio with partners who share our dedication to quality, accountability, and long-term success. By aligning with the right people, we continue to strengthen a scalable foundation that allows us to deliver top-tier wholesale produce reliably - today and for years to come.
                                        </p>
                                    </div>
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full -mr-16 -mt-16 blur-3xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 md:py-32 bg-brand-cream">
                    <div className="max-w-[1200px] mx-auto px-6 text-center">
                        <h2 className="text-4xl md:text-7xl font-serif mb-8 md:mb-12 tracking-tighter">Join Our Journey</h2>
                        <p className="text-brand-ink/60 text-lg md:text-xl font-light mb-12 md:mb-16 max-w-2xl mx-auto">
                            Partner with a leader at the Ontario Food Terminal and grow your success with premium quality produce.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
                            <button className="w-full sm:w-auto bg-brand-ink text-brand-cream px-12 py-6 rounded-full font-black text-sm uppercase tracking-widest hover:bg-brand-green transition-all shadow-xl">
                                Become a Partner
                            </button>
                            <a
                                href="mailto:stronson@stronachandosons.ca"
                                className="w-full sm:w-auto border border-brand-ink/20 text-brand-ink px-12 py-6 rounded-full font-black text-sm uppercase tracking-widest hover:bg-brand-ink hover:text-brand-cream transition-all flex items-center justify-center"
                            >
                                Contact Sales
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default AboutPage;
