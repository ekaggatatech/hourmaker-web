import { Link } from "react-router-dom";
import {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">
          {/* About - Clean and Professional */}
          <div>
            <Link
              to="/"
              className="flex items-center gap-2 font-poppins text-2xl text-white mb-5"
            >
              <img
                src="/src/assets/icon.png"
                alt="HourMaker Logo"
                className="w-10 h-10 object-contain"
              />
              Hourmaker
            </Link>
            <p className="text-footer-muted text-sm leading-relaxed">
              Trusted by companies for intelligent workforce management.
              Automate time tracking, streamline operations, and boost
              productivity.
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
                  to="/features"
                  className="text-footer-muted hover:text-primary-accent transition-colors text-sm"
                >
                  All Features
                </Link>
              </li>
              <li>
                <Link
                  to="/features/automatic-tracking"
                  className="text-footer-muted hover:text-primary-accent transition-colors text-sm"
                >
                  Auto Time Tracking
                </Link>
              </li>
              <li>
                <Link
                  to="/features/attendance"
                  className="text-footer-muted hover:text-primary-accent transition-colors text-sm"
                >
                  Attendance System
                </Link>
              </li>
              <li>
                <Link
                  to="/features/onboarding"
                  className="text-footer-muted hover:text-primary-accent transition-colors text-sm"
                >
                  Candidate Onboarding
                </Link>
              </li>
              <li>
                <Link
                  to="/features/projects"
                  className="text-footer-muted hover:text-primary-accent transition-colors text-sm"
                >
                  Project Tracking
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
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-poppins font-semibold text-lg text-white mb-5">
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/resources#blog"
                  className="text-footer-muted hover:text-primary-accent transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/documentation"
                  className="text-footer-muted hover:text-primary-accent transition-colors text-sm"
                >
                  Documentation
                </Link>
              </li> */}
              <li>
                <Link
                  to="/resources#help"
                  className="text-footer-muted hover:text-primary-accent transition-colors text-sm"
                >
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
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
              {/* <li>
                <Link
                  to="/company#ekaggata"
                  className="text-footer-muted hover:text-primary-accent transition-colors text-sm"
                >
                  Ekaggata Tech
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
