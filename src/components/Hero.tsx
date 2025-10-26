import { ParticleBackground } from './ParticleBackground';
import heroBackground from '@/assets/hero-background.jpg';

interface HeroProps {
  onContactClick: () => void;
}

export const Hero = ({ onContactClick }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-background overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroBackground})`,
          opacity: 0.4
        }}
      />
      
      {/* Particle Animation Overlay */}
      <ParticleBackground />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <h1 className="hero-title mb-8">
          Starling Research Group
        </h1>
        
        <p className="hero-subtitle mb-12">
          Strategic Defense Tech Consulting – Innovating Security for Tomorrow's Threats
        </p>
        
        <button 
          onClick={onContactClick}
          className="cta-primary hover:scale-105 transition-transform duration-300"
        >
          Start Planning
        </button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground">
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-sm mb-2">Explore</span>
          <div className="w-1 h-8 bg-silver opacity-50 rounded-full" />
        </div>
      </div>
    </section>
  );
};