"use client";
import React, { useState, useEffect } from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button"; // ShadCN Button
import { Card, CardHeader, CardContent } from "@/components/ui/card"; // ShadCN Card
import { Tooltip, TooltipProvider } from "@/components/ui/tooltip"; // ShadCN Tooltip
import { useRouter } from 'next/navigation'; // Correct import for useRouter in Next.js 13+

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter(); // Initialize useRouter hook for navigation

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleBackToHome = () => {
    router.push('/home'); // Navigate to /home
  };

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Michael Chen",
      role: "Technical Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Emma Williams",
      role: "Design Lead",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
  ];

  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description: "Started with a vision to transform digital experiences",
    },
    {
      year: "2020",
      title: "Global Expansion",
      description: "Expanded operations to 3 continents",
    },
    {
      year: "2023",
      title: "Innovation Award",
      description: "Recognized for breakthrough technologies",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Back to Home Button */}
      <div className="absolute top-4 left-4 z-10">
        <Button
          onClick={handleBackToHome}
          className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-800 transition-colors duration-300 text-lg"
        >
          Back to Home
        </Button>
      </div>

      {/* Hero Section */}
      <div
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/img/BSU2.png')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div
          className={`relative text-center text-white transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Story</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto px-4">Building the future through innovation and dedication</p>
        </div>
      </div>

      {/* Mission Statement */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">Our Mission</h2>
        <p className="text-lg text-gray-600 leading-relaxed hover:text-gray-800 transition-colors duration-300">
          We are dedicated to creating innovative solutions that empower businesses and individuals to achieve their full potential. Through cutting-edge technology and unwavering commitment to excellence, we strive to make a positive impact on the world.
        </p>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Our Journey</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative pb-2/3">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute h-full w-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
                <CardContent className="text-center">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.role}</p>
                  <div className="flex justify-center space-x-4">
                    <TooltipProvider>
                      <Tooltip>
                        <a href={member.social.linkedin} className="text-gray-600 hover:text-blue-600 transition-colors">
                          <FaLinkedin size={24} />
                          <span className="sr-only">LinkedIn</span>
                        </a>
                      </Tooltip>
                      <Tooltip>
                        <a href={member.social.twitter} className="text-gray-600 hover:text-blue-400 transition-colors">
                          <FaTwitter size={24} />
                          <span className="sr-only">Twitter</span>
                        </a>
                      </Tooltip>
                      <Tooltip>
                        <a href={member.social.github} className="text-gray-600 hover:text-gray-900 transition-colors">
                          <FaGithub size={24} />
                          <span className="sr-only">GitHub</span>
                        </a>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Journey?</h2>
          <p className="text-xl mb-8">Connect with us and be part of our story</p>
          <Button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
