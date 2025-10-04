import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Shield, Zap, Lock, FileText } from "lucide-react";
import sentinelVisual from "@/assets/sentinel-ai-visual.jpg";

const SentinelAI = () => {
  const capabilities = [
    {
      icon: Shield,
      title: "Multi-Agent Assessment",
      description: "Coordinated AI agents work together to evaluate your security posture comprehensively.",
    },
    {
      icon: FileText,
      title: "Audit-Ready Reports",
      description: "Generate professional, compliant documentation automatically for regulators and auditors.",
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Streamline repetitive compliance tasks and focus on strategic security initiatives.",
    },
    {
      icon: Lock,
      title: "On-Premise Security",
      description: "All processing happens locally—your sensitive data never leaves your environment.",
    },
  ];

  const targetAudience = [
    "Security teams managing NIST, ISO, or DoD compliance frameworks",
    "Organizations requiring air-gapped or on-premise security tools",
    "ISSMs and security professionals seeking to automate assessments",
    "Enterprises needing audit-ready documentation on demand",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero text-hero py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Automate Assessments. Generate Audit-Ready Reports. Secure with Confidence.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-hero/90 leading-relaxed">
              Sentinel AI is an on-premise, multi-agent platform that transforms how security teams
              conduct assessments and manage compliance.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link to="/contact">Schedule a Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-primary">
              The Challenge
            </h2>
            <Card className="p-8 shadow-card">
              <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                Security assessments are essential—but they're also time-consuming, repetitive, and
                prone to inconsistency. Traditional tools offer checklists, but they don't help you
                understand what the findings actually mean for your organization.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Worse, many assessment platforms require you to upload sensitive data to third-party
                clouds, creating unnecessary risk and compliance headaches.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section-grey py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">The Solution</h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Sentinel AI uses multiple coordinated AI agents to conduct comprehensive security
                assessments entirely on your infrastructure. It doesn't just tick boxes—it analyzes
                your environment, identifies real risks, and generates actionable recommendations.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Every report is audit-ready, every insight is contextualized, and every piece of data
                stays under your control.
              </p>
            </div>
            <div>
              <img
                src={sentinelVisual}
                alt="Sentinel AI Platform"
                className="rounded-lg shadow-card w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-primary">
              Core Capabilities
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {capabilities.map((capability, index) => (
                <Card key={index} className="p-8 shadow-card border-accent/20">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <capability.icon className="text-accent" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-primary">{capability.title}</h3>
                      <p className="text-foreground/80 leading-relaxed">{capability.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="section-grey py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-primary">
              Built For
            </h2>
            <Card className="p-8 shadow-card">
              <ul className="space-y-4">
                {targetAudience.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={20} />
                    <span className="text-lg text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary">See Sentinel AI in Action</h2>
          <p className="text-lg mb-8 text-foreground/80 max-w-2xl mx-auto">
            Schedule a personalized demo to discover how Sentinel AI can transform your security
            assessment process.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
            <Link to="/contact">Request a Demo</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SentinelAI;
