"use client";

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ChevronDown, Menu, X, ExternalLink, Calendar, Briefcase, GraduationCap, Code, Database, Cloud, Wrench, User, Trophy } from 'lucide-react';

const resume = {
  name: "Kalai Nithi Guhan M",
  email: "kalaiguhan98@gmail.com",
  phone: "+91 9659119924",
  linkedin: "https://www.linkedin.com/in/kalai-nithi-guhan-m?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  github: "https://github.com/Kalai-nithi-guhan",
  leetcode: "https://leetcode.com/u/kalainithiguhan/",
  tagline: "Aspiring Software Engineer | AI-powered Web Apps | Cloud & Full-Stack",
  objective: "Aspiring software engineer with a strong foundation in Computer Science and hands-on experience in building AI-powered web applications, integrating cloud services, and solving algorithmic problems. Passionate about developing scalable solutions using modern frameworks and tools. Eager to contribute innovative features to product development teams at forward-thinking tech companies.",
  interests: [
    "Web Development (React, Next.js, Firebase, Tailwind CSS, REST APIs)",
    "Computer Vision (OpenCV, MediaPipe, YOLO)",
    "Machine Learning & AI (Deep Learning, Model Deployment, Image Analysis)",
    "Cloud Integration (Firebase, Google Cloud, Real-time DB, Vercel Analytics)",
    "NLP (Text Classification)"
  ],
  education: [
    {
      degree: "B.E. (Computer Science & Engineering)",
      institute: "Dr. Mahalingam College of Engineering and Technology (MCET), Pollachi, Coimbatore",
      year: "July 2027 (expected)",
      cgpa: "8.67 / 10"
    },
    {
      degree: "Higher Secondary Certificate (12th)",
      institute: "Srinivasa Vidhyalaya Matriculation Higher Secondary School, Udumalaipet",
      year: "Mar 2023",
      marks: "539 / 600 (89.3%)"
    }
  ],
  skills: {
    programming: ["Java", "Python", "C"],
    frameworks: ["React", "Next.js", "Node.js", "Tailwind CSS"],
    databases: ["Firebase Firestore", "MySQL"],
    cloud: ["Firebase", "Vercel"],
    tools: ["Git", "GitHub", "VS Code"]
  },
  projects: [
    {
      title: "Fertilizer Recommendation Web Application",
      period: "May 2025 – Jul 2025",
      description: "Full-stack app that recommends fertilizers based on user input. AI logic lives in a custom /api/analyze route, images are stored in Firebase, and the UI is built with Next.js, React & Tailwind.",
      techStack: ["Next.js", "React", "Tailwind CSS", "Firebase", "Vercel"],
      link: "https://fertilizer-recommendation.vercel.app/"
    },
    {
      title: "Curl Counter using OpenCV",
      period: "2024",
      description: "Computer-vision solution that counts push-ups, squats & biceps curls via webcam using OpenCV + MediaPipe.",
      techStack: ["OpenCV", "MediaPipe", "JavaScript"]
    },
    {
      title: "Traffic Management System",
      period: "2024",
      description: "Detects opposite-lane violations and mobile-phone-while-driving using CCTV footage and OpenCV.",
      techStack: ["OpenCV", "Python"]
    },
    {
      title: "Crime Rate Prediction",
      period: "2024 (ongoing)",
      description: "Predicts crime hot-spots using XGBoost, CatBoost & LightGBM classifiers; sends alerts to police department.",
      techStack: ["Python", "XGBoost", "CatBoost", "LightGBM"]
    }
  ],
  internships: [
    {
      company: "Boredom LLP Technology (Bangalore)",
      period: "May 2025 – Jul 2025",
      description: "Designed responsive webpages with HTML/CSS/JS, built React components, and integrated Firebase for real-time DB & authentication."
    }
  ]
};

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Please fill in all fields.');
    }
  };

  const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'];

  const skillCategories = [
    { title: "Programming", icon: <Code size={24} />, skills: resume.skills.programming, color: "from-blue-500 to-blue-600" },
    { title: "Frameworks", icon: <Wrench size={24} />, skills: resume.skills.frameworks, color: "from-purple-500 to-purple-600" },
    { title: "Databases", icon: <Database size={24} />, skills: resume.skills.databases, color: "from-green-500 to-green-600" },
    { title: "Cloud & Tools", icon: <Cloud size={24} />, skills: [...resume.skills.cloud, ...resume.skills.tools], color: "from-orange-500 to-orange-600" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg border-b border-gray-800' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              KNG
            </div>
            
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium"
                >
                  {item}
                </a>
              ))}
            </div>

            <button 
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image Section */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                  <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                    {/* Replace this div with your actual image */}
                    {/* <div className="w-full h-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 flex items-center justify-center">
                      <User size={120} className="text-gray-400" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-gray-400 text-sm bg-gray-800/80 px-3 py-1 rounded-full">
                          Add Your Photo Here
                        </span>
                      </div>
                    </div> */}
                    { //To add your image, replace the div above with:
                    <img 
                      src="https://i.ibb.co/VW4Lvr5x/kalaiimg.jpg" 
                      alt="Kalai Nithi Guhan M"
                      className="w-full h-full object-cover"
                    />
                    }
                  </div>
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-xl -z-10"></div>
              </div>
            </div>

            {/* Content Section */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent">
                  {resume.name}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                {resume.tagline}
              </p>
              <p className="text-lg text-gray-400 mb-12 leading-relaxed">
                {resume.objective}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
                <a 
                  href="#contact" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-200"
                >
                  Get In Touch
                </a>
                <a 
                  href="#projects" 
                  className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-full font-semibold hover:bg-blue-400 hover:text-gray-900 transition-all duration-200"
                >
                  View My Work
                </a>
              </div>

              <div className="flex justify-center lg:justify-start space-x-6">
                <a href={resume.github} className="text-gray-400 hover:text-blue-400 transition-colors duration-200" title="GitHub">
                  <Github size={24} />
                </a>
                <a href={resume.linkedin} className="text-gray-400 hover:text-blue-400 transition-colors duration-200" title="LinkedIn">
                  <Linkedin size={24} />
                </a>
                <a href={resume.leetcode} className="text-gray-400 hover:text-blue-400 transition-colors duration-200" title="LeetCode">
                  <Trophy size={24} />
                </a>
                <a href={`mailto:${resume.email}`} className="text-gray-400 hover:text-blue-400 transition-colors duration-200" title="Email">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-gray-500" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate software engineering student with a strong foundation in computer science and hands-on experience building AI-powered web applications. Currently pursuing my B.E. in Computer Science at MCET with a CGPA of 8.67/10.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey in tech has led me to explore various domains including web development, computer vision, and machine learning. I love creating solutions that combine cutting-edge technology with practical applications.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-6 bg-blue-900/30 rounded-xl border border-blue-500/20">
                  <div className="text-3xl font-bold text-blue-400 mb-2">8.67</div>
                  <div className="text-gray-400">Current CGPA</div>
                </div>
                <div className="text-center p-6 bg-purple-900/30 rounded-xl border border-purple-500/20">
                  <div className="text-3xl font-bold text-purple-400 mb-2">4+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-6 text-gray-200">Areas of Interest</h3>
              {resume.interests.map((interest, index) => (
                <div key={index} className="p-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg border-l-4 border-blue-400">
                  <p className="text-gray-300">{interest}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-gray-800 border border-gray-700 rounded-xl shadow-lg p-6 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:border-blue-500/30">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center text-white mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-200">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="inline-block bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm mr-2 mb-2 border border-gray-600">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resume.projects.map((project, index) => (
              <div key={index} className="bg-gray-900 border border-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-2 hover:border-blue-500/30">
                <div className="h-48 bg-gradient-to-br from-blue-900/30 to-purple-900/30 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Code size={24} className="text-white" />
                    </div>
                    <p className="text-sm text-gray-400">{project.period}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-200">{project.title}</h3>
                    {project.link && (
                      <a href={project.link} className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-blue-900/40 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
          
          <div className="max-w-3xl mx-auto">
            {resume.internships.map((internship, index) => (
              <div key={index} className="bg-gray-800 border border-gray-700 rounded-xl shadow-lg p-8 mb-8 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:border-blue-500/30">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Briefcase size={24} className="text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-200">{internship.company}</h3>
                      <span className="text-sm text-gray-400 flex items-center mt-1 sm:mt-0">
                        <Calendar size={16} className="mr-1" />
                        {internship.period}
                      </span>
                    </div>
                    
                    <p className="text-gray-400 leading-relaxed">{internship.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {resume.education.map((edu, index) => (
              <div key={index} className="bg-gray-900 border border-gray-700 rounded-xl shadow-lg p-8 mb-6 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:border-blue-500/30">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={24} className="text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-200 mb-1">{edu.degree}</h3>
                        <p className="text-gray-400 mb-2">{edu.institute}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-gray-400 block">{edu.year}</span>
                        {edu.cgpa && <span className="text-lg font-semibold text-green-400">CGPA: {edu.cgpa}</span>}
                        {edu.marks && <span className="text-lg font-semibold text-green-400">{edu.marks}</span>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-200">Let's Connect</h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                  I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. Feel free to reach out!
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-900/40 border border-blue-500/30 rounded-full flex items-center justify-center">
                    <Mail size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-200">Email</p>
                    <p className="text-gray-400">{resume.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-green-900/40 border border-green-500/30 rounded-full flex items-center justify-center">
                    <Phone size={20} className="text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-200">Phone</p>
                    <p className="text-gray-400">{resume.phone}</p>
                  </div>
                </div>
                
                <div className="flex space-x-4 pt-4">
                  <a href={resume.github} className="w-10 h-10 bg-gray-700 border border-gray-600 text-gray-300 rounded-full flex items-center justify-center hover:bg-gray-600 hover:text-white transition-colors duration-200" title="GitHub">
                    <Github size={20} />
                  </a>
                  <a href={resume.linkedin} className="w-10 h-10 bg-blue-900/40 border border-blue-500/30 text-blue-400 rounded-full flex items-center justify-center hover:bg-blue-800 hover:text-white transition-colors duration-200" title="LinkedIn">
                    <Linkedin size={20} />
                  </a>
                  <a href={resume.leetcode} className="w-10 h-10 bg-yellow-900/40 border border-yellow-500/30 text-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-800 hover:text-white transition-colors duration-200" title="LeetCode">
                    <Trophy size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 border border-gray-700 rounded-xl shadow-lg p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none text-white placeholder-gray-400"
                    placeholder="Your message here..."
                  />
                </div>
                
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-200"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {resume.name}
            </h3>
            <p className="text-gray-400 mb-6">{resume.tagline}</p>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a href={resume.github} className="text-gray-400 hover:text-white transition-colors duration-200" title="GitHub">
                <Github size={24} />
              </a>
              <a href={resume.linkedin} className="text-gray-400 hover:text-white transition-colors duration-200" title="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href={resume.leetcode} className="text-gray-400 hover:text-white transition-colors duration-200" title="LeetCode">
                <Trophy size={24} />
              </a>
              <a href={`mailto:${resume.email}`} className="text-gray-400 hover:text-white transition-colors duration-200" title="Email">
                <Mail size={24} />
              </a>
            </div>
            
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500">
                © 2025 {resume.name}. Built with React & Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
//
