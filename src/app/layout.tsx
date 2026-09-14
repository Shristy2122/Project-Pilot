import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ProjectPilot — Plan Smarter. Build Faster. Achieve Together.",
  description: "Modern AI-powered SaaS platform for project and task management.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 min-h-screen">
        {children}
      </body>
    </html>
  );
}
