import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileText, AlertCircle, CheckCircle, ExternalLink } from "lucide-react";

const Submission = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-foreground mb-4">Submission Guidelines</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            How to register, prepare, and submit your solution
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
                  To participate in the challenge, teams must complete the registration process:
                </p>
                <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
                  <li>Create an account on the submission platform</li>
                  <li>Form a team (1-10 members)</li>
                  <li>Accept the data usage agreement</li>
                  <li>Download the dataset</li>
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
                  Submissions should be in the following format:
                </p>
                <div className="p-4 bg-secondary rounded-lg font-mono text-sm text-foreground">
                  <p>submission.json</p>
                  <p className="text-muted-foreground">{`{`}</p>
                  <p className="text-muted-foreground pl-4">"video_id": {`{`}</p>
                  <p className="text-muted-foreground pl-8">"frame_id": [triplet_predictions]</p>
                  <p className="text-muted-foreground pl-4">{`}`}</p>
                  <p className="text-muted-foreground">{`}`}</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Detailed submission format documentation is available after registration.
                </p>
              </CardContent>
            </Card>
          </div>

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
                      Use of publicly available pre-trained models
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      Data augmentation techniques
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      Ensemble methods
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      External publicly available datasets
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
                      Manual annotation of test data
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive">✗</span>
                      Use of private datasets
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive">✗</span>
                      Multiple accounts per team
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive">✗</span>
                      Sharing test data predictions between teams
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submission Limits */}
          <Card>
            <CardHeader>
              <CardTitle>Submission Limits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-secondary rounded-lg">
                  <p className="text-3xl font-bold text-primary">5</p>
                  <p className="text-muted-foreground">Submissions per day</p>
                </div>
                <div className="text-center p-4 bg-secondary rounded-lg">
                  <p className="text-3xl font-bold text-primary">100</p>
                  <p className="text-muted-foreground">Total submissions</p>
                </div>
                <div className="text-center p-4 bg-secondary rounded-lg">
                  <p className="text-3xl font-bold text-primary">2</p>
                  <p className="text-muted-foreground">Final selections</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Submission;
