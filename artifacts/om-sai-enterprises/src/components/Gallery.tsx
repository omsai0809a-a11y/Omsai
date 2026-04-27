import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ZoomIn } from "lucide-react";

import img1 from "@assets/IMG-20260426-WA0001_1777264282677.jpg";
import img2 from "@assets/IMG-20260426-WA0002_1777264282916.jpg";
import img4 from "@assets/IMG-20260426-WA0004_1777264282712.jpg";
import img5 from "@assets/IMG-20260426-WA0005_1777264282728.jpg";
import img6 from "@assets/IMG-20260426-WA0006_1777264282750.jpg";
import img7 from "@assets/IMG-20260426-WA0007_1777264282738.jpg";
import img8 from "@assets/IMG-20260426-WA0008_1777264282769.jpg";
import img9 from "@assets/IMG-20260426-WA0009_1777264282784.jpg";
import img10 from "@assets/IMG-20260426-WA0010_1777264282897.jpg";
import img11 from "@assets/IMG-20260426-WA0011_1777264282802.jpg";
import img12 from "@assets/IMG-20260426-WA0012_1777264282834.jpg";
import img13 from "@assets/IMG-20260426-WA0013_1777264282859.jpg";
import img14 from "@assets/IMG-20260427-WA0014_1777267263572.jpg";
import img15 from "@assets/IMG-20260427-WA0013_1777301718737.jpg";
import img16 from "@assets/IMG-20260427-WA0010_1777301718786.jpg";
import img17 from "@assets/IMG-20260427-WA0017_1777301718808.jpg";
import img18 from "@assets/IMG-20260427-WA0014_1777301718816.jpg";
import img19 from "@assets/IMG-20260427-WA0015_1777301718824.jpg";

const galleryImages = [
  { id: 1, src: img1, alt: "Premium office corridor with marble flooring", title: "Corporate Office Interior" },
  { id: 2, src: img5, alt: "Modern modular kitchen with grey cabinetry", title: "Modular Kitchen Design" },
  { id: 3, src: img8, alt: "Curved POP false ceiling with cove lighting", title: "Designer False Ceiling" },
  { id: 4, src: img2, alt: "Conference room with triangular LED ceiling", title: "Conference Room Design" },
  { id: 5, src: img7, alt: "Acoustic arch wall with warm accent colors", title: "Accent Wall Design" },
  { id: 13, src: img14, alt: "Textured wall paneling with arched accent design", title: "Designer Wall Paneling" },
  { id: 14, src: img15, alt: "Geometric acoustic wall panels in green and teal", title: "Geometric Acoustic Wall" },
  { id: 15, src: img16, alt: "Corporate reception with green moss feature wall", title: "Corporate Reception Design" },
  { id: 16, src: img17, alt: "Colorful pinboard acoustic panels in purple, orange and yellow", title: "Pinboard Acoustic Panels" },
  { id: 17, src: img18, alt: "Modern lobby with arched accent panels and carpet flooring", title: "Modern Lobby Interior" },
  { id: 18, src: img19, alt: "Two-tone slatted acoustic wall panel in teal and grey", title: "Slatted Acoustic Panels" },
  { id: 6, src: img11, alt: "Modern false ceiling with LED strip lighting", title: "Living Room False Ceiling" },
  { id: 7, src: img4, alt: "Premium washroom with mirror panel wall", title: "Luxury Washroom" },
  { id: 8, src: img13, alt: "Layered false ceiling with crystal chandelier", title: "Premium False Ceiling" },
  { id: 9, src: img6, alt: "Wood and fabric office wall paneling", title: "Office Wall Paneling" },
  { id: 10, src: img9, alt: "Geometric POP ceiling with blue accents", title: "Geometric POP Ceiling" },
  { id: 11, src: img12, alt: "Decorative carved POP ceiling design", title: "Carved POP Ceiling" },
  { id: 12, src: img10, alt: "Circular false ceiling with cove lighting", title: "Circular Ceiling Design" },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-3">Our Portfolio</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-primary">
            Our Recent Projects
          </h3>
          <p className="mt-4 text-muted-foreground text-lg">
            A glimpse into the beautiful spaces we've crafted for our clients across Rewa.
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
                loading="lazy"
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
