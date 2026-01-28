import { Link } from "react-router-dom";
import {
  Clock,
  MapPin,
  Phone,
  Mail,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground pt-16 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* About */}
          <div>
            <Link
              to="/"
              className="flex items-center gap-2 font-poppins font-bold text-xl text-white mb-5"
            >
              <Clock className="w-6 h-6 text-primary-accent" />
              Hourmaker
            </Link>
            <p className="text-footer-muted mb-5 text-sm leading-relaxed">
              Smart timesheets and workforce management for modern teams.
              Streamline your operations and boost productivity with our
              comprehensive platform.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-poppins font-semibold text-lg text-white mb-5">
              Product
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/documentation"
                  className="text-footer-muted hover:text-primary-accent transition-colors text-sm"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-footer-muted hover:text-primary-accent transition-colors text-sm"
                >
                  Pricing
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/resources#integrations"
                  className="text-footer-muted hover:text-primary-accent transition-colors text-sm"
                >
                  Integrations
                </Link>
              </li> */}
              <li>
                <Link
                  to="/resources#updates"
                  className="text-footer-muted hover:text-primary-accent transition-colors text-sm"
                >
                  Updates
                </Link>
              </li>
              <li>
                <Link
                  to="/documentation#api"
                  className="text-footer-muted hover:text-primary-accent transition-colors text-sm"
                >
                  API
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-poppins font-semibold text-lg text-white mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/company#about"
                  className="text-footer-muted hover:text-primary-accent transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/company#ekaggata"
                  className="text-footer-muted hover:text-primary-accent transition-colors text-sm"
                >
                  Ekaggata Tech
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/careers"
                  className="text-footer-muted hover:text-primary-accent transition-colors text-sm"
                >
                  Careers
                </Link>
              </li> */}
              <li>
                <Link
                  to="/company#contact"
                  className="text-footer-muted hover:text-primary-accent transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-footer-muted hover:text-primary-accent transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-footer-muted hover:text-primary-accent transition-colors text-sm"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-poppins font-semibold text-lg text-white mb-5">
              Contact Us
            </h4>
            <div className="space-y-4">
              <p className="flex items-start gap-3 text-footer-muted text-sm">
                <MapPin className="w-5 h-5 text-primary-accent flex-shrink-0 mt-0.5" />
                <span>
                  #45, 3rd Floor, Koramangala
                  <br />
                  Bangalore, Karnataka 560034
                </span>
              </p>
              <p className="flex items-center gap-3 text-footer-muted text-sm">
                <Phone className="w-5 h-5 text-primary-accent flex-shrink-0" />
                +91 (80) 1234-5678
              </p>
              <p className="flex items-center gap-3 text-footer-muted text-sm">
                <Mail className="w-5 h-5 text-primary-accent flex-shrink-0" />
                hello@hourmaker.in
              </p>
              <div className="flex gap-4 mt-5">
                <a
                  href="#"
                  className="text-footer-muted hover:text-primary-accent transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-footer-muted hover:text-primary-accent transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-footer-muted hover:text-primary-accent transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-footer-muted hover:text-primary-accent transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-footer-muted text-sm">
            © 2025 Hourmaker by Ekaggata Tech. All rights reserved. |{" "}
            <Link
              to="/privacy-policy"
              className="text-primary-accent hover:underline"
            >
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link to="/terms" className="text-primary-accent hover:underline">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
