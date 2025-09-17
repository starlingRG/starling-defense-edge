import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { ValueProposition } from '@/components/ValueProposition';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';

const Index = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onContactClick={scrollToContact} />
      <Hero onContactClick={scrollToContact} />
      <ValueProposition />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
