import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative w-full h-[90vh] min-h-[600px] overflow-hidden flex items-center justify-center">
      {/* Background Image with Ken Burns effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="/images/hero.png" 
          alt="Premium Interior Design by Om Sai Enterprises" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent font-medium text-sm tracking-widest uppercase backdrop-blur-sm border border-accent/30 mb-2">
            Premium Interior Design Studio in Rewa
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight font-serif drop-shadow-lg">
            Transforming Spaces Into Beautiful <span className="text-accent italic">Living Experiences</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light drop-shadow-md">
            Bespoke interiors for homes, modular kitchens, and commercial spaces. Crafted with passion, delivered with excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button 
              size="lg" 
              className="bg-accent text-primary font-bold hover:bg-accent/90 h-14 px-8 text-lg w-full sm:w-auto"
              onClick={() => scrollTo("gallery")}
            >
              View Our Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <a 
              href="https://wa.me/919713743651" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button 
                size="lg" 
                variant="outline" 
                className="h-14 px-8 text-lg w-full sm:w-auto border-white text-primary hover:bg-white gap-2 font-semibold bg-white/90 backdrop-blur-sm"
              >
                <FaWhatsapp className="w-6 h-6 text-[#25D366]" />
                Contact on WhatsApp
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
