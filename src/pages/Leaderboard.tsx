import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trophy, Medal, Award } from "lucide-react";

const leaderboardData = [
  { rank: 1, team: "SurgicalAI Lab", institution: "Stanford University", mAP: 0.823, instrument: 0.891, verb: 0.812, target: 0.766 },
  { rank: 2, team: "MedVision", institution: "ETH Zurich", mAP: 0.815, instrument: 0.887, verb: 0.798, target: 0.761 },
  { rank: 3, team: "DeepSurgery", institution: "MIT CSAIL", mAP: 0.798, instrument: 0.872, verb: 0.789, target: 0.733 },
  { rank: 4, team: "SurgNet", institution: "University of Oxford", mAP: 0.782, instrument: 0.856, verb: 0.773, target: 0.717 },
  { rank: 5, team: "ActionTriplets", institution: "INRIA", mAP: 0.775, instrument: 0.842, verb: 0.768, target: 0.715 },
  { rank: 6, team: "MedicalCV", institution: "University of Toronto", mAP: 0.761, instrument: 0.834, verb: 0.752, target: 0.697 },
  { rank: 7, team: "SurgicalVision", institution: "Imperial College London", mAP: 0.748, instrument: 0.821, verb: 0.741, target: 0.682 },
  { rank: 8, team: "AIScalpel", institution: "Johns Hopkins University", mAP: 0.735, instrument: 0.812, verb: 0.728, target: 0.665 },
];

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return <Trophy className="h-5 w-5 text-yellow-500" />;
    case 2:
      return <Medal className="h-5 w-5 text-gray-400" />;
    case 3:
      return <Award className="h-5 w-5 text-amber-600" />;
    default:
      return <span className="text-muted-foreground">{rank}</span>;
  }
};

const Leaderboard = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-foreground mb-4">Leaderboard</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Current standings on the validation set
          </p>
        </div>
      </section>

      {/* Top 3 */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {leaderboardData.slice(0, 3).map((entry, index) => (
              <Card
                key={entry.rank}
                className={`${
                  index === 0
                    ? "border-yellow-500/50 bg-yellow-500/5"
                    : index === 1
                    ? "border-gray-400/50 bg-gray-400/5"
                    : "border-amber-600/50 bg-amber-600/5"
                }`}
              >
                <CardContent className="pt-6 text-center">
                  <div className="mb-4">{getRankIcon(entry.rank)}</div>
                  <p className="text-2xl font-bold text-foreground">{entry.team}</p>
                  <p className="text-sm text-muted-foreground mb-4">{entry.institution}</p>
                  <div className="p-3 bg-secondary rounded-lg">
                    <p className="text-3xl font-bold text-primary">{(entry.mAP * 100).toFixed(1)}%</p>
                    <p className="text-xs text-muted-foreground">mAP Score</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Full Leaderboard */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <Card>
            <CardHeader>
              <CardTitle>Full Rankings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-16">Rank</TableHead>
                      <TableHead>Team</TableHead>
                      <TableHead className="hidden md:table-cell">Institution</TableHead>
                      <TableHead className="text-right">mAP</TableHead>
                      <TableHead className="text-right hidden sm:table-cell">Instrument</TableHead>
                      <TableHead className="text-right hidden sm:table-cell">Verb</TableHead>
                      <TableHead className="text-right hidden sm:table-cell">Target</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {leaderboardData.map((entry) => (
                      <TableRow key={entry.rank}>
                        <TableCell className="font-medium">
                          <div className="flex items-center justify-center w-8 h-8">
                            {getRankIcon(entry.rank)}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium text-foreground">{entry.team}</p>
                            <p className="text-sm text-muted-foreground md:hidden">{entry.institution}</p>
                          </div>
                        </TableCell>
                        <TableCell className="hidden md:table-cell text-muted-foreground">
                          {entry.institution}
                        </TableCell>
                        <TableCell className="text-right font-semibold text-primary">
                          {(entry.mAP * 100).toFixed(1)}%
                        </TableCell>
                        <TableCell className="text-right hidden sm:table-cell text-muted-foreground">
                          {(entry.instrument * 100).toFixed(1)}%
                        </TableCell>
                        <TableCell className="text-right hidden sm:table-cell text-muted-foreground">
                          {(entry.verb * 100).toFixed(1)}%
                        </TableCell>
                        <TableCell className="text-right hidden sm:table-cell text-muted-foreground">
                          {(entry.target * 100).toFixed(1)}%
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Last updated: January 13, 2026. Final rankings will be based on test set performance.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Leaderboard;
