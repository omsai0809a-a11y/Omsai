import React from "react";
import { SERVICES, PHONE_NUMBER, WA_NUMBER, ADDRESS, EMAIL } from "@/lib/constants";
import { Phone, MapPin, Mail, Instagram, Facebook } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id.replace("#", ""));
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="font-serif font-bold text-2xl tracking-tight text-white">
              OM SAI <span className="text-accent">ENTERPRISES</span>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed">
              Transforming houses into dream homes. We are Rewa's trusted interior design studio, dedicated to quality and craftsmanship.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/om_sai_enterprises_rewa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-all hover:-translate-y-1"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/yash.vishwakarma.official" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-all hover:-translate-y-1"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold font-serif text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <button 
                    onClick={() => scrollTo(link.toLowerCase() === 'home' ? 'home' : link.toLowerCase().replace(' ', '-'))}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold font-serif text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <button 
                    onClick={() => scrollTo('services')}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold font-serif text-white mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span>{ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {PHONE_NUMBER}
                </a>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors break-all">
                  {EMAIL}
                </a>
              </li>
              <li className="pt-2">
                <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2 rounded-md font-medium transition-colors">
                  <FaWhatsapp className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center text-primary-foreground/50 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} OM SAI ENTERPRISES. All Rights Reserved.</p>
          <p>Designed with passion in Rewa, MP</p>
        </div>
      </div>
    </footer>
  );
}
