import React from 'react';
import {
  Business,
  AssignmentInd,
  Public,
  Description,
  ReceiptLong,
  Payments,
  BarChart,
  School
} from '@mui/icons-material';

const iconMap = {
  1: <Business fontSize="large" className="text-blue-600" />,
  2: <AssignmentInd fontSize="large" className="text-green-600" />,
  3: <Public fontSize="large" className="text-yellow-600" />,
  4: <Description fontSize="large" className="text-purple-600" />,
  5: <ReceiptLong fontSize="large" className="text-rose-600" />,
  6: <Payments fontSize="large" className="text-cyan-600" />,
  7: <BarChart fontSize="large" className="text-lime-600" />,
  8: <School fontSize="large" className="text-fuchsia-600" />
};

const OurServices = () => {
  const services = [
    {
      id: 1,
      title: 'Company Formation',
      description: 'Streamline your business setup with our expert guidance.'
    },
    {
      id: 2,
      title: 'Company Secretarial Services',
      description: 'Ensure compliance and efficient corporate governance.'
    },
    {
      id: 3,
      title: 'Virtual Office Address',
      description: 'Establish a professional presence with a prestigious address.'
    },
    {
      id: 4,
      title: 'Annual Compliance Services',
      description: 'Stay ahead of regulatory deadlines with our comprehensive services.'
    },
    {
      id: 5,
      title: 'VAT Registration, Preparation & Filing',
      description: 'Simplify your VAT processes and ensure accurate filings.'
    },
    {
      id: 6,
      title: 'Payroll Services',
      description: 'Manage your payroll efficiently and accurately.'
    },
    {
      id: 7,
      title: 'Bookkeeping Services',
      description: 'Keep your financial records in order with our expert bookkeeping.'
    },
    {
      id: 8,
      title: 'Live Online Webinars & Workshops',
      description: 'Enhance your knowledge with our interactive online sessions.'
    }
  ];

  return (
    <section className="bg-gradient-to-br from-white to-gray-50 py-20">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12 relative inline-block">
          Our Services
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-transform transform hover:scale-105"
            >
              <div className="flex items-center justify-center mb-4">
                {iconMap[service.id]}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
