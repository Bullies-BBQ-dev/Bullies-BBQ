import type { Metadata } from "next";
import { Inter, Permanent_Marker, Red_Rose } from "next/font/google";
import "./globals.css";
import { Footer, NavBar } from "./_components";

const inter = Inter({ subsets: ["latin"] });
const redRoseFont = Red_Rose({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Bullies BBQ | Barbecue in Hilton Head, Brisket, Ribs, Pulled Pork and more",
  description:
    "Bullies BBQ is in Hilton Head! We slow-smoke only the freshest, lean pork using a blend of hickory and mesquite woods. Our Bullies Ribs undergo up to 6 hours of smoking, while pork butt and briskets are smoked for up to 14 hours in our spacious smoker, guaranteeing unparalleled flavor and tenderness. Come savor the experience at Bullies BBQ today!",
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
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <NavBar redRoseFont={redRoseFont} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
