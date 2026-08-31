import { SITE_URL } from "./config/constants";
const generateSitemap = () => {
  const baseUrl = SITE_URL;

  const pages = [
    { path: "/", priority: "1.0", changefreq: "weekly" },
    { path: "/features", priority: "0.9", changefreq: "weekly" },
    { path: "/pricing", priority: "0.9", changefreq: "monthly" },
    { path: "/company", priority: "0.8", changefreq: "monthly" },
    { path: "/documentation", priority: "0.8", changefreq: "monthly" },
    { path: "/resources", priority: "0.8", changefreq: "weekly" },
    { path: "/careers", priority: "0.7", changefreq: "monthly" },
    { path: "/privacy-policy", priority: "0.5", changefreq: "yearly" },
    { path: "/terms", priority: "0.5", changefreq: "yearly" },
  ];

  // Feature pages
  const features = [
    "automatic-tracking",
    "manual-tracking",
    "attendance",
    "onboarding",
    "projects",
    "billing",
    "invoicing",
    "analytics",
    "holiday",
    "meeting-scheduling",
    "client-management",
    "user-management",
    "access-management",
    "docs-portal",
  ];

  const featurePages = features.map((feature) => ({
    path: `/features/${feature}`,
    priority: "0.8",
    changefreq: "monthly",
  }));

  // Blog posts
  const blogPosts = [
    "improve-employee-time-tracking-compliance",
    "workforce-management-trends-2025",
    "reduce-overtime-costs-scheduling-optimization",
    "remote-team-time-tracking-best-practices",
    "hr-compliance-automation-guide",
    "employee-onboarding-automation-roi",
  ];

  const blogPages = blogPosts.map((post) => ({
    path: `/blog/${post}`,
    priority: "0.7",
    changefreq: "monthly",
  }));

  const allPages = [...pages, ...featurePages, ...blogPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  return sitemap;
};

export default generateSitemap;
