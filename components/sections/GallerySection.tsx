"use client";

import { INSTAGRAM_URL } from "@/lib/menu-data";
import { ArrowUpRight } from "lucide-react";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=80&auto=format&fit=crop",
    caption: "Sudut Meja Kayu Tua & Cahaya Pagi",
    ratio: "aspect-[4/3] md:col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600&q=80&auto=format&fit=crop",
    caption: "Arsitektur Rumah 1918",
    ratio: "aspect-[4/5]",
  },
  {
    src: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80&auto=format&fit=crop",
    caption: "Rawon Resep 1970",
    ratio: "aspect-[1/1]",
  },
  {
    src: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=600&q=80&auto=format&fit=crop",
    caption: "Ubi Creme Brulee Live Torch",
    ratio: "aspect-[1/1]",
  },
  {
    src: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=900&q=80&auto=format&fit=crop",
    caption: "Bubur Lintas Negara",
    ratio: "aspect-[16/9] md:col-span-2",
  },
];

export default function GallerySection() {
  return (
    <section id="galeri" className="py-24 sm:py-32 bg-[#FAF8F5] border-b border-[#E8E4DC]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="font-body text-xs uppercase tracking-[0.2em] text-[#737373] block mb-2">
              Dokumentasi
            </span>
            <h2 className="font-display text-display-lg text-[#1F3D17] font-normal leading-[1.1]">
              Atmosfer Rumah & Sajian
            </h2>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-body uppercase tracking-wider text-[#1F3D17] hover:underline"
          >
            <span>Instagram @bumisemboja</span>
            <ArrowUpRight size={13} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {photos.map((photo, i) => (
            <div key={i} className={`overflow-hidden bg-[#ECE8E1] group ${photo.ratio}`}>
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-full object-cover grayscale-[15%] contrast-[95%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
