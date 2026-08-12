import { cvData } from '../data/cvData';

export const Skills = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-primary mb-16 text-center">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(cvData.skills).map(([category, skills]) => (
            <div
              key={category}
              className="card-gradient rounded-2xl p-8 hover-lift border border-white/30 shadow-card"
            >
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <span className="text-accent">→</span> {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-r from-accent/10 to-accentLight/10 text-accent rounded-full text-sm font-semibold hover:from-accent hover:to-accentLight hover:text-white border border-accent/30 transition-all duration-300 cursor-default hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
