import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, ShieldCheck, Factory, Zap, Settings2, Utensils, Building2, Landmark, Layers, FlaskConical, Cog, Wind, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products, keyStrengths, companyInfo, industries, stats, projects } from "@/data/content";
import heroBg from "@/assets/hero-bg.png";
import { AnimatedCounter } from "@/components/animated-counter";
import { Card, CardContent, CardHeader, Typography, Chip } from "@mui/material";

const iconMap: Record<string, React.ElementType> = {
  Factory, Zap, Settings2, Utensils, Building2, Landmark, Layers, FlaskConical, Cog, Wind
};

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section 
        className="relative min-h-[100vh] md:min-h-[115vh] flex items-end pb-20 justify-center overflow-hidden bg-zinc-950"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent z-10" />
        </div>
        
        <div className="container relative z-10 px-4 md:px-8">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl text-center mx-auto"
          >
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Precision-engineered Power Distribution Transformers, SPMs, and Heavy Duty Fabrication. Built for reliability.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-4">
              <Link href="/products">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold h-14 px-8 text-base shadow-xl shadow-primary/20">
                  View Products <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="h-14 px-8 text-base bg-zinc-900/50 backdrop-blur-sm text-white border-white/20 hover:bg-white/10 hover:text-white">
                  Request a Quote
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Nandi Power?</h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg">
              Decades of expertise combining cutting-edge technology with rigorous quality control to deliver unmatched industrial reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyStrengths.map((strength, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-primary/30 transition-colors group"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                  <ShieldCheck size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{strength.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {strength.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Services Overview */}
      <section id="services" className="py-24 bg-zinc-950 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Complete End-to-End <br/><span className="text-primary">Manufacturing Services</span></h2>
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                Beyond transformers, we operate a full-scale heavy fabrication unit capable of handling complex industrial requirements.
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-zinc-300">Special Purpose Machines (SPMs)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-zinc-300">Heavy Duty Tank Fabrication</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-zinc-300">Precision Sheet Metal Works</span>
                </li>
              </ul>
              
              <Link href="/about">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Learn About Our Process
                </Button>
              </Link>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-zinc-900 p-8 rounded-xl aspect-square flex flex-col items-center justify-center text-center border border-zinc-800">
                  <Factory className="text-primary mb-4 w-12 h-12" />
                  <span className="font-bold">Modern Facility</span>
                </div>
                <div className="bg-primary p-8 rounded-xl aspect-square flex flex-col items-center justify-center text-center text-white shadow-xl shadow-primary/20">
                  <Zap className="mb-4 w-12 h-12" />
                  <span className="font-bold">High Voltage Testing</span>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-zinc-900 p-8 rounded-xl aspect-square flex flex-col items-center justify-center text-center border border-zinc-800">
                  <ShieldCheck className="text-primary mb-4 w-12 h-12" />
                  <span className="font-bold">ISO 9001:2015</span>
                </div>
                <div className="bg-zinc-900 p-8 rounded-xl aspect-square flex flex-col items-center justify-center text-center border border-zinc-800">
                  <CheckCircle2 className="text-primary mb-4 w-12 h-12" />
                  <span className="font-bold">CPRI Tested</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Products</h2>
              <div className="h-1 w-20 bg-primary"></div>
            </div>
            <Link href="/products" className="hidden md:flex items-center text-primary font-semibold hover:underline">
              View All Range <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(0, 3).map((product, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow flex flex-col">
                <div className="bg-zinc-950 rounded-xl mb-6 flex items-center justify-center p-6 h-48">
                  <img src={product.image} alt={product.title} className="h-full w-full object-contain" />
                </div>
                <h3 className="text-xl font-bold mb-3">{product.title}</h3>
                <p className="text-muted-foreground mb-6 line-clamp-2 flex-grow">{product.description}</p>
                <Link href={`/products/${product.id}`}>
                  <span className="text-primary font-semibold text-sm hover:underline">View Details &rarr;</span>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link href="/products">
              <Button variant="outline" className="w-full">View All Range</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION A — Industries We Serve */}
      <section className="py-24 bg-white border-t border-zinc-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Industries We Serve</h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg">
              Providing robust power solutions across critical sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => {
              const Icon = iconMap[ind.icon] || Factory;
              return (
                <Link key={ind.id} href="/industries">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="group bg-zinc-950 p-8 rounded-2xl border border-zinc-800 hover:border-primary transition-all duration-300 h-full flex flex-col"
                  >
                    <div className="h-12 w-12 bg-zinc-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                      <Icon className="text-zinc-400 group-hover:text-primary w-6 h-6 transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{ind.name}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{ind.description}</p>
                  </motion.div>
                </Link>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <Link href="/industries">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Explore All Industries
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION B — Statistics Counter */}
      <section className="py-20 bg-navy text-white relative overflow-hidden" style={{ backgroundColor: 'var(--color-navy)' }}>
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

      {/* SECTION C — Featured Projects Preview */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
              <div className="h-1 w-20 bg-primary"></div>
            </div>
            <Link href="/projects" className="hidden md:flex items-center text-primary font-semibold hover:underline">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="h-full"
              >
                <Card sx={{ 
                  borderRadius: '1rem', 
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                  backgroundColor: '#09090b', // zinc-950
                  color: 'white',
                  border: '1px solid #27272a',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: '#FF5F1F',
                    transform: 'translateY(-4px)'
                  }
                }}>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Chip label={project.industry} size="small" sx={{ backgroundColor: '#FF5F1F', color: 'white', fontWeight: 'bold' }} />
                    </div>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.25rem', fontFamily: 'Inter, sans-serif', mb: 1, color: 'white' }}>
                      {project.name}
                    </Typography>
                    <div className="flex items-start text-zinc-400 text-sm mt-2">
                      <MapPin className="w-4 h-4 mr-1 flex-shrink-0 mt-0.5" />
                      <span>{project.location}</span>
                    </div>
                  </CardHeader>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="body2" sx={{ color: '#a1a1aa', mb: 4, lineHeight: 1.6 }}>
                      {project.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center md:hidden">
            <Link href="/projects">
              <Button variant="outline" className="w-full">View All Projects</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION D — Contact CTA Banner */}
      <section className="py-24 bg-zinc-950 text-white text-center border-t-4 border-primary relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Power Your Business?</h2>
          <p className="text-zinc-300 text-xl mb-10 max-w-2xl mx-auto">
            Contact our engineering team to discuss your specific electrical infrastructure and manufacturing requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold h-14 px-10 text-lg shadow-xl shadow-primary/20">
                Request Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="h-14 px-10 text-lg bg-transparent text-white border-white/30 hover:bg-white/10 hover:text-white">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}