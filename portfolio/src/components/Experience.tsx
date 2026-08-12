import { cvData } from '../data/cvData';

export const Experience = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-primary mb-16 text-center">
          Professional <span className="gradient-text">Experience</span>
        </h2>
        <div className="space-y-8">
          {cvData.experience.map((job, index) => (
            <div
              key={index}
              className="card-gradient rounded-2xl shadow-card p-8 hover-lift border border-white/40 relative overflow-hidden group"
            >
              {/* Accent line */}
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-accent to-accentLight"></div>
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-2">{job.title}</h3>
                  <p className="text-xl text-accent font-semibold">{job.company}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-800">{job.startDate} - {job.endDate}</p>
                  <p className="text-gray-600">{job.location}</p>
                </div>
              </div>
              <ul className="space-y-3 ml-4">
                {job.description.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <span className="text-accent font-bold text-xl mt-1">•</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
