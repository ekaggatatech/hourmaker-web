import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Clock, ChevronDown, Menu, X } from "lucide-react";
import DemoModal from "../DemoModal";

const featuresDropdown = [
  { label: "Timesheet Management", href: "/documentation" },
  // { label: "Staff Scheduling", href: "/documentation#scheduling" },
  { label: "Leave/Attendance Management", href: "/documentation#attendance" },
  { label: "Approval Workflow", href: "/documentation#workflow" },
  { label: "Project Tracking", href: "/documentation#projects" },
  { label: "Onboarding/Recruitment", href: "/documentation#onboarding" },
  { label: "Reporting & Analytics", href: "/documentation#analytics" },
];

const companyDropdown = [
  { label: "About Us", href: "/company" },
  // { label: "Ekaggata Tech", href: "/company#ekaggata" },
  // { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/company#contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
];

const resourcesDropdown = [
  { label: "Blog", href: "/resources" },
  { label: "Help Center", href: "/resources#help" },
  { label: "Case Studies", href: "/resources#case-studies" },
  { label: "Demo Videos", href: "/resources#webinars" },
  // { label: "Documentation", href: "/documentation" },
];

const NavItem = ({ label, href, dropdown, isActive }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (dropdown) {
    return (
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center gap-1 font-poppins font-semibold text-base py-2.5 transition-colors duration-300 ${
            isActive
              ? "text-primary"
              : "text-muted-foreground hover:text-primary"
          }`}
        >
          {label}
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
        <div
          className={`absolute top-full left-0 min-w-[220px] bg-white rounded-xl shadow-lg z-[100] transition-all duration-300 ${
            isOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible translate-y-2.5"
          }`}
        >
          {dropdown.map((item, index) => (
            <Link
              key={item.label}
              to={item.href}
              className={`block px-6 py-3 text-foreground transition-all duration-200 hover:bg-primary-light hover:text-primary hover:pl-6 ${
                index !== dropdown.length - 1 ? "border-b border-border" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <Link
      to={href || "/"}
      className={`font-poppins font-semibold text-base py-2 transition-colors duration-300 ${
        isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
      }`}
    >
      {label}
    </Link>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActiveRoute = (path) => location.pathname === path;
  const isActiveDropdown = (items) =>
    items.some((item) => {
      const basePath = item.href.split("#")[0];
      return basePath && location.pathname === basePath;
    });

  return (
    <>
      <header
        className={`sticky top-0 z-50 py-4 backdrop-blur-lg transition-all duration-300 ${
          isScrolled ? "bg-white/95 shadow-lg" : "bg-white/85 shadow-sm"
        }`}
      >
        <div className="container flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center gap-2 font-poppins font-bold text-2xl text-primary-dark"
          >
            <Clock className="w-8 h-8 text-primary" />
            HourMaker
          </Link>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavItem
              label="Features"
              dropdown={featuresDropdown}
              isActive={isActiveDropdown(featuresDropdown)}
            />
            <NavItem
              label="Pricing"
              href="/pricing"
              isActive={isActiveRoute("/pricing")}
            />
            <NavItem
              label="Company"
              dropdown={companyDropdown}
              isActive={
                isActiveDropdown(companyDropdown) ||
                isActiveRoute("/careers") ||
                isActiveRoute("/privacy-policy") ||
                isActiveRoute("/terms")
              }
            />
            <NavItem
              label="Resources"
              dropdown={resourcesDropdown}
              isActive={isActiveDropdown(resourcesDropdown)}
            />
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="ml-4 px-6 py-3 bg-primary text-primary-foreground font-poppins font-semibold rounded-xl transition-all duration-300 hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-button"
            >
              Request a Demo
            </button>
          </nav>

          {/* Mobile Navigation */}
          <nav
            className={`lg:hidden fixed top-[72px] left-0 w-full max-h-[calc(100vh-72px)] overflow-y-auto bg-white shadow-lg transition-all duration-300 z-50 ${
              isMobileMenuOpen
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible -translate-y-4"
            }`}
          >
            <div className="flex flex-col items-center py-6 gap-4">
              <MobileNavItem
                label="Home"
                href="/"
                isActive={isActiveRoute("/")}
              />
              <MobileDropdown label="Features" items={featuresDropdown} />
              <MobileNavItem
                label="Pricing"
                href="/pricing"
                isActive={isActiveRoute("/pricing")}
              />
              <MobileDropdown label="Company" items={companyDropdown} />
              <MobileDropdown label="Resources" items={resourcesDropdown} />
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsDemoModalOpen(true);
                }}
                className="mt-4 px-6 py-3 bg-primary text-primary-foreground font-poppins font-semibold rounded-xl"
              >
                Request a Demo
              </button>
            </div>
          </nav>
        </div>
      </header>

      <DemoModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </>
  );
};

const MobileNavItem = ({ label, href, isActive }) => (
  <Link
    to={href}
    className={`font-poppins font-semibold text-lg ${isActive ? "text-primary" : "text-foreground"}`}
  >
    {label}
  </Link>
);

const MobileDropdown = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full text-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center gap-1 font-poppins font-semibold text-lg text-foreground mx-auto"
      >
        {label}
        <ChevronDown
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 mt-2" : "max-h-0"
        }`}
      >
        <div className="bg-muted rounded-xl mx-4 py-2">
          {items.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="block py-2 px-4 text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
