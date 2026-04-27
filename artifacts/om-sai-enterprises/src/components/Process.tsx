import React from "react";
import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Consultation", desc: "We listen to your ideas, requirements, and understand your vision and budget." },
  { num: "02", title: "Design Planning", desc: "Our experts create detailed 2D/3D layouts and present design concepts." },
  { num: "03", title: "Material Selection", desc: "We guide you in choosing premium materials, finishes, and color palettes." },
  { num: "04", title: "Execution", desc: "Our skilled craftsmen bring the designs to life with precision and care." },
  { num: "05", title: "Final Delivery", desc: "We hand over your beautifully transformed space, on time and impeccable." },
];

export function Process() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-3">Our Process</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-primary">
            How We Work
          </h3>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-[2px] bg-border z-0">
            <motion.div 
              className="h-full bg-accent"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-full bg-card border-4 border-background shadow-lg flex items-center justify-center mb-6 relative group-hover:border-accent transition-colors duration-300">
                  <span className="text-2xl font-serif font-bold text-primary">{step.num}</span>
                  {/* Inner pulse ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-accent scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
                </div>
                <h4 className="text-xl font-bold font-serif text-primary mb-2">{step.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed px-2">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
