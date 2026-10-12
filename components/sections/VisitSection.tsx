"use client";

import { MAPS_EMBED_URL, MAPS_LINK, WHATSAPP_NUMBER } from "@/lib/menu-data";
import { ArrowUpRight } from "lucide-react";

export default function VisitSection() {
  return (
    <section id="kunjungi" className="py-24 sm:py-32 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="font-body text-xs uppercase tracking-[0.2em] text-[#737373] block mb-2">
                Petunjuk Arah
              </span>
              <h2 className="font-display text-display-lg text-[#1F3D17] font-normal leading-[1.1] mb-4">
                Kunjungi Bumi Semboja
              </h2>
              <p className="font-body text-xs sm:text-sm text-[#737373] font-light leading-relaxed">
                Terletak di kawasan tenang Kota Paris, Bogor. Berjarak sekitar 5 menit dari Stasiun Bogor menggunakan ojek online.
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-[#E8E4DC]">
              <div>
                <span className="font-body text-[11px] uppercase tracking-wider text-[#737373] block mb-1">
                  Alamat Lengkap
                </span>
                <p className="font-body text-sm text-[#1A1A1A] leading-relaxed">
                  Jl. Semboja No. 10, Kebon Kelapa, Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat 16125
                </p>
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#1F3D17] hover:underline uppercase tracking-wider mt-2"
                >
                  <span>Buka di Google Maps</span>
                  <ArrowUpRight size={12} />
                </a>
              </div>

              <div>
                <span className="font-body text-[11px] uppercase tracking-wider text-[#737373] block mb-1">
                  Waktu Operasional
                </span>
                <p className="font-body text-sm text-[#1A1A1A]">
                  Selasa – Minggu · 07.30 – 21.00 WIB
                </p>
                <span className="font-body text-xs text-[#B03A2E] mt-0.5 block">
                  Senin Libur
                </span>
              </div>

              <div>
                <span className="font-body text-[11px] uppercase tracking-wider text-[#737373] block mb-1">
                  Catatan Akses & Parkir
                </span>
                <p className="font-body text-xs text-[#737373] leading-relaxed font-light">
                  Lahan parkir kendaraan terbatas (±6–7 motor). Sangat disarankan datang menggunakan transportasi online atau KRL Commuter Line ke Stasiun Bogor.
                </p>
              </div>

              <div>
                <span className="font-body text-[11px] uppercase tracking-wider text-[#737373] block mb-1">
                  Kontak Resmi
                </span>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-[#1F3D17] font-medium hover:underline"
                >
                  WhatsApp: 0852-1558-5856
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 h-[420px] lg:h-[520px] bg-[#ECE8E1] border border-[#E8E4DC] overflow-hidden">
            <iframe
              src={MAPS_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Bumi Semboja Resto Bogor"
              className="grayscale-[30%] contrast-[95%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
