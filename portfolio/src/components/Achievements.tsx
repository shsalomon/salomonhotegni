import { cvData } from '../data/cvData';

export const Achievements = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-primary mb-16 text-center">
          Achievements & <span className="gradient-text">Publications</span>
        </h2>

        {/* Publications */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-primary mb-8 flex items-center gap-2">
            📄 <span>Publications</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {cvData.publications.map((pub, index) => (
              <div
                key={index}
                className="card-gradient rounded-xl p-6 hover-lift border border-white/40 shadow-card"
              >
                <h4 className="font-bold text-primary mb-2 leading-relaxed">{pub.title}</h4>
                <p className="text-gray-600 text-sm mb-2">{pub.authors}</p>
                <p className="text-accent font-semibold text-sm">{pub.venue}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Source */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-primary mb-8 flex items-center gap-2">
            🚀 <span>Open Source Software</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {cvData.openSource.map((project, index) => (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-gradient rounded-xl p-6 hover-lift border-2 border-transparent hover:border-accent transition-all shadow-card"
              >
                <h4 className="font-bold text-primary mb-2">{project.name}</h4>
                <p className="text-gray-700 text-sm">{project.description}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Professional Achievements */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-primary mb-8 flex items-center gap-2">
            🏆 <span>Professional Achievements</span>
          </h3>
          <div className="space-y-6">
            {cvData.achievements.map((achievement, index) => (
              <div
                key={index}
                className="card-gradient rounded-xl p-6 hover-lift border border-white/40 shadow-card"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex-1">
                    <h4 className="font-bold text-primary mb-1">{achievement.title}</h4>
                    <p className="text-accent font-semibold text-sm mb-2">{achievement.organization}</p>
                    <p className="text-gray-700 text-sm">{achievement.description}</p>
                  </div>
                  <div className="text-right text-sm text-gray-600 flex-shrink-0">
                    <p className="font-semibold">{achievement.date}</p>
                    <p>{achievement.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-3xl font-bold text-primary mb-8 flex items-center gap-2">
            🎓 <span>Certifications & Learning</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {cvData.certifications.map((cert, index) => (
              <div
                key={index}
                className="card-gradient rounded-xl p-6 hover-lift border border-white/40 shadow-card"
              >
                <h4 className="font-bold text-primary mb-2">{cert.name}</h4>
                <p className="text-accent font-semibold text-sm mb-2">{cert.issuer}</p>
                <p className="text-gray-700 text-sm mb-3">{cert.description}</p>
                <p className="text-xs font-semibold text-gray-600">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
