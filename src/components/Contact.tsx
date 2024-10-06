import React from 'react';
import { Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Connect With Us</h2>
        <p className="text-center mb-8">Online Consultation is Absolutely Free of cost.</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-purple-400 hover:text-purple-300">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-purple-400 hover:text-purple-300">
            <Facebook size={24} />
          </a>
          <a href="#" className="text-purple-400 hover:text-purple-300">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-purple-400 hover:text-purple-300">
            <Twitter size={24} />
          </a>
        </div>
        <div className="mt-12 text-center">
          <p className="mb-2">Contact: +91-9833040479</p>
          <p>Email: theyogichealer@example.com</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;