import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Brain, Code, Shield } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "AI-Powered ESG Workforce Wellbeing Agent",
      description:
        "Enterprise dashboard for workforce health monitoring using multimodal AI",
      longDescription: `// Project Overview
A comprehensive workforce wellbeing solution that combines:
• Wearable sensor data aggregation
• Email sentiment analysis using RoBERTa
• Camera-based emotion detection with CNN
• Environmental metrics monitoring
• LLM-powered wellness recommendations

// Key Achievements  
• Real-time burnout risk detection
• Custom wellness program generation
• Multimodal AI system integration
• HR dashboard for 500+ employees`,
      icon: Brain,
      technologies: [
        "FastAPI",
        "Hugging Face",
        "RoBERTa",
        "CNN",
        "TensorFlow",
        "React",
        "Python",
      ],
      // github: "https://github.com/gayatri-kadam/esg-wellbeing",
      // demo: "https://esg-wellbeing-demo.vercel.app",
      category: "AI/ML",
      // status: "// Status: Production Ready"
    },
    {
      id: 2,
      title: "CompEgg - Competitive Programming Dashboard",
      description:
        "Interactive analytics platform aggregating data from multiple coding platforms",
      longDescription: `// Architecture
const platforms = ['LeetCode', 'GeeksforGeeks', 'CodeChef', 'Codeforces'];
const features = {
  dataAggregation: 'Platform-specific APIs',
  visualization: 'D3.js heatmaps',
  authentication: 'Firebase Auth + Google OAuth',
  backend: 'Express.js + MongoDB'
};

// Impact
• Unified dashboard for 1000+ users
• Real-time progress tracking
• Performance analytics and insights
• Social competitive features`,
      icon: Code,
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "D3.js",
        "Firebase",
        "Tailwind CSS",
      ],
      github: "https://github.com/abhishekgiri013/CompEgg",
      demo: "https://compegg.onrender.com/",
      category: "Full Stack",
      status: "// Status: Live & Scaling",
    },
    {
      id: 3,
      title: "Microservices Resilience Platform",
      description:
        "Enterprise-grade monitoring and error handling for distributed systems",
      longDescription: `// System Design
const resilience = {
  circuitBreaker: 'Opossum.js patterns',
  monitoring: 'Prometheus + Grafana',
  errorHandling: 'Custom middleware',
  containerization: 'Docker + Kubernetes'
};

// Features
• Fault tolerance patterns
• Real-time system monitoring
• Automated failover mechanisms  
• Performance optimization tools
• 99.9% uptime achievement`,
      icon: Shield,
      technologies: [
        "Node.js",
        "Prometheus",
        "Grafana",
        "Docker",
        "Kubernetes",
        "React",
        "Circuit Breaker",
      ],
      // github: "https://github.com/gayatri-kadam/microservices-resilience",
      // demo: "https://resilience-platform.demo",
      category: "DevOps",
      // status: "// Status: Enterprise Ready"
    },
  ];

  const getIconColor = (category: string) => {
    switch (category) {
      case "AI/ML":
        return "text-accent";
      case "Full Stack":
        return "text-primary";
      case "DevOps":
        return "text-secondary";
      default:
        return "text-foreground";
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge
            variant="outline"
            className="font-mono text-primary border-primary"
          >
            projects.length = {projects.length}
          </Badge>

          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-gradient">Recent Projects</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-mono">
            <span className="text-secondary">//</span> A showcase of my latest
            work in AI, full-stack development, and DevOps
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon;

            return (
              <Card
                key={project.id}
                className="terminal-window hover-lift group overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Terminal Header */}
                <div className="terminal-header">
                  <div className="terminal-dot close"></div>
                  <div className="terminal-dot minimize"></div>
                  <div className="terminal-dot maximize"></div>
                  <div className="flex items-center gap-2 ml-4">
                    <IconComponent
                      className={`w-4 h-4 ${getIconColor(project.category)}`}
                    />
                    <span className="font-mono text-sm text-foreground">
                      {project.title.toLowerCase().replace(/\s+/g, "-")}.tsx
                    </span>
                  </div>
                  <Badge
                    variant="outline"
                    className="ml-auto mr-4 font-mono text-xs"
                  >
                    {project.category}
                  </Badge>
                </div>

                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Left Side - Project Info */}
                    <div className="space-y-4">
                      <div>
                        <CardTitle className="text-2xl mb-2 group-hover:text-gradient transition-all duration-300">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-base text-muted-foreground">
                          {project.description}
                        </CardDescription>
                      </div>

                      {/* Tech Stack */}
                      <div className="space-y-2">
                        <p className="text-sm font-mono text-muted-foreground">
                          <span className="text-accent">import</span>{" "}
                          technologies{" "}
                          <span className="text-secondary">from</span>{" "}
                          <span className="text-primary">'./stack'</span>;
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="font-mono text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      {(project.github || project.demo) && (
                        <div className="flex gap-3 pt-2">
                          {project.github && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="font-mono border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                              onClick={() =>
                                window.open(project.github, "_blank")
                              }
                            >
                              <Github className="w-4 h-4 mr-2" />
                              Source
                            </Button>
                          )}
                          {project.demo && (
                            <Button
                              size="sm"
                              className="font-mono bg-gradient-accent hover:glow-primary"
                              onClick={() =>
                                window.open(project.demo, "_blank")
                              }
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </Button>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Right Side - Code Preview */}
                    <div className="space-y-4">
                      <div className="code-block">
                        <pre className="text-xs text-foreground leading-relaxed overflow-x-auto">
                          <code className="font-mono">
                            {project.longDescription}
                          </code>
                        </pre>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs text-success">
                          {project.status}
                        </span>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                          <span className="font-mono text-xs text-muted-foreground">
                            Build: Passing
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-12">
          <div className="terminal-window inline-block">
            <div className="terminal-header">
              <div className="terminal-dot close"></div>
              <div className="terminal-dot minimize"></div>
              <div className="terminal-dot maximize"></div>
              <span className="font-mono text-sm text-muted-foreground ml-4">
                more-projects.sh
              </span>
            </div>
            <div className="p-6">
              <p className="font-mono text-sm text-muted-foreground mb-4">
                <span className="text-secondary">$</span> ls -la ~/projects | wc
                -l
              </p>
              <p className="font-mono text-2xl text-primary mb-4">
                30+ repositories
              </p>
              <Button
                variant="outline"
                className="font-mono border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() =>
                  window.open("https://github.com/gayatrik26", "_blank")
                }
              >
                <Github className="w-4 h-4 mr-2" />
                View All on GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
