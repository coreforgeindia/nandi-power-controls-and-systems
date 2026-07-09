import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  Award, Users, Cpu, Settings, Headphones, 
  Smile, Truck, ShieldAlert, BadgeCheck, Activity 
} from "lucide-react";
import { stats } from "@/data/content";
import { AnimatedCounter } from "@/components/animated-counter";

export default function WhyUs() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const advantages = [
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Quality Assurance",
      desc: "Every product is subject to rigorous testing conforming to IS:2026, IS:1180, and CPRI guidelines."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Experienced Engineers",
      desc: "Our design and manufacturing team possesses decades of combined experience in power engineering."
    },
    {
      icon: <Cpu className="w-8 h-8 text-primary" />,
      title: "Modern Technology",
      desc: "We leverage advanced materials including amorphous cores and low-loss CRGO laminations."
    },
    {
      icon: <Settings className="w-8 h-8 text-primary" />,
      title: "Customized Solutions",
      desc: "From specialized voltage ratios to physical constraints, we design exactly to client specifications."
    },
    {
      icon: <Headphones className="w-8 h-8 text-primary" />,
      title: "Reliable Support",
      desc: "We offer end-to-end commissioning supervision, preventative maintenance support, and rapid field service."
    },
    {
      icon: <Smile className="w-8 h-8 text-primary" />,
      title: "Customer Satisfaction",
      desc: "Our client retention rate reflects our dedication to transparency, quality, and fair dealing."
    },
    {
      icon: <Truck className="w-8 h-8 text-primary" />,
      title: "On-Time Delivery",
      desc: "Efficient project management and state-of-the-art facilities ensure your projects remain on schedule."
    },
    {
      icon: <ShieldAlert className="w-8 h-8 text-primary" />,
      title: "Safety Standards",
      desc: "Safety is embedded in our design, with heavy-duty leak-tested enclosures and complete protective accessories."
    },
    {
      icon: <BadgeCheck className="w-8 h-8 text-primary" />,
      title: "Certified Processes",
      desc: "An ISO 9001:2015 certified manufacturing workflow ensuring reproducibility and standard-conformance."
    },
    {
      icon: <Activity className="w-8 h-8 text-primary" />,
      title: "Industrial Expertise",
      desc: "Decades of supplying critical infrastructure across manufacturing, renewable energy, and public utility sectors."
    }
  ];

  const timelineSteps = [
    { year: "2010", title: "Company Founded", desc: "Nandi Power Controls and Systems established in Bengaluru, starting with small distribution transformers." },
    { year: "2013", title: "ISO 9001 Certification", desc: "Achieved ISO 9001:2015 certification for quality management and manufacturing processes." },
    { year: "2016", title: "CPRI Testing Success", desc: "Our transformer designs up to 500kVA successfully passed type testing at CPRI, validating engineering excellence." },
    { year: "2020", title: "Expansion to SPMs & Fabrication", desc: "Expanded operations to include a heavy fabrication facility and Special Purpose Machines (SPMs) division." },
    { year: "2024", title: "High-Capacity Range", desc: "Extended design capabilities up to 5000kVA transformers, serving major national and international B2B clients." }
  ];

  return (
    <div className="w-full bg-white">
      {/* Page Header */}
      <section className="bg-zinc-950 py-24 border-b-4 border-primary relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-900/90 to-transparent z-10" />
          <div className="w-full h-full opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Why Us</h1>
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
            Discover why leading industries trust NANDI POWER CONTROLS AND SYSTEMS to power their critical operations and manufacturing lines.
          </p>
        </div>
      </section>

      {/* Main Why Us Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 text-[#0B3C5D]">
              Why Choose NANDI POWER CONTROLS AND SYSTEMS
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
            <p className="text-zinc-600 text-lg leading-relaxed">
              We stand apart through our commitment to engineering excellence, design transparency, and uncompromising build quality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {advantages.map((adv, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 5) * 0.1 }}
                className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100 hover:shadow-md hover:border-primary/30 transition-all group flex flex-col items-center text-center animate-fade-in"
              >
                <div className="w-16 h-16 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <div className="group-hover:scale-110 transition-transform">
                    {adv.icon}
                  </div>
                </div>
                <h3 className="font-bold text-[#0B3C5D] text-lg mb-3">{adv.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed flex-grow">{adv.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-[#0B3C5D] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-4">
                <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
                  <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm md:text-base font-semibold text-zinc-300 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B3C5D] mb-6">Our Journey</h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
            <p className="text-zinc-600 text-lg">
              Tracing our history of technical development and quality achievements since 2010.
            </p>
          </div>

          <div className="relative border-l-2 border-primary/20 max-w-4xl mx-auto pl-6 md:pl-10 space-y-12">
            {timelineSteps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-white border-4 border-primary flex items-center justify-center shadow-sm" />
                
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-bold text-sm rounded-full mb-3">
                  {step.year}
                </span>
                <h3 className="text-xl font-bold text-[#0B3C5D] mb-2">{step.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Large CTA Section */}
      <section className="py-24 bg-white text-center relative overflow-hidden border-t border-zinc-100">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0B3C5D]">Ready to Work with Us?</h2>
          <p className="text-zinc-500 text-xl mb-10 max-w-2xl mx-auto">
            Contact our expert engineering team today to review your customized project requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold h-14 px-10 text-lg shadow-xl shadow-primary/20">
                Request Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="h-14 px-10 text-lg border-primary text-primary hover:bg-primary hover:text-white">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
