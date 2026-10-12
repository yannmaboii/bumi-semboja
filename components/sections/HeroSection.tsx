"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/menu-data";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-end justify-start bg-[#141A13] text-[#FAF8F5] overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#141A13] via-[#141A13]/60 to-black/30" />

      <div className="relative z-20 w-full max-w-6xl mx-auto px-6 sm:px-8 pb-16 pt-36">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-body text-xs uppercase tracking-[0.25em] text-[#E5B210] mb-4"
          >
            Rumah Belanda 1918 · Resep Rawon 1970
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-display-xl font-normal text-white leading-[1.05] tracking-tight mb-6"
          >
            Pulang ke
            <br />
            <span className="italic text-[#FAF8F5]/90 font-light">rumah nenek.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-[#FAF8F5]/75 text-base sm:text-lg leading-relaxed font-light max-w-xl mb-10"
          >
            Ruang hangat di kawasan Kota Paris, Bogor. Menghidupkan kembali cita rasa masakan keluarga dari lima generasi dalam ketenangan rumah tua berusia lebih dari satu abad.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <a
              href="#menu"
              className="px-6 py-3 rounded-full bg-[#E5B210] text-[#1F3D17] font-body text-xs uppercase tracking-widest font-semibold hover:bg-[#FAF8F5] transition-colors duration-200"
            >
              Lihat Menu
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20Bumi%20Semboja%2C%20saya%20ingin%20reservasi.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full border border-white/20 text-white font-body text-xs uppercase tracking-widest hover:border-white transition-colors duration-200"
            >
              <span>Hubungi Kami</span>
              <ArrowUpRight size={13} />
            </a>
          </motion.div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-[#FAF8F5]/60 font-body">
          <div className="flex gap-8 sm:gap-12">
            <div>
              <span className="block text-white font-medium text-sm">Kota Bogor</span>
              <span>Jl. Semboja No. 10</span>
            </div>
            <div>
              <span className="block text-white font-medium text-sm">Selasa – Minggu</span>
              <span>07.30 – 21.00 WIB</span>
            </div>
          </div>

          <a
            href="#cerita"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors uppercase tracking-widest text-[11px]"
          >
            <span>Telusuri</span>
            <ArrowDown size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
