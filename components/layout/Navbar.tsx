"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/menu-data";

const navLinks = [
  { href: "#cerita", label: "Cerita" },
  { href: "#andalan", label: "Menu Pilihan" },
  { href: "#menu", label: "Daftar Menu" },
  { href: "#galeri", label: "Atmosfer" },
  { href: "#kunjungi", label: "Lokasi" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E8E4DC]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
          <a href="#" className="flex items-baseline gap-2.5 group">
            <span
              className={`font-display text-2xl font-semibold tracking-tight transition-colors duration-300 ${
                scrolled ? "text-[#1F3D17]" : "text-white"
              }`}
            >
              Bumi Semboja
            </span>
            <span
              className={`font-body text-[11px] font-medium tracking-widest uppercase transition-colors duration-300 ${
                scrolled ? "text-[#737373]" : "text-white/60"
              }`}
            >
              Bogor · 1918
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-body text-xs uppercase tracking-widest transition-colors duration-200 ${
                  scrolled
                    ? "text-[#1A1A1A]/70 hover:text-[#1F3D17]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20Bumi%20Semboja%2C%20saya%20ingin%20bertanya%20tentang%20reservasi.`}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium uppercase tracking-wider rounded-full border transition-all duration-200 ${
                scrolled
                  ? "border-[#1F3D17] text-[#1F3D17] hover:bg-[#1F3D17] hover:text-[#FAF8F5]"
                  : "border-white/40 text-white hover:bg-white hover:text-[#1A1A1A]"
              }`}
            >
              <span>Reservasi</span>
              <ArrowUpRight size={13} />
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 transition-colors ${
              scrolled ? "text-[#1A1A1A]" : "text-white"
            }`}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#FAF8F5] pt-28 px-8 flex flex-col justify-between pb-12"
          >
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-display text-3xl text-[#1F3D17] hover:text-[#E5B210] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-8 border-t border-[#E8E4DC]">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20Bumi%20Semboja%2C%20saya%20ingin%20bertanya%20tentang%20reservasi.`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between w-full py-3.5 px-6 rounded-full bg-[#1F3D17] text-[#FAF8F5] font-body text-xs uppercase tracking-widest"
              >
                <span>Reservasi WhatsApp</span>
                <ArrowUpRight size={14} />
              </a>
              <p className="font-body text-[11px] text-[#737373] mt-4 text-center">
                Jl. Semboja No. 10 · Selasa – Minggu 07.30 – 21.00 WIB
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
