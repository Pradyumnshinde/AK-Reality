/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Location from './Location';
import Footer from './Footer';

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
