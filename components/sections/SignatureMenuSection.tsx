"use client";

import { formatPrice } from "@/lib/menu-data";

const signatureCards = [
  {
    id: "rawon",
    name: "Rawon Daging",
    origin: "Resep Banyuwangi Sejak 1970",
    description:
      "Kuah hitam medok yang dimasak 8 jam dengan kluwek asli kiriman Jawa Timur. Disajikan lengkap dengan tauge, telur asin, dan sambal khas.",
    price: 48000,
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "bubur",
    name: "Bubur Lintas Negara",
    origin: "Oriental Chinese & Topping Jepang",
    description:
      "Bubur lembut berpadu kailan crispy renyah, cakwe, dan katsuobushi gurih. Menyatukan tradisi lintas selera di satu mangkuk.",
    price: 33000,
    image:
      "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "ubi",
    name: "Ubi Creme Brulee",
    origin: "Kreasi Dessert Meja Tamu",
    description:
      "Ubi Cilembu panggang legit bertabur custard creamy dan crust gula yang dikaramelisasi langsung dengan torch di depan pengunjung.",
    price: 35000,
    image:
      "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "sei-sapi",
    name: "Nasi Sei Sapi",
    origin: "Daging Asap NTT & Australian Beef",
    description:
      "Daging sapi asap empuk beraroma kayu khas dengan dampingan crispy kailan, kuah kaldu hangat, dan racikan sambal pedas segar.",
    price: 48000,
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80&auto=format&fit=crop",
  },
];

export default function SignatureMenuSection() {
  return (
    <section id="andalan" className="py-24 sm:py-32 bg-[#FAF8F5] border-b border-[#E8E4DC]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="font-body text-xs uppercase tracking-[0.2em] text-[#737373] block mb-2">
              Koleksi Pilihan
            </span>
            <h2 className="font-display text-display-lg text-[#1F3D17] font-normal leading-[1.1]">
              Menu Andalan Keluarga
            </h2>
          </div>
          <p className="font-body text-xs sm:text-sm text-[#737373] max-w-sm">
            Empat racikan ikonik yang menjadi alasan pengunjung selalu rindu kembali ke rumah ini.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {signatureCards.map((card) => (
            <div key={card.id} className="group flex flex-col">
              <div className="aspect-[4/5] overflow-hidden bg-[#ECE8E1] mb-5">
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-display text-xl text-[#1A1A1A] font-medium leading-snug">
                  {card.name}
                </h3>
                <span className="font-body text-xs text-[#1F3D17] font-semibold tracking-tight">
                  {formatPrice(card.price)}
                </span>
              </div>

              <span className="font-body text-[11px] uppercase tracking-wider text-[#737373] mb-2.5">
                {card.origin}
              </span>

              <p className="font-body text-xs text-[#1A1A1A]/70 leading-relaxed font-light">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
