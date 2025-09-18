import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Charlie King',
      role: 'Co-President',
      email: 'charlie.king@duke.edu',
      image: '/charlie.jpg',
      bio: 'Organizing and teaching technical workshops with guest speakers, running hackathons and demo nights, and sharing resources like API credits with members.',
      linkedin: 'https://www.linkedin.com/in/charliemking/'
    },
    {
      name: 'Sophia Glazarev',
      role: 'Co-President',
      email: 'sophia.glazarev@duke.edu',
      image: '/sophia.jpg',
      bio: 'Leading campus outreach and educational programs, hosting prompting workshops and no-code build-athons to spread the word about Claude across Duke.',
      linkedin: 'https://www.linkedin.com/in/sophia-glazarev/'
    },
    {
      name: 'Michael Simoniello',
      role: 'Treasurer',
      email: 'michael.simoniello@duke.edu',
      image: '/michael.png',
      bio: 'Managing the club\'s finances by tracking budgets, handling funding requests, and ensuring resources are allocated effectively to support events and growth.',
      linkedin: 'https://www.linkedin.com/in/michaelsimoniello/'
    },
    {
      name: 'Claire Kettler',
      role: 'Secretary',
      email: 'claire.kettler@duke.edu',
      image: '/claire.jpg',
      bio: 'Keeping the club organized through meeting notes, documentation, and communication, while making sure updates and opportunities reach all members.',
      linkedin: 'https://www.linkedin.com/in/claire-kettler-a57486313/'
    },
    {
      name: 'Jack Voelker',
      role: 'Operations Chair',
      email: 'jack.voelker@duke.edu',
      image: '/jack.jpg',
      bio: 'Coordinating logistics for events and workshops, overseeing technical setups, and ensuring that the club\'s programs run smoothly from start to finish.',
      linkedin: 'https://www.linkedin.com/in/jackvoelker/'
    },
    {
      name: 'Hakeem Shitta-Bey',
      role: 'Outreach Chair',
      email: 'hakeem.shitta-bey@duke.edu',
      image: '/hakeem.jpeg',
      bio: 'Connecting Duke students with the Claude Builder Club through partnerships and events, growing awareness and engaging new members across campus.',
      linkedin: 'https://www.linkedin.com/in/hakeem-bey/'
    },
    {
      name: 'Brynn Stuart',
      role: 'Social Media Chair',
      email: 'brynn.stuart@duke.edu',
      image: '/brynn.jpg',
      bio: 'Running the club\'s digital presence by creating content, managing social channels, and highlighting events to engage Duke\'s AI community.',
      linkedin: 'https://www.linkedin.com/in/brynnstuart/'
    },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#CD7F5C] mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The passionate students leading Duke's AI development community
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#CD7F5C] mb-2">
                {member.name}
              </h3>
              <p className="text-[#CD7F5C] font-semibold mb-3">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {member.bio}
              </p>
              <div className="flex justify-center space-x-3">
                <a
                  href={`mailto:${member.email}`}
                  className="p-2 bg-gray-200 rounded-lg hover:bg-[#CD7F5C] hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={member.linkedin}
                  className="p-2 bg-gray-200 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;