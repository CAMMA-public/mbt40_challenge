import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, FileVideo, Download, Lock, Building2 } from "lucide-react";

const centers = [
  { id: "C1", name: "University Hospital of Strasbourg", location: "France", role: "Training + Validation + Test + Hidden Test" },
  { id: "C2", name: "Bern University Hospital", location: "Bern, Switzerland", role: "Training + Validation + Test" },
  { id: "C3", name: "University Digestive Health Care Center - Clarunis, University Hospital of Basel", location: "Basel, Switzerland", role: "Hidden Test only" },
  { id: "C4", name: "University Hospital of Zurich", location: "Zurich, Switzerland", role: "Hidden Test only" },
];

const Dataset = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-foreground mb-4">Dataset: MultiBypassT40</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            A large multi-centric dataset for complex Roux-en-Y gastric bypass surgery labeled with surgical action triplets
          </p>
        </div>
      </section>

      {/* Dataset Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-4xl font-bold text-primary">40</p>
                <p className="text-muted-foreground">Surgical Videos</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-4xl font-bold text-primary">4</p>
                <p className="text-muted-foreground">Medical Centers</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-4xl font-bold text-primary">~5.23K</p>
                <p className="text-muted-foreground">Avg Frames/Video</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-4xl font-bold text-primary">85</p>
                <p className="text-muted-foreground">Triplet Classes</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-primary" />
                  Dataset Description
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  MultiBypassT40 comprises 40 laparoscopic videos of Roux-en-Y gastric bypass surgery across 4 centers. Each video is annotated with surgical action triplets at the frame level, with 85 triplet classes. Each frame has a 1D binary vector indicating which actions are being performed.
                </p>
                <p className="text-muted-foreground">
                  Additionally, each case is provided with supplementary annotations for instruments, verbs, and targets individually. All annotations follow the same binary vector format.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Key Features:</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Multi-centric data across 4 institutions</li>
                    <li>100% annotated (training, test, and hidden test)</li>
                    <li>Expert clinician annotations with mediation</li>
                    <li>Frame-level triplet labels (85 classes)</li>
                    <li>Laparoscopic video stream (RGB frames)</li>
                    <li>Real-world class distribution</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileVideo className="h-5 w-5 text-primary" />
                  Data Splits
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-foreground">Training Set</span>
                      <span className="text-primary font-medium">16 videos</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      From centers C1 and C2. Full annotations provided. Participants may split into validation sets on their own.
                    </p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-foreground">Test Set</span>
                      <span className="text-primary font-medium">9 videos</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      From centers C1 and C2. Used for official evaluation.
                    </p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-foreground">Hidden Test Set</span>
                      <span className="text-primary font-medium">15 videos</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      From centers C1, C3, and C4 (5 each). Unseen, unpublished data for robust generalization evaluation. Centers C3 and C4 are never observed during training.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Centers */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-primary" />
                Participating Centers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {centers.map((center) => (
                  <div key={center.id} className="p-4 bg-secondary rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-primary font-bold">{center.id}</span>
                      <span className="font-semibold text-foreground">{center.name}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{center.location}</p>
                    <p className="text-xs text-muted-foreground mt-1">Role: {center.role}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Annotation */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Annotation Process</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Four clinicians (two medical students and two surgical residents) annotated the data under supervision of a clinical expert in surgical data science, with mediation by an expert surgeon. Regular meetings were held for annotation consistency and edge case discussions.
              </p>
              <p className="text-muted-foreground">
                Frames outside the abdomen (e.g., during camera trocar transitions) are marked as out-of-body and replaced with black frames to de-identify the videos.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Lock className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-4">Data Access</h2>
            <p className="text-muted-foreground mb-4">
              To access the dataset, you must first register for the challenge and agree to the data usage terms. The dataset is licensed under <strong className="text-foreground">CC BY-NC-SA</strong> (Attribution-NonCommercial-ShareAlike).
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Training data will be shared via S3, Seafile, or Dropbox. A starter kit with dataset setup instructions, baseline training code, and the official evaluation script will be provided.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero">
                <Download className="mr-2 h-4 w-4" /> Request Data Access
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dataset;
