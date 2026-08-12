import { useState, useEffect } from 'react';
import { Navigation, Hero, About, Skills, Experience, Projects, Education, Achievements, Contact } from './components';
import './index.css';

function App() {
  const [activeSection, setActiveSection] = useState('Hero');

  const sections: { [key: string]: React.ReactNode } = {
    Hero: <Hero setActiveSection={setActiveSection} />,
    About: <About />,
    Skills: <Skills />,
    Experience: <Experience />,
    Projects: <Projects />,
    Education: <Education />,
    Achievements: <Achievements />,
    Contact: <Contact />,
  };

  useEffect(() => {
    // Scroll to top when section changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="pt-0">
        {sections[activeSection]}
      </main>
      <footer className="bg-primary text-white text-center py-8 border-t border-gray-200/20">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-gray-400">© 2026 Sedjro Salomon Hotegni. All rights reserved.</p>
          <p className="text-sm text-gray-500 mt-2">Built with React • TypeScript • Tailwind CSS • Vite</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
