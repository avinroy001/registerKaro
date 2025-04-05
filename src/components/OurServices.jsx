import React from 'react'

const OurServices = () => {
    const services = [
        {
          id: 1,
          title: 'Company Formation',
          description: 'Streamline your business setup with our expert guidance.',
          icon: '🏢',
          color: 'bg-gradient-to-r from-blue-200 to-indigo-200',
        },
        {
          id: 2,
          title: 'Company Secretarial Services',
          description: 'Ensure compliance and efficient corporate governance.',
          icon: '💼',
          color: 'bg-gradient-to-r from-green-200 to-teal-200',
        },
        {
          id: 3,
          title: 'Virtual Office Address',
          description: 'Establish a professional presence with a prestigious address.',
          icon: '🌐',
          color: 'bg-gradient-to-r from-yellow-200 to-orange-200',
        },
        {
          id: 4,
          title: 'Annual Compliance Services',
          description: 'Stay ahead of regulatory deadlines with our comprehensive services.',
          icon: '📜',
          color: 'bg-gradient-to-r from-purple-200 to-pink-200',
        },
        {
          id: 5,
          title: 'VAT Registration, Preparation & Filing',
          description: 'Simplify your VAT processes and ensure accurate filings.',
          icon: '🧾',
          color: 'bg-gradient-to-r from-red-200 to-rose-200',
        },
        {
          id: 6,
          title: 'Payroll Services',
          description: 'Manage your payroll efficiently and accurately.',
          icon: '💸',
          color: 'bg-gradient-to-r from-cyan-200 to-blue-200',
        },
        {
          id: 7,
          title: 'Bookkeeping Services',
          description: 'Keep your financial records in order with our expert bookkeeping.',
          icon: '📊',
          color: 'bg-gradient-to-r from-lime-200 to-green-200',
        },
        {
          id: 8,
          title: 'Live Online Webinars & Workshops',
          description: 'Enhance your knowledge with our interactive online sessions.',
          icon: '🎓',
          color: 'bg-gradient-to-r from-fuchsia-200 to-purple-200',
        },
      ];
    
      return (
        <section className="bg-gradient-to-br from-gray-100 to-white py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-12 relative inline-block">
              Our Services
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-0">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`rounded-2xl shadow-lg p-8 transform transition-transform duration-300 hover:scale-105 ${service.color}`}
                >
                  <div className="flex items-center justify-center mb-6">
                    <span className="text-4xl">{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
}

export default OurServices