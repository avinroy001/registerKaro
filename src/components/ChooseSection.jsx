import React from 'react';
import {
  AttachMoney,
  VerifiedUser,
  RocketLaunch,
  AccessTime,
  FlashOn,
  BusinessCenter,
} from '@mui/icons-material';

const ChooseSection = () => {
  const features = [
    { id: 1, title: 'Affordable', description: 'Cost-effective solutions tailored to your budget.', icon: <AttachMoney fontSize="large" className="text-indigo-500" /> },
    { id: 2, title: 'Compliance Ensured', description: 'Stay compliant with all regulations and standards.', icon: <VerifiedUser fontSize="large" className="text-green-500" /> },
    { id: 3, title: 'Simplified Process', description: 'Easy-to-follow steps for a hassle-free experience.', icon: <RocketLaunch fontSize="large" className="text-purple-500" /> },
    { id: 4, title: 'On-time Service', description: 'Reliable and punctual delivery of services.', icon: <AccessTime fontSize="large" className="text-orange-500" /> },
    { id: 5, title: 'Instant Response', description: 'Get quick answers and solutions to your queries.', icon: <FlashOn fontSize="large" className="text-yellow-500" /> },
    { id: 6, title: 'Industry Experts', description: 'Benefit from the knowledge of seasoned professionals.', icon: <BusinessCenter fontSize="large" className="text-blue-500" /> },
  ];

  return (
    <section className="bg-gradient-to-r from-indigo-50 to-purple-100 py-16">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Why Choose Us</h2>
        <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
          Our All-In-One Platform and Team of Experts will help direct you in the right path and ensure that your business starts the right way in record time.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseSection;
