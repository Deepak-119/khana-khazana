// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-500 text-white py-6 mt-9">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Designed And Developed By Deepak Kumar</p>
      </div>
    </footer>
  );
};

export default Footer;
