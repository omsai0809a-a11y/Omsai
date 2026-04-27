import React from "react";
import { SERVICES } from "@/lib/constants";
import { motion } from "framer-motion";
import { 
  Home, 
  ChefHat, 
  BedDouble, 
  Sofa, 
  BoxSelect, 
  Wallpaper, 
  Briefcase, 
  Armchair, 
  Hammer
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "home-interior": <Home className="w-8 h-8" />,
  "modular-kitchen": <ChefHat className="w-8 h-8" />,
  "bedroom": <BedDouble className="w-8 h-8" />,
  "living-room": <Sofa className="w-8 h-8" />,
  "false-ceiling": <BoxSelect className="w-8 h-8" />,
  "wall-design": <Wallpaper className="w-8 h-8" />,
  "office": <Briefcase className="w-8 h-8" />,
  "furniture": <Armchair className="w-8 h-8" />,
  "renovation": <Hammer className="w-8 h-8" />
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-3">Our Services</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-primary">
            Bespoke Interior Solutions
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card rounded-2xl p-8 border border-border/50 hover:border-accent/50 hover:shadow-lg transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                {iconMap[service.id]}
              </div>
              <div className="w-16 h-16 rounded-full bg-primary/5 text-accent flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all">
                {iconMap[service.id]}
              </div>
              <h4 className="text-xl font-bold font-serif text-primary mb-3">{service.title}</h4>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
