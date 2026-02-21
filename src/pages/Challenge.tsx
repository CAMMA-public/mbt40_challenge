import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Microscope, Brain, CheckCircle } from "lucide-react";

const Challenge = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-foreground mb-4">Challenge Overview</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Online surgical action triplet recognition in Roux-en-Y gastric bypass procedures across multiple centers
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Motivation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Surgical workflow analysis has evolved in the types of intraoperative signals analyzed, with the goal of providing context-aware decision support to improve patient outcomes, identify surgical events, and support preoperative planning and postoperative analysis. Recent work has expanded analysis from coarse-grained levels (phases, steps) to fine-grained levels (action triplets). Action triplets describe a surgical scene using a triplet of &lt;instrument, verb, target&gt;.
                  </p>
                  <p className="text-muted-foreground">
                    However, with the advent of foundation models and the increasing need for model generalization across multiple centers, current surgical action triplet datasets face limitations in generalization assessment. CholecT50, while widely used, is monocentric with lower interaction density compared to multi-bypass procedures, which involve more instruments and actions, contributing to greater density and variability in instrument-anatomy interactions.
                  </p>
                  <p className="text-muted-foreground">
                    To address these gaps, we introduce <strong className="text-foreground">MultiBypassT40</strong>, a large multi-centric dataset for complex Roux-en-Y gastric bypass surgery labeled with surgical action triplets. The dataset comprises 40 videos across 4 centers, with two centers providing training, validation, and future public test data, and two additional centers exclusively for testing. Our Future Public Test Set is approximately 5x larger than existing datasets, with a substantial Hidden Test Set distributed across three centers for robust generalization evaluation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Microscope className="h-5 w-5 text-primary" />
                    Task Description
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    The task is <strong className="text-foreground">online surgical action triplet recognition</strong>, where the model provides triplet predictions for a current surgical frame and optionally uses context strictly from previous frames. No access to future frames is allowed for evaluation. Participants will develop algorithms to recognize action triplets directly from the provided surgical videos.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Instrument Recognition:</strong> Identifying surgical instruments present in the scene
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Verb Recognition:</strong> Classifying the action being performed
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Target Recognition:</strong> Identifying the anatomical structure being acted upon
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Triplet Association:</strong> Correctly associating these components into valid triplets (85 triplet classes)
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-primary" />
                    Evaluation Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Submissions will be evaluated using the following metrics. The primary evaluation is performed at the full Instrument–Verb–Target (IVT) level. Metrics are computed per video and subsequently aggregated across videos.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-secondary rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Primary Metric</h4>
                      <p className="text-sm text-muted-foreground">
                        Mean Average Precision (mAP) for triplet recognition, computed following ivtmetrics
                      </p>
                    </div>
                    <div className="p-4 bg-secondary rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Complementary Metric</h4>
                      <p className="text-sm text-muted-foreground">
                        Macro-F1 score, with targeted analysis on rare triplets and phase-wise performance breakdowns
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Component-wise performance (Instrument, Verb, Target) will be derived from IVT predictions for interpretability. Rankings are based on descending triplet mAP.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Conference</p>
                    <p className="font-semibold text-foreground">MICCAI 2026</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Challenge Day</p>
                    <p className="font-semibold text-foreground">October 4 - 8, 2026</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Venue</p>
                    <p className="font-semibold text-foreground">ADNEC Centre, Abu Dhabi</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Surgery Type</p>
                    <p className="font-semibold text-foreground">Roux-en-Y Gastric Bypass</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Task Type</p>
                    <p className="font-semibold text-foreground">Online Action Triplet Recognition</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Acronym</p>
                    <p className="font-semibold text-foreground">MultiBypassT40</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="font-semibold text-foreground">1 Hour</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Data License</p>
                    <p className="font-semibold text-foreground">CC BY-NC-SA (after embargo)</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Fields of Application</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">Research</p>
                  <p className="text-sm text-muted-foreground">Decision Support</p>
                  <p className="text-sm text-muted-foreground">Surgical Workflow Analysis</p>
                  <p className="text-sm text-muted-foreground">Surgical Action Recognition</p>
                  <p className="text-sm text-muted-foreground">Multi-centric Action Analysis</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Challenge;
