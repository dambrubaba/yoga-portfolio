import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Deval Chauhan</h2>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <p className="mb-4">
            Shri. Deval Chauhan has been a Yoga Practitioner for more than 11 years. He has been formally trained in various Yoga Traditions including Kaivalyadhama, Ambika Yoga Kutir, SVYASA Bangalore, and other Yoga schools in Rishikesh.
          </p>
          <p className="mb-4">
            He holds a P.G.Diploma in Yoga from Kaivalyadhama, Lonavala, where he was the topper of his batch and winner of the Dr. D B Pathak Memorial Award in Yoga Anatomy and Physiology. He is also certified with Level - III from the Yoga Certification Board, Ministry of AYUSH, Govt. of India.
          </p>
          <p className="mb-4">
            With over 4 years of experience in Yoga Therapy, Deval has successfully treated numerous patients, relieving them from the distress of various diseases. His expertise spans from managing simple ailments to providing supportive care for serious conditions like Cancer.
          </p>
          <p>
            Deval has worked with prestigious organizations including the Indian Navy, Mumbai Police, and has led Yoga events with high-ranking officials from the Indian Army and Navy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;