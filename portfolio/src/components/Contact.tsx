import { cvData } from '../data/cvData';

export const Contact = () => {
  return (
    <section className="py-24 bg-gradient-hero text-white min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-5xl font-bold mb-4 text-center">
          Get In <span className="bg-gradient-to-r from-accentLight to-blue-300 bg-clip-text text-transparent">Touch</span>
        </h2>
        <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto text-lg">
          Feel free to reach out for collaboration, job opportunities, or just to chat about machine learning and research!
        </p>
        
        <div className="max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Contact Info */}
            <div className="card-dark-gradient rounded-2xl p-8 shadow-glow-lg hover-lift">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="text-accent text-3xl">📧</span> Contact
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="text-accentLight font-semibold mb-2">Email</p>
                  <a
                    href={`mailto:${cvData.email}`}
                    className="text-white hover:text-accentLight transition-colors break-all text-lg font-medium"
                  >
                    {cvData.email}
                  </a>
                </div>
                <div>
                  <p className="text-accentLight font-semibold mb-2">Location</p>
                  <p className="text-white text-lg">{cvData.location}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="card-dark-gradient rounded-2xl p-8 shadow-glow-lg hover-lift">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="text-accent text-3xl">🔗</span> Connect
              </h3>
              <div className="space-y-4">
                <a
                  href={cvData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:text-accentLight transition-colors group"
                >
                  <span className="mr-3 text-xl group-hover:translate-x-1 transition-transform">→</span>
                  <span className="text-lg font-medium">GitHub</span>
                </a>
                <a
                  href={cvData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:text-accentLight transition-colors group"
                >
                  <span className="mr-3 text-xl group-hover:translate-x-1 transition-transform">→</span>
                  <span className="text-lg font-medium">LinkedIn</span>
                </a>
                <a
                  href={`mailto:${cvData.email}`}
                  className="flex items-center text-white hover:text-accentLight transition-colors group"
                >
                  <span className="mr-3 text-xl group-hover:translate-x-1 transition-transform">→</span>
                  <span className="text-lg font-medium">Send Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* CTA Message */}
          <div className="text-center">
            <div className="inline-block card-dark-gradient rounded-2xl px-8 py-6 shadow-glow-lg border border-accent/20">
              <p className="text-accentLight font-semibold text-lg">
                💡 Let's create something amazing together
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
