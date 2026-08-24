import type { Metadata } from "next";
import { Montserrat, Passions_Conflict, Caveat } from "next/font/google";
import ServiceWorkerRegister from "../components/pwa/ServiceWorkerRegister";
import "./globals.css";

const passionsConflict = Passions_Conflict({
  variable: "--font-passions-conflict",
  subsets: ["latin"],
  weight: "400",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "May Portfolio",
  description: "May's personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${passionsConflict.variable} ${montserrat.variable} ${caveat.variable}`}
      >
        <ServiceWorkerRegister />

        {children}
      </body>
    </html>
  );
}