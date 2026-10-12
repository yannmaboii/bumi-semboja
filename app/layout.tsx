import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bumi Semboja | Resto Bogor — Rawon Sejak 1970, Rumah Belanda 1918",
  description:
    "Nikmati Rawon warisan keluarga sejak 1970, Bubur Lintas Negara, dan Ubi Creme Brulee di rumah Belanda berusia 108 tahun. Jl. Semboja No. 10, Bogor Tengah. Buka Selasa–Minggu 07.30–21.00.",
  keywords: [
    "resto bogor",
    "rawon bogor",
    "bumi semboja",
    "bubur lintas negara",
    "cafe aesthetic bogor",
    "kuliner bogor",
    "rumah belanda bogor",
    "ubi creme brulee",
    "tempat makan bogor",
    "restoran vintage bogor",
  ],
  openGraph: {
    title: "Bumi Semboja | Resto Bogor",
    description:
      "Rawon sejak 1970 · Rumah Belanda 1918 · Jl. Semboja No. 10, Bogor Tengah · Buka Selasa–Minggu 07.30–21.00",
    locale: "id_ID",
    type: "website",
    siteName: "Bumi Semboja Resto Bogor",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bumi Semboja | Resto Bogor",
    description: "Rawon sejak 1970 · Rumah Belanda 1918 · Jl. Semboja No. 10 Bogor",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-brand-cream text-brand-charcoal font-body antialiased">
        {children}
      </body>
    </html>
  );
}
