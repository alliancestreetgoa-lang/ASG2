import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className={cn(
              "font-serif text-xl tracking-tight font-semibold transition-colors",
              isScrolled ? "text-foreground" : "text-foreground md:text-primary-foreground drop-shadow-md"
            )}>
              Alliance Street Group
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className={cn(
            "hidden md:flex items-center gap-8 text-sm font-medium tracking-wide",
            isScrolled ? "text-muted-foreground" : "text-primary-foreground/90 drop-shadow-md"
          )}>
            <a href="#about" className="hover:text-primary transition-colors uppercase">About</a>
            <a href="#entities" className="hover:text-primary transition-colors uppercase">Entities</a>
            <a href="#philosophy" className="hover:text-primary transition-colors uppercase">Philosophy</a>
            <a href="#contact" className="hover:text-primary transition-colors uppercase">Contact</a>
          </nav>

          <button
            className={cn(
              "md:hidden p-2",
              isScrolled ? "text-foreground" : "text-primary-foreground"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md pt-24 px-6">
          <nav className="flex flex-col gap-6 text-xl font-serif">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="border-b border-border pb-4">About</a>
            <a href="#entities" onClick={() => setMobileMenuOpen(false)} className="border-b border-border pb-4">Entities</a>
            <a href="#philosophy" onClick={() => setMobileMenuOpen(false)} className="border-b border-border pb-4">Philosophy</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="border-b border-border pb-4">Contact</a>
          </nav>
        </div>
      )}

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-primary text-primary-foreground pt-20 pb-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <h3 className="font-serif text-2xl mb-6 text-secondary">Alliance Street Group</h3>
              <p className="text-primary-foreground/70 mb-6 text-sm leading-relaxed">
                Everything Your Business Needs. Under One Roof. Where structure meets strategy, across every border.
              </p>
              <div className="text-sm text-primary-foreground/70 space-y-2">
                <p>+971 42 62 7928</p>
                <p>www.alliancestreet.ae</p>
                <p>Headquartered in Dubai, UAE</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-6 uppercase tracking-wider text-sm">Advisory & Finance</h4>
              <ul className="space-y-3 text-sm text-primary-foreground/70">
                <li><a href="#" className="hover:text-secondary transition-colors">Consultancy (Dubai)</a></li>
                <li><a href="http://www.alliancestreet.ae/banking" className="hover:text-secondary transition-colors">Financial Services</a></li>
                <li><a href="http://www.Vasillegal.com" className="hover:text-secondary transition-colors">Vasil & Partners (Slovakia)</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-6 uppercase tracking-wider text-sm">Accounting & Ops</h4>
              <ul className="space-y-3 text-sm text-primary-foreground/70">
                <li><a href="http://www.alliancestreet.ae/bookkeeping-accounting" className="hover:text-secondary transition-colors">Accounting & Bookkeeping (Dubai)</a></li>
                <li><a href="http://www.alliancestreetaccounting.com" className="hover:text-secondary transition-colors">Accountancy Ltd (UK)</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Accounting Pvt Ltd (India)</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-6 uppercase tracking-wider text-sm">Commodities & Logistics</h4>
              <ul className="space-y-3 text-sm text-primary-foreground/70">
                <li><a href="http://www.cargoconnections.ae" className="hover:text-secondary transition-colors">Cargo Connections</a></li>
                <li><a href="http://www.orryxcommodities.com" className="hover:text-secondary transition-colors">Orryx Commodities</a></li>
                <li><a href="http://www.alliancestreetfarms.com" className="hover:text-secondary transition-colors">Organic Farms (India)</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-primary-foreground/50">
            <p>&copy; {new Date().getFullYear()} Alliance Street Group. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <span>Dubai</span>
              <span>•</span>
              <span>London</span>
              <span>•</span>
              <span>Mumbai</span>
              <span>•</span>
              <span>Bratislava</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
