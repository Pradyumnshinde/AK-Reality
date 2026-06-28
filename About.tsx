import { motion } from 'motion/react';

const team = [
  {
    name: "Ar.Akshay Suse",
    role: "Founder & Lead Architect",
    bio: "Akshay Suse leads AK Reality with a vision of creating innovative, functional, and aesthetically refined spaces. His commitment to quality, attention to detail, and client-focused approach ensure that every project is executed with excellence.",
    img: "/akshay.jpg"
  },
  {
    name: "Er.Ajay Suse",
    role: "Senior Engineer",
    bio: "As Senior Engineer, Ajay Suse oversees the technical aspects of project planning and execution. His practical approach, problem-solving skills, and dedication to quality contribute to creating durable and well-engineered spaces.",
    img: "/ajay.jpg.jpeg"
  },
  {
    name: "Er.Nadeem Shaikh",
    role: "Engineer ",
    bio: "Nadeem Shaikh brings extensive engineering expertise and technical excellence to every project. He ensures that designs are transformed into structurally sound and efficient solutions while maintaining the highest standards of quality and safety.",
    img: "/Nadeem.jpg"
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-light">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">About Us</h2>
            <div className="w-16 h-1 bg-accent mb-8"></div>
            <p className="text-lg text-secondary/80 leading-relaxed font-light">
              AK Reality and Architects is a professional architecture firm dedicated to creating functional and aesthetically pleasing spaces. With a strong focus on quality, innovation, and client satisfaction, we bring ideas to life with precision and creativity.
            </p>
            <p className="text-lg text-secondary/80 leading-relaxed font-light mt-4">
               From luxury residential villas to inspiring commercial complexes, our multi-disciplinary team oversees every detail, ensuring each project stands as a testament to enduring design.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full h-96 relative group"
          >
             <img 
               src="/studio.jpg.png" 
               alt="Our Studio" 
               className="w-full h-full object-cover object-top shadow-2xl"
             />
             <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
          </motion.div>
        </div>

        <div className="mt-20">
          <motion.h3 
            className="text-3xl font-serif text-center mb-16 text-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Leadership
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                className="group flex flex-col items-center text-center"
              >
                <div className="w-48 h-48 md:w-56 md:h-56 mb-6 overflow-hidden rounded-full">
                  <img 
                    src={member.img} 
                    alt={member.name}
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
                  />
                </div>
                <h4 className="text-xl font-serif font-medium text-primary mb-1">{member.name}</h4>
                <p className="text-accent text-sm uppercase tracking-widest mb-3">{member.role}</p>
                <p className="text-secondary/70 font-light max-w-sm text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
