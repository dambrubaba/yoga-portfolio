import React from 'react';

function Details() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-3xl p-6 md:p-8">
        <h1 className="text-3xl font-bold mb-6">Deval Chauhan - The Yogic Healer</h1>
        <p className="mb-4">
          Shri. Deval Chauhan has been a Yoga Practitioner for more than 11 years. He has been formally trained in various Yoga Traditions including Kaivalyadhama, Ambika Yoga Kutir, SVYASA Bangalore, and other Yoga schools in Rishikesh.
        </p>
        <p className="mb-4">
          He holds a P.G.Diploma in Yoga from Kaivalyadhama, Lonavala, where he was the topper of his batch and winner of the Dr. D B Pathak Memorial Award in Yoga Anatomy and Physiology. He is also certified with Level - III from the Yoga Certification Board, Ministry of AYUSH, Govt. of India.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-4">Experience and Exposure</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Selected Yoga Therapist at the CCRYN, Ministry of AYUSH and Kaivalyadhama's Collaborative Research centre at Lonavala.</li>
          <li>Personal Yoga Therapy practice for more than 4 years with a flawless track record.</li>
          <li>Worked at Yoga Alliance Certified School at Rishikesh as a Yoga Teacher/Therapist.</li>
          <li>Trained 500+ students with Yoga Courses at several Online Yoga certification Schools.</li>
          <li>Working with Indian Navy at Indian Naval Physical Training school, Goa.</li>
          <li>Conducted Stress Management Workshop with Mumbai Police.</li>
          <li>Led Yoga Events with Indian Army and Navy officials.</li>
        </ul>
        <a href="/resume.pdf" download className="inline-block bg-green-600 text-white px-6 py-2 rounded-full mt-4 hover:bg-green-700 transition-colors">
          Download Resume (PDF)
        </a>
      </div>
    </div>
  );
}

export default Details;