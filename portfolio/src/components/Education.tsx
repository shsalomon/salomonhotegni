import { cvData } from '../data/cvData';

export const Education = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-primary mb-16 text-center">
          Education & <span className="gradient-text">Learning</span>
        </h2>
        <div className="space-y-8">
          {cvData.education.map((edu, index) => (
            <div
              key={index}
              className="card-gradient rounded-2xl shadow-card p-8 hover-lift border border-white/40 relative overflow-hidden"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accentLight"></div>
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-1">{edu.degree}</h3>
                  <p className="text-lg text-accent font-semibold">{edu.school}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-800">{edu.startDate} - {edu.endDate}</p>
                  <p className="text-gray-600">{edu.location}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-3 leading-relaxed">{edu.field}</p>
              {edu.note && (
                <p className="text-sm text-gray-600 italic bg-accent/5 px-4 py-2 rounded-lg border border-accent/20">{edu.note}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
