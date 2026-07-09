import { Link } from "wouter";
import { products, accessories, tests } from "@/data/content";
import { Card, CardContent, CardHeader, Typography, CardActions } from "@mui/material";
import { Check, Settings, Zap, Factory, Wrench, Layers, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import rangeCollageImg from "@/assets/products/product-range-collage.png";

const services = [
  {
    icon: <Settings className="w-8 h-8 text-primary" />,
    title: "Special Purpose Machines (SPMs)",
    description:
      "Custom-engineered SPMs designed for precise automation tasks on assembly lines. We design, fabricate, and commission machines tailored to specific production requirements — from semi-automated to fully automated solutions.",
    highlights: ["Custom design & engineering", "Precision fabrication", "On-site commissioning", "Post-installation support"],
  },
  {
    icon: <Factory className="w-8 h-8 text-primary" />,
    title: "Heavy Duty Tank Fabrication",
    description:
      "Full-scale heavy fabrication of transformer tanks, enclosures, and structural assemblies using quality-grade steel. Our fabrication unit is equipped with MIG/TIG welding stations and surface treatment capabilities.",
    highlights: ["MIG / TIG welding", "Leak-tested tanks", "Custom dimensions", "Surface treatment & painting"],
  },
  {
    icon: <Layers className="w-8 h-8 text-primary" />,
    title: "Precision Sheet Metal Works",
    description:
      "High-precision sheet metal fabrication for enclosures, panels, and structural components. We handle punching, bending, forming, and powder coating to deliver consistent, quality parts for industrial applications.",
    highlights: ["CNC punching & bending", "Powder coating finish", "High-volume production", "Tight tolerance forming"],
  },
  {
    icon: <Wrench className="w-8 h-8 text-primary" />,
    title: "Transformer Servicing & Repair",
    description:
      "On-site and in-house servicing, rewinding, and repair of power distribution transformers of all makes. Our certified engineers ensure your equipment is restored to peak operating condition with minimal downtime.",
    highlights: ["Rewinding & restoration", "Oil filtration & testing", "OLTC servicing", "Emergency breakdown support"],
  },
];

export default function Products() {
  return (
    <div className="w-full bg-zinc-50 min-h-screen">
      {/* Hero */}
      <section className="bg-zinc-950 py-20 border-b-4 border-primary">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Products & Services</h1>
          <p className="text-xl text-zinc-400 max-w-2xl">
            High-performance industrial solutions engineered for reliability, safety, and efficiency — from transformer manufacturing to precision fabrication services.
          </p>
        </div>
      </section>

      {/* Full Range Collage Banner */}
      <section className="py-12 bg-white border-b border-zinc-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-zinc-950 rounded-3xl overflow-hidden shadow-xl">
            <div className="flex flex-col md:flex-row items-center">
              <div className="p-10 md:p-16 md:w-1/2 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Comprehensive Power Solutions</h2>
                <div className="h-1 w-16 bg-primary mb-6"></div>
                <p className="text-zinc-400 text-lg">
                  From specialized 5kVA units to massive 5000kVA installations, our complete range is built to handle diverse and rigorous industrial demands.
                </p>
              </div>
              <div className="md:w-1/2 bg-black h-64 md:h-auto self-stretch relative flex items-center justify-center p-8">
                <img
                  src={rangeCollageImg}
                  alt="Nandi Power Product Range"
                  className="w-full h-full object-contain max-h-[300px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-3">Our Products</h2>
            <div className="h-1 w-16 bg-primary mb-4"></div>
            <p className="text-zinc-500 text-lg max-w-2xl">
              A complete range of transformers and power equipment, built and tested to the highest standards.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24">
            {products.map((product) => (
              <Card key={product.id} sx={{
                borderRadius: '1.25rem',
                boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                border: '1px solid #f4f4f5',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: '#FF5F1F',
                  boxShadow: '0 15px 40px rgba(255, 95, 31, 0.08)',
                  transform: 'translateY(-4px)'
                }
              }}>
                <Link href={`/products/${product.id}`} className="block">
                  <div className="h-64 bg-zinc-950 p-6 flex items-center justify-center border-b-[3px] border-primary">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain drop-shadow-2xl"
                    />
                  </div>
                </Link>

                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {product.id === 'spm' ? <Settings size={24} /> : <Zap size={24} />}
                    </div>
                    <Typography variant="h6" sx={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'Inter, sans-serif' }}>
                      <Link href={`/products/${product.id}`} className="hover:text-primary transition-colors">
                        {product.title}
                      </Link>
                    </Typography>
                  </div>
                  <Typography sx={{ fontSize: '1rem', color: '#52525b', fontFamily: 'Inter, sans-serif', mt: 2 }}>
                    {product.description}
                  </Typography>
                </CardHeader>

                <CardContent sx={{ flexGrow: 1 }}>
                  <div className="bg-zinc-50 p-5 rounded-xl border border-zinc-100">
                    <h5 className="font-bold text-zinc-900 mb-4 text-sm uppercase tracking-wider">Key Features</h5>
                    <ul className="space-y-3">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-zinc-700 font-medium">
                          <Check className="w-5 h-5 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardActions sx={{ p: 3, pt: 0 }}>
                  <Link href={`/products/${product.id}`} className="w-full">
                    <Button className="w-full bg-zinc-900 hover:bg-primary text-white transition-colors h-12">
                      View Product Details
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            ))}
          </div>

          {/* Accessories & Tests */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-zinc-900 flex items-center gap-3">
                <span className="w-8 h-1 bg-primary inline-block"></span> Standard Accessories
              </h3>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 h-full">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {accessories.map((acc, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-medium text-zinc-700">
                      <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                      <span>{acc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-zinc-900 flex items-center gap-3">
                <span className="w-8 h-1 bg-primary inline-block"></span> Routine & Type Tests
              </h3>
              <div className="bg-zinc-950 text-white p-8 rounded-2xl shadow-lg border-b-4 border-primary h-full">
                <p className="text-zinc-400 mb-6 text-sm">
                  We maintain rigorous testing protocols to ensure maximum reliability in the field.
                </p>
                <ul className="space-y-4">
                  {tests.map((test, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-300 font-medium">
                      <Check className="text-primary w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>{test}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white border-t border-zinc-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-3">Our Services</h2>
            <div className="h-1 w-16 bg-primary mb-4"></div>
            <p className="text-zinc-500 text-lg max-w-2xl">
              Beyond manufacturing, we offer end-to-end industrial services — from custom fabrication to on-site repair and commissioning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-zinc-50 border border-zinc-100 rounded-2xl p-8 hover:border-primary/40 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-zinc-900 mb-3">{service.title}</h3>
                    <p className="text-zinc-500 leading-relaxed mb-5">{service.description}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.highlights.map((h, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm font-medium text-zinc-700">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Banner */}
      <section className="py-16 bg-zinc-950 text-white border-t-4 border-primary">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="p-4 bg-primary/10 rounded-xl">
                <ShieldCheck className="text-primary w-10 h-10" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">ISO 9001:2015 Certified & CPRI Tested</h3>
                <p className="text-zinc-400 mt-1">Every product leaves our facility fully tested and certified.</p>
              </div>
            </div>
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white font-bold h-12 px-8 text-base shadow-lg shadow-primary/20 flex-shrink-0">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
