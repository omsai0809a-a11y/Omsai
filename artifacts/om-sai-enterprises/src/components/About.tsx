import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "8+", label: "Years Experience" },
  { value: "250+", label: "Projects Delivered" },
  { value: "200+", label: "Happy Clients" },
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
                className="bg-card p-8 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="text-4xl md:text-5xl font-bold font-serif text-primary mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
