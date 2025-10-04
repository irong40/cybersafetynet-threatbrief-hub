import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Activity, FileCheck, ArrowRight } from "lucide-react";

const Products = () => {
  const products = [
    {
      id: "sentinel-ai",
      icon: Brain,
      title: "Sentinel AI",
      description:
        "Multi-agent cybersecurity assessment platform. Automate compliance workflows, generate audit-ready reports, and secure with confidence—all on-premise.",
      link: "/products/sentinel-ai",
      status: "Available",
    },
    {
      id: "continuous-monitoring",
      icon: Activity,
      title: "Continuous Monitoring Tool",
      description:
        "Manage your DCSA Continuous Monitoring program with a simple, powerful, offline-first desktop application built for cleared contractors.",
      link: "/products/continuous-monitoring-tool",
      status: "Coming Soon",
    },
    {
      id: "issm-tool",
      icon: FileCheck,
      title: "ISSM Policy & Inventory Tool",
      description:
        "Streamline your NISPOM compliance with automated policy generation and comprehensive asset inventory management.",
      link: "#",
      status: "In Development",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="gradient-hero text-hero py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Tools Built for the Modern Defender.
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-hero/90 leading-relaxed">
            Our products are designed with a single purpose: to make cybersecurity professionals
            more effective, more efficient, and more confident in their defense strategies.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product) => (
              <Card
                key={product.id}
                className="p-8 shadow-card hover:shadow-hover transition-smooth border-border hover:border-accent/30"
              >
                <div className="mb-6 p-4 bg-accent/10 rounded-lg w-fit">
                  <product.icon className="text-accent" size={32} />
                </div>

                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-primary">{product.title}</h3>
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${
                      product.status === "Available"
                        ? "bg-accent/10 text-accent"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {product.status}
                  </span>
                </div>

                <p className="text-foreground/80 mb-6 leading-relaxed">{product.description}</p>

                {product.status === "Available" ? (
                  <Button asChild variant="default" className="w-full bg-accent hover:bg-accent/90">
                    <Link to={product.link}>
                      Learn More <ArrowRight className="ml-2" size={18} />
                    </Link>
                  </Button>
                ) : (
                  <Button variant="outline" disabled className="w-full">
                    {product.status}
                  </Button>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-grey py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">
              Why Security Teams Choose Us
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">On-Premise First</h3>
                <p className="text-foreground/80">
                  Your data stays on your infrastructure. No cloud dependencies, no third-party
                  risks.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">Built by Practitioners</h3>
                <p className="text-foreground/80">
                  Created by security professionals who understand real-world compliance challenges.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">Actionable Intelligence</h3>
                <p className="text-foreground/80">
                  Move beyond checklists to get insights that drive meaningful security improvements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary">Ready to Get Started?</h2>
          <p className="text-lg mb-8 text-foreground/80 max-w-2xl mx-auto">
            Schedule a demo to see how our tools can transform your security operations.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
            <Link to="/contact">Request a Demo</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Products;
