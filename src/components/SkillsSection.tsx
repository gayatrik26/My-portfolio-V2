import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Brain, 
  Code, 
  Database, 
  Cloud, 
  Monitor, 
  Zap,
  Terminal,
  Server
} from 'lucide-react';

const SkillsSection = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const skillCategories = [
    {
      id: 'languages',
      title: 'Languages',
      icon: Code,
      color: 'text-primary',
      skills: [
        { name: 'Python', level: 70, experience: '1+ years', description: 'FastAPI, ML/AI libraries, Data Science' },
        { name: 'JavaScript/ES6+', level: 90, experience: '2+ years', description: 'React, Node.js, Express, modern frameworks' },
        { name: 'C/C++', level: 85, experience: '2+ years', description: 'DSA, Competitive programming, algorithms' },
        { name: 'TypeScript', level: 70, experience: '1+ year', description: 'Type-safe development, advanced patterns' },
        { name: 'SQL', level: 80, experience: '1+ years', description: 'MySQL, PostgreSQL, complex queries' },
        { name: 'Golang', level: 65, experience: '1 year', description: 'Microservices, concurrent programming' }
      ]
    },
    {
      id: 'ai-ml',
      title: 'AI/ML',
      icon: Brain,
      color: 'text-accent',
      skills: [
        { name: 'TensorFlow & Keras', level: 85, experience: '1+ years', description: 'Deep learning, neural networks, CNNs' },
        { name: 'NLP', level: 88, experience: '1+ years', description: 'RoBERTa, Transformers, Sentiment Analysis, NER' },
        { name: 'Computer Vision', level: 82, experience: '1+ year', description: 'CNN, emotion detection, image processing' },
        { name: 'Scikit-learn', level: 85, experience: '1+ years', description: 'Classical ML, data preprocessing, feature engineering' },
        { name: 'Hugging Face', level: 80, experience: '1+ year', description: 'Pre-trained models, fine-tuning, transformers' },
        { name: 'Spacy', level: 75, experience: '1+ year', description: 'Named Entity Recognition, text processing' },
        { name: 'NumPy & Pandas', level: 88, experience: '1+ years', description: 'Data manipulation, analysis, preprocessing' },
        { name: 'Data Visualization', level: 80, experience: '1+ year', description: 'Matplotlib, Seaborn, data insights' }
      ]
    },
    {
      id: 'frontend',
      title: 'Frontend',
      icon: Monitor,
      color: 'text-secondary',
      skills: [
        { name: 'React.js', level: 85, experience: '2+ years', description: 'Hooks, Context, Performance optimization' },
        { name: 'HTML5/CSS3', level: 88, experience: '3+ years', description: 'Semantic markup, modern CSS' },
        { name: 'Tailwind CSS', level: 85, experience: '2+ years', description: 'Utility-first, responsive design' },
        { name: 'D3.js', level: 70, experience: '1 year', description: 'Data visualization, interactive charts, heatmaps' },
        { name: 'Material UI', level: 75, experience: '1+ year', description: 'Component libraries, theming' },
        { name: 'Bootstrap', level: 80, experience: '2+ years', description: 'Responsive frameworks' }
      ]
    },
    {
      id: 'backend',
      title: 'Backend',
      icon: Server,
      color: 'text-warning',
      skills: [
        { name: 'Node.js', level: 85, experience: '2+ years', description: 'Express, async programming, microservices' },
        { name: 'Express.js', level: 88, experience: '2+ years', description: 'RESTful APIs, middleware, error handling' },
        { name: 'FastAPI', level: 82, experience: '1+ year', description: 'Python APIs, async support, AI integration' },
        { name: 'REST APIs', level: 85, experience: '2+ years', description: 'Design patterns, documentation, integration' },
        { name: 'Microservices', level: 75, experience: '1 year', description: 'Architecture, resilience patterns, circuit breakers' },
        { name: 'Opossum.js', level: 70, experience: '1 year', description: 'Circuit breaker implementation, resilience' }
      ]
    },
    {
      id: 'database',
      title: 'Databases',
      icon: Database,
      color: 'text-success',
      skills: [
        { name: 'MongoDB', level: 82, experience: '1+ years', description: 'NoSQL, aggregation pipelines' },
        { name: 'PostgreSQL', level: 78, experience: '1+ year', description: 'Advanced queries, optimization' },
        { name: 'MySQL', level: 80, experience: '1+ years', description: 'Relational design, performance tuning' },
        { name: 'Firebase', level: 75, experience: '1+ year', description: 'Real-time database, authentication' },
        { name: 'SQL', level: 80, experience: '1+ years', description: 'Complex queries, database design' }
      ]
    },
    {
      id: 'devops',
      title: 'DevOps & Cloud',
      icon: Cloud,
      color: 'text-error',
      skills: [
        { name: 'Microsoft Azure', level: 80, experience: '1 year', description: 'Function Apps, App Services, Translation API' },
        { name: 'Prometheus', level: 78, experience: '1 year', description: 'Monitoring, alerting, metrics' },
        { name: 'Grafana', level: 75, experience: '1 year', description: 'Dashboards, visualization, real-time monitoring' },
        { name: 'GitHub & Git', level: 85, experience: '2+ years', description: 'Version control, CI/CD, SSH workflows' },
        { name: 'VS Code', level: 88, experience: '3+ years', description: 'Development environment, extensions' }
      ]
    }
  ];

  const achievements = [
    { icon: Terminal, label: 'Problems Solved', value: '1000+', description: 'Across multiple platforms' },
    { icon: Zap, label: 'LeetCode Rating', value: '1550+', description: 'Live contest performance' },
    { icon: Code, label: 'GitHub Repos', value: '30+', description: 'Public repositories' },
    { icon: Brain, label: 'AI Projects', value: '5+', description: 'Production deployments' }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="font-mono text-primary border-primary">
            skills.map(skill =&gt; skill.level)
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-gradient">Technical Arsenal</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-mono">
            <span className="text-secondary">//</span> A comprehensive overview of my technical skills and expertise
          </p>
        </div>

        {/* Achievements Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card key={index} className="terminal-window hover-lift group">
                <CardContent className="p-6 text-center">
                  <IconComponent className="w-8 h-8 text-primary mx-auto mb-3 group-hover:text-accent transition-colors duration-300" />
                  <div className="space-y-1">
                    <p className="text-2xl font-bold font-mono text-gradient">{achievement.value}</p>
                    <p className="text-sm font-medium text-foreground">{achievement.label}</p>
                    <p className="text-xs text-muted-foreground font-mono">{achievement.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Skills Tabs */}
        <Tabs defaultValue="languages" className="w-full">
          <TabsList className="grid grid-cols-3 lg:grid-cols-6 mb-8 bg-terminal-bg border border-terminal-border">
            {skillCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="font-mono text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  <span className="hidden lg:inline">{category.title}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="space-y-6">
              
              {/* Category Header */}
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-dot close"></div>
                  <div className="terminal-dot minimize"></div>
                  <div className="terminal-dot maximize"></div>
                  <div className="flex items-center gap-2 ml-4">
                    <category.icon className={`w-4 h-4 ${category.color}`} />
                    <span className="font-mono text-sm text-foreground">
                      {category.title.toLowerCase()}.config.ts
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <pre className="font-mono text-sm text-foreground">
                    <code>
                      {`export const ${category.id} = {
  category: '${category.title}',
  totalSkillSets: ${category.skills.length},
  avgExperience: '2+ years',
  status: 'actively improving'
};`}
                    </code>
                  </pre>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid md:grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <Card 
                    key={skill.name} 
                    className={`terminal-window hover-lift cursor-pointer transition-all duration-300 ${
                      activeSkill === skill.name ? 'glow-primary' : ''
                    }`}
                    onClick={() => setActiveSkill(activeSkill === skill.name ? null : skill.name)}
                  >
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        
                        {/* Skill Header */}
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-foreground">{skill.name}</h4>
                            <p className="text-xs font-mono text-muted-foreground">{skill.experience}</p>
                          </div>
                          <Badge variant="outline" className="font-mono text-xs">
                            {skill.level}%
                          </Badge>
                        </div>

                        {/* Progress Bar */}
                        <div className="space-y-2">
                          <Progress 
                            value={skill.level} 
                            className="h-2"
                          />
                          <div className="flex justify-between text-xs font-mono">
                            <span className="text-muted-foreground">
                              <span className="text-accent">const</span> proficiency = 
                            </span>
                            <span className="text-primary">{skill.level}%;</span>
                          </div>
                        </div>

                        {/* Description (expandable) */}
                        {activeSkill === skill.name && (
                          <div className="mt-3 pt-3 border-t border-terminal-border animate-slide-up">
                            <p className="text-sm text-muted-foreground font-mono">
                              <span className="text-secondary">//</span> {skill.description}
                            </p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Learning Status */}
        <div className="mt-16 text-center">
          <div className="terminal-window inline-block max-w-md">
            <div className="terminal-header">
              <div className="terminal-dot close"></div>
              <div className="terminal-dot minimize"></div>
              <div className="terminal-dot maximize"></div>
              <span className="font-mono text-sm text-muted-foreground ml-4">
                learning-status.sh
              </span>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                <p className="font-mono text-sm text-muted-foreground">
                  <span className="text-secondary">$</span> currently_learning --status
                </p>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                  <span className="font-mono text-sm text-foreground">
                    Always learning, always growing
                  </span>
                </div>
                <p className="font-mono text-xs text-muted-foreground">
                  Next: Advanced Kubernetes, Rust, Web3
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;