import React, { useState } from 'react';
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const images = [
  "/slideshow-yoga-01.jpg",
  "/slideshow-yoga-02.jpg",
  "/slideshow-yoga-03.jpg",
  "/slideshow-yoga-04.jpg",
  "/slideshow-yoga-05.jpg",
  "/slideshow-yoga-06.jpg",
];

function App() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  React.useEffect(() => {
    const timer = setInterval(nextImage, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Hero Section */}
          <div className="md:col-span-2 bg-gray-800 rounded-3xl p-6 md:p-8">
            <img
              src="/logo.png"
              alt="The Yogic Healer"
              className="w-40 mb-4"
            />
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Bringing Healing To Life Through Yoga</h1>
            <p className="mb-4 text-lg">Experience the transformative power of yoga with Deval Chauhan, your guide to holistic wellness and well-being.</p>
            <a href="https://wa.me/c/919833040479" target="_blank" rel="noopener noreferrer" className="inline-block bg-purple-600 text-white px-6 py-2 rounded-full mt-4 transition-all duration-300 transform hover:scale-105 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 attention-button">
              Book a Session 👋
            </a>
            
            {/* Stats Section */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="bg-green-500 p-4 rounded-xl text-center">
                <h2 className="text-2xl md:text-3xl font-bold">11+</h2>
                <p>Years Experience</p>
              </div>
              <div className="bg-yellow-500 p-4 rounded-xl text-center">
                <h2 className="text-2xl md:text-3xl font-bold">500+</h2>
                <p>Patients Treated</p>
              </div>
              <div className="bg-red-500 p-4 rounded-xl text-center">
                <h2 className="text-2xl md:text-3xl font-bold">10+</h2>
                <p>Yoga Courses</p>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="bg-gray-800 rounded-3xl p-6 md:p-8">
            <img
              src="/profile-pic.png" // Updated to use the correct file name
              alt="Deval Chauhan"
              className="w-full h-64 object-cover rounded-xl mb-4"
            />
            <h2 className="text-xl font-bold mb-2">Deval Chauhan</h2>
            <p className="text-sm mb-4">Yoga Therapist, Wellness Expert, Lifestyle Coach with 11 years of experience. Managing diseases from simple Constipation to Cancer using Yogic Techniques.</p>
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                <a href="https://www.linkedin.com/in/deval-chauhan-86038b1ab/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                  <FaLinkedin size={20} />
                </a>
                <a href="https://www.facebook.com/deval3008?mibextid=qi2Omg&rdid=TFg7QEvJIJBrk6Hg&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FMvWeMMiqaBwYUekV%2F%3Fmibextid%3Dqi2Omg" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                  <FaFacebook size={20} />
                </a>
                <a href="https://twitter.com/theyogichealer" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                  <FaTwitter size={20} />
                </a>
                <a href="https://www.instagram.com/the_yogic_healer/" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300">
                  <FaInstagram size={20} />
                </a>
                <a href="https://wa.me/919833040479" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
                  <FaWhatsapp size={20} />
                </a>
              </div>
              <Link to="/about" className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors">
                Know More
              </Link>
            </div>
          </div>
        </div>

        {/* Photo Slideshow and Yoga Services */}
        <div className="bg-gray-800 rounded-3xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Photo Gallery</h2>
            <img
              src={images[currentImage]}
              alt={`Yoga session ${currentImage + 1}`}
              className="w-full h-72 object-cover rounded-xl"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Yoga Services</h2>
            <div className="space-y-4">
              <div className="bg-gray-700 p-4 rounded-xl">
                <h3 className="font-bold">8AM Yoga Session</h3>
                <p>Mon-Fri, 8am (IST)</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-xl">
                <h3 className="font-bold">7PM Yoga Session</h3>
                <p>Mon-Fri, 7pm (IST)</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-xl">
                <h3 className="font-bold">Online Meditation Session</h3>
                <p>Wed, Thurs, Fri, 10pm (IST)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;