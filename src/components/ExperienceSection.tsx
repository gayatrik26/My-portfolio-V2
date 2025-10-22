import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Building, GitCommit, ExternalLink } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      company: "KPMG Global Services",
      position: "Analyst – AI Software Engineer",
      department: "KDN AI Labs",
      type: "Full-time",
      location: "Remote",
      duration: "Feb 2025 - Present",
      period: "3 months",
      status: "Current Role",
      achievements: [
        "Built an end-to-end multilingual File, Text, and Folder Translation agent (PDFs, images, documents) with automated file detection,language recognition, and Azure Translation integration.",
        "Deployed secure and scalable services on Azure Function Apps and Azure App Services, implementing Managed Identity, Easy Auth,App Keys, and database configurations for production-ready cloud workflows.",
        "Owned the project lifecycle from development to production, including deployment, monitoring, and performance optimization onAzure.",
        "Deployment & Cloud: Gained hands-on experience in deploying applications using Azure Function Apps and Azure App Services (via VSCode).",
        "Boosted deep learning performance (3×) on HP Z8 Fury | NVIDIA GPUs and configured secure SSH-based GitHub workflows."
      ],
      technologies: ["Python", "Azure", "Javascript", "Postgres", "FastAPI", "Node", "Typescript", "Git", "AI/ML", "MUI"],
      highlights: [
        "Enterprise-scale AI solution deployment",
        "3x performance improvement achieved", 
        "Multilingual document processing system",
        "Secure enterprise development practices"
      ]
    },
    {
      id: 2,
      company: "Delhi Technological University",
      position: "B.Tech Student (Engineering Physics)",
      department: "University of Delhi",
      type: "Academic",
      location: "New Delhi, India",
      duration: "May 2021 - May 2025",
      period: "4 years",
      status: "Graduated",
      achievements: [
        "Maintained 8.49 CGPA throughout the program",
        "Achieved 3rd rank in Engineering Physics branch (5th semester)",
        "Completed coursework in advanced physics, mathematics, and programming",
        "Active member of DTU Girls Football Team with tournament victories"
      ],
      technologies: ["Python", "MATLAB", "C++", "Physics Simulation", "Research Methods"],
      highlights: [
        "Top 3 academic performance",
        "Strong foundation in physics & math",
        "Leadership in sports teams",
        "Technical project experience"
      ]
    }
  ];

  const timelineEvents = [
    { date: "Feb 2025", event: "Started AI Engineer role at KPMG", type: "work" },
    { date: "Dec 2024", event: "Completed final semester projects", type: "education" },
    { date: "Oct 2024", event: "Built ESG Workforce Wellbeing Agent", type: "project" },
    { date: "Sep 2024", event: "Launched CompEgg platform", type: "project" },
    { date: "Aug 2024", event: "Achieved 1550+ LeetCode rating", type: "achievement" },
    { date: "May 2024", event: "Crossed 1000+ problems solved", type: "achievement" },
    { date: "Feb 2024", event: "Won Aagaaz 2024 Football Championship", type: "achievement" },
    { date: "May 2021", event: "Started B.Tech at DTU", type: "education" }
  ];

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'work': return '💼';
      case 'education': return '🎓';
      case 'project': return '🚀';
      case 'achievement': return '🏆';
      default: return '📍';
    }
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="font-mono text-primary border-primary">
            git log --oneline --graph
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-gradient">Experience Timeline</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-mono">
            <span className="text-secondary">//</span> My professional journey and academic achievements
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <Card key={exp.id} className="terminal-window hover-lift">
              {/* Terminal Header */}
              <div className="terminal-header">
                <div className="terminal-dot close"></div>
                <div className="terminal-dot minimize"></div>
                <div className="terminal-dot maximize"></div>
                <div className="flex items-center gap-2 ml-4">
                  <Building className="w-4 h-4 text-primary" />
                  <span className="font-mono text-sm text-foreground">
                    {exp.company.toLowerCase().replace(/\s+/g, '-')}.md
                  </span>
                </div>
                <Badge 
                  variant={exp.status === "Current Role" ? "default" : "secondary"} 
                  className="ml-auto mr-4 font-mono"
                >
                  {exp.status}
                </Badge>
              </div>

              <CardContent className="p-6">
                <div className="grid lg:grid-cols-3 gap-6">
                  
                  {/* Left Column - Basic Info */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-1">
                        {exp.position}
                      </h3>
                      <p className="text-lg text-primary font-semibold">
                        {exp.company}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {exp.department}
                      </p>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="font-mono">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span className="font-mono">{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <GitCommit className="w-4 h-4" />
                        <span className="font-mono">{exp.period} • {exp.type}</span>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="space-y-2">
                      <p className="text-sm font-mono text-muted-foreground">
                        <span className="text-accent">const</span> techStack = [
                      </p>
                      <div className="flex flex-wrap gap-1 ml-4">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="font-mono text-xs">
                            '{tech}'
                          </Badge>
                        ))}
                      </div>
                      <p className="text-sm font-mono text-muted-foreground">];</p>
                    </div>
                  </div>

                  {/* Middle Column - Achievements */}
                  <div className="lg:col-span-1 space-y-4">
                    <h4 className="font-semibold text-foreground mb-3">Key Achievements</h4>
                    <div className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-muted-foreground font-mono leading-relaxed">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column - Highlights */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground mb-3">Highlights</h4>
                    <div className="code-block">
                      <pre className="text-xs text-foreground leading-relaxed">
                        <code className="font-mono">
                          {`// Impact Summary\nconst highlights = {\n`}
                          {exp.highlights.map((highlight, idx) => (
                            `  ${idx + 1}: "${highlight}",\n`
                          )).join('')}
                          {`  status: "completed successfully"\n};`}
                        </code>
                      </pre>
                    </div>

                    {exp.company === "KPMG Global Services" && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="w-full font-mono border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Company Profile
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Git-style Timeline */}
        {/* <div className="terminal-window max-w-4xl mx-auto">
          <div className="terminal-header">
            <div className="terminal-dot close"></div>
            <div className="terminal-dot minimize"></div>
            <div className="terminal-dot maximize"></div>
            <div className="flex items-center gap-2 ml-4">
              <GitCommit className="w-4 h-4 text-primary" />
              <span className="font-mono text-sm text-foreground">
                career-timeline.log
              </span>
            </div>
          </div>
          
          <div className="p-6">
            <div className="space-y-4">
              <p className="font-mono text-sm text-muted-foreground mb-6">
                <span className="text-secondary">$</span> git log --oneline --reverse --since="2021-05-01"
              </p>
              
              <div className="space-y-3">
                {timelineEvents.map((event, index) => (
                  <div key={index} className="flex items-center gap-4 font-mono text-sm">
                    <span className="text-warning w-20 flex-shrink-0">{event.date}</span>
                    <span className="text-accent w-6">{getEventIcon(event.type)}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      <span className="text-foreground">{event.event}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-terminal-border">
                <p className="font-mono text-sm text-muted-foreground">
                  <span className="text-success">HEAD</span> → Current position: Building the future with AI
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ExperienceSection;