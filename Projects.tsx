import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin } from 'lucide-react';

const ProjectCard = ({ project, index }: { project: any, index: number, key?: string | number }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!project.images || project.images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [project.images]);

  const hasImagesArray = project.images && project.images.length > 0;
  const displayImage = hasImagesArray ? project.images[currentImageIndex] : project.img;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden cursor-pointer"
    >
      <div className="h-80 w-full overflow-hidden relative">
        <AnimatePresence initial={false}>
          <motion.img
            key={displayImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            src={displayImage}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3000ms] ease-out group-hover:scale-110"
          />
        </AnimatePresence>
      </div>
      
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
        <p className="text-accent text-xs tracking-widest uppercase mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
          {project.category}
        </p>
        <h3 className="text-white text-2xl font-serif mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
          {project.title}
        </h3>
        {project.location ? (
          <div className="flex items-start gap-2 text-white/90 text-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-300">
            <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <span>{project.location}</span>
          </div>
        ) : (
          <p className="text-white/80 font-light text-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-300">
            {project.desc}
          </p>
        )}
      </div>
    </motion.div>
  );
};

const projects = [
  {
    id: 1,
    title: "Bele Brothers",
    category: "Architecture & Design",
    location: "mail ghogargaon, vaijapaur, Chh.Sambhajinagar",
    images: ["/Final 01.jpg", "/Final 02.jpg", "/Final 03.jpg"]
  },
  {
    id: 2,
    title: "pradip warkar",
    category: "Minimalist Apartment",
    location: "shindewadi, gangapur, chh. Sambhajinagar",
    img: "/pradip warkar 01.jpg"
  },
  {
    id: 3,
    title: "Ajay aware",
    category: "Owned House",
    location: "bokud jalgaon , chh. Sambhajinagar",
    images: ["/Ajay aware01.jpg", "/Ajay aware02.jpg"]
  },
  {
    id: 4,
    title: " Atik Sayyad",
    category: "Luxury Estate",
    location: "Gevrai Tanda, chh. Sambhajinagar",
    images: ["/Mr.Atik Sayyad 01.jpg", "/Mr.Atik Sayyad 02.jpg", "/Mr.Atik Sayyad 03.jpg"]
  },
  
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">Our Projects</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-secondary/80 max-w-2xl mx-auto font-light">
            Explore our curated portfolio of residential, commercial, and interior masterworks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
