import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, FileVideo, Download, Lock, Building2, AlertTriangle } from "lucide-react";
import tripletImg from "@/assets/triplet-illustration.png";

const centers = [
  { id: "C1", role: "Training + Test + Future Public Test" },
  { id: "C2", role: "Training + Test" },
  { id: "C3", role: "Future Public Test only" },
  { id: "C4", role: "Future Public Test only" },
];

const Dataset = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-foreground mb-4">Dataset: MultiBypassT40</h1>
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
                <p className="text-5xl font-bold text-primary">40</p>
                <p className="text-base text-muted-foreground">Surgical Videos</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-5xl font-bold text-primary">4</p>
                <p className="text-base text-muted-foreground">Medical Centers</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-5xl font-bold text-primary">~5.23K</p>
                <p className="text-base text-muted-foreground">Avg Frames/Video</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-5xl font-bold text-primary">85</p>
                <p className="text-base text-muted-foreground">Triplet Classes</p>
              </CardContent>
            </Card>
          </div>

          {/* Triplet Illustration */}
          <div className="flex justify-center mb-14">
            <img
              src={tripletImg}
              alt="Surgical Action Triplet: Instrument, Verb, Target"
              className="rounded-2xl border border-border shadow-lg w-full max-w-6xl"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Database className="h-5 w-5 text-primary" />
                  Dataset Description
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-base text-muted-foreground">
                  MultiBypassT40 comprises 40 laparoscopic videos of Roux-en-Y gastric bypass surgery across 4 centers. Each video is annotated with surgical action triplets at the frame level, with 85 triplet classes. Each frame has a 1D binary vector indicating which actions are being performed.
                </p>
                <p className="text-base text-muted-foreground">
                  Additionally, each case is provided with supplementary annotations for instruments, verbs, and targets individually. All annotations follow the same binary vector format.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground text-lg">Key Features:</h4>
                  <ul className="list-disc list-inside text-base text-muted-foreground space-y-1">
                    <li>Multi-centric data across 4 institutions</li>
                    <li>100% annotated (training, test, and future public test)</li>
                    <li>Expert clinician annotations with mediation</li>
                    <li>Frame-level triplet labels (85 classes)</li>
                    <li>Laparoscopic video stream (RGB frames at 1fps)</li>
                    <li>Real-world class distribution</li>
                  </ul>
                </div>
                <p className="text-base text-muted-foreground italic">
                  More details will be added as the challenge progresses.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <FileVideo className="h-5 w-5 text-primary" />
                  Data Splits
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-foreground text-lg">Training Set</span>
                      <span className="text-primary font-medium text-lg">16 videos</span>
                    </div>
                    <p className="text-base text-muted-foreground">
                      From centers C1 and C2. Full annotations provided. Participants may split into validation sets on their own.
                    </p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-foreground text-lg">Test Set</span>
                      <span className="text-primary font-medium text-lg">9 videos</span>
                    </div>
                    <p className="text-base text-muted-foreground">
                      From centers C1 and C2. Used for official evaluation.
                    </p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-foreground text-lg">Future Public Test Set</span>
                      <span className="text-primary font-medium text-lg">15 videos</span>
                    </div>
                    <p className="text-base text-muted-foreground">
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
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Building2 className="h-5 w-5 text-primary" />
                Participating Centers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {centers.map((center) => (
                  <div key={center.id} className="p-4 bg-secondary rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-primary font-bold text-lg">{center.id}</span>
                    </div>
                    <p className="text-base text-muted-foreground mt-1">Role: {center.role}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Annotation */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Annotation Process</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-base text-muted-foreground">
                Four clinicians (two medical students and two surgical residents) annotated the data under supervision of a clinical expert in surgical data science, with mediation by an expert surgeon. Regular meetings were held for annotation consistency and edge case discussions.
              </p>
              <p className="text-base text-muted-foreground">
                Frames outside the abdomen (e.g., during camera trocar transitions) are marked as out-of-body and replaced with black frames to de-identify the videos.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Data Usage Agreement */}
      <section className="py-16 bg-destructive/5 border-y border-destructive/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="h-8 w-8 text-destructive" />
              <h2 className="text-3xl font-bold text-foreground">Data Usage Agreement</h2>
            </div>
            <Card className="border-destructive/30">
              <CardContent className="pt-6 space-y-4">
                <p className="text-base text-foreground font-semibold">
                  By accessing the dataset, participants agree to the following terms:
                </p>
                <ul className="list-disc list-inside text-base text-muted-foreground space-y-2">
                  <li>During the challenge, the data may only be used for the purposes of this challenge.</li>
                  <li>The data <strong className="text-foreground">cannot be used, distributed, or published</strong> until the official release with the joint challenge publication.</li>
                  <li>There is an <strong className="text-foreground">embargo period</strong> until the challenge publication is published (anticipated end of 2026).</li>
                  <li>After the embargo, the dataset will be released under the <strong className="text-foreground">Creative Commons Attribution-NonCommercial-ShareAlike (CC BY-NC-SA)</strong> license.</li>
                  <li>Participants may publish their individual results separately only after the joint challenge paper has been published.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Lock className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">Data Access</h2>
            <p className="text-base text-muted-foreground mb-4">
              To access the dataset, you must first register for the challenge and agree to the Data Usage Agreement above.
            </p>
            <p className="text-base text-muted-foreground mb-6">
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
