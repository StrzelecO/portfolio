import React from 'react';

const FooterSection = ({ id }) => {
  return (
    <footer id={id} className="bg-primary-dark text-text-light pt-20 pb-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Contact</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="mb-2">email: example@example.com</p>
            <p>telefon: +48 123 456 789</p>
          </div>
        </div>
        
        <div className="pt-6 border-t border-primary-base text-center">
          <p>© {new Date().getFullYear()} My Portfolio. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;