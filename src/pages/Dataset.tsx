import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, FileVideo, Download, Lock } from "lucide-react";

const Dataset = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-foreground mb-4">Dataset</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Multi-center gastric bypass surgical video dataset with comprehensive action triplet annotations
          </p>
        </div>
      </section>

      {/* Dataset Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-4xl font-bold text-primary">150+</p>
                <p className="text-muted-foreground">Surgical Videos</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-4xl font-bold text-primary">5</p>
                <p className="text-muted-foreground">Medical Centers</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-4xl font-bold text-primary">500K+</p>
                <p className="text-muted-foreground">Annotated Frames</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-4xl font-bold text-primary">100+</p>
                <p className="text-muted-foreground">Triplet Classes</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-primary" />
                  Dataset Description
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  The MultiBypass dataset is a comprehensive collection of laparoscopic gastric bypass 
                  surgery videos from multiple medical centers across different countries.
                </p>
                <p className="text-muted-foreground">
                  Each video is annotated with surgical action triplets at the frame level, providing 
                  detailed information about instrument usage, surgical actions, and anatomical targets.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Key Features:</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Multi-center data ensuring diversity</li>
                    <li>Expert surgeon annotations</li>
                    <li>Frame-level triplet labels</li>
                    <li>High-resolution video data</li>
                    <li>Standardized annotation protocol</li>
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
                      <span className="text-primary font-medium">90 videos</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Full annotations provided for model development
                    </p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-foreground">Validation Set</span>
                      <span className="text-primary font-medium">30 videos</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Annotations provided for hyperparameter tuning
                    </p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-foreground">Test Set</span>
                      <span className="text-primary font-medium">30 videos</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Held-out for final evaluation (labels not released)
                    </p>
                  </div>
                </div>
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
            <h2 className="text-2xl font-bold text-foreground mb-4">Data Access</h2>
            <p className="text-muted-foreground mb-6">
              To access the dataset, you must first register for the challenge and agree to the 
              data usage terms. The dataset is provided for research purposes only.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero">
                <Download className="mr-2 h-4 w-4" /> Request Data Access
              </Button>
              <Button variant="outline">View Data Usage Agreement</Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dataset;
