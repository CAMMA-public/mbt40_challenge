import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Trophy, Users, ArrowRight, MapPin, Newspaper } from "lucide-react";
import Layout from "@/components/Layout";
import banner from "@/assets/banner.png";
import tripletImg from "@/assets/triplet-illustration.png";
import logoCamma from "@/assets/logo-camma.png";
import logoUnistra from "@/assets/logo-unistra.png";
import logoIhu from "@/assets/logo-ihu.jpeg";
import logoChu from "@/assets/logo-chu-strasbourg.png";
import logoClarunis from "@/assets/logo-clarunis.svg";
import logoUsz from "@/assets/logo-usz.png";
import { useEffect, useState } from "react";

const CHALLENGE_DATE = new Date("2026-10-04T00:00:00");

function useCountdown(target: Date) {
  const calc = () => {
    const diff = target.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

const news = [
  { date: "February 2026", text: "Challenge proposal accepted at MICCAI 2026 EndoVis" },
  { date: "Coming April 1, 2026", text: "Registration opens — stay tuned!" },
];

const logos = [
  { src: logoCamma, alt: "CAMMA" },
  { src: logoUnistra, alt: "University of Strasbourg" },
  { src: logoIhu, alt: "IHU Strasbourg" },
  { src: logoChu, alt: "CHU Strasbourg" },
  { src: logoClarunis, alt: "Clarunis" },
  { src: logoUsz, alt: "USZ Zürich" },
];

const Index = () => {
  const countdown = useCountdown(CHALLENGE_DATE);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full">
            <span className="text-primary text-base font-medium">MICCAI 2026 Challenge — EndoVis</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">
            MultiBypass Surgical Action
            <br />
            <span className="text-primary">Triplet Challenge 2026</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Advancing surgical action triplet recognition through multi-center Roux-en-Y gastric bypass procedure analysis
          </p>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6 flex items-center justify-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            October 4, 2026 — ADNEC Centre, Abu Dhabi
          </p>

          {/* Countdown Timer */}
          <div className="flex justify-center gap-4 mb-10">
            {[
              { label: "Days", value: countdown.days },
              { label: "Hours", value: countdown.hours },
              { label: "Min", value: countdown.minutes },
              { label: "Sec", value: countdown.seconds },
            ].map((unit) => (
              <div key={unit.label} className="flex flex-col items-center bg-card/60 backdrop-blur-sm border border-border rounded-lg px-4 py-3 min-w-[70px]">
                <span className="text-3xl md:text-4xl font-bold text-primary tabular-nums">{String(unit.value).padStart(2, "0")}</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{unit.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

      {/* Logos Bar */}
      <section className="py-8 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {logos.map((l) => (
              <img key={l.alt} src={l.src} alt={l.alt} className="h-12 md:h-16 object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Challenge Highlights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-secondary rounded-lg border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Prizes & Publication</h3>
              <p className="text-base text-muted-foreground">
                Compete for prizes sponsored by IHU Strasbourg and co-author a joint publication in a top medical imaging journal
              </p>
            </div>

            <div className="p-6 bg-secondary rounded-lg border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">MultiBypassT40 Dataset</h3>
              <p className="text-base text-muted-foreground">
                40 videos across 4 centers with 85 action triplet classes — the largest multi-centric surgical triplet dataset
              </p>
            </div>

            <div className="p-6 bg-secondary rounded-lg border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">MICCAI 2026</h3>
              <p className="text-base text-muted-foreground">
                Present your work at the premier medical imaging conference, October 4, Abu Dhabi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Triplet Illustration & Task Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-6 text-center">
              The Challenge Task
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
              Develop deep learning methods for <strong className="text-foreground">online surgical action triplet recognition</strong> (instrument, verb, target)
              from Roux-en-Y gastric bypass surgery videos. Models must process frames causally — no access to future frames.
              This challenge establishes a new research direction focused on generalization across multiple centers, organized in conjunction with EndoVis.
            </p>
            <div className="flex justify-center mb-8">
              <img src={tripletImg} alt="Surgical Action Triplet: Instrument, Verb, Target" className="rounded-xl border border-border max-w-full md:max-w-2xl" />
            </div>
            <p className="text-base text-muted-foreground text-center italic">
              More details will be added as the challenge progresses.
            </p>
            <div className="text-center mt-6">
              <Button variant="outline" asChild>
                <Link to="/challenge">
                  View Full Challenge Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Newspaper className="h-8 w-8 text-primary" />
              News & Updates
            </h2>
            <div className="space-y-4">
              {news.map((item, i) => (
                <div key={i} className="flex gap-4 p-5 bg-secondary rounded-lg border border-border">
                  <div className="flex-shrink-0 text-sm font-semibold text-primary min-w-[160px]">{item.date}</div>
                  <p className="text-base text-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-y border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Ready to Take the Challenge?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Registration opens April 1, 2026. Join teams from around the world in advancing surgical action understanding.
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
