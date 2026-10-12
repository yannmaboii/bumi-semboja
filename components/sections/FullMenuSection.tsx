"use client";

import { useState } from "react";
import { menuCategories, formatPrice, MenuCategory } from "@/lib/menu-data";

export default function FullMenuSection() {
  const [activeTab, setActiveTab] = useState("makanan");
  const activeCategory = menuCategories.find((c: MenuCategory) => c.id === activeTab);

  return (
    <section id="menu" className="py-24 sm:py-32 bg-[#FAF8F5] border-b border-[#E8E4DC]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-[#E8E4DC]">
          <div>
            <span className="font-body text-xs uppercase tracking-[0.2em] text-[#737373] block mb-2">
              Buku Hidangan
            </span>
            <h2 className="font-display text-display-lg text-[#1F3D17] font-normal leading-[1.1]">
              Daftar Menu Lengkap
            </h2>
          </div>

          <div className="flex items-center gap-2">
            {menuCategories.map((cat: MenuCategory) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-full font-body text-xs uppercase tracking-wider transition-colors duration-200 ${
                  activeTab === cat.id
                    ? "bg-[#1F3D17] text-[#FAF8F5]"
                    : "text-[#737373] hover:text-[#1A1A1A] hover:bg-[#E8E4DC]/50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {activeCategory && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
            {activeCategory.items.map((item) => (
              <div
                key={item.id}
                className="py-3 border-b border-[#E8E4DC]/60 flex items-baseline justify-between gap-6 group"
              >
                <div className="flex-1 pr-2">
                  <div className="flex items-baseline gap-2">
                    <span className="font-body text-sm font-medium text-[#1A1A1A] group-hover:text-[#1F3D17] transition-colors">
                      {item.name}
                    </span>
                    {item.badge && (
                      <span className="font-body text-[10px] text-[#E5B210] font-semibold tracking-wide uppercase">
                        · {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="font-body text-xs text-[#737373] leading-relaxed line-clamp-2 mt-0.5 font-light">
                    {item.description}
                  </p>
                </div>
                <span className="font-body text-xs font-semibold text-[#1F3D17] tracking-tight shrink-0">
                  {formatPrice(item.price)}
                </span>
              </div>
            ))}
          </div>
        )}

        <div className="mt-16 pt-8 border-t border-[#E8E4DC] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-body text-[#737373]">
          <p>
            * Semua harga sudah termasuk pajak restoran. Pilihan Stevia (+Rp 3.000) tersedia untuk seri minuman.
          </p>
          <a
            href="https://wa.me/6285215585856?text=Halo%20Bumi%20Semboja%2C%20saya%20ingin%20tanya%20menu%20dan%20pemesanan."
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1F3D17] hover:underline uppercase tracking-wider font-medium"
          >
            Tanya Pesanan Khusus via WA →
          </a>
        </div>
      </div>
    </section>
  );
}
