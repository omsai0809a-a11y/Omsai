import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "150+", label: "Projects Delivered" },
  { value: "100+", label: "Happy Clients" },
  { value: "5+", label: "Cities Served" },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-sm font-bold text-accent tracking-widest uppercase">About Us</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-primary leading-tight">
              Crafting Spaces That Tell Your Story
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Based in the heart of Rewa, <strong>OM SAI ENTERPRISES</strong> is a trusted interior design studio dedicated to quality workmanship and customer satisfaction. We don't just decorate rooms; we design experiences. 
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From contemporary modular kitchens to elegant living rooms, our approach is deeply personal. We believe that true luxury lies in the details—the perfect selection of materials, the warmth of the lighting, and the flawless execution of design.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white aspect-square flex flex-col items-center justify-center p-8 rounded-2xl border border-border/40 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)] transition-shadow text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-primary mb-3 leading-none">{stat.value}</div>
                <div className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
