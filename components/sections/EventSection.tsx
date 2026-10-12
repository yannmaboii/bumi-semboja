"use client";

import { WHATSAPP_NUMBER } from "@/lib/menu-data";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Nasi Tumpeng & Nasi Box",
    description:
      "Paket hantaran & konsumsi untuk acara kantor, syukuran, atau program Jumat Berkah yang dapat kami bantu bagikan langsung ke masjid dan panti asuhan.",
  },
  {
    num: "02",
    title: "Prasmanan Acara (Min. 15 Pax)",
    description:
      "Sistem jamuan prasmanan untuk arisan, temu alumni, atau kumpul keluarga besar dengan variasi lauk rumahan dan masakan Nusantara pilihan.",
  },
  {
    num: "03",
    title: "Fasilitas Live Musik & Hiburan",
    description:
      "Pilihan ruang berkumpul dengan perlengkapan karaoke, pengiring keyboardist live, dan games untuk mencairkan suasana hangat bersama orang terdekat.",
  },
  {
    num: "04",
    title: "Reservasi Meja Keluarga",
    description:
      "Pemesanan area duduk khusus keluarga atau rombongan sebelum kedatangan agar momen bersantap Anda berlangsung tenang dan tanpa antrean.",
  },
];

export default function EventSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F5] border-b border-[#E8E4DC]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-body text-xs uppercase tracking-[0.2em] text-[#737373] block mb-2">
              Layanan Acara
            </span>
            <h2 className="font-display text-display-lg text-[#1F3D17] font-normal leading-[1.1]">
              Jamuan Khusus & Perayaan
            </h2>
          </div>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20Bumi%20Semboja%2C%20saya%20ingin%20konsultasi%20paket%20acara.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-body uppercase tracking-wider text-[#1F3D17] hover:underline"
          >
            <span>Konsultasi Acara via WhatsApp</span>
            <ArrowUpRight size={13} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((svc) => (
            <div key={svc.num} className="pt-6 border-t border-[#E8E4DC] flex flex-col justify-between">
              <div>
                <span className="font-body text-xs font-semibold text-[#E5B210] tracking-widest block mb-4">
                  {svc.num}
                </span>
                <h3 className="font-display text-xl text-[#1A1A1A] font-medium mb-3 leading-snug">
                  {svc.title}
                </h3>
                <p className="font-body text-xs text-[#737373] leading-relaxed font-light">
                  {svc.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
