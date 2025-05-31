"use client";

import Link from 'next/link';
import { Menu, X, Code } from 'lucide-react'; // Replaced FlagIcon with Code
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from 'react';

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Portfolio" }, // Changed "Work" to "Portfolio"
  { href: "/#method", label: "Process" }, // Changed "Method" to "Process"
  { 
    label: "Resources",  // Changed "Learn" to "Resources"
    isDropdown: true,
    dropdownItems: [
      { href: "/#blog", label: "Blog" }, // Kept blog
      // { href: "/#press", label: "Press" }, // Removed Press, less relevant for individual
      // { href: "/#book", label: "Our Book" }, // Removed Book
      // { href: "/#speaking", label: "Speaking" }, // Removed Speaking
    ]
  },
  { href: "/#about", label: "About Me" }, // Changed "About" to "About Me"
  { href: "/#testimonials", label: "Testimonials" }, // Changed "Clients" to "Testimonials"
];

export default function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Code className="h-6 w-6 text-primary" /> {/* Changed Icon */}
          <span className="font-bold font-headline text-xl text-primary">Saif Khan</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) =>
            link.isDropdown && link.dropdownItems ? (
              <DropdownMenu key={link.label}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-foreground hover:text-primary px-3">
                    {link.label}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {link.dropdownItems.map((item) => (
                    <DropdownMenuItem key={item.label} asChild>
                      <Link href={item.href}>{item.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="text-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            )
          )}
          <Button asChild size="sm">
            <Link href="/#contact">Contact</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
              <div className="flex justify-between items-center mb-6">
                <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <Code className="h-6 w-6 text-primary" /> {/* Changed Icon */}
                  <span className="font-bold font-headline text-xl text-primary">Saif Khan</span>
                </Link>
                <SheetClose asChild>
                   <Button variant="ghost" size="icon">
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) =>
                  link.isDropdown && link.dropdownItems ? (
                    <div key={link.label}>
                      <p className="font-medium text-foreground mb-2">{link.label}</p>
                      {link.dropdownItems.map((item) => (
                         <Link
                          key={item.label}
                          href={item.href}
                          className="block py-2 text-muted-foreground hover:text-primary"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="py-2 text-lg font-medium text-foreground hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )
                )}
                <Button asChild className="w-full mt-4">
                  <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
