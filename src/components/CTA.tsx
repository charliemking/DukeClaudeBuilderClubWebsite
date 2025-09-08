import React from 'react';

const CTA = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#CD7F5C] mb-6">
          Ready to Start Your AI Journey?
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          Join students who are already building the future with AI
        </p>
        
        <a 
          href="https://groupme.com/join_group/110034638/3ENj8qsT"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#CD7F5C] text-white px-12 py-4 rounded-lg font-semibold text-lg hover:bg-[#B8693F] transition-colors inline-block"
        >
          Join the GroupMe to Get Involved
        </a>
      </div>
    </section>
  );
};

export default CTA;