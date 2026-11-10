import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Send, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you soon.",
    });

    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const fieldClass = "rounded-none h-12 bg-background";

  return (
    <div className="min-h-screen pt-16 md:pt-24">
      {/* Hero */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <span className="eyebrow">Contact</span>
          <h1 className="text-5xl md:text-7xl leading-[1.05] mt-6 mb-6">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Ready to partner with us? We're here to discuss your wholesale requirements and how we can support your business
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 border border-border">
            {/* Contact information panel */}
            <aside className="lg:col-span-5 bg-deep text-primary-foreground p-8 md:p-12 flex flex-col gap-10">
              <div>
                <h2 className="text-3xl mb-2">Contact Information</h2>
                <p className="text-primary-foreground/60 text-sm">UVT Group Ltd · Established in 2024</p>
              </div>

              <ul className="space-y-8">
                <li className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-secondary mt-1 shrink-0" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/50 mb-1">Email</p>
                    <a href="mailto:uvtgroup.ltd@gmail.com" className="text-lg hover:text-secondary transition-colors break-all">
                      uvtgroup.ltd@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-secondary mt-1 shrink-0" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/50 mb-1">
                      Registered office address
                    </p>
                    <p className="text-lg">128 City Road, London, United Kingdom, EC1V 2NX</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-secondary mt-1 shrink-0" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/50 mb-1">Business Hours</p>
                    <div className="space-y-1 text-primary-foreground/85">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                    <p className="text-xs mt-3 italic text-primary-foreground/50">* All times in Central European Time</p>
                  </div>
                </li>
              </ul>
            </aside>

            {/* Form */}
            <div className="lg:col-span-7 p-8 md:p-12 bg-muted/40">
              <h2 className="text-3xl mb-2">Partnership Inquiry</h2>
              <p className="text-muted-foreground mb-8">Fill out the form below and our team will respond</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required className={fieldClass} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className={fieldClass} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" name="company" value={formData.company} onChange={handleChange} className={fieldClass} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="rounded-none bg-background"
                  />
                </div>

                <Button type="submit" size="lg" className="rounded-none h-12 px-10" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2" size={18} />
                      Send Inquiry
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
