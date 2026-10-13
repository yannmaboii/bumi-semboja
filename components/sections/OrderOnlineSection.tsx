"use client";

import { useState } from "react";
import { WHATSAPP_NUMBER } from "@/lib/menu-data";
import { ArrowUpRight } from "lucide-react";

export default function OrderOnlineSection() {
  const [demoNotice, setDemoNotice] = useState<string | null>(null);

  const handleDemoClick = (platform: string) => {
    setDemoNotice(
      `Mode Pratinjau (Demo): Tautan langsung ke ${platform} akan diaktifkan setelah website resmi digunakan.`
    );
    setTimeout(() => setDemoNotice(null), 4000);
  };

  return (
    <section className="py-20 bg-[#FAF8F5] border-b border-[#E8E4DC]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 py-8 border-t border-b border-[#E8E4DC]">
          <div>
            <span className="font-body text-xs uppercase tracking-[0.2em] text-[#737373] block mb-2">
              Layanan Daring
            </span>
            <h2 className="font-display text-2xl sm:text-3xl text-[#1F3D17] font-normal leading-snug">
              Pesan langsung ke rumah Anda
            </h2>
            <p className="font-body text-xs sm:text-sm text-[#737373] mt-1 font-light">
              Tersedia melalui platform pengantaran resmi atau pemesanan langsung bawa pulang.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => handleDemoClick("GoFood")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#E8E4DC] hover:border-[#1F3D17] text-xs font-body uppercase tracking-wider text-[#1A1A1A] transition-colors cursor-pointer"
              >
                <span>GoFood (Demo)</span>
                <ArrowUpRight size={12} className="text-[#737373]" />
              </button>
              <button
                type="button"
                onClick={() => handleDemoClick("GrabFood")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#E8E4DC] hover:border-[#1F3D17] text-xs font-body uppercase tracking-wider text-[#1A1A1A] transition-colors cursor-pointer"
              >
                <span>GrabFood (Demo)</span>
                <ArrowUpRight size={12} className="text-[#737373]" />
              </button>
              <button
                type="button"
                onClick={() => handleDemoClick("ShopeeFood")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#E8E4DC] hover:border-[#1F3D17] text-xs font-body uppercase tracking-wider text-[#1A1A1A] transition-colors cursor-pointer"
              >
                <span>ShopeeFood (Demo)</span>
                <ArrowUpRight size={12} className="text-[#737373]" />
              </button>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20Bumi%20Semboja%2C%20saya%20ingin%20pesan%20takeaway.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1F3D17] text-[#FAF8F5] text-xs font-body uppercase tracking-wider hover:bg-[#2F5623] transition-colors"
              >
                <span>WhatsApp Takeaway</span>
                <ArrowUpRight size={12} />
              </a>
            </div>

            {demoNotice && (
              <p className="font-body text-xs text-[#1F3D17] bg-[#EBF3E8] px-3.5 py-1.5 rounded-full transition-all">
                {demoNotice}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
