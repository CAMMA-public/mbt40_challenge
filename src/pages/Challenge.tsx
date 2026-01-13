import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Microscope, Brain, CheckCircle } from "lucide-react";

const Challenge = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-foreground mb-4">Challenge Overview</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Understanding surgical actions through action triplet recognition in gastric bypass procedures
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
                    Surgical action triplet recognition is a fundamental task in surgical scene understanding. 
                    A triplet consists of three components: the surgical instrument being used, the action (verb) 
                    being performed, and the anatomical target of that action.
                  </p>
                  <p className="text-muted-foreground">
                    Understanding these triplets enables applications such as surgical workflow analysis, 
                    skill assessment, and intelligent assistance systems. Gastric bypass surgery presents 
                    unique challenges due to the complexity of the procedure and the variety of anatomical structures involved.
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
                    Participants will develop algorithms to recognize surgical action triplets in video frames 
                    from gastric bypass procedures. The task involves:
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
                        <strong className="text-foreground">Triplet Association:</strong> Correctly associating these components into valid triplets
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
                    Submissions will be evaluated using the following metrics:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-secondary rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Primary Metric</h4>
                      <p className="text-sm text-muted-foreground">
                        Mean Average Precision (mAP) for triplet recognition
                      </p>
                    </div>
                    <div className="p-4 bg-secondary rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Secondary Metrics</h4>
                      <p className="text-sm text-muted-foreground">
                        Component-wise AP for instruments, verbs, and targets
                      </p>
                    </div>
                  </div>
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
                    <p className="text-sm text-muted-foreground">Surgery Type</p>
                    <p className="font-semibold text-foreground">Gastric Bypass</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Task Type</p>
                    <p className="font-semibold text-foreground">Action Triplet Recognition</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Data Format</p>
                    <p className="font-semibold text-foreground">Video Frames + Annotations</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Triplet Components</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg">
                    <p className="text-sm font-medium text-primary">Instruments</p>
                    <p className="text-xs text-muted-foreground">Grasper, Bipolar, Scissors, etc.</p>
                  </div>
                  <div className="p-3 bg-accent/10 border border-accent/20 rounded-lg">
                    <p className="text-sm font-medium text-accent">Verbs</p>
                    <p className="text-xs text-muted-foreground">Grasp, Retract, Cut, Coagulate, etc.</p>
                  </div>
                  <div className="p-3 bg-secondary border border-border rounded-lg">
                    <p className="text-sm font-medium text-foreground">Targets</p>
                    <p className="text-xs text-muted-foreground">Stomach, Omentum, Liver, etc.</p>
                  </div>
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
