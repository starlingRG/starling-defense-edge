export const AboutSections = () => {
  return (
    <section className="py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Who We Are */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Who We Are
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Weapons School Instructors. Flight Test Engineers. Operational Test Pilots. Technology integrators. Our team has decades of experience in defense operations and acquisitions. Receive guidance from the people who made the requirements and lived the technical challenges.
          </p>
        </div>

        {/* What We Do */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            What We Do
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We guide defense tech companies through the impossibly opaque world of government acquisition. 
            From SBIR, STTR, DARPA programs, and more. Our team has the operational experience and 
            technical chops to advise on design, implementation and integration.
          </p>
        </div>

        {/* Who We Have Helped */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
            Who We Have Helped
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-16">
            We have advised startups in Y Combinator raising an initial seed round, established Primes, and companies at all stages in between.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
            <div className="text-muted-foreground font-semibold text-lg">
              EpiSci
            </div>
            <div className="text-muted-foreground font-semibold text-lg">
              AMEWAS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
