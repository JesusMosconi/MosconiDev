import type { Metadata } from "next";
import { Epilogue, Manrope } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MosconiDev | Software Engineer",
  description: "Portafolio de desarrollo de software full-stack.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${epilogue.variable} ${manrope.variable} bg-obsidian font-sans text-on-surface antialiased`}>
        {children}
      </body>
    </html>
  );
}
