import { Shield, Globe2, Users, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "All products meet European quality standards and international food safety certifications",
    },
    {
      icon: Globe2,
      title: "Global Expertise",
      description: "Deep understanding of international market requirements and cultural preferences",
    },
    {
      icon: Users,
      title: "Trusted Partner",
      description: "Long-term relationships built on reliability and consistent quality",
    },
    {
      icon: TrendingUp,
      title: "Growth Focused",
      description: "Supporting your business growth with scalable supply solutions",
    },
  ];

  const certifications = ["European Quality Standards", "International Certifications", "Reliable Cold Chain Logistics"];

  return (
    <div className="min-h-screen pt-16 md:pt-24">
      {/* Hero */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8">
              <span className="eyebrow">About us</span>
              <h1 className="text-5xl md:text-7xl leading-[1.05] mt-6 mb-6">About UVT Group Ltd</h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Your trusted partner for premium meat and dairy exports
              </p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <p className="font-serif text-7xl md:text-8xl text-primary leading-none">2024</p>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mt-3">Established in 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <div className="md:sticky md:top-32">
                <span className="eyebrow">Since 2024</span>
                <h2 className="text-4xl md:text-5xl mt-4">Our Story</h2>
              </div>
            </div>
            <div className="md:col-span-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p className="text-xl text-foreground">
                UVT Group Ltd has established itself as a trusted name in the international food export industry,
                with a special focus on serving the growing markets across the globe. We bring together European quality
                standards with deep market expertise.
              </p>
              <p>
                Our comprehensive portfolio includes premium beef, poultry, pork products, and high-quality
                dairy items. Each product in our range is carefully selected to meet the diverse needs of
                our B2B clients - from large retail chains to boutique restaurants.
              </p>
              <p>
                What sets us apart is our understanding that successful exports require more than just
                quality products. It demands reliable logistics, consistent supply, transparent communication,
                and a genuine commitment to our partners' success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission as a quote */}
      <section className="py-20 md:py-28 bg-deep text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl">
            <span className="eyebrow">Our Mission</span>
            <blockquote className="font-serif text-3xl md:text-5xl leading-tight mt-8">
              <span className="text-secondary">“</span>
              To be the most trusted supplier of premium meat and dairy products to global markets,
              combining European quality standards with exceptional service, reliable logistics, and
              a deep commitment to our partners' long-term success.
              <span className="text-secondary">”</span>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <span className="eyebrow">Values</span>
          <h2 className="text-4xl md:text-5xl mt-4 mb-14">Why Partner With Us</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-background p-8 hover:bg-muted/50 transition-colors">
                  <Icon className="w-9 h-9 text-primary mb-10" strokeWidth={1.5} />
                  <h3 className="text-2xl mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <span className="eyebrow">Standards</span>
              <h2 className="text-4xl md:text-5xl mt-4">Quality &amp; Certifications</h2>
            </div>
            <div className="md:col-span-7">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                All our products are sourced from certified European suppliers and undergo rigorous
                quality control processes. We maintain full compliance with international food safety
                standards including HACCP, ISO 22000, and meet all international imports requirements.
              </p>
              <div className="flex flex-wrap gap-3">
                {certifications.map((c) => (
                  <span key={c} className="border border-primary/30 text-primary px-4 py-2 text-sm font-semibold">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
