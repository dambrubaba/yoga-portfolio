import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: 'Years Experience', value: '11+' },
    { label: 'Patients Treated', value: '500+' },
    { label: 'Yoga Courses', value: '10+' },
  ];

  return (
    <section className="py-12 bg-gray-800 rounded-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-around">
          {stats.map((stat, index) => (
            <div key={index} className="text-center mb-8 md:mb-0">
              <h3 className="text-4xl font-bold text-purple-400">{stat.value}</h3>
              <p className="text-xl">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;