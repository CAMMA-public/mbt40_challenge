import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Globe, Building2 } from "lucide-react";

const organizers = [
  {
    name: "Dr. Jane Smith",
    role: "Lead Organizer",
    institution: "Stanford University",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=jane",
  },
  {
    name: "Prof. Michael Chen",
    role: "Co-organizer",
    institution: "ETH Zurich",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
  },
  {
    name: "Dr. Sarah Johnson",
    role: "Co-organizer",
    institution: "Johns Hopkins University",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
  },
  {
    name: "Prof. David Lee",
    role: "Co-organizer",
    institution: "University of Oxford",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
  },
];

const advisors = [
  {
    name: "Prof. Emily Wang",
    role: "Scientific Advisor",
    institution: "MIT",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
  },
  {
    name: "Dr. Robert Brown",
    role: "Clinical Advisor",
    institution: "Mayo Clinic",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=robert",
  },
];

const sponsors = [
  { name: "MICCAI Society", type: "Academic Partner" },
  { name: "NIH", type: "Funding Partner" },
  { name: "Intuitive Surgical", type: "Industry Partner" },
];

const Organizers = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-foreground mb-4">Organizers</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Meet the team behind the MultiBypass Surgical Action Triplet Challenge
          </p>
        </div>
      </section>

      {/* Organizers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8">Challenge Organizers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {organizers.map((person) => (
              <Card key={person.name} className="text-center">
                <CardContent className="pt-6">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 bg-secondary"
                  />
                  <h3 className="font-semibold text-foreground">{person.name}</h3>
                  <p className="text-sm text-primary">{person.role}</p>
                  <p className="text-sm text-muted-foreground">{person.institution}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-8">Advisors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {advisors.map((person) => (
              <Card key={person.name} className="text-center">
                <CardContent className="pt-6">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 bg-secondary"
                  />
                  <h3 className="font-semibold text-foreground">{person.name}</h3>
                  <p className="text-sm text-primary">{person.role}</p>
                  <p className="text-sm text-muted-foreground">{person.institution}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-8">Partners & Sponsors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {sponsors.map((sponsor) => (
              <Card key={sponsor.name}>
                <CardContent className="pt-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{sponsor.name}</h3>
                    <p className="text-sm text-muted-foreground">{sponsor.type}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact */}
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">Contact Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <a
                      href="mailto:multibypass2026@miccai.org"
                      className="text-primary hover:underline"
                    >
                      multibypass2026@miccai.org
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Website</h4>
                    <p className="text-muted-foreground">multibypass2026.miccai.org</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Organizers;
