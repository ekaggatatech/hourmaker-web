import { useState } from "react";

import { Link } from "react-router-dom";

import { ArrowRight } from "lucide-react";

import Layout from "../../components/layout/Layout";

import { features } from "../../data/features";

import DemoModal from "../../components/DemoModal";

import ScrollReveal from "../../components/ui/ScrollReveal";



const FeatureOverview = () => {

  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);



  return (

    <Layout>

      <section className="section-band-light relative overflow-hidden py-16 lg:py-20">

        <span className="float-orb float-orb-a" aria-hidden />

        <span className="float-orb float-orb-b" aria-hidden />

        <div className="container max-w-6xl relative z-10">

          {/* Header */}

          <ScrollReveal className="text-center mb-16">

            <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark mb-4">

              Powerful Features for Modern Teams

            </h1>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">

              Everything you need to manage your workforce efficiently in one

              integrated platform

            </p>

          </ScrollReveal>



          {/* Features Grid */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {features.map((feature, index) => {

              const Icon = feature.icon;

              return (

                <ScrollReveal key={feature.id} delay={index * 80}>

                  <Link

                    to={`/features/${feature.slug}`}

                    className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border/50 hover:border-primary/30 card-glow block h-full"

                  >

                    <div className="feature-icon mb-6 transition-transform duration-300 group-hover:scale-105">

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

                </ScrollReveal>

              );

            })}

          </div>

        </div>

      </section>



      {/* CTA Section */}

      <section className="cta-gradient py-20 text-white text-center relative overflow-hidden">

        <span className="float-orb float-orb-c" aria-hidden />

        <ScrollReveal className="container max-w-3xl relative z-10">

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

        </ScrollReveal>

      </section>



      <DemoModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />

    </Layout>

  );

};



export default FeatureOverview;

