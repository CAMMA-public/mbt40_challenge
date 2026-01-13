import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, CheckCircle, Clock, Flag } from "lucide-react";

const timelineEvents = [
  {
    date: "January 15, 2026",
    title: "Challenge Announcement",
    description: "Official announcement and website launch",
    status: "completed",
  },
  {
    date: "February 1, 2026",
    title: "Training Data Release",
    description: "Training and validation datasets become available",
    status: "completed",
  },
  {
    date: "February 15, 2026",
    title: "Registration Opens",
    description: "Team registration begins",
    status: "current",
  },
  {
    date: "June 1, 2026",
    title: "Test Data Release",
    description: "Test data released (without annotations)",
    status: "upcoming",
  },
  {
    date: "June 15, 2026",
    title: "Submission Deadline",
    description: "Final submission deadline for all participants",
    status: "upcoming",
  },
  {
    date: "July 1, 2026",
    title: "Results Announcement",
    description: "Preliminary results announced",
    status: "upcoming",
  },
  {
    date: "July 15, 2026",
    title: "Technical Report Deadline",
    description: "Deadline for submitting technical reports",
    status: "upcoming",
  },
  {
    date: "October 2026",
    title: "MICCAI 2026 Workshop",
    description: "Challenge workshop and award ceremony at MICCAI",
    status: "upcoming",
  },
];

const Timeline = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-foreground mb-4">Timeline</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Important dates and deadlines for the challenge
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

              {timelineEvents.map((event, index) => (
                <div key={index} className="relative flex gap-6 pb-8 last:pb-0">
                  {/* Icon */}
                  <div
                    className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                      event.status === "completed"
                        ? "bg-primary"
                        : event.status === "current"
                        ? "bg-primary/50 animate-glow-pulse"
                        : "bg-secondary border border-border"
                    }`}
                  >
                    {event.status === "completed" ? (
                      <CheckCircle className="h-5 w-5 text-primary-foreground" />
                    ) : event.status === "current" ? (
                      <Clock className="h-5 w-5 text-primary-foreground" />
                    ) : (
                      <Calendar className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>

                  {/* Content */}
                  <Card className={`flex-1 ${event.status === "current" ? "border-primary" : ""}`}>
                    <CardContent className="pt-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <h3 className="font-semibold text-foreground">{event.title}</h3>
                        <span
                          className={`text-sm px-3 py-1 rounded-full w-fit ${
                            event.status === "completed"
                              ? "bg-primary/20 text-primary"
                              : event.status === "current"
                              ? "bg-primary/20 text-primary"
                              : "bg-secondary text-muted-foreground"
                          }`}
                        >
                          {event.date}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Note */}
          <div className="mt-12 max-w-3xl mx-auto">
            <Card className="bg-secondary/50">
              <CardContent className="pt-6 flex items-start gap-4">
                <Flag className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Note</h4>
                  <p className="text-sm text-muted-foreground">
                    All deadlines are at 23:59 UTC on the specified date. The organizers reserve the 
                    right to make minor adjustments to the timeline if necessary. Any changes will be 
                    announced via email to registered participants.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Timeline;
