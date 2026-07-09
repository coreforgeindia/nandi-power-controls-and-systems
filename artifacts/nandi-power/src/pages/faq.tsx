import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { faqs } from "@/data/content";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { HelpCircle, Search, MessageSquareQuote } from "lucide-react";

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqs = useMemo(() => {
    if (!searchTerm.trim()) return faqs;
    return faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const categories = useMemo(() => {
    const cats = new Set(filteredFaqs.map(f => f.category));
    return Array.from(cats);
  }, [filteredFaqs]);

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
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
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-primary/20 rounded-xl">
              <HelpCircle className="text-primary w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Frequently Asked Questions
            </h1>
          </div>
          <p className="text-xl text-zinc-400 max-w-2xl">
            Find answers to common questions about our products, manufacturing processes, and services.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          
          {/* Search Bar */}
          <div className="mb-12 relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-zinc-400" />
            </div>
            <Input
              type="text"
              placeholder="Search for a question..."
              className="pl-12 h-14 bg-white border-zinc-200 shadow-sm text-lg rounded-2xl focus-visible:ring-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <motion.div 
            key={searchTerm}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-12"
          >
            {categories.length > 0 ? (
              categories.map(category => (
                <motion.div key={category} variants={fadeIn} className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm">
                  <h2 className="text-2xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                    <span className="w-6 h-1 bg-primary inline-block rounded-full"></span>
                    {category}
                  </h2>
                  <Accordion type="multiple" className="w-full space-y-4">
                    {filteredFaqs.filter(f => f.category === category).map((faq, idx) => (
                      <AccordionItem key={idx} value={`${category}-${idx}`} className="border border-zinc-100 rounded-xl px-6 bg-zinc-50 data-[state=open]:bg-white data-[state=open]:border-zinc-200 data-[state=open]:shadow-sm transition-all">
                        <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-5 text-zinc-800 hover:text-primary data-[state=open]:text-primary">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-zinc-600 leading-relaxed text-base pb-6">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-20 bg-white rounded-3xl border border-zinc-200 shadow-sm">
                <HelpCircle className="w-16 h-16 text-zinc-300 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-zinc-900 mb-2">No results found</h3>
                <p className="text-zinc-500">Try adjusting your search terms.</p>
              </div>
            )}
          </motion.div>

          {/* Footer CTA */}
          <div className="mt-20 bg-zinc-950 p-10 rounded-3xl border-t-4 border-primary text-center shadow-xl">
            <MessageSquareQuote className="w-12 h-12 text-primary mx-auto mb-6 opacity-80" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Didn't find your answer?</h3>
            <p className="text-zinc-400 text-lg mb-8 max-w-lg mx-auto">
              Our engineering support team is available to assist you with any specific technical queries.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-8 h-14 shadow-lg shadow-primary/20">
                Contact Our Team
              </Button>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
