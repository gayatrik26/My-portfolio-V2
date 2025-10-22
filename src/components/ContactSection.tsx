import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Code, 
  Send,
  Download,
  ExternalLink,
  Terminal
} from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'gayatrik22803@gmail.com',
      href: 'mailto:gayatrik22803@gmail.com',
      description: 'Primary communication channel'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7385130244',
      href: 'tel:+917385130244',
      description: 'Available during business hours'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bangalore, India',
      href: null,
      description: 'Open to opportunities'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      username: 'gayatrik26',
      url: 'https://github.com/gayatrik26',
      stats: '30+ repositories',
      description: 'Source code & projects'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      username: 'gayatri22',
      url: 'https://www.linkedin.com/in/gayatri22/',
      stats: '500+ connections',
      description: 'Professional network'
    },
    {
      icon: Code,
      label: 'LeetCode',
      username: 'Gayatrik_22',
      url: 'https://leetcode.com/u/Gayatrik_22/',
      stats: '1550+ rating',
      description: 'Competitive programming'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
      
      setFormData({ name: '', email: '', company: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  const handleDownloadResume = () => {
    // Replace this URL with your actual Google Drive resume link
    const resumeUrl =
      "https://drive.google.com/file/d/1pg2kmXm4fxQ9fdIT9Kj8zGp6dR7_fS_K/view?usp=sharing";
    window.open(resumeUrl, "_blank");
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="font-mono text-primary border-primary">
            POST /api/contact
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-gradient">Let's Connect</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-mono">
            <span className="text-secondary">//</span> Ready to build something amazing together?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Left Side - Contact Form */}
          <div className="space-y-8">
            <Card className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot close"></div>
                <div className="terminal-dot minimize"></div>
                <div className="terminal-dot maximize"></div>
                <div className="flex items-center gap-2 ml-4">
                  <Terminal className="w-4 h-4 text-primary" />
                  <span className="font-mono text-sm text-foreground">
                    contact-form.tsx
                  </span>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="font-mono text-lg">
                  <span className="text-accent">const</span> message = <span className="text-primary">await</span> sendMessage()
                </CardTitle>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-mono text-muted-foreground">
                        <span className="text-accent">name</span>: string
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        required
                        className="font-mono bg-terminal-bg border-terminal-border focus:border-primary"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-mono text-muted-foreground">
                        <span className="text-accent">email</span>: string
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                        className="font-mono bg-terminal-bg border-terminal-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-mono text-muted-foreground">
                      <span className="text-accent">company</span>?: string
                    </label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Company Name (Optional)"
                      className="font-mono bg-terminal-bg border-terminal-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-mono text-muted-foreground">
                      <span className="text-accent">message</span>: string
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, opportunity, or just say hi!"
                      rows={5}
                      required
                      className="font-mono bg-terminal-bg border-terminal-border focus:border-primary"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-accent hover:glow-primary font-mono"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quick Resume Download */}
            <Card className="terminal-window">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <h3 className="font-mono text-lg text-foreground">
                    <span className="text-secondary">//</span> Quick Access
                  </h3>
                  <p className="text-sm text-muted-foreground font-mono">
                    Download my detailed resume with all technical skills and projects
                  </p>
                  <Button 
                    onClick={handleDownloadResume}
                    variant="outline"
                    className="w-full font-mono border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Detailed Resume
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Contact Info & Social Links */}
          <div className="space-y-8">
            
            {/* Contact Information */}
            <Card className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot close"></div>
                <div className="terminal-dot minimize"></div>
                <div className="terminal-dot maximize"></div>
                <div className="flex items-center gap-2 ml-4">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="font-mono text-sm text-foreground">
                    contact-info.json
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-6">
                  {contactInfo.map((contact, index) => {
                    const IconComponent = contact.icon;
                    return (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center gap-3">
                          <IconComponent className="w-5 h-5 text-primary" />
                          <div className="flex-1">
                            <p className="font-mono text-sm text-muted-foreground">
                              "{contact.label.toLowerCase()}":
                            </p>
                            <p className="font-mono text-foreground">
                              {contact.href ? (
                                <a 
                                  href={contact.href}
                                  className="text-primary hover:text-accent transition-colors"
                                >
                                  "{contact.value}"
                                </a>
                              ) : (
                                `"${contact.value}"`
                              )}
                            </p>
                            <p className="text-xs text-muted-foreground font-mono">
                              <span className="text-secondary">//</span> {contact.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot close"></div>
                <div className="terminal-dot minimize"></div>
                <div className="terminal-dot maximize"></div>
                <div className="flex items-center gap-2 ml-4">
                  <Github className="w-4 h-4 text-primary" />
                  <span className="font-mono text-sm text-foreground">
                    social-links.ts
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  {socialLinks.map((link, index) => {
                    const IconComponent = link.icon;
                    return (
                      <div key={index} className="flex items-center justify-between p-3 rounded border border-terminal-border hover:border-primary transition-colors">
                        <div className="flex items-center gap-3">
                          <IconComponent className="w-5 h-5 text-primary" />
                          <div>
                            <p className="font-mono text-sm text-foreground">
                              {link.label}
                            </p>
                            <p className="font-mono text-xs text-muted-foreground">
                              @{link.username}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {link.description}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge variant="outline" className="font-mono text-xs mb-2">
                            {link.stats}
                          </Badge>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            asChild
                            className="hover:text-primary"
                          >
                            <a href={link.url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Current Status */}
            <Card className="terminal-window">
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                    <span className="font-mono text-sm text-foreground">
                      Currently available for opportunities
                    </span>
                  </div>
                  <p className="font-mono text-xs text-muted-foreground">
                    <span className="text-secondary">//</span> Open to full-time, contract, and consulting roles
                  </p>
                  <p className="font-mono text-xs text-muted-foreground">
                    <span className="text-secondary">//</span> Response time: Usually within 24 hours
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;