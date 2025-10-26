import { Shield, Settings, Target } from 'lucide-react';

const valueProps = [
  {
    icon: Shield,
    title: "Advanced Threat Modeling",
    description: "Tailored simulations for emerging risks in cyber and kinetic domains."
  },
  {
    icon: Settings,
    title: "Tech Integration Expertise", 
    description: "Seamless fusion of AI, drones, and sensors for defense ops."
  },
  {
    icon: Target,
    title: "Strategic Advisory",
    description: "Bespoke roadmaps to outpace adversaries with agile innovation."
  }
];

export const ValueProposition = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {valueProps.map((prop, index) => (
            <div 
              key={index}
              className="value-card text-center group"
            >
              <div className="value-icon mx-auto">
                <prop.icon 
                  className="w-8 h-8 text-silver" 
                  strokeWidth={1.5}
                />
              </div>
              
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {prop.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};