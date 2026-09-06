import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jamil Azeez - Cloud Engineer & Full-stack Developer",
  description: "Portfolio showcasing cloud infrastructure, AI products, and full-stack development projects. AWS, Terraform, CI/CD, and more.",
  openGraph: {
    title: "Jamil Azeez - Cloud Engineer & Full-stack Developer",
    description: "Portfolio showcasing cloud infrastructure, AI products, and full-stack development projects.",
    url: "https://jamil-portfolio.vercel.app",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
