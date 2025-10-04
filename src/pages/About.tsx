import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Shield, Users } from "lucide-react";
import ooloiMascot from "@/assets/ooloi-mascot.png";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero text-hero py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Vision</h1>
            <p className="text-xl md:text-2xl text-hero/90 leading-relaxed">
              Building security tools inspired by symbiosis, adaptation, and intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                Security as a Living System
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                At Cyber Safety Net, we see security not as a checklist, but as a living,
                interconnected system. Our approach is inspired by the ooloi from Octavia Butler's
                Xenogenesis trilogy—beings that bridge complexity, foster symbiosis, and create
                resilience through deep understanding.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Like the ooloi, we believe in intelligent adaptation, clarity from complexity, and
                building systems that don't just defend—they evolve.
              </p>
            </div>
            <div className="flex justify-center">
              <img src={ooloiMascot} alt="Ooloi Mascot" className="w-80 h-80" />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-grey py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-primary">
              About the Founder
            </h2>

            <Card className="p-8 shadow-card">
              <div className="space-y-6 text-foreground/80 leading-relaxed">
                <p className="text-lg">
                  <strong className="text-primary">Dr. Adam Pierce</strong> brings over a decade of
                  experience in cybersecurity, risk management, and compliance. As a seasoned
                  Information Systems Security Manager (ISSM) and security professional, he has worked
                  across defense, intelligence, and commercial sectors—securing everything from
                  classified programs to enterprise cloud infrastructures.
                </p>

                <p className="text-lg">
                  Adam holds advanced degrees in cybersecurity and has published extensively on topics
                  ranging from AI-driven threat detection to the intersection of security and
                  organizational culture. His writing focuses on making complex security concepts
                  accessible, actionable, and—most importantly—human-centered.
                </p>

                <p className="text-lg">
                  Beyond the technical, Adam is deeply influenced by Afrofuturism and the speculative
                  fiction of Octavia Butler. He believes that the most resilient security systems are
                  those that embrace adaptability, foster collaboration, and recognize that technology
                  is only as strong as the communities it serves.
                </p>

                <p className="text-lg">
                  Cyber Safety Net was founded on this philosophy: security tools should empower
                  practitioners, not overwhelm them. They should be intelligent, adaptable, and
                  grounded in the realities of how teams actually work.
                </p>

                <p className="text-lg font-semibold text-primary">
                  "We don't just defend systems—we help them evolve."
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-primary">
              Our Core Values
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 shadow-card border-accent/20 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-accent/10 rounded-lg">
                    <Shield className="text-accent" size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">Clarity Over Complexity</h3>
                <p className="text-foreground/80">
                  We cut through the noise to deliver insights that matter, making security accessible
                  and actionable.
                </p>
              </Card>

              <Card className="p-8 shadow-card border-accent/20 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-accent/10 rounded-lg">
                    <BookOpen className="text-accent" size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">Intelligence & Adaptation</h3>
                <p className="text-foreground/80">
                  Security is a living system. Our tools evolve with the threat landscape and the
                  needs of our users.
                </p>
              </Card>

              <Card className="p-8 shadow-card border-accent/20 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-accent/10 rounded-lg">
                    <Users className="text-accent" size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">Human-Centered Security</h3>
                <p className="text-foreground/80">
                  Technology serves people, not the other way around. Our approach prioritizes
                  practitioners and their workflows.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-grey py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary">Join Our Mission</h2>
          <p className="text-lg mb-8 text-foreground/80 max-w-2xl mx-auto">
            Whether you're interested in our products, our Threat Brief, or just want to connect—we'd
            love to hear from you.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
