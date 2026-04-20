import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "../../components/layout/Layout";
import { features } from "../../data/features";
import DemoModal from "../../components/DemoModal";

const FeatureOverview = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <Layout>
      <div className="py-16 bg-white">
        <div className="container max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark mb-4">
              Powerful Features for Modern Teams
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Everything you need to manage your workforce efficiently in one
              integrated platform
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={feature.id}
                  to={`/features/${feature.slug}`}
                  className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border/50 hover:border-primary/30"
                >
                  <div className="feature-icon mb-6">
                    <Icon />
                  </div>
                  <h2 className="font-poppins text-xl font-semibold text-primary-dark mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-4">
                    {feature.shortDescription}
                  </p>

                  {/* Quick benefits preview */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {feature.benefits.slice(0, 2).map((benefit, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-primary-light text-primary px-2 py-1 rounded-full"
                      >
                        {benefit.title}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-primary font-semibold text-sm">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-20 cta-gradient rounded-2xl p-12 text-white text-center">
            <h2 className="font-poppins text-3xl font-bold mb-4">
              Ready to Transform Your Workforce Management?
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Join 27,500+ companies already using Hourmaker
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-primary-light transition-colors"
              >
                Request Demo
              </button>
              <Link
                to="/pricing"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>

        <DemoModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
      </div>
    </Layout>
  );
};

export default FeatureOverview;
