import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Anjali S.",
    location: "Rewa",
    text: "OM SAI ENTERPRISES transformed our old house into a modern masterpiece. The modular kitchen they designed is both beautiful and highly functional. Highly recommend them for anyone in Rewa looking for quality work.",
    rating: 5
  },
  {
    name: "Vikram R.",
    location: "Rewa",
    text: "Very professional team. They designed our new office space perfectly, optimizing every corner. The finishing and material quality are top-notch, and they delivered exactly on schedule.",
    rating: 5
  },
  {
    name: "Neha M.",
    location: "Rewa",
    text: "We hired them for our living room and master bedroom interior. The 3D designs they showed were exactly what was delivered. The false ceiling work with cove lighting gives our home a very luxurious feel.",
    rating: 5
  },
  {
    name: "Rahul T.",
    location: "Rewa",
    text: "I was looking for affordable yet premium interior designers, and Yash's team exceeded my expectations. They handled everything from material selection to final execution smoothly.",
    rating: 5
  }
];

export function Testimonials() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "center", skipSnaps: false });

  // Add auto-play manually if needed or just use simple scroll

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-3">Testimonials</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-primary">
            What Our Clients Say
          </h3>
        </div>

        <div className="max-w-4xl mx-auto overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex -ml-4">
            {testimonials.map((testimonial, idx) => (
              <div className="flex-[0_0_100%] md:flex-[0_0_50%] min-w-0 pl-4" key={idx}>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-card p-8 rounded-2xl border border-border/50 shadow-sm h-full relative"
                >
                  <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/5" />
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-serif font-bold text-primary text-xl">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-primary font-serif">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
