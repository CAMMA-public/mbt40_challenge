import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileText, AlertCircle, CheckCircle, ExternalLink, Package } from "lucide-react";

const Submission = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-foreground mb-4">Submission Guidelines</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            How to register, prepare, and submit your Docker container
          </p>
        </div>
      </section>

      {/* Registration */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Registration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Registration opens <strong className="text-foreground">April 1, 2026</strong> and closes <strong className="text-foreground">June 25, 2026</strong>.
                </p>
                <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
                  <li>Register your team on the challenge platform</li>
                  <li>Accept the data usage agreement (CC BY-NC-SA)</li>
                  <li>Download the training dataset and starter kit</li>
                  <li>Join the Discord channel for support (launching May 4)</li>
                </ol>
                <Button variant="hero" className="w-full mt-4">
                  <ExternalLink className="mr-2 h-4 w-4" /> Register Your Team
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5 text-primary" />
                  Submission Format
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Participating teams must submit a <strong className="text-foreground">Docker container</strong> containing their code. The organizers will evaluate submissions on the hidden test set.
                </p>
                <div className="p-4 bg-secondary rounded-lg space-y-2">
                  <p className="text-sm font-semibold text-foreground">What you'll receive:</p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Starter kit with dataset setup instructions</li>
                    <li>Baseline training code</li>
                    <li>Official evaluation script</li>
                    <li>Dockerfile with required I/O mounts and formats</li>
                  </ul>
                </div>
                <p className="text-sm text-muted-foreground">
                  Only the last submission from each team before the deadline will be evaluated for the challenge ranking.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Submission Phases */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5 text-primary" />
                Submission Phases
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-secondary rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Self-Validation Phase</h4>
                  <p className="text-sm text-muted-foreground">
                    Starting June 18: Participants self-evaluate on the validation data using their Docker image. The Docker image is <strong className="text-foreground">not</strong> submitted at this stage. Participants submit the output of their validated Docker image to confirm compliance with submission guidelines.
                  </p>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Final Submission</h4>
                  <p className="text-sm text-muted-foreground">
                    By September 3 (11:59pm CET): Submit final Docker image, presentation, and technical report (word-doc/pdf describing the method). Only the last submission is evaluated for ranking.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rules */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Participation Rules</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" /> Allowed
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      Fully automatic algorithms only
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      Publicly available datasets (e.g., CholecT50, ProstaTD)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      Open pre-trained models and networks
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      Data augmentation and ensemble methods
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-destructive" /> Not Allowed
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-destructive">✗</span>
                      Access to future frames during evaluation (must be online/causal)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive">✗</span>
                      Use of private datasets
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive">✗</span>
                      Submissions with missing results on test cases
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive">✗</span>
                      Organizers' institute members on official leaderboard
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Awards & Publication */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Awards</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  The winner will be awarded a prize if at least 3 teams submit results. Depending on the number of teams, up to 2 runner-ups may also be awarded.
                </p>
                <p className="text-sm">
                  Awards are sponsored by IHU Strasbourg. Participants from the organizers' institutes are not eligible for awards.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Publication</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  Top-N performing teams will co-author a joint publication (potential Medical Image Analysis journal). Each team can submit at most 2 qualifying authors.
                </p>
                <p className="text-sm">
                  Participants may publish their own results only after the joint challenge paper (expected end of 2026). All teams will be acknowledged.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Submission;
