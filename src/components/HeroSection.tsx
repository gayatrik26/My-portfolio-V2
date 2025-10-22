import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  const codeLines = [
    "const developer = {",
    "  name: 'Gayatri Kadam',",
    "  role: 'AI Software Engineer',",
    "  company: 'KPMG Global Services',",
    "  expertise: ['AI/ML', 'React', 'Node'],",
    "  problemsSolved: '1000+',",
    "  leetcodeRating: '1550+',",
    "  status: 'building awesome projects'",
    "};",
  ];

  useEffect(() => {
    if (currentLineIndex < codeLines.length) {
      const currentLine = codeLines[currentLineIndex];
      let charIndex = 0;

      const typeInterval = setInterval(() => {
        if (charIndex <= currentLine.length) {
          setTypedText((prev) => {
            const lines = prev.split("\n");
            lines[currentLineIndex] = currentLine.slice(0, charIndex);
            return lines.join("\n");
          });
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setCurrentLineIndex((prev) => prev + 1);
          }, 500);
        }
      }, 50);

      return () => clearInterval(typeInterval);
    }
  }, [currentLineIndex]);

  const handleDownloadResume = () => {
    // Replace this URL with your actual Google Drive resume link
    const resumeUrl =
      "https://drive.google.com/file/d/1pg2kmXm4fxQ9fdIT9Kj8zGp6dR7_fS_K/view?usp=sharing";
    window.open(resumeUrl, "_blank");
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-terminal-bg"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-accent/3 via-transparent to-transparent"></div>
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 z-10 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "40px 40px",
            animation: "pulse 4s ease-in-out infinite",
          }}
        ></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-float"></div>
        <div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-secondary/40 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-accent/30 rounded-full animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 w-1 h-1 bg-primary/20 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-10 animate-fade-in">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <Badge
                  variant="outline"
                  className="text-accent border-accent/50 font-mono bg-accent/5 px-4 py-2"
                >
                  currently: online
                </Badge>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl lg:text-8xl font-bold tracking-tight leading-none">
                  <span className="text-gradient bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    Gayatri
                  </span>
                  <br />
                  <span className="text-foreground">Kadam</span>
                </h1>

                <div className="terminal-window max-w-md bg-terminal-bg/50 backdrop-blur-sm">
                  <div className="terminal-header">
                    <div className="terminal-dot close"></div>
                    <div className="terminal-dot minimize"></div>
                    <div className="terminal-dot maximize"></div>
                  </div>
                  <div className="p-4 font-mono text-sm">
                    <p className="text-secondary">$ </p>
                    <p className="text-foreground">
                      AI Software Engineer at{" "}
                      <span className="text-primary">KPMG</span>
                    </p>
                    <p className="text-muted-foreground mt-2">
                      Building intelligent solutions with React, Python, and
                      AI/ML.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-6">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-background font-mono px-8 py-6 text-lg hover:glow-primary transition-all duration-300 hover:scale-105"
                onClick={handleDownloadResume}
              >
                <ExternalLink className="w-5 h-5 mr-3" />
                View Resume
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary font-mono px-8 py-6 text-lg backdrop-blur-sm bg-background/5 transition-all duration-300 hover:scale-105"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <ExternalLink className="w-5 h-5 mr-3" />
                View Projects
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6">
              <Button
                variant="ghost"
                size="lg"
                className="hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 p-4"
                onClick={() =>
                  window.open("https://github.com/gayatrik26", "_blank")
                }
              >
                <Github className="w-6 h-6" />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="hover:text-secondary hover:bg-secondary/10 transition-all duration-300 hover:scale-110 p-4"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/gayatri22/",
                    "_blank"
                  )
                }
              >
                <Linkedin className="w-6 h-6" />
              </Button>
              <a href="mailto:gayatrik22803@gmail.com">
                <Button
                  variant="ghost"
                  size="lg"
                  className="hover:text-accent hover:bg-accent/10 transition-all duration-300 hover:scale-110 p-4"
                >
                  <Mail className="w-6 h-6" />
                </Button>
              </a>
            </div>
          </div>

          {/* Right Side - Enhanced Code Terminal */}
          <div className="lg:block hidden">
            <div className="terminal-window max-w-lg mx-auto hover-lift backdrop-blur-lg bg-terminal-bg/30 shadow-2xl border border-primary/20">
              <div className="terminal-header bg-terminal-bg/50">
                <div className="terminal-dot close"></div>
                <div className="terminal-dot minimize"></div>
                <div className="terminal-dot maximize"></div>
                <span className="font-mono text-sm text-accent ml-4">
                  gayatri@portfolio:~$ cat developer.js
                </span>
              </div>

              <div className="p-8 font-mono text-sm">
                <pre className="text-foreground leading-relaxed">
                  <code>
                    {typedText}
                    {currentLineIndex < codeLines.length && (
                      <span className="typing-cursor"></span>
                    )}
                  </code>
                </pre>
              </div>
            </div>

            {/* Enhanced Achievement Badges */}
            <div className="mt-12 space-y-6">
              <div className="flex gap-6 justify-center">
                <Badge
                  variant="secondary"
                  className="font-mono animate-float px-4 py-2 bg-secondary/20 border-secondary/50 text-secondary-foreground"
                >
                  💻 1000+ Problems Solved
                </Badge>
                <Badge
                  variant="outline"
                  className="font-mono animate-float px-4 py-2 border-primary/50 text-primary bg-primary/10"
                  style={{ animationDelay: "1s" }}
                >
                  ⚡ 1550+ LeetCode Rating
                </Badge>
              </div>
              <div className="flex gap-6 justify-center">
                <Badge
                  variant="outline"
                  className="font-mono animate-float px-4 py-2 border-accent/50 text-accent bg-accent/10"
                  style={{ animationDelay: "2s" }}
                >
                  🎓 DTU Engineering Physics
                </Badge>
                <Badge
                  variant="secondary"
                  className="font-mono animate-float px-4 py-2 bg-secondary/20 border-secondary/50 text-secondary-foreground"
                  style={{ animationDelay: "0.5s" }}
                >
                  🏆 3rd Rank in Branch
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-primary/60 rounded-full flex justify-center bg-primary/5 backdrop-blur-sm">
            <div className="w-2 h-4 bg-gradient-to-b from-primary to-secondary rounded-full mt-3 animate-pulse"></div>
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center font-mono">
            scroll to explore
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
