import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Phone, ArrowUp } from "lucide-react";
import { WA_NUMBER, PHONE_NUMBER } from "@/lib/constants";

export function FloatingUI() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Bottom Right - Contact */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        <a 
          href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} 
          className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 transition-transform hover:scale-110 flex items-center justify-center group"
          aria-label="Call Us"
        >
          <Phone className="w-6 h-6" />
        </a>
        <a 
          href={`https://wa.me/${WA_NUMBER}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20bd5a] transition-transform hover:scale-110 flex items-center justify-center relative"
          aria-label="WhatsApp Us"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></span>
          <FaWhatsapp className="w-7 h-7 relative z-10" />
        </a>
      </div>

      {/* Bottom Left - Scroll Top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 left-6 z-50 bg-card text-foreground border shadow-md p-3 rounded-full transition-all duration-300 hover:bg-accent hover:text-white hover:border-accent ${
          showTop ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </>
  );
}
