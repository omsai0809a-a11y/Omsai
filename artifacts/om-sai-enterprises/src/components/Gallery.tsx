import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ZoomIn } from "lucide-react";

const galleryImages = [
  { id: 1, src: "/images/gallery/kitchen.png", alt: "Luxurious Modular Kitchen", title: "Modern Modular Kitchen" },
  { id: 2, src: "/images/gallery/bedroom.png", alt: "Elegant Master Bedroom", title: "Master Bedroom Design" },
  { id: 3, src: "/images/gallery/ceiling.png", alt: "Contemporary False Ceiling", title: "False Ceiling Details" },
  { id: 4, src: "/images/gallery/tv-wall.png", alt: "Marble TV Wall", title: "Living Room TV Unit" },
  { id: 5, src: "/images/gallery/office.png", alt: "Modern Office Interior", title: "Corporate Office Space" },
  { id: 6, src: "/images/gallery/dining.png", alt: "Elegant Dining Area", title: "Dining Room Setup" },
  { id: 7, src: "/images/gallery/bathroom.png", alt: "Luxurious Bathroom", title: "Premium Bathroom Design" },
  { id: 8, src: "/images/gallery/entryway.png", alt: "Welcoming Entryway", title: "Foyer Entrance" },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-3">Our Portfolio</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-primary">
            Featured Projects
          </h3>
          <p className="mt-4 text-muted-foreground text-lg">
            A glimpse into the beautiful spaces we've crafted for our clients.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image, idx) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-2xl"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                <ZoomIn className="w-10 h-10 text-white mb-4 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300" />
                <h4 className="text-white font-serif font-bold text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {image.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-1 bg-transparent border-none shadow-none">
          <AnimatePresence>
            {selectedImage && (
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                src={selectedImage}
                alt="Full size gallery view"
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              />
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </section>
  );
}
