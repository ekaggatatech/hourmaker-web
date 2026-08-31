import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import Layout from "../../components/layout/Layout";
import DemoModal from "../../components/DemoModal";
import { features } from "../../data/features";

const FeatureLayout = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Mobile Sidebar Toggle */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="lg:hidden fixed bottom-4 left-4 z-50 bg-primary text-white p-3 rounded-full shadow-lg"
        >
          {isSidebarOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>

        {/* Sidebar */}
        <aside
          className={`lg:w-80 bg-white border-r border-border p-6 fixed lg:sticky top-[72px] h-[calc(100vh-72px)] overflow-y-auto transition-transform duration-300 z-40 ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }`}
        >
          <h2 className="font-poppins text-xl font-bold text-primary-dark mb-6">
            All Features
          </h2>
          <nav className="space-y-2">
            {features.map((feature) => {
              const Icon = feature.icon;
              const isActive = location.pathname.includes(
                `/features/${feature.slug}`,
              );
              return (
                <Link
                  key={feature.id}
                  to={`/features/${feature.slug}`}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-primary-light text-foreground"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium text-sm">{feature.title}</span>
                  {isActive && <ArrowRight className="w-4 h-4 ml-auto" />}
                </Link>
              );
            })}
          </nav>

          {/* CTA in Sidebar */}
          <div className="mt-8 p-4 bg-primary-light rounded-xl">
            <h3 className="font-poppins font-semibold text-primary-dark mb-2">
              Need a Demo?
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              See how our features work together in a live demo.
            </p>
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="w-full py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary-dark transition-colors"
            >
              Request Demo
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-muted/30">
          <Outlet />
        </main>
      </div>

      <DemoModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </Layout>
  );
};

export default FeatureLayout;
