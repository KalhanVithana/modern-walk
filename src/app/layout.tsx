import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inter',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
});
export const metadata: Metadata = {
  title: "Modern walk",
  description: "Latest modern cloths",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter .variable} ${roboto.variable} antialiased bg-light-gray`}
      >
        <Header />
      <div className="mx-4 sm:mx-8 md:mx-[100px] lg:mx-[140px]"> {children}</div>
      </body>
    </html>
  );
}
