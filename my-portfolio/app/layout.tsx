import type { Metadata } from "next";
import "./index.css";
import { Navbar } from "./components/Navbar";
import { Inter } from "next/font/google";
import { cn } from "./lip/utils"; // assuming you have this util, or remove if not needed

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Welcome to my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          "bg-gradient-to-br from-gray-50/50 via-white to-gray-50/50 dark:from-slate-950 dark:via-slate-900/95 dark:to-slate-950",
          "min-h-screen antialiased transition-colors duration-500",
          inter.className
        )}
      >
        {/* Subtle magical background overlay - only visible in dark mode for a mystical glow */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary-600/20 dark:bg-primary-500/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-600/20 dark:bg-indigo-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-600/10 dark:bg-purple-500/20 rounded-full blur-3xl animate-ping duration-10000" />
        </div>

        <Navbar />

        <main className="relative pt-16 lg:pt-24 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}