import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { DesktopNavbar, DesktopFooter, MobileTopbar, MobileBottomNav } from '@/modules/layouts/navigation';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Kuthakai - Peer-to-Peer Rental Marketplace",
  description: "Borrow what you need, lend what you love. India's most trusted peer-to-peer rental marketplace.",
  appleWebApp: {
    title: "Kuthakai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <div className="relative flex min-h-screen w-full flex-col">
          <DesktopNavbar />
          <MobileTopbar />
          
          <main className="flex-grow pb-24 lg:pb-8">
            {children}
          </main>

          <DesktopFooter />
          <MobileBottomNav />
        </div>
      </body>
    </html>
  );
}
