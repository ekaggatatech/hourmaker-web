import React, { useState, useEffect, useRef } from "react";
import { href, Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import DemoModal from "../DemoModal";

// Features organized by categories
const featureCategories = [
  {
    name: "Time Tracking",
    items: [
      { label: "Auto Time Tracking", href: "/features/automatic-tracking" },
      { label: "Manual Time Tracking", href: "/features/manual-tracking" },
    ],
  },
  {
    name: "HR & People",
    items: [
      { label: "Leave & Attendance", href: "/features/attendance" },
      { label: "Onboarding & Recruitment", href: "/features/onboarding" },
      { label: "Holiday Management", href: "/features/holiday" },
    ],
  },
  {
    name: "Project & Billing",
    items: [
      { label: "Project Tracking", href: "/features/projects" },
      { label: "Billing Management", href: "/features/billing" },
      { label: "Client Management", href: "/features/client-management" },
      { label: "Invoicing", href: "/features/invoicing" },
    ],
  },
  {
    name: "Collaboration",
    items: [
      { label: "Meeting Scheduling", href: "/features/meeting-scheduling" },
      { label: "Docs Portal", href: "/features/docs-portal" },
    ],
  },
  {
    name: "Administration",
    items: [
      { label: "User Management", href: "/features/user-management" },
      {
        label: "Access & Role Management",
        href: "/features/access-management",
      },
      { label: "Reporting & Analytics", href: "/features/analytics" },
    ],
  },
];

// Flatten for mobile dropdown and active detection
const allFeatures = featureCategories.flatMap((category) => category.items);

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

const NavItem = ({ label, href, dropdown, isActive, categories }) => {
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

        {/* Dropdown with consistent styling */}
        <div
          className={`absolute top-full left-0 bg-white rounded-xl shadow-lg z-[100] transition-all duration-300 overflow-hidden ${
            isOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible translate-y-2.5"
          } ${categories ? "min-w-[600px]" : "min-w-[220px]"}`}
        >
          {categories ? (
            /* Features Dropdown - Multi-column with categories */
            <div className="p-6">
              <div className="grid grid-cols-3 gap-6">
                {categories.map((category, idx) => (
                  <div key={idx}>
                    <h3 className="text-xs font-semibold text-primary-dark uppercase tracking-wider mb-3">
                      {category.name}
                    </h3>
                    <ul className="space-y-2">
                      {category.items.map((item) => (
                        <li key={item.label}>
                          <Link
                            to={item.href}
                            className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* View All Link */}
              <div className="mt-4 pt-4 border-t border-border">
                <Link
                  to="/features"
                  className="text-sm text-primary font-medium hover:underline"
                  onClick={() => setIsOpen(false)}
                >
                  View all features →
                </Link>
              </div>
            </div>
          ) : (
            /* Regular Dropdown for Company/Resources - Consistent styling */
            <div className="py-2">
              {dropdown.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block px-6 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-primary-light transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
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
            className="flex items-center gap-2 font-poppins text-2xl text-primary-dark"
          >
            {/* Logo image - 512x512 resized to 32x32 */}
            <img
              src="/src/assets/icon.png"
              alt="HourMaker Logo"
              className="w-10 h-10 object-contain"
            />
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
              dropdown={allFeatures}
              categories={featureCategories}
              isActive={
                isActiveDropdown(allFeatures) ||
                location.pathname === "/features"
              }
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
              href="/resources"
              isActive={isActiveRoute("/resources")}
            />
            {/* <NavItem
              label="Resources"
              dropdown={resourcesDropdown}
              isActive={isActiveDropdown(resourcesDropdown)}
            /> */}
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
              <MobileDropdown label="Features" items={allFeatures} />
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
