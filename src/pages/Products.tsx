import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import beefImage from "@/assets/beef.webp";
import chickenImage from "@/assets/chicken.webp";
import sausagesImage from "@/assets/sausages.webp";
import brisketImage from "@/assets/brisket.webp";
import porkBalykImage from "@/assets/pork-balyk.webp";
import mozzarellaImage from "@/assets/mozzarella.webp";
import cheddarImage from "@/assets/cheddar.webp";

const Products = () => {
  const products = [
    {
      name: "Premium Beef",
      image: beefImage,
      category: "Meat",
      description: "High-quality beef cuts sourced from certified European suppliers. Perfect for retail chains and restaurants requiring consistent quality.",
      features: ["Various cuts available", "Vacuum sealed", "Certified origin", "Wholesale packaging"],
    },
    {
      name: "Chicken Fillet",
      image: chickenImage,
      category: "Poultry",
      description: "Made high-quality poultry, ready-to-eat",
      features: ["Boneless cuts", "Quick-freeze technology", "HACCP certified", "Customizable packaging"],
    },
    {
      name: "Sausages",
      image: sausagesImage,
      category: "Meat",
      description: "Gourmet sausages for every occasion",
      features: ["Multiple varieties", "Natural casings", "No artificial additives", "Extended shelf life"],
    },
    {
      name: "Brisket and Ham",
      image: brisketImage,
      category: "Meat",
      description: "Premium ready-to-eat meat cuts",
      features: ["Premium marbling", "Consistent quality", "Portion control options", "Frozen or chilled"],
    },
    {
      name: "Pork Fillet",
      image: porkBalykImage,
      category: "Delicatessen",
      description: "Delicate smoked-boiled pork",
      features: ["Traditional recipe", "Carefully smoked", "Sliced or whole", "Premium packaging"],
    },
    {
      name: "Mozzarella",
      image: mozzarellaImage,
      category: "Dairy",
      description: "Exclusive Italian-style cheese",
      features: ["Multiple sizes", "Fresh daily production", "Extended shelf life", "Food service packaging"],
    },
    {
      name: "Cheddar Cheese",
      image: cheddarImage,
      category: "Dairy",
      description: "Aged cheddar cheese with rich, distinctive flavor. Available in various maturity levels for diverse market preferences.",
      features: ["Multiple aging options", "Blocks or sliced", "Consistent quality", "Retail-ready packaging"],
    },
  ];

  const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];
  const [active, setActive] = useState("All");
  const shown = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <div className="min-h-screen pt-16 md:pt-24">
      {/* Hero */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <span className="eyebrow">Catalogue</span>
          <h1 className="text-5xl md:text-7xl leading-[1.05] mt-6 mb-6 max-w-4xl">Our Product Range</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Premium meat and dairy products meeting international quality standards for wholesale distribution
          </p>
        </div>
      </section>

      {/* Filter + list */}
      <section className="pb-20 md:pb-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 border-b border-border pb-6 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 text-sm font-semibold border transition-colors ${
                  active === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-foreground/70 hover:border-foreground/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            {shown.map((product, index) => (
              <article
                key={product.name}
                className="grid md:grid-cols-12 gap-0 border border-border bg-card overflow-hidden"
              >
                <div
                  className={`md:col-span-5 relative overflow-hidden bg-[#E6E2DF] aspect-[4/3] md:aspect-auto md:min-h-[320px] ${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-3">
                    {product.category}
                  </span>
                  <h2 className="text-3xl md:text-4xl mb-4">{product.name}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6 max-w-xl">{product.description}</p>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">Key Features</p>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="text-sm flex items-center gap-2">
                        <Check size={16} className="text-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Custom orders */}
      <section className="py-20 md:py-28 bg-deep text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-8">
              <span className="eyebrow">Tailored supply</span>
              <h2 className="text-4xl md:text-5xl mt-4 mb-6">Custom Orders &amp; Packaging</h2>
              <p className="text-lg text-primary-foreground/75 leading-relaxed max-w-2xl">
                We understand that different markets have unique requirements. All our products can be
                customized in terms of packaging sizes, cuts, and specifications to meet your exact needs.
                Contact us to discuss your specific requirements and minimum order quantities.
              </p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 h-12 font-semibold bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors"
              >
                Request a Quote <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
