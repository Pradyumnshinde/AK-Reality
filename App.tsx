/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Location from './components/Location';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-white text-secondary selection:bg-accent selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Location />
      <Footer />
    </div>
  );
}
