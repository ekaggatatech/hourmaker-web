import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import PricingPage from "./pages/PricingPage.jsx";
import CompanyPage from "./pages/CompanyPage.jsx";
import DocumentationPage from "./pages/DocumentationPage.jsx";
import ResourcesPage from "./pages/ResourcesPage.jsx";
import CareersPage from "./pages/CareersPage.jsx";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage.jsx";
import TermsPage from "./pages/TermsPage.jsx";
import BlogPostPage from "./pages/BlogPostPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

// Feature Pages
import FeatureOverview from "./pages/features/FeatureOverview.jsx";
import FeatureDetail from "./pages/features/FeatureDetail.jsx";

//SEO
import generateSitemap from "./sitemap";

const queryClient = new QueryClient();
const Sitemap = () => {
  const sitemap = generateSitemap();
  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/company" element={<CompanyPage />} />

          {/* Feature Routes */}
          <Route path="/features" element={<FeatureOverview />} />
          <Route path="/features/:slug" element={<FeatureDetail />} />

          <Route path="/documentation" element={<DocumentationPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="*" element={<NotFound />} />
          {/*Site Map*/}
          <Route path="/sitemap.xml" element={<Sitemap />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
