import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Award, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.webp";
import beefImage from "@/assets/beef.webp";
import chickenImage from "@/assets/chicken.webp";
import sausagesImage from "@/assets/sausages.webp";
import brisketImage from "@/assets/brisket.webp";
import porkBalykImage from "@/assets/pork-balyk.webp";
import mozzarellaImage from "@/assets/mozzarella.webp";
import cheddarImage from "@/assets/cheddar.webp";

const Home = () => {
  const products = [
    { name: "Premium Beef", image: beefImage, category: "Meat", description: "Finest cuts for discerning markets" },
    { name: "Chicken Fillet", image: chickenImage, category: "Poultry", description: "Made high-quality poultry, ready-to-eat" },
    { name: "Sausages", image: sausagesImage, category: "Meat", description: "Gourmet sausages for every occasion" },
    { name: "Brisket and Ham", image: brisketImage, category: "Meat", description: "Premium ready-to-eat meat cuts" },
    { name: "Pork Fillet", image: porkBalykImage, category: "Delicatessen", description: "Delicate smoked-boiled pork" },
    { name: "Mozzarella", image: mozzarellaImage, category: "Dairy", description: "Exclusive Italian-style cheese" },
    { name: "Cheddar Cheese", image: cheddarImage, category: "Dairy", description: "Aged to perfection" },
  ];

  const features = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Specialized expertise in global foods supplies and reliable logistics",
    },
    {
      icon: Award,
      title: "European Quality",
      description: "Meeting the highest international food safety standards",
    },
    {
      icon: Truck,
      title: "Reliable Supply",
      description: "Consistent delivery and long-term partnership focus",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero: headline on top, wide photo below */}
      <section className="pt-16 md:pt-24 bg-background">
        <div className="container mx-auto px-4 pt-10 md:pt-12 pb-8 md:pb-10">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end">
            <h1 className="lg:col-span-7 text-5xl md:text-6xl xl:text-7xl leading-[1.05]">
              Premium Meat &amp; Dairy
            </h1>
            <div className="lg:col-span-5 lg:pb-2">
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Your trusted partner for high-quality food.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="rounded-none h-12 px-8">
                  <Link to="/products">
                    View Products <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-none h-12 px-8 border-foreground/30 bg-transparent">
                  <Link to="/contact">Partner With Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="relative h-[280px] sm:h-[360px] lg:h-[460px] overflow-hidden">
            <img src={heroImage} alt="Premium meat and dairy products" className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-3 border-x border-b border-border bg-card text-center">
            {[
              ["2024", "Established"],
              ["EU", "Quality standards"],
              ["Global", "Logistics"],
            ].map(([value, label]) => (
              <div key={label} className="py-5 md:py-6 border-r last:border-r-0 border-border">
                <p className="font-serif text-2xl md:text-3xl text-primary leading-none">{value}</p>
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mt-2">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="py-14 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="eyebrow">Who we are</span>
            <h2 className="text-3xl md:text-4xl mt-4 mb-4">Welcome to UVT Group Ltd</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a leading international exporter, we specialize in delivering premium meat and dairy products
              to distributors, retail chains, and restaurants.
            </p>
          </div>
        </div>
      </section>

      {/* Why choose: dark band, numbered */}
      <section className="py-14 md:py-20 bg-deep text-primary-foreground">
        <div className="container mx-auto px-4">
          <span className="eyebrow">Our strengths</span>
          <h2 className="text-4xl md:text-5xl mt-4 mb-10 max-w-2xl">Why Choose UVT Group Ltd</h2>
          <div className="grid md:grid-cols-3 border-t border-primary-foreground/15">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="py-8 md:px-8 first:md:pl-0 border-b md:border-b-0 md:border-r last:border-0 border-primary-foreground/15"
                >
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-serif text-5xl text-secondary">0{index + 1}</span>
                    <Icon className="w-7 h-7 text-primary-foreground/50" />
                  </div>
                  <h3 className="text-2xl mb-3">{feature.title}</h3>
                  <p className="text-primary-foreground/70 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-14 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <span className="eyebrow">Catalogue</span>
              <h2 className="text-4xl md:text-5xl mt-4">Our Premium Products</h2>
              <p className="text-lg text-muted-foreground mt-4 max-w-xl">
                High-quality meat and dairy products meeting international standards
              </p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all shrink-0"
            >
              View All Products <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {products.map((product, index) => (
              <Link to="/products" key={index} className="group bg-background p-6 flex flex-col">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  <span>{product.category}</span>
                  <span>0{index + 1}</span>
                </div>
                <div className="aspect-square overflow-hidden my-5 bg-[#E6E2DF]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-end justify-between gap-4 mt-auto">
                  <div>
                    <h3 className="text-xl">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{product.description}</p>
                  </div>
                  <ArrowRight
                    size={18}
                    className="shrink-0 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                  />
                </div>
              </Link>
            ))}
            <Link
              to="/contact"
              className="hidden lg:flex bg-primary text-primary-foreground p-6 flex-col justify-end hover:bg-primary/95 transition-colors"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/60 mb-3">Wholesale</span>
              <span className="font-serif text-2xl mb-4">Need a custom order?</span>
              <span className="inline-flex items-center gap-2 font-semibold">
                Request a Quote <ArrowRight size={18} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-primary text-primary-foreground p-8 md:p-12 grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <h2 className="text-4xl md:text-5xl mb-4">Ready to Partner With Us?</h2>
              <p className="text-lg text-primary-foreground/75 max-w-2xl">
                Join leading distributors and retailers who trust UVT Group Ltd for their premium food supply needs
              </p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <Button asChild size="lg" className="rounded-none h-12 px-8 bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Link to="/contact">
                  Get in Touch <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
