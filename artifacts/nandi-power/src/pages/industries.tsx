import { motion } from "framer-motion";
import { industries } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Factory, Zap, Settings2, Utensils, Building2, Landmark, Layers, FlaskConical, Cog, Wind } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Factory,
  Zap,
  Settings2,
  Utensils,
  Building2,
  Landmark,
  Layers,
  FlaskConical,
  Cog,
  Wind
};

export default function Industries() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="w-full bg-zinc-50 min-h-screen pb-24">
      {/* Hero Header */}
      <section className="bg-zinc-950 py-24 border-b-4 border-primary">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
            <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industries <span className="text-primary underline decoration-primary underline-offset-8">We Serve</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-zinc-400">
              Delivering customized, robust power distribution solutions tailored for diverse industrial ecosystems.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {industries.map((industry) => {
              const Icon = iconMap[industry.icon] || Factory;
              return (
                <motion.div key={industry.id} variants={fadeIn} className="group cursor-pointer">
                  <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-xl hover:border-primary transition-all duration-300 h-full flex flex-col">
                    <div className="h-16 w-16 bg-zinc-100 group-hover:bg-primary/10 rounded-2xl flex items-center justify-center mb-6 transition-colors">
                      <Icon className="text-zinc-600 group-hover:text-primary w-8 h-8 transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-900 mb-4">{industry.name}</h3>
                    <p className="text-zinc-600 mb-8 flex-grow leading-relaxed">{industry.description}</p>
                    <div className="flex items-center text-sm font-bold text-zinc-400 group-hover:text-primary transition-colors mt-auto">
                      Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Full Width CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-zinc-950 rounded-3xl p-10 md:p-16 text-center border border-zinc-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-50"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Powering Industry Across Karnataka</h2>
              <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
                No matter your sector, our engineering team can design the perfect transformer to keep your operations running smoothly.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold h-14 px-8 shadow-xl shadow-primary/20">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
