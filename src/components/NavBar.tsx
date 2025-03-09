
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com', icon: <Github size={18} /> },
    { name: 'LinkedIn', href: 'https://linkedin.com/in', icon: <Linkedin size={18} /> },
    { name: 'Email', href: 'mailto:aryalpujan@gmail.com', icon: <Mail size={18} /> },
    { name: 'Resume', href: '#', icon: <FileText size={18} /> },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-xl font-bold text-gradient"
          >
            Pujan Aryal
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm rounded-md hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <div className="h-6 mx-1 border-l border-white/20" />
            
            <div className="flex items-center space-x-1">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-secondary hover:bg-primary transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:text-primary"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-black/95 border-b border-white/10",
          isOpen ? "max-h-screen" : "max-h-0"
        )}
      >
        <div className="p-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-2 rounded-md hover:bg-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          
          <div className="border-t border-white/10 pt-3 flex flex-wrap gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-secondary hover:bg-primary transition-colors text-sm"
                aria-label={link.name}
              >
                {link.icon} {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
