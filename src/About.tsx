import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-3xl p-6 md:p-8">
        <h1 className="text-3xl font-bold mb-6">About Deval Chauhan - The Yogic Healer</h1>
        <img
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
          alt="Deval Chauhan"
          className="w-full h-64 object-cover rounded-xl mb-6"
        />
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
        <div className="flex justify-between items-center mt-8">
          <Link to="/" className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors">
            Back to Home
          </Link>
          <a href="/resume.pdf" download className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors">
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;