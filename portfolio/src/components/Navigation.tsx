import { cvData } from '../data/cvData';

export const Navigation = ({ activeSection, setActiveSection }: { activeSection: string; setActiveSection: (section: string) => void }) => {
  const navItems = ['Hero', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Achievements', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-b border-gray-200/20 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => setActiveSection('Hero')}
              className="font-bold text-2xl bg-gradient-to-r from-accent to-accentLight bg-clip-text text-transparent hover:scale-110 transition-transform"
            >
              SSH
            </button>
          </div>
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === item
                    ? 'bg-gradient-to-r from-accent to-accentLight text-white shadow-lg shadow-accent/30'
                    : 'text-gray-700 hover:bg-gray-100/80 hover:text-accent'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="md:hidden">
            <select
              value={activeSection}
              onChange={(e) => setActiveSection(e.target.value)}
              className="px-3 py-2 rounded-lg border-2 border-accent/30 text-primary font-medium focus:outline-none focus:border-accent"
            >
              {navItems.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

export const Hero = ({ setActiveSection }: { setActiveSection: (section: string) => void }) => {
  const handleDownloadCV = () => {
    window.open('#', '_blank');
  };

  return (
    <section className="pt-24 pb-20 bg-gradient-hero text-white min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accentLight/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-6xl sm:text-7xl font-bold mb-4 animate-slide-up">
          {cvData.name}
        </h1>
        <p className="text-2xl sm:text-3xl bg-gradient-to-r from-accentLight to-blue-300 bg-clip-text text-transparent mb-6 font-semibold animate-slide-up" style={{ animationDelay: '0.1s' }}>
          {cvData.title}
        </p>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {cvData.shortIntro}
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <button
            onClick={() => setActiveSection('Projects')}
            className="px-8 py-3 bg-gradient-to-r from-accent to-accentLight text-white rounded-xl font-semibold hover-lift shadow-lg shadow-accent/30 hover:shadow-accent/50"
          >
            View Projects
          </button>
          <button
            onClick={() => setActiveSection('Contact')}
            className="px-8 py-3 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-primary transition-all"
          >
            Contact Me
          </button>
          <button
            onClick={handleDownloadCV}
            className="px-8 py-3 border-2 border-accentLight text-accentLight rounded-xl font-semibold hover:bg-accentLight hover:text-primary transition-all"
          >
            Download CV
          </button>
        </div>
        <div className="flex justify-center gap-8 text-lg animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <a
            href={cvData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accentLight transition-colors hover-lift"
            title="GitHub"
          >
            GitHub
          </a>
          <a
            href={`mailto:${cvData.email}`}
            className="hover:text-accentLight transition-colors hover-lift"
            title="Email"
          >
            Email
          </a>
          <a
            href={cvData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accentLight transition-colors hover-lift"
            title="LinkedIn"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};
