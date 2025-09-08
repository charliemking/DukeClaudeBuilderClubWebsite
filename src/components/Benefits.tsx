import React from 'react';
import { Brain, Users, Trophy, Zap } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Brain,
      title: 'Free Claude Pro Account & API credits',
      description: 'Get access to Claude Pro and free API credits to implement your modern dreams'
    },
    {
      icon: Zap,
      title: 'Access to Anthropic workshops and lectures',
      description: 'Learn directly from industry experts and cutting-edge research'
    },
    {
      icon: Users,
      title: 'Connect with passionate students',
      description: 'Join a community of like-minded AI enthusiasts and builders'
    },
    {
      icon: Trophy,
      title: 'Exclusive hackathons and prizes',
      description: 'Compete in AI hackathon to win prize money this fall'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#CD7F5C] mb-6">
            Why Join the Club?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the amazing benefits of being part of the Claude Builder Club community
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#CD7F5C] rounded-full flex items-center justify-center mb-6">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#CD7F5C] mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;