import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const getCrumbName = (path) => {
    const names = {
      "": "Home",
      features: "Features",
      pricing: "Pricing",
      company: "Company",
      resources: "Resources",
      documentation: "Documentation",
      careers: "Careers",
      "privacy-policy": "Privacy Policy",
      terms: "Terms of Service",
    };
    return names[path] || path.replace(/-/g, " ");
  };

  if (pathnames.length === 0) return null;

  return (
    <nav className="container py-4 text-sm" aria-label="Breadcrumb">
      <ol className="flex items-center flex-wrap gap-2">
        <li>
          <Link
            to="/"
            className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
          >
            <Home className="w-4 h-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={name} className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              {isLast ? (
                <span className="text-foreground font-medium capitalize">
                  {getCrumbName(name)}
                </span>
              ) : (
                <Link
                  to={routeTo}
                  className="text-muted-foreground hover:text-primary transition-colors capitalize"
                >
                  {getCrumbName(name)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
