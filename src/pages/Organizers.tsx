import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Building2 } from "lucide-react";

const organizers = [
  {
    name: "Saurav Sharma",
    role: "Organizer",
    institution: "University of Strasbourg, CNRS, INSERM, ICube & IHU Strasbourg",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=saurav",
  },
  {
    name: "Lorenzo Arboit",
    role: "Organizer (annotation protocol, data harmonization, website)",
    institution: "University of Strasbourg, CNRS, INSERM, ICube & IHU Strasbourg",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=lorenzo",
  },
  {
    name: "Lalith Sharan",
    role: "Organizer",
    institution: "University of Strasbourg, CNRS, INSERM, ICube & IHU Strasbourg",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=lalith",
  },
  {
    name: "Shi Li",
    role: "Organizer",
    institution: "University of Strasbourg, CNRS, INSERM, ICube & IHU Strasbourg",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=shili",
  },
  {
    name: "Julia Alekseenko",
    role: "Organizer",
    institution: "University of Strasbourg, CNRS, INSERM, ICube & IHU Strasbourg",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=julia",
  },
  {
    name: "Joël Lavanchy",
    role: "Organizer (data collection, annotation protocol, annotation supervision)",
    institution: "University Digestive Health Care Center - Clarunis, University Hospital of Basel, Switzerland",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=joel",
  },
  {
    name: "Nicolas Padoy",
    role: "Organizer",
    institution: "University of Strasbourg, CNRS, INSERM, ICube & IHU Strasbourg",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=nicolas",
  },
];

const affiliations = [
  "University of Strasbourg, CNRS, INSERM, ICube, UMR7357, France",
  "IHU Strasbourg",
  "University Digestive Health Care Center - Clarunis, University Hospital of Basel, Basel, Switzerland",
];

const sponsors = [
  { name: "IHU Strasbourg", type: "Award Sponsor" },
  { name: "EndoVis Challenge", type: "Thematic Event Partner" },
];

const Organizers = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-foreground mb-4">Organizers</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Meet the team behind the MultiBypassT40 Challenge
          </p>
        </div>
      </section>

      {/* Organizers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8">Challenge Organizers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {organizers.map((person) => (
              <Card key={person.name} className="text-center">
                <CardContent className="pt-6">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 bg-secondary"
                  />
                  <h3 className="font-semibold text-foreground">{person.name}</h3>
                  <p className="text-xs text-primary mt-1">{person.role}</p>
                  <p className="text-xs text-muted-foreground mt-1">{person.institution}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-8">Affiliations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            {affiliations.map((aff, i) => (
              <Card key={i}>
                <CardContent className="pt-6 flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-sm text-foreground">{aff}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-8">Partners & Sponsors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
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
              <h2 className="text-2xl font-bold text-foreground mb-6">Contact</h2>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Primary Contact</h4>
                  <a
                    href="mailto:ssharma@unistra.fr"
                    className="text-primary hover:underline"
                  >
                    ssharma@unistra.fr
                  </a>
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
