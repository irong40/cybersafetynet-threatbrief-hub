import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Shield, Brain, Lock } from "lucide-react";
import NewsletterForm from "@/components/NewsletterForm";
import heroBackground from "@/assets/hero-background.jpg";
import sentinelVisual from "@/assets/sentinel-ai-visual.jpg";
import ooloiMascot from "@/assets/ooloi-mascot.png";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative gradient-hero text-hero py-24 md:py-32 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(30, 41, 59, 0.95), rgba(30, 41, 59, 0.92)), url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Outsmart the Next Threat.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-hero/90 leading-relaxed">
              Get a weekly, no-fluff intelligence brief on the cybersecurity threats that actually
              matter, delivered straight to your inbox.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-lg px-8 py-6 shadow-card"
            >
              <Link to="/threat-brief">
                Get the Brief <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
              From Information Overload to Actionable Intelligence.
            </h2>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <Card className="p-8 shadow-card border-destructive/20">
                <h3 className="text-2xl font-bold mb-4 text-destructive">The Problem</h3>
                <p className="text-foreground/80 leading-relaxed">
                  The threat landscape is louder than ever—more alerts, more vulnerabilities, more
                  noise. Security professionals are drowning in data but starving for insights that
                  actually help them protect their organizations.
                </p>
              </Card>

              <Card className="p-8 shadow-card border-accent/20">
                <h3 className="text-2xl font-bold mb-4 text-accent">The Solution</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Cyber Safety Net brings clarity to the complexity. Our weekly Threat Brief cuts
                  through the noise to deliver what matters: context-rich analysis, real-world
                  impact assessments, and actionable next steps for modern defenders.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Product Spotlight */}
      <section className="section-grey py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                Go Beyond Checklists. Get Actionable Answers.
              </h2>
              <p className="text-lg mb-6 text-foreground/80 leading-relaxed">
                Sentinel AI is our on-premise, multi-agent cybersecurity assessment platform that
                automates compliance workflows, generates audit-ready reports, and delivers
                intelligence you can actually use—all without sending your data to the cloud.
              </p>
              <Button asChild variant="default" className="bg-accent hover:bg-accent/90">
                <Link to="/products/sentinel-ai">
                  Learn More About Sentinel AI <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src={sentinelVisual}
                alt="Sentinel AI Platform"
                className="rounded-lg shadow-card w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Intel Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Latest Intelligence
            </h2>
            <p className="text-lg mb-12 text-foreground/80">
              Stay current with our latest analysis of the threats shaping the cybersecurity
              landscape.
            </p>

            <Card className="p-8 shadow-card text-left max-w-2xl mx-auto border-accent/20">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Shield className="text-accent" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Latest Threat Brief</h3>
                  <p className="text-sm text-muted-foreground mb-4">Published this week</p>
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    Explore our most recent analysis covering emerging attack vectors, threat actor
                    movements, and defensive strategies that security leaders need to know.
                  </p>
                  <Button asChild variant="default" className="bg-accent hover:bg-accent/90">
                    <Link to="/threat-brief">View Latest Brief</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* About the Brand */}
      <section className="section-hero text-hero py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Clarity From Complexity.</h2>
              <p className="text-lg mb-6 text-hero/90 leading-relaxed">
                We see security as a living system—constantly adapting, learning, and evolving. Like
                the ooloi from Octavia Butler's Xenogenesis trilogy, our approach is about
                understanding interconnected systems, finding harmony in complexity, and building
                resilience through intelligence.
              </p>
              <Button asChild variant="outline" className="border-hero text-hero hover:bg-hero/10">
                <Link to="/about">Explore Our Vision</Link>
              </Button>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <img src={ooloiMascot} alt="Ooloi Mascot" className="w-64 h-64 opacity-90" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-grey py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Don't Miss the Next Threat Brief.
            </h2>
            <p className="text-lg mb-8 text-foreground/80 leading-relaxed">
              Join other security professionals and get actionable, no-fluff intelligence delivered
              to your inbox every week.
            </p>
            <NewsletterForm variant="inline" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
