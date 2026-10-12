"use client";

export default function StorySection() {
  return (
    <section id="cerita" className="py-24 sm:py-32 bg-[#FAF8F5] border-b border-[#E8E4DC]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <span className="font-body text-xs uppercase tracking-[0.2em] text-[#737373] block mb-3">
              Kisah Rumah
            </span>
            <h2 className="font-display text-display-lg text-[#1F3D17] font-normal leading-[1.1] mb-6">
              Bumi Semboja,
              <br />
              <span className="italic text-[#1A1A1A]">merawat memori yang tak lekang waktu.</span>
            </h2>
            <div className="space-y-4 pt-6 border-t border-[#E8E4DC]">
              <div className="flex justify-between items-baseline py-2 border-b border-[#E8E4DC]/60 text-xs font-body">
                <span className="text-[#737373] uppercase tracking-wider">Tahun Berdiri</span>
                <span className="font-medium text-[#1A1A1A]">1918 (Kolonial Belanda)</span>
              </div>
              <div className="flex justify-between items-baseline py-2 border-b border-[#E8E4DC]/60 text-xs font-body">
                <span className="text-[#737373] uppercase tracking-wider">Generasi Penghuni</span>
                <span className="font-medium text-[#1A1A1A]">Keluarga Alm. Suwito (5 Generasi)</span>
              </div>
              <div className="flex justify-between items-baseline py-2 border-b border-[#E8E4DC]/60 text-xs font-body">
                <span className="text-[#737373] uppercase tracking-wider">Resep Rawon</span>
                <span className="font-medium text-[#1A1A1A]">Banyuwangi sejak 1970</span>
              </div>
              <div className="flex justify-between items-baseline py-2 text-xs font-body">
                <span className="text-[#737373] uppercase tracking-wider">Buka Kembali</span>
                <span className="font-medium text-[#1A1A1A]">Juli 2024</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-[#1A1A1A]/80 font-body text-sm sm:text-base leading-relaxed font-light">
            <p>
              Suara piring berdenting halus, diikuti gelak tawa yang mengalir hangat di antara kursi-kursi kayu tua hadir kembali di rumah Bumi Semboja pada Juli 2024. Semua bermula ketika kami membuka kembali pintu rumah berarsitektur Belanda yang dibangun pada tahun 1918 di kawasan legendaris Kota Paris, Bogor.
            </p>
            <p>
              Sejak 1950, rumah ini pertama kali dihuni oleh uyut kami, <strong className="font-medium text-[#1A1A1A]">Alm. Suwito</strong>, seorang perwira polisi berjasa di era awal kemerdekaan. Sejak itu pula, ia menjadi saksi tawa dan ruang berpulang keluarga kami selama lima generasi.
            </p>
            <p>
              Demi menjaga nyala api kenangan setelah masa sunyi pandemi, sang Ibu berpesan: <em className="text-[#1F3D17] italic">“Rumah ini tidak boleh sunyi. Kita harus menghidupkannya kembali sebagai bentuk cinta kepada para orang tua yang telah mendahului.”</em>
            </p>
            <p>
              Panggilan itu membawa pulang <strong className="font-medium text-[#1A1A1A]">Astari</strong> setelah menyelesaikan studi S2 Bisnis & Manajemen di Manchester, Inggris. Di dapurnya, kami menghidupkan kembali Rawon khas Banyuwangi resep 1970 dari Nenek pihak Bapak, serta Soto Kikil yang selalu dinanti tiap Lebaran — disandingkan dengan kreasi kontemporer seperti Bubur Lintas Negara dan Ubi Creme Brulee agar seluruh generasi dapat duduk bersama di satu meja makan yang sama.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
