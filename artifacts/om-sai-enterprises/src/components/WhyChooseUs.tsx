import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, UserCheck, IndianRupee, ShieldCheck, Clock, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: <UserCheck className="w-6 h-6" />,
    title: "Experienced Interior Designers",
    description: "Our team brings years of expertise and creativity to every project."
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "Customized Designs",
    description: "Every home is unique, and so are our tailor-made design solutions."
  },
  {
    icon: <IndianRupee className="w-6 h-6" />,
    title: "Affordable Pricing",
    description: "Premium designs that fit within your budget without compromising quality."
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Premium Quality Materials",
    description: "We source only the best materials to ensure durability and elegance."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "On-Time Project Completion",
    description: "We respect your time and deliver projects strictly on schedule."
  },
  {
    icon: <HeartHandshake className="w-6 h-6" />,
    title: "Customer Satisfaction Focus",
    description: "Your happiness is our primary goal, from consultation to final handover."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Abstract background pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-3">Why Choose Us</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-white">
            The OM SAI Advantage
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex gap-4 group"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-colors duration-300">
                {reason.icon}
              </div>
              <div>
                <h4 className="text-xl font-bold font-serif text-white mb-2">{reason.title}</h4>
                <p className="text-primary-foreground/70 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
