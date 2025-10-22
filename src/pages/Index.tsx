import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import TerminalChatbot from '@/components/TerminalChatbot';

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Projects Section */}
      <ProjectsSection />

      {/* Experience Section */}
      <ExperienceSection />
      
      {/* Skills Section */}
      <SkillsSection />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* AI Chatbot */}
      <TerminalChatbot />
    </div>
  );
};

export default Index;
