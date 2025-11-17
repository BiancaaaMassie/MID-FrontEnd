import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'; // Tambahkan FaInstagram

const Footer = () => {
  const [contactData, setContactData] = useState(null);

  useEffect(() => {
    fetch('/db.json')
      .then(res => res.json())
      .then(data => setContactData(data.home));
  }, []);

  if (!contactData) return null;

  return (
    <footer id="contact" className="py-12 bg-rose-50 dark:bg-gray-900 text-center">
      <div className="container mx-auto px-4">
        {/* Ikon Media Sosial */}
        <div className="flex justify-center space-x-6 mb-6">
          <a 
            href={contactData.social.github} // URL GitHub
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-rose-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-rose-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a 
            href={contactData.social.linkedin} // URL LinkedIn
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-rose-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-rose-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          {/* Ganti Twitter dengan Instagram */}
          <a 
            href={contactData.social.instagram} // Pastikan URL ini ada di db.json
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-rose-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-rose-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          <a 
            href={`mailto:${contactData.email}`} 
            className="w-12 h-12 flex items-center justify-center rounded-full bg-rose-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-rose-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Email"
          >
            <FaEnvelope className="w-6 h-6" />
          </a>
        </div>

        {/* Email */}
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {contactData.email}
        </p>

        {/* Copyright */}
        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} {contactData.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;