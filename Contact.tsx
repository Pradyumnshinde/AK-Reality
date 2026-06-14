import { motion } from 'motion/react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    
    // Web3Forms API implementation
    formData.append("access_key", "54b98a57-23a0-4c19-ba65-08d48a4448c1"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus('idle'), 5000); // Reset status after 5s
      } else {
        console.error("Form error:", data);
        setStatus('error');
      }
    } catch (error) {
      console.error("Submission failed:", error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white">Contact Us</h2>
            <div className="w-16 h-1 bg-accent mb-8"></div>
            <p className="text-white/70 font-light text-lg mb-12 max-w-md">
              Let's build something extraordinary together. Reach out to discuss your next architectural endeavor.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-white/50 mb-1">Phone</h4>
                  <p className="text-lg">+91 95455 52478</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-white/50 mb-1">Email</h4>
                  <p className="text-lg">akshaysuse7@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-white/50 mb-1">Studio</h4>
                  <p className="text-lg text-white/90">R62H+G37 Waluj Bk., Maharashtra</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <a 
                href="https://wa.me/+919545552478" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-medium uppercase tracking-wide text-sm hover:bg-[#1ebd5a] transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 p-8 md:p-12 border border-white/10 relative"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              <div>
                <label htmlFor="name" className="block text-sm text-white/60 mb-2 uppercase tracking-wide">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm text-white/60 mb-2 uppercase tracking-wide">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-white/60 mb-2 uppercase tracking-wide">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  name="email" 
                  className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-white/60 mb-2 uppercase tracking-wide">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={status === 'submitting'}
                className="mt-4 bg-white text-primary px-8 py-4 font-medium uppercase tracking-wide text-sm hover:bg-accent hover:text-white transition-colors self-start disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="text-green-400 text-sm mt-2">
                  Message sent successfully! We will get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-sm mt-2">
                  Failed to send message. Please ensure you have configured the Access Key or try again later.
                </p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
