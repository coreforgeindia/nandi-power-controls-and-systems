import { useState } from "react";
import { products, accessories, tests } from "@/data/content";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { Check, Settings, Zap } from "lucide-react";

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

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
            {products.map((product) => (
              <Card key={product.id} sx={{ 
                borderRadius: '1rem', 
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                border: '1px solid #f4f4f5',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: '#FF5F1F',
                  transform: 'translateY(-4px)'
                }
              }}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {product.id === 'spm' ? <Settings size={24} /> : <Zap size={24} />}
                    </div>
                    <Typography variant="h6" sx={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'Inter, sans-serif' }}>
                      {product.title}
                    </Typography>
                  </div>
                  <Typography sx={{ fontSize: '1rem', color: '#52525b', fontFamily: 'Inter, sans-serif', mt: 2 }}>
                    {product.description}
                  </Typography>
                </CardHeader>
                <CardContent>
                  <div className="bg-zinc-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-zinc-900 mb-3 text-sm uppercase tracking-wider">Key Features</h5>
                    <ul className="space-y-2">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-zinc-700">
                          <Check className="w-5 h-5 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-zinc-900 flex items-center gap-3">
                <span className="w-8 h-1 bg-primary inline-block"></span> Standard Accessories
              </h3>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {accessories.map((acc, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-zinc-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
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
              <div className="bg-zinc-950 text-white p-8 rounded-2xl shadow-lg border-b-4 border-primary">
                <p className="text-zinc-400 mb-6 text-sm">
                  We maintain rigorous testing protocols to ensure maximum reliability in the field.
                </p>
                <ul className="space-y-4">
                  {tests.map((test, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-300">
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
