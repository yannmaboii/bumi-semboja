"use client";

import { WHATSAPP_NUMBER, INSTAGRAM_URL, GOFOOD_URL, GRABFOOD_URL } from "@/lib/menu-data";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#141A13] text-[#FAF8F5] pt-20 pb-12 border-t border-[#1F3D17]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="md:col-span-5">
            <span className="font-display text-3xl font-normal tracking-tight block mb-2">
              Bumi Semboja
            </span>
            <p className="font-body text-xs uppercase tracking-[0.2em] text-[#E5B210] mb-6">
              Restoran Warisan · Est. 1918
            </p>
            <p className="font-body text-xs text-[#FAF8F5]/60 leading-relaxed font-light max-w-sm">
              Menghadirkan kehangatan rumah nenek, resep Rawon keluarga Banyuwangi 1970, serta kebersamaan lintas generasi di kawasan Kota Paris, Bogor.
            </p>
          </div>

          <div className="md:col-span-4 space-y-2 text-xs font-body text-[#FAF8F5]/70">
            <span className="text-[11px] uppercase tracking-widest text-[#E5B210] block mb-3">
              Kunjungan & Waktu
            </span>
            <p className="text-white">Jl. Semboja No. 10, Kebon Kelapa, Bogor Tengah</p>
            <p>Selasa – Minggu · 07.30 – 21.00 WIB</p>
            <p className="text-[#B03A2E] font-medium">Senin Tutup</p>
            <p className="pt-2 text-white/50">Sekitar 5 menit dari Stasiun KRL Bogor</p>
          </div>

          <div className="md:col-span-3 space-y-3 text-xs font-body">
            <span className="text-[11px] uppercase tracking-widest text-[#E5B210] block mb-3">
              Tautan Resmi
            </span>
            <div>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white/80 hover:text-white transition-colors"
              >
                <span>Instagram @bumisemboja</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
            <div>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white/80 hover:text-white transition-colors"
              >
                <span>WhatsApp: 0852-1558-5856</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
            <div>
              <a
                href={GOFOOD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white/60 hover:text-white transition-colors"
              >
                <span>GoFood</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
            <div>
              <a
                href={GRABFOOD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white/60 hover:text-white transition-colors"
              >
                <span>GrabFood</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-body text-white/40">
          <p>© {currentYear} Bumi Semboja | Resto Bogor. Hak cipta dilindungi undang-undang.</p>
          <p>Disusun dengan prinsip desain minimalis murni.</p>
        </div>
      </div>
    </footer>
  );
}
