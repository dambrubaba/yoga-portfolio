import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Online Yoga Batch',
      description: 'Mon-Fri, 8am & 7pm (IST)',
      features: [
        'Limited number of students',
        'Personal attention',
        'Flexible switch between Morning and Evening',
      ],
    },
    {
      title: 'Online Meditation Batch',
      description: 'Wed, Thurs, Fri, 10pm (IST)',
      features: [
        'Improving Focus',
        'Mental Health',
        'Stress management',
      ],
    },
    {
      title: 'Yoga Therapy',
      description: 'Personalized sessions',
      features: [
        'Treating multiple diseases',
        'Customized approach',
        'Holistic healing',
      ],
    },
  ];

  return (
    <section id="services" className="py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
            <p className="text-purple-400 mb-4">{service.description}</p>
            <ul className="list-disc list-inside">
              {service.features.map((feature, fIndex) => (
                <li key={fIndex}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;