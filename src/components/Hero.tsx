import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="py-20 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
          alt="Deval Chauhan"
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="md:w-1/2 md:pl-8">
        <h2 className="text-4xl font-bold mb-4">The Yogic Healer</h2>
        <h3 className="text-2xl text-purple-400 mb-4">By Deval Chauhan</h3>
        <p className="text-lg mb-6">
          A Yoga Therapist, Wellness Expert, Lifestyle Coach, Meditator and
          Practitioner with 11 years of experience. Managing diseases ranging
          from simple Constipation to Cancer using Yogic Techniques since 4 years.
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
          Book a Session
        </button>
      </div>
    </section>
  );
};

export default Hero;