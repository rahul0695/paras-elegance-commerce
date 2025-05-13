
import { useState, useEffect } from "react";
import { ShoppingCart, Search, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { title: "Home", href: "#" },
    { title: "Living Room", href: "#living-room" },
    { title: "Bedroom", href: "#bedroom" },
    { title: "Dining", href: "#dining" },
    { title: "Office", href: "#office" },
    { title: "Appliances", href: "#appliances" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-navy text-cream py-3 shadow-lg" 
          : "bg-transparent text-navy py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="mr-10">
              <h1 className={cn(
                "font-serif text-2xl font-bold tracking-tight transition-all",
                isScrolled ? "text-cream" : "text-navy"
              )}>
                PARAS
              </h1>
            </a>
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                {navLinks.map((link) => (
                  <li key={link.title}>
                    <a 
                      href={link.href} 
                      className={cn(
                        "font-medium gold-border-hover",
                        isScrolled ? "text-cream hover:border-gold-light" : "text-navy hover:border-gold"
                      )}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button className={cn("hover:text-gold transition-colors", isScrolled && "text-cream")}>
              <Search size={20} />
            </button>
            <button className={cn("hover:text-gold transition-colors", isScrolled && "text-cream")}>
              <User size={20} />
            </button>
            <button className={cn("hover:text-gold transition-colors", isScrolled && "text-cream")}>
              <ShoppingCart size={20} />
            </button>
          </div>

          <button 
            className="md:hidden" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className={isScrolled ? "text-cream" : "text-navy"} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-navy text-cream py-4 animate-fade-in">
          <div className="container mx-auto px-4">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <a 
                    href={link.href} 
                    className="block py-2 font-medium hover:text-gold transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
              <li className="pt-4 border-t border-gray-700">
                <div className="flex space-x-6 py-2">
                  <button className="hover:text-gold transition-colors">
                    <Search size={20} />
                  </button>
                  <button className="hover:text-gold transition-colors">
                    <User size={20} />
                  </button>
                  <button className="hover:text-gold transition-colors">
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
