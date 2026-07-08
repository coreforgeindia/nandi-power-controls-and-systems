import { Link } from "wouter";
import { products, accessories, tests } from "@/data/content";
import { Card, CardContent, CardHeader, Typography, CardActions } from "@mui/material";
import { Check, Settings, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import rangeCollageImg from "@/assets/products/product-range-collage.png";

export default function Products() {
  return (
    <div className="w-full bg-zinc-50 min-h-screen">
      <section className="bg-zinc-950 py-20 border-b-4 border-primary">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Products & Services</h1>
          <p className="text-xl text-zinc-400 max-w-2xl">
            High-performance industrial solutions engineered for reliability, safety, and efficiency.
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

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
    </div>
  );
}
