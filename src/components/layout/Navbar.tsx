import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

const navLinks = [
  { href: "/brand-campaign", label: "Brand & Campaign" },
  { href: "/design-collaterals", label: "Design Collaterals" },
  { href: "/logo-identity", label: "Logo & Identity" },
  { href: "/photography", label: "Photography" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass border-b border-border/50 py-4" : "py-6"
          }`}
      >
        <div className="container-full flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-70 transition-opacity"
          >
            <img
              src="/Essential Images/an-pictures-dark.svg"
              alt="Logo"
              className="h-8 w-auto dark:hidden"
            />
            <img
              src="/Essential Images/an-pictures-light.svg"
              alt="Logo"
              className="h-8 w-auto hidden dark:block"
            />
            <span className="text-lg font-semibold tracking-tight">Nildeep Jadav</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors link-underline ${isActive(link.href)
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
            {/* <Button
              asChild
              variant="outline"
              size="sm"
              className="border-foreground text-foreground hover:bg-foreground hover:text-background"
            >
              <a href="/CV_Nildeep_Jadav_2024.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </Button> */}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 -mr-2"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
}
