import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import AppProviders from '@/components/layout/AppProviders'; // For loading animation
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';

export const metadata: Metadata = {
  title: 'Rally Point | Ideas Worth Rallying Around',
  description: 'Rally Point is a strategic branding agency specializing in creating Ideas Worth Rallying Around® for innovative tech companies.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Belleza&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <AppProviders>
          <div className="relative">
            <a 
              href="#main" 
              className="absolute left-1/2 -translate-x-1/2 -translate-y-full focus:translate-y-4 z-[9999] bg-primary text-primary-foreground px-4 py-2 rounded-md transition-transform duration-300"
            >
              Skip to main content
            </a>
          </div>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
          <Toaster />
        </AppProviders>
      </body>
    </html>
  );
}
