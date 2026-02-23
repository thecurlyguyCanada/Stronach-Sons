import React from 'react';
import { motion } from 'motion/react';
import {
    BookOpen,
    Code2,
    Terminal,
    Layout,
    ShieldCheck,
    Globe,
    ExternalLink,
    Cpu,
    Database,
    Cloud
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const DocumentationPage = () => {
    const resources = [
        {
            category: 'Official Documentation',
            icon: BookOpen,
            items: [
                { title: 'API Documentation', desc: 'Full REST API reference for form resources and submissions.', url: 'https://apidocs.form.io/' },
                { title: 'Developer Guide', desc: 'Concepts, usage patterns, and Postman-style API collections.', url: 'https://help.form.io/developers/introduction/api-documentation' },
                { title: 'Forms User Guide', desc: 'Detailed schema mapping and validation logic documentation.', url: 'https://help.form.io/userguide/forms' }
            ]
        },
        {
            category: 'Source & Deployment',
            icon: Terminal,
            items: [
                { title: 'Core GitHub Repository', desc: 'Open-source engine for the Form.io server and UI builder.', url: 'https://github.com/formio/formio' },
                { title: 'Self-Hosting Guide', desc: 'Docker and Node.js deployment context for infrastructure.', url: 'https://help.form.io/deployments/deployment-guide' },
                { title: 'Project Help Center', desc: 'Centralized portal for FAQs, tutorials, and workflows.', url: 'https://help.form.io/' }
            ]
        }
    ];

    const concepts = [
        { icon: Database, title: 'Schema to API', desc: 'Each form auto-generates structured POST/GET endpoints for seamless data orchestration.' },
        { icon: Layout, title: 'Visual Builder', desc: 'Drag-and-drop complex multi-page forms with conditional logic and advanced validation.' },
        { icon: Cloud, title: 'Infrastructure', desc: 'Flexible hosting options via Docker, Kubernetes, or managed cloud environments.' }
    ];

    return (
        <div className="min-h-screen bg-brand-cream">
            <Navbar />

            <main className="pt-24 lg:pt-32">
                <section className="px-6 md:px-12 py-16 md:py-24">
                    <div className="max-w-[1800px] mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-4xl mb-16 md:mb-24"
                        >
                            <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-black mb-6 md:mb-8 block">Resource Hub</span>
                            <h1 className="text-5xl md:text-8xl font-serif leading-[0.9] tracking-tighter mb-8 md:mb-12">
                                Technical <br />
                                <span className="italic text-brand-olive">Documentation</span>.
                            </h1>
                            <p className="text-brand-ink/60 text-lg md:text-xl font-light leading-relaxed">
                                Professional resources for developers, partners, and technical integrators working with the Stronach and Sons 2020 lead management architecture.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 mb-24 md:mb-32">
                            {resources.map((group, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="space-y-12"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-brand-ink flex items-center justify-center text-brand-gold">
                                            <group.icon className="w-6 h-6" />
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-serif text-brand-green">{group.category}</h2>
                                    </div>

                                    <div className="space-y-6">
                                        {group.items.map((item, i) => (
                                            <a
                                                key={i}
                                                href={item.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group block p-8 bg-white rounded-[2rem] border border-brand-ink/5 hover:border-brand-gold transition-all duration-500 hover:shadow-xl"
                                            >
                                                <div className="flex justify-between items-start mb-4">
                                                    <h3 className="text-xl font-serif text-brand-ink group-hover:text-brand-gold transition-colors">{item.title}</h3>
                                                    <ExternalLink className="w-4 h-4 text-brand-ink/20 group-hover:text-brand-gold transition-colors" />
                                                </div>
                                                <p className="text-brand-ink/50 text-sm leading-relaxed">{item.desc}</p>
                                            </a>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Core Concepts Grid */}
                        <div className="pt-24 md:pt-32 border-t border-brand-ink/5">
                            <h2 className="text-3xl md:text-5xl font-serif text-brand-green mb-16 text-center">Core Concepts</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {concepts.map((concept, i) => (
                                    <div key={i} className="p-10 bg-brand-ink rounded-[2.5rem] text-brand-cream group hover:bg-brand-green transition-colors duration-700">
                                        <concept.icon className="w-10 h-10 text-brand-gold mb-8 group-hover:scale-110 transition-transform" />
                                        <h3 className="text-xl font-serif mb-4">{concept.title}</h3>
                                        <p className="text-brand-cream/50 text-sm leading-relaxed">{concept.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default DocumentationPage;
