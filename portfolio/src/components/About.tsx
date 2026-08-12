import { cvData } from '../data/cvData';

export const About = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-primary mb-12 text-center">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="card-gradient rounded-2xl shadow-card p-8 md:p-12 hover-lift">
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            {cvData.about}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-accent/5 to-accentLight/5 rounded-xl p-6 border border-accent/10">
              <h3 className="text-xl font-bold text-primary mb-3">🎓 Background</h3>
              <p className="text-gray-700 leading-relaxed">
                Currently pursuing a Ph.D. in Computer Science at TU Dortmund University, with research focus on multi-objective optimization and machine learning efficiency.
              </p>
            </div>
            <div className="bg-gradient-to-br from-accent/5 to-accentLight/5 rounded-xl p-6 border border-accent/10">
              <h3 className="text-xl font-bold text-primary mb-3">🚀 Interests</h3>
              <p className="text-gray-700 leading-relaxed">
                Translating advanced deep learning methods into reliable solutions for complex datasets at the interface of computational and experimental research. Published at top-tier venues (ICLR, ICML).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
