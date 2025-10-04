import { Link } from "react-router-dom";
import { Mail, Phone, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/ooloi-mascot.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-hero text-hero">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Cyber Safety Net" className="h-10 w-10" />
              <span className="font-bold text-xl">Cyber Safety Net</span>
            </div>
            <p className="text-hero/80 mb-4">
              Bringing clarity to the complexity of modern cybersecurity threats.
            </p>
            <div className="flex gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-smooth"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-hero/80 hover:text-accent transition-smooth">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/threat-brief" className="text-hero/80 hover:text-accent transition-smooth">
                  Threat Brief
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-hero/80 hover:text-accent transition-smooth">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-hero/80 hover:text-accent transition-smooth">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-hero/80">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:cybersafetynet@gmail.com" className="hover:text-accent transition-smooth">
                  cybersafetynet@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:7605754876" className="hover:text-accent transition-smooth">
                  760-575-4876
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-hero/20 pt-8 text-center text-hero/60 text-sm">
          <p>&copy; {currentYear} Cyber Safety Net. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
