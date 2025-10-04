import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Activity, Shield, Database, Clock } from "lucide-react";

const ContinuousMonitoring = () => {
  const features = [
    {
      icon: Activity,
      title: "Real-Time Monitoring",
      description: "Track compliance status continuously across all required security controls.",
    },
    {
      icon: Database,
      title: "Offline-First Design",
      description: "Works completely offline—perfect for air-gapped and classified environments.",
    },
    {
      icon: Clock,
      title: "Automated Tracking",
      description: "Automatically log security events and maintain comprehensive audit trails.",
    },
    {
      icon: Shield,
      title: "DCSA Compliant",
      description: "Built specifically to meet DCSA Continuous Monitoring requirements.",
    },
  ];

  const targetUsers = [
    "Cleared contractors managing DCSA CM programs",
    "Security teams in air-gapped or classified environments",
    "Organizations seeking simple, reliable CM solutions",
    "ISSMs responsible for NISPOM compliance",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero text-hero py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Manage Your DCSA Continuous Monitoring Program with Confidence.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-hero/90 leading-relaxed">
              A simple, powerful, offline-first desktop application designed for cleared contractors
              navigating DCSA compliance.
            </p>
            <div className="inline-block px-6 py-3 bg-hero/20 rounded-lg border border-hero/30">
              <p className="text-lg font-semibold">Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-primary">
              Continuous Monitoring, Simplified
            </h2>
            <Card className="p-8 shadow-card">
              <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                Managing a DCSA Continuous Monitoring program shouldn't require expensive enterprise
                platforms or complex cloud integrations. Our Continuous Monitoring Tool is a
                straightforward desktop application that helps you track, document, and report on your
                security posture—all while working completely offline.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Built by practitioners for practitioners, it's designed to meet DCSA requirements
                without the bloat.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-grey py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-primary">
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="p-8 shadow-card border-accent/20">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <feature.icon className="text-accent" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-primary">{feature.title}</h3>
                      <p className="text-foreground/80 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-primary">
              Perfect For
            </h2>
            <Card className="p-8 shadow-card">
              <ul className="space-y-4">
                {targetUsers.map((user, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={20} />
                    <span className="text-lg text-foreground/80">{user}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-grey py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary">Get Notified at Launch</h2>
          <p className="text-lg mb-8 text-foreground/80 max-w-2xl mx-auto">
            Be the first to know when the Continuous Monitoring Tool becomes available. Contact us to
            join our early access list.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ContinuousMonitoring;
