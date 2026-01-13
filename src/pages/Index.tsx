import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Trophy, Users, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import banner from "@/assets/banner.png";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full">
            <span className="text-primary text-sm font-medium">MICCAI 2026 Challenge</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            MultiBypass Surgical Action
            <br />
            <span className="text-primary">Triplet Challenge 2026</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10" style={{ animationDelay: "0.1s" }}>
            Advancing the state-of-the-art in surgical action recognition and understanding through multi-center gastric bypass procedure analysis
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="lg" asChild>
              <Link to="/challenge">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/submission">Register Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Challenge Highlights
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 bg-secondary rounded-lg border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Cash Prizes</h3>
              <p className="text-muted-foreground">
                Compete for significant cash prizes and recognition at MICCAI 2026
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-secondary rounded-lg border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Multi-Center Dataset</h3>
              <p className="text-muted-foreground">
                Access a unique multi-center dataset of gastric bypass surgical videos
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-secondary rounded-lg border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">MICCAI 2026</h3>
              <p className="text-muted-foreground">
                Present your work at the premier medical imaging conference
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Task Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              The Challenge Task
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Participants are tasked with developing algorithms to recognize and predict surgical action triplets 
              (instrument, verb, target) in gastric bypass surgery videos. This challenge addresses a critical need 
              in surgical AI: understanding the complex interplay between surgical instruments, actions, and anatomical targets.
            </p>
            <Button variant="outline" asChild>
              <Link to="/challenge">
                View Full Challenge Details <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-y border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Take the Challenge?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join teams from around the world in advancing surgical action understanding. Registration is now open.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/submission">Register Your Team</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
