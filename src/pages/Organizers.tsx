import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Building2 } from "lucide-react";
import logoCamma from "@/assets/logo-camma.png";
import logoUnistra from "@/assets/logo-unistra.png";
import logoIhu from "@/assets/logo-ihu.jpeg";
import logoChu from "@/assets/logo-chu-strasbourg.png";
import logoClarunis from "@/assets/logo-clarunis.svg";
import logoUsz from "@/assets/logo-usz.png";
import joelImg from "@/assets/joel.png";
import sauravImg from "@/assets/saurav.png";
import lorenzoImg from "@/assets/lorenzo.png";
import lalithImg from "@/assets/lalith.jpg";
import shiImg from "@/assets/shi.png";
import juliaImg from "@/assets/julia.png";
import nicolasImg from "@/assets/nicolas.png";

const organizers = [
  {
    name: "Saurav Sharma",
    role: "Organizer",
    institution: "University of Strasbourg, CNRS, INSERM, ICube & IHU Strasbourg",
    image: sauravImg,
  },
  {
    name: "Lorenzo Arboit",
    role: "Organizer (annotation protocol, data harmonization, website)",
    institution: "University of Strasbourg, CNRS, INSERM, ICube & IHU Strasbourg",
    image: lorenzoImg,
  },
  {
    name: "Lalith Sharan",
    role: "Organizer",
    institution: "University of Strasbourg, CNRS, INSERM, ICube & IHU Strasbourg",
    image: lalithImg,
  },
  {
    name: "Shi Li",
    role: "Organizer",
    institution: "University of Strasbourg, CNRS, INSERM, ICube & IHU Strasbourg",
    image: shiImg,
  },
  {
    name: "Julia Alekseenko",
    role: "Organizer",
    institution: "University of Strasbourg, CNRS, INSERM, ICube & IHU Strasbourg",
    image: juliaImg,
  },
  {
    name: "Joël Lavanchy",
    role: "Organizer (data collection, annotation protocol, annotation supervision)",
    institution: "University Digestive Health Care Center - Clarunis, University Hospital of Basel",
    image: joelImg,
  },
  {
    name: "Nicolas Padoy",
    role: "Organizer",
    institution: "University of Strasbourg, CNRS, INSERM, ICube & IHU Strasbourg",
    image: nicolasImg,
  },
];

const affiliations = [
  "University of Strasbourg, CNRS, INSERM, ICube, UMR7357, France",
  "IHU Strasbourg",
  "University Digestive Health Care Center - Clarunis, University Hospital of Basel, Basel, Switzerland",
];

const institutionLogos = [
  { src: logoCamma, alt: "CAMMA" },
  { src: logoUnistra, alt: "University of Strasbourg" },
  { src: logoIhu, alt: "IHU Strasbourg" },
  { src: logoChu, alt: "CHU Strasbourg" },
  { src: logoClarunis, alt: "Clarunis" },
  { src: logoUsz, alt: "USZ Zürich" },
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
          <h1 className="text-5xl font-bold text-foreground mb-4">Organizers</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Meet the team behind the MultiBypassT40 Challenge
          </p>
        </div>
      </section>

      {/* Organizers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8">Challenge Organizers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {organizers.map((person) => (
              <Card key={person.name} className="text-center">
                <CardContent className="pt-6">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 bg-secondary object-cover"
                  />
                  <h3 className="font-semibold text-foreground text-lg">{person.name}</h3>
                  <p className="text-sm text-primary mt-1">{person.role}</p>
                  <p className="text-sm text-muted-foreground mt-1">{person.institution}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-foreground mb-8">Affiliations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {affiliations.map((aff, i) => (
              <Card key={i}>
                <CardContent className="pt-6 flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-base text-foreground">{aff}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Institution Logos moved to bottom */}

          <h2 className="text-3xl font-bold text-foreground mb-8">Partners & Sponsors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {sponsors.map((sponsor) => (
              <Card key={sponsor.name}>
                <CardContent className="pt-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">{sponsor.name}</h3>
                    <p className="text-base text-muted-foreground">{sponsor.type}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact */}
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-3xl font-bold text-foreground mb-6">Contact</h2>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg">Primary Contact</h4>
                  <a
                    href="mailto:multibypass2026@gmail.com"
                    className="text-primary hover:underline text-base"
                  >
                    multibypass2026@gmail.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Institution Logos */}
      <section className="py-6 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-nowrap items-center justify-center gap-6 overflow-x-auto">
            {institutionLogos.map((l) => (
              <img
                key={l.alt}
                src={l.src}
                alt={l.alt}
                className="h-12 md:h-14 object-contain rounded-md bg-white/90 px-3 py-2 shadow-sm border border-border/60 transition hover:shadow-md"
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Organizers;
