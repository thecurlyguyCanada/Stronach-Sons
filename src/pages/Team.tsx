import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone } from 'lucide-react';

const TeamSection = () => {
  const team = [
    { name: 'Jonathan Morano', role: 'Procurement & Sales', email: 'Jonathan@stronachandsons.ca', phone: '416-768-0718' },
    { name: 'Joe Scali', role: 'Procurement & Sales', email: 'Joe@stronachandsons.ca', phone: '' },
    { name: 'Anthony Morano', role: 'Operations Manager', email: 'Anthony@stronachandsons.ca', phone: '416-779-3851' },
    { name: 'Tony Morano', role: 'Head of Operations', email: 'Tony@stronachandsons.ca', phone: '416-919-3851' },
  ];

  return (
    <section id="team" className="py-24 md:py-48 bg-brand-cream relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-full bg-brand-gold/5 skew-x-12 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 md:mb-40 gap-16">
          <div className="max-w-4xl">
            <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-black mb-8 block">Our Team</span>
            <h2 className="text-6xl md:text-[10vw] font-serif leading-[0.8] tracking-tighter">
              The People <br />
              <span className="italic text-brand-olive">Behind the Promise</span>
            </h2>
          </div>
          <div className="max-w-xs lg:pb-8">
            <p className="text-brand-ink/50 text-sm md:text-base leading-relaxed italic">
              "Experienced professionals dedicated to delivering excellence at the Ontario Food Terminal."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <div className="relative p-12 md:p-14 bg-white rounded-[3rem] border border-brand-ink/5 overflow-hidden transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(26,60,52,0.15)] hover:-translate-y-4">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-brand-gold/10 transition-colors duration-700" />

                <div className="relative z-10 flex flex-col gap-8">
                  <div className="w-20 h-20 rounded-full bg-brand-green flex items-center justify-center">
                    <span className="text-brand-cream font-serif text-2xl italic">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <span className="text-3xl md:text-4xl font-serif text-brand-green leading-none tracking-tighter group-hover:italic transition-all duration-500">
                      {member.name}
                    </span>

                    <div className="h-px w-12 bg-brand-gold/30 group-hover:w-full transition-all duration-700" />

                    <div className="px-4 py-1.5 bg-brand-cream rounded-full border border-brand-ink/5 text-[9px] font-black uppercase tracking-widest text-brand-gold inline-block">
                      {member.role}
                    </div>

                    <div className="space-y-3 pt-2">
                      <a href={`mailto:${member.email}`} className="flex items-center gap-3 text-brand-ink/50 hover:text-brand-green transition-colors group/link">
                        <Mail className="w-4 h-4 text-brand-gold" />
                        <span className="text-xs font-medium">{member.email}</span>
                      </a>
                      {member.phone && (
                        <a href={`tel:${member.phone}`} className="flex items-center gap-3 text-brand-ink/50 hover:text-brand-green transition-colors group/link">
                          <Phone className="w-4 h-4 text-brand-gold" />
                          <span className="text-xs font-medium">{member.phone}</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-white/40 lg:backdrop-blur-sm opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-brand-cream pt-24 lg:pt-32">
      <TeamSection />
    </div>
  );
};

export default TeamPage;
