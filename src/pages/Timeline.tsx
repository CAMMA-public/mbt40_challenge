import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, CheckCircle, Flag } from "lucide-react";

const timelineEvents = [
  {
    startDate: "2026-04-01",
    date: "April 1, 2026",
    title: "Registration Opens",
    description: "Team registration begins",
  },
  {
    startDate: "2026-04-08",
    date: "April 8, 2026",
    title: "Training Data & Evaluation Script Release",
    description: "Release of the training dataset and the evaluation metrics script",
  },
  {
    startDate: "2026-05-04",
    date: "May 4, 2026",
    title: "Discord Channel & Tutorial Launch",
    description: "Launch of Discord channel for interaction with participants and Colab tutorial",
  },
  {
    startDate: "2026-06-01",
    date: "June 1, 2026",
    title: "Docker Submission Template Release",
    description: "Release of Docker submission template with input/output protocols",
  },
  {
    startDate: "2026-06-18",
    date: "June 18, 2026",
    title: "Self-Validation Phase",
    description: "Self-validation phase for testing Docker containers begins",
  },
  {
    startDate: "2026-06-25",
    date: "June 25, 2026",
    title: "Registration Closes",
    description: "Last day to register for the challenge",
  },
  {
    startDate: "2026-07-18",
    date: "July 18, 2026",
    title: "Self-Validation Report Deadline",
    description: "Deadline for submission of self-validation report",
  },
  {
    startDate: "2026-09-03",
    date: "September 3, 2026",
    title: "Final Submission Deadline",
    description: "Docker, presentation & report submission deadline (11:59pm CET)",
  },
  {
    startDate: "2026-10-04",
    date: "October 4 - 8, 2026",
    title: "Challenge Week at MICCAI 2026",
    description: "Challenge presence at ADNEC Centre, Abu Dhabi",
  },
];

type TimelineStatus = "upcoming" | "active";

const getTimelineStatus = (startDate: string): TimelineStatus => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const eventDate = new Date(`${startDate}T00:00:00`);
  return eventDate <= today ? "active" : "upcoming";
};

const Timeline = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-foreground mb-4">Timeline</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Important dates and deadlines for the MultiBypassT40 challenge
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

              {timelineEvents.map((event, index) => {
                const status = getTimelineStatus(event.startDate);

                return (
                <div key={index} className="relative flex gap-6 pb-8 last:pb-0">
                  {/* Icon */}
                  <div
                    className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                      status === "active"
                        ? "bg-primary"
                        : "bg-secondary border border-border"
                    }`}
                  >
                    {status === "active" ? (
                      <CheckCircle className="h-5 w-5 text-primary-foreground" />
                    ) : (
                      <Calendar className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>

                  {/* Content */}
                  <Card className={`flex-1 ${status === "active" ? "border-primary/50" : ""}`}>
                    <CardContent className="pt-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <h3 className="font-semibold text-foreground">{event.title}</h3>
                        <span
                          className={`text-sm px-3 py-1 rounded-full w-fit ${
                            status === "active"
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
              );
              })}
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
                    All deadlines are at 23:59 CET on the specified date unless otherwise noted. The organizers reserve the 
                    right to make minor adjustments to the timeline if necessary. Any changes will be 
                    announced via email to registered participants and on the Discord channel.
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
