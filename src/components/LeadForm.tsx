import React from 'react';
import { Form } from '@formio/react';
import { motion } from 'motion/react';
import { X } from 'lucide-react';

interface LeadFormProps {
    formUrl?: string;
    onClose?: () => void;
    title?: string;
}

const LeadForm: React.FC<LeadFormProps> = ({
    formUrl = 'https://examples.form.io/example', // Placeholder URL
    onClose,
    title = 'Wholesale Inquiry'
}) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[10000] flex items-center justify-center px-4 md:px-0"
        >
            <div
                className="absolute inset-0 bg-brand-ink/80 backdrop-blur-md"
                onClick={onClose}
            />

            <motion.div
                initial={{ y: 50, scale: 0.9 }}
                animate={{ y: 0, scale: 1 }}
                className="relative w-full max-w-2xl bg-brand-cream rounded-[3rem] p-8 md:p-16 overflow-hidden shadow-2xl"
            >
                <button
                    onClick={onClose}
                    className="absolute top-8 right-8 w-12 h-12 rounded-full border border-brand-ink/10 flex items-center justify-center hover:bg-brand-ink hover:text-white transition-all transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="mb-12">
                    <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-black mb-4 block">Get Started</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-brand-ink leading-tight tracking-tighter mb-4">
                        {title}
                    </h2>
                    <p className="text-brand-ink/60 text-sm italic">
                        Or reach us directly at <a href="mailto:stronson@stronachandosons.ca" className="text-brand-gold hover:underline font-bold">stronson@stronachandosons.ca</a>
                    </p>
                </div>

                <div className="formio-container overflow-y-auto max-h-[60vh] pr-4 custom-scrollbar">
                    <Form
                        src={formUrl}
                        onFormLoad={() => {
                            console.log('Form.io Loaded');
                        }}
                        onSubmit={() => {
                            if (onClose) onClose();
                        }}
                    />
                </div>

                <div className="mt-12 text-center">
                    <p className="text-brand-ink/40 text-[10px] uppercase font-bold tracking-widest">
                        Protected by Form.io Enterprise Security
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default LeadForm;
