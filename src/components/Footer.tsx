import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-deep text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <span className="grid place-items-center w-10 h-10 bg-secondary text-secondary-foreground font-serif text-lg">
                U
              </span>
              <span className="font-serif text-2xl">UVT Group Ltd</span>
            </div>
            <p className="text-sm text-primary-foreground/70 max-w-sm leading-relaxed">
              Your trusted partner for premium meat and dairy.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Products</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-5">Contact Information</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-secondary mt-0.5 shrink-0" />
                <a href="mailto:uvtgroup.ltd@gmail.com" className="hover:text-primary-foreground transition-colors">
                  uvtgroup.ltd@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-secondary mt-0.5 shrink-0" />
                <span>
                  <span className="block text-primary-foreground/50 text-xs mb-1">Registered office address</span>
                  128 City Road, London, United Kingdom, EC1V 2NX
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/15 mt-12 pt-8 flex flex-col sm:flex-row gap-2 justify-between text-xs text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} UVT Group Ltd. All rights reserved.</p>
          <p>Established in 2024 · London, UK</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
