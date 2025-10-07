"use client";

import { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Bars3Icon,
  XMarkIcon,
  CodeBracketIcon,
  CpuChipIcon,
  RocketLaunchIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowDownTrayIcon,
  ArrowTopRightOnSquareIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import LoadingScreen from "@/components/LoadingScreen";
import ParticleBackground from "@/components/ParticleBackground";
import ResumePDF from "@/components/ResumePDF";

// Custom Icons
const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

// Navigation Component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold gradient-text"
          >
            Nikhil Verma
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-10">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.1 }}
                className="text-gray-300 justify-between hover:text-white transition-colors duration-300 relative group px-3 py-2"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden glass rounded-lg mt-2 p-6"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 px-2 text-gray-300 hover:text-white transition-colors duration-300 hover:bg-white/5 rounded-lg"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

// Hero Section
const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden animated-bg"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle background image */}
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop&auto=format&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-6 text-center relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold"
          >
            <span className="gradient-text">Nikhil Verma</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-3xl text-gray-300"
          >
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-semibold">
              Full Stack Developer & Software Tester
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-400 mt-4"
          >
            Passionate about building scalable web applications with MERN Stack,
            Next.js, and delivering high-quality software solutions through
            comprehensive testing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2"
            >
              <RocketLaunchIcon className="h-5 w-5" />
              View My Work
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-gray-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
            >
              <EnvelopeIcon className="h-5 w-5" />
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400"
        >
          <ChevronDownIcon className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  return (
    <section id="about" className="section bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-16">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Professional Summary
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Full Stack Developer with 1+ year of experience in MERN Stack
              (MongoDB, Express.js, React.js, Node.js), Next.js, and REST APIs.
              Skilled in cloud deployment (AWS), and automation testing with
              Selenium & JMeter.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Experienced in building SaaS applications, scalable web platforms,
              role-based access control (RBAC), and API integrations. Passionate
              about delivering efficient, secure, and high-performance
              solutions.
            </p>

            <div className="flex flex-wrap gap-6 mt-12">
              <div className="glass rounded-lg p-6 flex items-center gap-4">
                <CodeBracketIcon className="h-6 w-6 text-blue-400" />
                <span className="text-white font-medium">
                  Full Stack Development
                </span>
              </div>
              <div className="glass rounded-lg p-6 flex items-center gap-4">
                <CpuChipIcon className="h-6 w-6 text-purple-400" />
                <span className="text-white font-medium">Software Testing</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass rounded-2xl p-10 text-center">
              <div className="w-56 h-56 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center">
                <img
                  src="/profile.jpeg"
                  alt="Nikhil Verma"
                  className="w-full h-full object-cover object-top rounded-full"
                />
              </div>
              <h4 className="text-xl font-semibold text-white mb-4">
                Nikhil Verma
              </h4>
              <p className="text-gray-400 mb-6">
                Full Stack Developer & Software Tester
              </p>

              <div className="space-y-4 text-sm">
                <div className="flex items-center justify-center gap-2 text-gray-300">
                  <PhoneIcon className="h-4 w-4" />
                  <span>+91 6392848646</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-300">
                  <EnvelopeIcon className="h-4 w-4" />
                  <span>jsnikhil00@gmail.com</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-300">
                  <MapPinIcon className="h-4 w-4" />
                  <span>Gurgaon, India</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Experience Section
const ExperienceSection = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "VGI Sooprs Technology Pvt Ltd.",
      period: "Aug 2024 – Present",
      location: "Gurgaon, India",
      achievements: [
        "Developed and deployed a CRM system using React.js & Node.js, reducing manual workflows by 40%",
        "Implemented Role-Based Access Control (RBAC) to securely manage 500+ users across multiple departments",
        "Built an Admin Dashboard with real-time analytics, improving reporting speed by 60%",
        "Automated API, UI, and load testing with Selenium & JMeter, reducing production bugs by 30%",
        "Collaborated in an Agile Scrum environment with sprints, Jira tracking, and cross-functional reviews",
      ],
    },
  ];

  return (
    <section id="experience" className="section">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mt-12 mb-8">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-10 mb-12"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&auto=format&q=80"
                      alt="Company Logo"
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-xl text-blue-400 font-medium">
                      {exp.company}
                    </p>
                  </div>
                </div>
                <div className="text-right mt-4 md:mt-0">
                  <p className="text-gray-300 font-medium">{exp.period}</p>
                  <p className="text-gray-400">{exp.location}</p>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.achievements.map((achievement, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Section
const ProjectsSection = () => {
  const projects = [
    {
      title: "Shopinger",
      description:
        "Multi-vendor e-commerce platform (like Amazon) with cart, checkout, secure payments, and live order tracking",
      tech: ["React.js", "Node.js", "MongoDB", "Payment Gateway"],
      features: [
        "Scaled system to handle 1,000+ concurrent users",
        "Optimized MongoDB queries for performance",
        "Secure payment integration",
        "Real-time order tracking",
      ],
      liveUrl: "https://shopinger.co.in/",
      githubUrl: "https://github.com/Jsnikhilverma",
    },
    {
      title: "Namohsundari",
      description:
        "Perfume Business e-commerce platform with product catalog, cart, checkout, secure payments, and live delivery updates",
      tech: ["React.js", "Node.js", "MongoDB", "MERN Stack"],
      features: [
        "Dynamic inventory management",
        "Secure payment processing",
        "Live delivery tracking",
        "Product catalog with search",
      ],
      liveUrl: "http://103.119.171.213/",
      githubUrl: "https://github.com/Jsnikhilverma",
    },
    {
      title: "AxeVisa",
      description:
        "Visa application management platform with step-based process flow",
      tech: ["Next.js", "Node.js", "MongoDB", "Document Management"],
      features: [
        "Step-based application process",
        "Document management system",
        "User management",
        "Application tracking",
      ],
      liveUrl: "https://axevisa.com/",
      githubUrl: "https://github.com/Jsnikhilverma",
    },
  ];

  const testingProjects = [
    {
      name: "Sooprs.com",
      type: "API, UI & Automation Testing",
      url: "https://sooprs.com/",
    },
    {
      name: "Lorrigo.in",
      type: "Load Testing with JMeter",
      url: "https://lorrigo.com/",
    },
    {
      name: "Caross.in",
      type: "API, UI & Load Testing",
      url: "https://caross.in/",
    },
    {
      name: "Postbox (Social Media App)",
      type: "Scalability & Security Testing",
      url: "https://postbox.biz/",
    },
    {
      name: "EzioTravel (Travel App)",
      type: "Manual & UI Testing",
      url: "https://eziotravels.com/",
    },
  ];

  return (
    <section id="projects" className="section bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        {/* Development Projects */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-white mb-12 text-center">
            Development Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-8 hover:glow transition-all duration-300 group"
              >
                <div className="w-full h-52 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mb-6 overflow-hidden">
                  <img
                    src={
                      index === 0
                        ? "/Screenshot 2025-10-07 at 10.47.45 AM.png"
                        : index === 1
                        ? "/Screenshot 2025-10-07 at 10.51.38 AM.png"
                        : "/Screenshot 2025-10-07 at 10.48.21 AM.png"
                    }
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-xl font-semibold text-white mb-4">
                  {project.title}
                </h4>
                <p className="text-gray-300 text-sm mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-3 mb-8">
                  {project.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-gray-400 text-sm flex items-start gap-2"
                    >
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3">
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium text-center flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300"
                  >
                    <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 border border-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium text-center flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300"
                  >
                    <GithubIcon className="h-4 w-4" />
                    Code
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testing Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-12 text-center">
            Testing Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testingProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-8 hover:glow transition-all duration-300 group cursor-pointer"
                onClick={() => window.open(project.url, "_blank")}
              >
                <div className="w-full h-36 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mb-6 overflow-hidden">
                  <img
                    src={
                      index === 0
                        ? "/sooprs.png"
                        : index === 1
                        ? "/lorrigo.png"
                        : index === 2
                        ? "/caross.png"
                        : index === 3
                        ? "/postbox.png"
                        : "/ezio.png"
                    }
                    alt={project.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h4>
                <p className="text-gray-400 text-sm mb-4">{project.type}</p>
                <div className="mt-6 flex items-center text-blue-400 text-sm">
                  <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-1" />
                  View Project
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Skills Section
const SkillsSection = () => {
  const skills = [
    {
      category: "Frontend",
      skills: [
        "React.js",
        "Next.js",
        "Redux",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    { category: "Backend", skills: ["Node.js", "Express.js", "PHP"] },
    { category: "Database", skills: ["MongoDB", "MySQL"] },
    {
      category: "Testing",
      skills: [
        "Selenium (Java)",
        "Manual Testing",
        "API Testing",
        "JMeter (Load Testing)",
      ],
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "Github", "Postman", "AWS"],
    },
    {
      category: "Programming Languages",
      skills: ["JavaScript", "C++", "Python"],
    },
  ];

  return (
    <section id="skills" className="section">
      <div className="container mx-auto px-6 ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mt-12">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-12"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <img
                  src={
                    index === 0
                      ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                      : index === 1
                      ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                      : index === 2
                      ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                      : index === 3
                      ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg"
                      : index === 4
                      ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                      : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  }
                  alt={skillGroup.category}
                  className="w-8 h-8 filter brightness-0 invert"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {skillGroup.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="px-3 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8">
                Let's Connect
              </h3>
              <p className="text-gray-300 mb-10">
                I'm always interested in new opportunities and exciting
                projects. Feel free to reach out if you'd like to work together!
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <PhoneIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <p className="text-gray-400">+91 6392848646</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <EnvelopeIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-gray-400">jsnikhil00@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <MapPinIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Location</p>
                  <p className="text-gray-400">Gurgaon, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-6">
              <motion.a
                href="https://linkedin.com/in/nikhil-verma"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                <LinkedinIcon className="h-6 w-6 text-white" />
              </motion.a>
              <motion.a
                href="https://github.com/nikhil-verma"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                <GithubIcon className="h-6 w-6 text-white" />
              </motion.a>
            </div>

            {/* Resume Download */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                // Create a simple download link for now
                const link = document.createElement("a");
                link.href = "/Fullstack-Nikhil-Verma-resume.pdf";
                link.download = "Nikhil_Verma_Resume.pdf";
                link.click();
              }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              <ArrowDownTrayIcon className="h-5 w-5" />
              Download Resume
            </motion.button>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-white font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-white font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-white font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-white font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold gradient-text">Nikhil Verma</h3>
            <p className="text-gray-400">
              Full Stack Developer & Software Tester
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="https://linkedin.com/in/nikhil-verma"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <LinkedinIcon className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/nikhil-verma"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <GithubIcon className="h-6 w-6" />
              </a>
              <a
                href="mailto:jsnikhil00@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <EnvelopeIcon className="h-6 w-6" />
              </a>
            </div>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-500 text-sm">
                © 2024 Nikhil Verma. All rights reserved. Built with Next.js &
                Tailwind CSS.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

// Main Portfolio Component
export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{isLoading && <LoadingScreen />}</AnimatePresence>

      <div className="min-h-screen bg-black text-white relative">
        <ParticleBackground />
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}
