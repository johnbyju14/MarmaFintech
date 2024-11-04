import React from 'react';
import './Contact.css'
import { FaLinkedin, FaInstagram, FaTwitter, FaDiscord, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <div className="bg-black text-white p-4 md:p-8 lg:p-12 min-h-">
      <div className="max-w-6xl mx-auto pb-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: FaLinkedin, name: 'LinkedIn', handle: '@Marma' },
                { icon: FaInstagram, name: 'Instagram', handle: '@Marma' },
                { icon: FaTwitter, name: 'Twitter', handle: '@Marma' },
                { icon: FaDiscord, name: 'Discord', handle: '@Marma' },
              ].map((social, index) => (
                <div key={index} className="bg-gray-900 py-3 px-7 rounded-lg flex flex-col items-center justify-center contact-social">
                  <social.icon className="text-2xl mb-2" />
                  <div className="text-sm">{social.name}</div>
                  <div className="text-xs text-gray-400">{social.handle}</div>
                </div>
              ))}
            </div>
            
            <div className="space-y- grid grid-cols-2 gap-4 sm:block">
              {[
                { icon: FaEnvelope, text: 'marma@gmail.com' },
                { icon: FaPhone, text: '+91 000 000 0000' },
                { icon: FaMapMarkerAlt, text: '95, Thottakara St, Kaveripakkam, 632508' },
              ].map((contact, index) => (
                <div key={index} className="flex align-middle pl-4 pt-4 justify-start">
                  <contact.icon className="text-xl" />
                  <span>{contact.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl text-center font-bold mb-6 sm:text-2xl">Have an Idea? Let us Know</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
              <textarea
                placeholder="Project Details"
                rows="4"
                className="w-full p-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-white text-black font-bold py-2 px-4 rounded-md hover:bg-gray-200 transition duration-300"
              >
                Send Your Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <hr/>
          <p className='text-center pt-4'> Marma Fintech C 2024</p>
    </div>
  );
}