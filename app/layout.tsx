import type { Metadata } from "next";
import { Inter, DM_Serif_Display, Outfit } from "next/font/google";

import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });
const serif = DM_Serif_Display({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-serif',
});
const sans = Outfit({ 
  subsets: ["latin"],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: "Kreedha - From Farm to Soul | Premium Quality Fox Nuts",
  description: "Buy premium quality Makhana (Fox Nuts) online from Kreedha. Healthy snacking made delicious - From Farm to Soul!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans antialiased text-brand-forest">
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
