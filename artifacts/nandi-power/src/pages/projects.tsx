import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { projects } from "@/data/content";
import { Card, CardContent, CardHeader, Typography, Chip, CardActions } from "@mui/material";
import { MapPin, ArrowRight, FolderKanban } from "lucide-react";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Manufacturing", "Automation", "Pharmaceutical", "Power Plants", "Textile", "Renewable Energy"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.industry === filter);

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
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/20 rounded-xl">
                <FolderKanban className="text-primary w-8 h-8" />
              </div>
              <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-white">
                Featured Projects
              </motion.h1>
            </div>
            <motion.p variants={fadeIn} className="text-xl text-zinc-400">
              Explore a selection of our successful installations and customized manufacturing solutions across various industries.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2 mb-12 pb-6 border-b border-zinc-200">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  filter === cat 
                    ? "bg-primary text-white shadow-md shadow-primary/20" 
                    : "bg-white text-zinc-600 border border-zinc-200 hover:border-primary/50 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div 
            key={filter}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div key={project.id} variants={fadeIn} className="h-full">
                <Card sx={{ 
                  borderRadius: '1.25rem', 
                  boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
                  backgroundColor: 'white',
                  border: '1px solid #f4f4f5',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: '#FF5F1F',
                    boxShadow: '0 15px 40px rgba(255, 95, 31, 0.08)',
                    transform: 'translateY(-4px)'
                  }
                }}>
                  <CardHeader sx={{ pb: 0 }}>
                    <div className="flex justify-between items-start mb-4">
                      <Chip label={project.industry} size="small" sx={{ backgroundColor: '#FF5F1F', color: 'white', fontWeight: 'bold' }} />
                    </div>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', fontSize: '1.35rem', fontFamily: 'Inter, sans-serif', color: '#18181b', mb: 2 }}>
                      {project.name}
                    </Typography>
                    <div className="flex items-start text-zinc-500 text-sm">
                      <MapPin className="w-4 h-4 mr-1.5 flex-shrink-0 mt-0.5 text-zinc-400" />
                      <span>{project.location}</span>
                    </div>
                  </CardHeader>
                  <CardContent sx={{ flexGrow: 1, pt: 3 }}>
                    <Typography variant="body1" sx={{ color: '#52525b', mb: 5, lineHeight: 1.6 }}>
                      {project.description}
                    </Typography>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-zinc-100 text-zinc-700 text-xs font-semibold rounded-md border border-zinc-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardActions sx={{ p: 3, pt: 0 }}>
                    <Link href="/contact" className="w-full">
                      <div className="flex items-center text-primary font-bold text-sm hover:underline group cursor-pointer">
                        Request Similar Quote <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </CardActions>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border border-zinc-200">
              <FolderKanban className="w-16 h-16 text-zinc-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-zinc-900 mb-2">No projects found</h3>
              <p className="text-zinc-500">We don't have any featured projects in this category yet.</p>
              <button 
                onClick={() => setFilter("All")}
                className="mt-6 px-6 py-2 bg-zinc-900 text-white rounded-lg font-semibold hover:bg-primary transition-colors"
              >
                View All Projects
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
