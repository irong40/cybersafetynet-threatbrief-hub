import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import NewsletterForm from "@/components/NewsletterForm";

const ThreatBrief = () => {
  // Sample data - in production, this would come from a CMS or API
  const briefs = [
    {
      id: 1,
      title: "Q4 2025 Threat Landscape: The Rise of AI-Powered Attacks",
      date: "October 1, 2025",
      keyTakeaways: [
        "AI-generated phishing campaigns show 300% increase in effectiveness",
        "Supply chain attacks targeting CI/CD pipelines surge",
        "New ransomware variant exploits zero-day in enterprise VPNs",
      ],
    },
    {
      id: 2,
      title: "Critical Infrastructure Under Siege: Energy Sector Threats",
      date: "September 24, 2025",
      keyTakeaways: [
        "Nation-state actors target operational technology networks",
        "ICS malware variants detected in power grid systems",
        "Recommended hardening measures for SCADA environments",
      ],
    },
    {
      id: 3,
      title: "Zero Trust Implementation: Lessons from Recent Breaches",
      date: "September 17, 2025",
      keyTakeaways: [
        "Analysis of 5 major breaches where Zero Trust could have prevented compromise",
        "Common implementation gaps in identity and access management",
        "Practical roadmap for phased Zero Trust adoption",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero text-hero py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Threat Brief</h1>
            <p className="text-xl md:text-2xl mb-8 text-hero/90 leading-relaxed">
              Your weekly dose of actionable cybersecurity intelligence—no fluff, just insights that
              matter.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-12 bg-background border-b">
        <div className="container mx-auto px-6">
          <Card className="max-w-2xl mx-auto p-8 shadow-card border-accent/20">
            <h2 className="text-2xl font-bold mb-4 text-center text-primary">
              Subscribe to the Threat Brief
            </h2>
            <p className="text-center text-foreground/80 mb-6">
              Get the latest intelligence delivered to your inbox every week. Join security
              professionals staying ahead of emerging threats.
            </p>
            <NewsletterForm />
          </Card>
        </div>
      </section>

      {/* Briefs Archive */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-primary">Recent Briefs</h2>

            <div className="space-y-8">
              {briefs.map((brief) => (
                <Card key={brief.id} className="p-8 shadow-card hover:shadow-hover transition-smooth">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Calendar className="text-accent" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 text-primary">{brief.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{brief.date}</p>

                      <div className="mb-6">
                        <p className="font-semibold text-foreground mb-2">Key Takeaways:</p>
                        <ul className="space-y-2">
                          {brief.keyTakeaways.map((takeaway, index) => (
                            <li key={index} className="flex items-start gap-2 text-foreground/80">
                              <span className="text-accent mt-1">•</span>
                              <span>{takeaway}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button variant="default" className="bg-accent hover:bg-accent/90">
                        View Full Briefing <ArrowRight className="ml-2" size={18} />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-grey py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary">
            Don't Miss Critical Intelligence
          </h2>
          <p className="text-lg mb-8 text-foreground/80 max-w-2xl mx-auto">
            Stay informed about the threats that actually matter to your organization.
          </p>
          <div className="max-w-md mx-auto">
            <NewsletterForm variant="inline" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThreatBrief;
