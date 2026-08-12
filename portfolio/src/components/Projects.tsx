import { cvData } from '../data/cvData';

export const Projects = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-primary mb-16 text-center">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {cvData.projects.map((project, index) => (
            <div
              key={index}
              className="card-gradient rounded-2xl overflow-hidden shadow-card hover-lift border border-white/40 group"
            >
              {/* Header with gradient */}
              <div className="bg-gradient-to-r from-accent/10 to-accentLight/10 p-8 border-b border-accent/20">
                <div className="flex justify-between items-start gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-primary">{project.name}</h3>
                  <span className="text-sm bg-gradient-to-r from-accent to-accentLight text-white px-4 py-1 rounded-full font-semibold">
                    {project.year}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed">{project.description}</p>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                    <span className="text-accent">→</span> Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-accent/10 text-accent rounded-lg text-xs font-medium border border-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                    <span className="text-accent">✓</span> Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-accent font-bold mt-0.5">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
