import React from 'react'

const ChooseSection = () => {
    const features = [
        { id: 1, title: 'Affordable', description: 'Cost-effective solutions tailored to your budget.', icon: '💰' },
        { id: 2, title: 'Compliance Ensured', description: 'Stay compliant with all regulations and standards.', icon: '✅' },
        { id: 3, title: 'Simplified Process', description: 'Easy-to-follow steps for a hassle-free experience.', icon: '🚀' },
        { id: 4, title: 'On-time Service', description: 'Reliable and punctual delivery of services.', icon: '⏱️' },
        { id: 5, title: 'Instant Response', description: 'Get quick answers and solutions to your queries.', icon: '⚡' },
        { id: 6, title: 'Industry Experts', description: 'Benefit from the knowledge of seasoned professionals.', icon: '👨‍💼' },
      ];
    
      return (
        <section className="bg-gradient-to-r from-indigo-100 to-purple-100 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Why Choose Us</h2>
            <p className="text-lg text-gray-600 mb-10">
              Our All-In-One Platform and Team of Experts will help direct you in the right path and ensure that your business starts the right way in record time.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
              {features.map((feature) => (
                <div key={feature.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-3xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    };

export default ChooseSection