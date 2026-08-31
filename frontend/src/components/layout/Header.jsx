import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import BookDemoModal from "../BookDemoModal";

// Features organized by categories - Updated with correct slugs from features.js
const featureCategories = [
  {
    name: "Time Tracking",
    items: [
      { label: "Auto Time Tracking", href: "/features/automatic-tracking" },
      { label: "Manual Time Tracking", href: "/features/manual-tracking" },
      { label: "Activity Tracking", href: "/features/activity-management" },
    ],
  },
  {
    name: "HR & People",
    items: [
      { label: "Team Management", href: "/features/team-management" },
      { label: "Leave & Attendance", href: "/features/leave-management" },
      { label: "Shift Management", href: "/features/shift-management" },
      { label: "Holiday Management", href: "/features/holiday-management" },
      { label: "Referral Management", href: "/features/referral-management" },
      { label: "Employee Onboarding", href: "/features/onboarding-management" },
    ],
  },
  {
    name: "Project & Billing",
    items: [
      { label: "Client Management", href: "/features/client-management" },
      { label: "Project Management", href: "/features/project-management" },
      { label: "Announcements", href: "/features/communication-announcement" },
      { label: "Invoice Generation", href: "/features/invoicing" },
      { label: "Billing Dashboard", href: "/features/billing-management" },
    ],
  },
  {
    name: "Collaboration",
    items: [
      { label: "Meeting Scheduling", href: "/features/meeting-management" },
      { label: "Docs Portal", href: "/features/document-management" },
    ],
  },
  {
    name: "Administration",
    items: [
      { label: "User Management", href: "/features/user-management" },
      {
        label: "Access & Role Management",
        href: "/features/permission-management",
      },
      { label: "Reporting & Analytics", href: "/features/reporting-analytics" },
      { label: "Role Management", href: "/features/role-management" },
      { label: "Company Management", href: "/features/company-management" },
    ],
  },
];

// Flatten for mobile dropdown and active detection
const allFeatures = featureCategories.flatMap((category) => category.items);

const companyDropdown = [
  { label: "About Us", href: "/company" },
  { label: "Contact Us", href: "/company#contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
];

const resourcesDropdown = [
  { label: "Blog", href: "/resources" },
  { label: "Help Center", href: "/resources#help" },
  { label: "Case Studies", href: "/resources#case-studies" },
  { label: "Demo Videos", href: "/resources#webinars" },
];

const NavItem = ({
  label,
  href,
  dropdown,
  isActive,
  categories,
  lightOnDark,
}) => {
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

  const idleClass = lightOnDark
    ? "text-slate-300 hover:text-white"
    : "text-muted-foreground hover:text-primary";
  const activeClass = lightOnDark ? "text-white" : "text-primary";

  if (dropdown) {
    return (
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center gap-1 font-poppins font-semibold text-base py-2.5 transition-colors duration-300 ${
            isActive ? activeClass : idleClass
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
        isActive ? activeClass : idleClass
      }`}
    >
      {label}
    </Link>
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

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookDemoModalOpen, setIsBookDemoModalOpen] = useState(false);
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
    setIsScrolled(window.scrollY > 50);
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
          isScrolled ? "bg-white/80 shadow-lg" : "bg-footer shadow-sm"
        }`}
      >
        <div className="container flex justify-between items-center">
          <Link
            to="/"
            className={`flex items-center gap-2 font-poppins text-2xl transition-colors duration-300 ${
              isScrolled ? "text-primary-dark" : "text-white"
            }`}
          >
            {/* Logo image - 512x512 resized to 32x32 */}
            <img
              src="/src/assets/icon.png"
              alt="HourMaker Logo"
              className="w-10 h-10 object-contain"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            HourMaker
          </Link>

          {/* Mobile Toggle */}
          <button
            className={`lg:hidden p-2 transition-colors duration-300 ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
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
              lightOnDark={!isScrolled}
              isActive={
                isActiveDropdown(allFeatures) ||
                location.pathname === "/features"
              }
            />
            <NavItem
              label="Pricing"
              href="/pricing"
              lightOnDark={!isScrolled}
              isActive={isActiveRoute("/pricing")}
            />
            <NavItem
              label="Company"
              dropdown={companyDropdown}
              lightOnDark={!isScrolled}
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
              lightOnDark={!isScrolled}
              isActive={isActiveRoute("/resources")}
            />
            <button
              onClick={() => setIsBookDemoModalOpen(true)}
              className="ml-4 px-6 py-2 bg-primary text-primary-foreground font-poppins font-semibold rounded-xl transition-all duration-300 hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-button"
            >
              Book a Demo
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
                  setIsBookDemoModalOpen(true);
                }}
                className="mt-4 px-6 py-3 bg-primary text-primary-foreground font-poppins font-semibold rounded-xl"
              >
                Book a Demo
              </button>
            </div>
          </nav>
        </div>
      </header>

      <BookDemoModal
        open={isBookDemoModalOpen}
        onOpenChange={setIsBookDemoModalOpen}
      />
    </>
  );
};

export default Header;
