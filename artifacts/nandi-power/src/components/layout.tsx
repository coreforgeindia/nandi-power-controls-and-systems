import { Link, useLocation } from "wouter";
import { companyInfo } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Building2, Package, Images, MapPin, Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";
// @ts-ignore
import logoUrl from "@assets/Screenshot_2026-07-08_163442_1783508724749.png";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/", icon: <Home size={16} className="mr-1.5" /> },
    { label: "About Us", href: "/about", icon: <Building2 size={16} className="mr-1.5" /> },
    { label: "Products & Services", href: "/products", icon: <Package size={16} className="mr-1.5" /> },
    { label: "Gallery", href: "/gallery", icon: <Images size={16} className="mr-1.5" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/30">
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm py-3" : "bg-white py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src={logoUrl} alt={companyInfo.name} className="h-10 w-10 object-contain" />
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight tracking-tight text-foreground">
                NANDI POWER
              </span>
              <span className="text-[10px] font-semibold text-primary uppercase tracking-widest">
                {companyInfo.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-md shadow-primary/20">
                Request Quote
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-border shadow-lg py-4 px-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center text-base font-medium text-foreground py-3 border-b border-border/50"
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold mt-4 h-12">
                Request Quote
              </Button>
            </Link>
          </div>
        )}
      </header>

      <main className="flex-1 pt-[80px] lg:pt-[96px]">{children}</main>

      <footer className="bg-zinc-950 text-white py-16 border-t-[6px] border-primary">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 bg-white p-4 rounded-lg w-max">
              <img src={logoUrl} alt={companyInfo.name} className="h-12 w-12 object-contain" />
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight tracking-tight text-zinc-900">
                  NANDI POWER
                </span>
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                  {companyInfo.tagline}
                </span>
              </div>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              An ISO 9001:2015 certified manufacturer of high-quality Power Distribution Transformers and Special Purpose Machines.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white tracking-wide">Quick Links</h4>
            <ul className="space-y-3 text-zinc-400 text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors flex items-center"><Building2 size={14} className="mr-2"/> About Us</Link></li>
              <li><Link href="/products" className="hover:text-primary transition-colors flex items-center"><Package size={14} className="mr-2"/> Products & Services</Link></li>
              <li><Link href="/gallery" className="hover:text-primary transition-colors flex items-center"><Images size={14} className="mr-2"/> Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors flex items-center"><Phone size={14} className="mr-2"/> Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white tracking-wide">Contact Us</h4>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li className="flex gap-3">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={18} />
                <span>{companyInfo.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-primary mt-1 flex-shrink-0" size={18} />
                <span className="flex flex-col">
                  {companyInfo.phones.map(p => <span key={p}>{p}</span>)}
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="text-primary mt-1 flex-shrink-0" size={18} />
                <span>{companyInfo.email}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white tracking-wide">Certifications</h4>
            <div className="flex flex-wrap gap-3">
              {companyInfo.certifications.map(cert => (
                <div key={cert} className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-md text-sm font-semibold text-zinc-300">
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 mt-16 pt-8 border-t border-zinc-800 text-center text-zinc-500 text-sm">
          &copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
