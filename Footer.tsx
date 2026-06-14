import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center md:items-start gap-8 border-b border-white/10 pb-12 mb-8">
        
        <div className="text-center md:text-left">
          <a href="#home" className="text-3xl font-serif font-bold tracking-tighter inline-block mb-4">
            AK<span className="text-accent">.</span>
          </a>
          <p className="text-white/50 text-sm font-light max-w-xs">
            Designing Spaces That Inspire. Precision, creativity, and elegance in every architectural endeavor.
          </p>
        </div>

        <div className="flex gap-6">
          <a href="https://www.instagram.com/_ak_realty?igsh=d3EwdzJxY2JjYW5j" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors">
            <Instagram size={18} />
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/40 text-xs tracking-wider">
          &copy; {new Date().getFullYear()} AK Reality and Architects. All rights reserved.
        </p>
        <div className="flex gap-4 text-xs text-white/40 tracking-wider">
          <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
