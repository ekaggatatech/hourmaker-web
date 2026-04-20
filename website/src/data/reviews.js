// Testimonials data
export const reviews = [
  {
    id: 1,
    initials: "AK",
    name: "Anjali Kumar",
    role: "CTO, TechNova Solutions",
    rating: 5,
    content:
      "Hourmaker has transformed how we manage our distributed team of 200+ engineers. Time tracking accuracy improved by 95% and administrative workload decreased by 70%.",
    company: "TechNova Solutions • 500+ employees",
  },
  {
    id: 2,
    initials: "RS",
    name: "Rajesh Sharma",
    role: "Operations Director, Global BPO Inc.",
    rating: 4.5,
    content:
      "Switching to Hourmaker saved us 1200+ hours monthly in administrative work. The scheduling features alone have optimized our shift planning, reducing overtime costs by 35%.",
    company: "Global BPO Inc. • 1200+ employees",
  },
  {
    id: 3,
    initials: "PS",
    name: "Priya Singh",
    role: "HR Head, GrowthStart Ventures",
    rating: 5,
    content:
      "The onboarding and leave management features have streamlined our HR processes dramatically. What used to take days now happens in hours.",
    company: "GrowthStart Ventures • 300+ employees",
  },
  {
    id: 4,
    initials: "AM",
    name: "Arjun Mehta",
    role: "CEO, DesignStudio India",
    rating: 5,
    content:
      "Hourmaker's intuitive interface made adoption effortless. Our team was up and running in days, not weeks. The reporting features give us insights we never had before.",
    company: "DesignStudio India • 50+ employees",
  },
  {
    id: 5,
    initials: "NK",
    name: "Neha Kapoor",
    role: "Finance Director, RetailChain India",
    rating: 5,
    content:
      "The billing and invoicing integration saved us countless hours. We've reduced our month-end closing time from 5 days to just 1 day. Absolutely game-changing.",
    company: "RetailChain India • 3000+ employees",
  },
  {
    id: 6,
    initials: "VP",
    name: "Vikram Patel",
    role: "Product Manager, InnovaTech",
    rating: 4.5,
    content:
      "Project tracking has never been easier. I can see exactly where my team's time is going and make adjustments in real-time. Highly recommended.",
    company: "InnovaTech • 150+ employees",
  },
  {
    id: 7,
    initials: "SD",
    name: "Shreya Desai",
    role: "HR Director, HealthFirst Hospitals",
    rating: 5,
    content:
      "Leave management used to be a nightmare. Now it's completely automated. Our employees love the self-service portal and managers love the easy approvals.",
    company: "HealthFirst Hospitals • 800+ employees",
  },
  {
    id: 8,
    initials: "RJ",
    name: "Rahul Jain",
    role: "Founder, StartupHub",
    rating: 5,
    content:
      "As a startup, we needed something affordable but powerful. Hourmaker delivered both. It scales with us and the support team is always there when we need them.",
    company: "StartupHub • 25+ employees",
  },
  {
    id: 9,
    initials: "PM",
    name: "Pooja Mishra",
    role: "Operations Lead, EcomExpress",
    rating: 4.5,
    content:
      "The mobile app is fantastic for our field staff. They can clock in/out from anywhere, and I get real-time visibility into attendance. Worth every rupee.",
    company: "EcomExpress • 450+ employees",
  },
  {
    id: 10,
    initials: "AK",
    name: "Amit Khurana",
    role: "IT Director, FinCorp India",
    rating: 5,
    content:
      "Security was our biggest concern. Hourmaker's enterprise-grade security and compliance features gave us the confidence to move forward. Implementation was smooth.",
    company: "FinCorp India • 1000+ employees",
  },
];

// Helper function to get random testimonials
export const getRandomReviews = (count = 3) => {
  const shuffled = [...reviews].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
