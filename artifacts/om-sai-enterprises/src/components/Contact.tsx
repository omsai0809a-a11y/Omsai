import React from "react";
import { ContactForm } from "./ContactForm";
import { PHONE_NUMBER, WA_NUMBER, ADDRESS, MAP_EMBED_URL } from "@/lib/constants";
import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Details & Map */}
          <div>
            <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-3">Get In Touch</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-8">
              Let's Build Your Dream Space
            </h3>
            
            <div className="space-y-8 mb-12">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold font-serif text-xl text-primary mb-1">Our Studio</h4>
                  <p className="text-muted-foreground leading-relaxed max-w-sm">
                    {ADDRESS}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold font-serif text-xl text-primary mb-1">Call Us</h4>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    {PHONE_NUMBER}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}>
                      <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </Button>
                    </a>
                    <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer">
                      <Button className="bg-[#25D366] hover:bg-[#20bd5a] text-white">
                        <FaWhatsapp className="w-5 h-5 mr-2" />
                        WhatsApp
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="w-full max-w-sm">
                  <h4 className="font-bold font-serif text-xl text-primary mb-3">Working Hours</h4>
                  <div className="bg-card border border-border/50 rounded-xl p-4">
                    <table className="w-full text-sm text-muted-foreground">
                      <tbody>
                        <tr>
                          <td className="py-2 font-medium">Saturday</td>
                          <td className="py-2 text-right">9:00 AM - 8:00 PM</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-medium">Sunday</td>
                          <td className="py-2 text-right">9:00 AM - 8:00 PM</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-medium">Monday</td>
                          <td className="py-2 text-right">9:00 AM - 8:00 PM</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-medium">Tuesday</td>
                          <td className="py-2 text-right">9:00 AM - 8:00 PM</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-medium">Wednesday</td>
                          <td className="py-2 text-right">9:00 AM - 8:00 PM</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-medium">Thursday</td>
                          <td className="py-2 text-right">9:00 AM - 8:00 PM</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-medium">Friday</td>
                          <td className="py-2 text-right">9:00 AM - 8:00 PM</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden h-[300px] border border-border shadow-sm">
              <iframe 
                src={MAP_EMBED_URL}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="OM SAI ENTERPRISES Location"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <div className="lg:pl-8">
            <div className="sticky top-24">
              <ContactForm />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
