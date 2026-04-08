import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Información', href: '#about' },
    { name: 'Áreas de práctica', href: '#services' },
    { name: 'Contacto', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="container-legal">
        <nav className="flex items-center justify-between">
          <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('#hero'); }} className="flex items-center gap-3 group">
            <img src={isScrolled ? '/images/logo-dark.png' : '/images/logo.png'} alt="Cristopher González - Abogado y Procurador" className={`transition-all duration-300 ${isScrolled ? 'h-14' : 'h-16'}`} />
          </a>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className={`font-body text-sm font-medium underline-animation transition-colors duration-300 ${isScrolled ? 'text-foreground/70 hover:text-foreground' : 'text-primary-foreground/80 hover:text-primary-foreground'}`}>
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <a href="https://api.whatsapp.com/send/?phone=5493764327285&text=Hola!%20Necesito%20reservar%20un%20turno%20para%20consulta!&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer"
              className={`px-6 py-3 border font-body text-sm font-medium transition-all duration-300 ${isScrolled ? 'border-foreground text-foreground hover:bg-primary hover:text-primary-foreground' : 'border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground'}`}>
              Solicitar consulta
            </a>
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`lg:hidden p-2 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${isMobileMenuOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
          <div className="bg-background rounded-lg shadow-xl p-6 space-y-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="block font-body text-base text-foreground/70 hover:text-foreground transition-colors py-2">{link.name}</a>
            ))}
            <a href="https://api.whatsapp.com/send/?phone=5493764327285&text=Hola!%20Necesito%20reservar%20un%20turno%20para%20consulta!&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer"
              className="block w-full text-center px-6 py-3 border border-foreground text-foreground font-body text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 mt-4">
              Solicitar consulta
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
