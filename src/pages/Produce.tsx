import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowUpRight,
  ShieldCheck,
  Award,
  CheckCircle2,
  History,
} from 'lucide-react';
import { cn } from '../lib/utils';
import { useDocumentHead } from '../hooks/useDocumentHead';

const ProduceGrid = () => {
  const categories = [
    {
      title: 'Apples & Cherries',
      desc: 'Premium hand-selected apples and cherries sourced from top North American orchards for peak freshness and flavor.',
      img: '/images/apples_cherries_user.jpg',
      alt: 'Wholesale fresh apples and cherries from North American orchards',
      tag: 'Seasonal',
      size: 'large'
    },
    {
      title: 'Leafy Greens',
      desc: 'Fresh lettuce, spinach, kale, and mixed greens delivered daily for maximum crispness.',
      img: '/images/leafy_greens_user.jpg',
      alt: 'Fresh wholesale leafy greens including lettuce, spinach, and kale',
      tag: 'Daily',
      size: 'small'
    },
    {
      title: 'Mix Vegetables',
      desc: 'Curated selection of fresh mixed vegetables for restaurants and retail partners.',
      img: '/images/mix_veggies_user.jpg',
      alt: 'Wholesale mixed vegetables for restaurants and retailers',
      tag: 'Core',
      size: 'small'
    },
    {
      title: 'Onions',
      desc: 'Ontario-grown and imported onions — red, yellow, white, and sweet varieties available year-round.',
      img: '/images/onions_user.jpg',
      alt: 'Ontario-grown wholesale onions in red, yellow, and white varieties',
      tag: 'Year-Round',
      size: 'large'
    },
    {
      title: 'Zucchini & Squash',
      desc: 'Fresh zucchini and squash varieties sourced from local growers and premium suppliers.',
      img: '/images/zucchini_squash_user.png',
      alt: 'Fresh wholesale zucchini and squash from local Ontario growers',
      tag: 'Seasonal',
      size: 'small'
    }
  ];

  const TiltCard = ({ cat, idx }: { cat: any, idx: number }) => {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
      const check = () => setIsDesktop(window.innerWidth >= 1024);
      check();
      window.addEventListener('resize', check);
      return () => window.removeEventListener('resize', check);
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isDesktop) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rX = ((y - centerY) / centerY) * -10;
      const rY = ((x - centerX) / centerX) * 10;
      setRotateX(rX);
      setRotateY(rY);
    };

    const handleMouseLeave = () => {
      setRotateX(0);
      setRotateY(0);
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: idx * 0.1, duration: 0.8 }}
        onMouseMove={isDesktop ? handleMouseMove : undefined}
        onMouseLeave={isDesktop ? handleMouseLeave : undefined}
        animate={isDesktop ? { rotateX, rotateY } : undefined}
        className={cn(
          "group relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] cursor-pointer perspective-1000",
          cat.size === 'large' ? "md:col-span-7 h-[400px] md:h-[600px]" : "md:col-span-5 h-[400px] md:h-[600px]"
        )}
      >
        <motion.div
          className="w-full h-full"
          whileHover={isDesktop ? { scale: 1.05 } : undefined}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={cat.img}
            alt={cat.alt}
            loading="lazy"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />

        <div className="absolute top-10 right-10">
          <div className="bg-white/10 lg:backdrop-blur-xl border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full">
            {cat.tag}
          </div>
        </div>

        <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12 text-white">
          <div className="flex items-end justify-between gap-6 md:gap-8">
            <div className="max-w-md">
              <h3 className="text-3xl md:text-5xl font-serif mb-2 md:mb-4 group-hover:italic transition-all duration-500">{cat.title}</h3>
              <p className="text-white/60 text-xs md:text-sm leading-relaxed md:opacity-0 md:group-hover:opacity-100 transition-all duration-700 md:translate-y-4 md:group-hover:translate-y-0">
                {cat.desc}
              </p>
            </div>
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-brand-ink transition-all duration-500 flex-shrink-0">
              <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="produce" className="py-20 md:py-32 px-6 md:px-12 max-w-[1800px] mx-auto relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-12">
        <div className="max-w-3xl">
          <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-black mb-6 block">The Collection</span>
          <h2 className="text-5xl md:text-[8vw] font-serif leading-[0.85] tracking-tighter">
            Nature's <br />
            <span className="italic text-brand-olive">Masterpieces</span>
          </h2>
        </div>
        <div className="max-w-sm">
          <p className="text-brand-ink/60 text-sm leading-relaxed mb-8 italic">
            "We carefully source, inspect, and deliver fresh fruits and vegetables that meet the highest standards for freshness, consistency, and reliability."
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        {categories.map((cat, idx) => (
          <TiltCard key={idx} cat={cat} idx={idx} />
        ))}
      </div>
    </section>
  );
};

const QualityLab = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: 'Rigorous Inspection',
      description: 'Every shipment undergoes a multi-point inspection process at the terminal to ensure peak freshness and quality.',
    },
    {
      icon: Award,
      title: 'Grading Standards',
      description: 'We adhere to and often exceed industry grading standards, ensuring consistent quality for our partners.',
    },
    {
      icon: CheckCircle2,
      title: 'Cold Chain Integrity',
      description: 'Our logistics maintain optimal temperatures from farm to your door, preserving produce integrity.',
    },
    {
      icon: History,
      title: 'Traceability',
      description: 'Full traceability from source to destination, providing transparency and accountability.',
    },
  ];

  return (
    <section id="quality-lab" className="py-20 md:py-32 bg-brand-cream relative overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-black mb-6 block">Our Promise</span>
          <h2 className="text-4xl md:text-7xl font-serif leading-[1.1] tracking-tighter">
            The Quality <br />
            <span className="italic text-brand-olive">Advantage</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="bg-white p-8 md:p-10 rounded-[2rem] border border-brand-ink/5 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-brand-gold flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-brand-ink" />
              </div>
              <h3 className="text-xl md:text-2xl font-serif mb-3 text-brand-ink">{feature.title}</h3>
              <p className="text-brand-ink/70 text-sm md:text-base leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProducePage = () => {
  useDocumentHead({
    title: 'Fresh Wholesale Produce',
    description: 'Browse our wholesale produce collection: apples, cherries, leafy greens, mixed vegetables, onions, zucchini and squash. 100% quality inspected at the Ontario Food Terminal.',
    canonical: '/produce',
  });

  return (
    <div className="min-h-screen bg-brand-cream pt-24 lg:pt-32">
      <ProduceGrid />
      <QualityLab />
    </div>
  );
};

export default ProducePage;
