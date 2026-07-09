import { useState } from "react";
import { motion } from "framer-motion";
import { resources } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { BookOpen, Search, Download, FileText, Book, Award, Info } from "lucide-react";

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();

  const filteredResources = resources.filter(r => 
    r.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    r.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getBadgeColor = (type: string) => {
    switch(type) {
      case "Catalogue": return "bg-primary text-white border-primary";
      case "Technical Datasheet": return "bg-zinc-800 text-white border-zinc-700";
      case "Certificate": return "bg-green-600 text-white border-green-500";
      case "Company Profile": return "bg-blue-600 text-white border-blue-500";
      default: return "bg-zinc-200 text-zinc-800 border-zinc-300";
    }
  };

  const getIcon = (type: string) => {
    switch(type) {
      case "Catalogue": return <Book className="w-5 h-5 text-primary" />;
      case "Technical Datasheet": return <FileText className="w-5 h-5 text-zinc-800" />;
      case "Certificate": return <Award className="w-5 h-5 text-green-600" />;
      case "Company Profile": return <Info className="w-5 h-5 text-blue-600" />;
      default: return <FileText className="w-5 h-5 text-zinc-500" />;
    }
  };

  const handleDownloadClick = (title: string) => {
    toast({
      title: "Download Request",
      description: `Please contact us at nandipower1@gmail.com to request the ${title}.`,
      duration: 5000,
    });
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <div className="w-full bg-zinc-50 min-h-screen pb-24">
      <section className="bg-zinc-950 py-24 border-b-4 border-primary">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-primary/20 rounded-xl">
              <BookOpen className="text-primary w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Resources & Downloads
            </h1>
          </div>
          <p className="text-xl text-zinc-400 max-w-2xl">
            Access our product catalogues, technical datasheets, and company certifications.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          
          <div className="mb-12 relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-zinc-400" />
            </div>
            <Input
              type="text"
              placeholder="Search resources by title or type..."
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
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filteredResources.map((resource) => (
              <motion.div key={resource.id} variants={fadeIn}>
                <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-lg hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-4 gap-4">
                    <div className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md border ${getBadgeColor(resource.type)}`}>
                      {resource.type}
                    </div>
                    <div className="bg-zinc-50 p-2 rounded-lg border border-zinc-100">
                      {getIcon(resource.type)}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-zinc-900 mb-3 line-clamp-2">{resource.title}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-6 flex-grow">{resource.description}</p>
                  
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-zinc-100">
                    <span className="text-sm font-semibold text-zinc-400">{resource.fileSize}</span>
                    <Button 
                      variant="outline" 
                      onClick={() => handleDownloadClick(resource.title)}
                      className="border-zinc-300 text-zinc-700 hover:text-primary hover:border-primary hover:bg-primary/5"
                    >
                      <Download className="w-4 h-4 mr-2" /> Download
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredResources.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border border-zinc-200 shadow-sm">
              <FileText className="w-16 h-16 text-zinc-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-zinc-900 mb-2">No resources found</h3>
              <p className="text-zinc-500">We couldn't find any files matching your search.</p>
              <Button variant="link" onClick={() => setSearchTerm("")} className="mt-4 text-primary">
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
