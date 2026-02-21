import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info } from "lucide-react";

const Leaderboard = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-foreground mb-4">Leaderboard</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Challenge rankings based on triplet mAP
          </p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-2">
                  <Info className="h-5 w-5 text-primary" />
                  Coming Soon
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  The leaderboard will be available after the challenge submissions are evaluated. Results will be first presented at the Endoscopic Vision Challenge meeting at MICCAI 2026 during <strong className="text-foreground">October 4 - 8, 2026</strong> at ADNEC Centre, Abu Dhabi.
                </p>
                <p className="text-muted-foreground">
                  Rankings will be based on descending <strong className="text-foreground">triplet mAP</strong>, with complementary macro-F1 scores and component-wise breakdowns (Instrument, Verb, Target).
                </p>
                <p className="text-sm text-muted-foreground">
                  Participants from the organizers' institutes will not appear on the official leaderboard. A single baseline result from the organizing team will be provided for reference only, clearly marked as non-competitive.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Leaderboard;
