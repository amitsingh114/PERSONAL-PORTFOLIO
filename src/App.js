import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, ExternalLink, Code, Shield, Lightbulb, MessageSquare, Briefcase, Award, GraduationCap, BookOpen, ChevronRight, Menu, X } from 'lucide-react';

// Reusable Project Card Component
const ProjectCard = ({ title, description, technologies, githubLink, liveLink }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2 flex flex-col h-full border border-gray-100 group">
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-700 flex-grow mb-4 text-base">{description}</p>
      <div className="mb-4">
        <h4 className="text-md font-semibold text-gray-800 mb-2">Technologies Used:</h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-indigo-100 text-indigo-700 text-sm px-3 py-1 rounded-full font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-auto flex justify-between space-x-4 pt-4 border-t border-gray-100">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition duration-300 transform group-hover:scale-105"
          >
            <Github className="w-5 h-5 mr-1 group-hover:rotate-6 transition-transform duration-300" /> Code
          </a>
        )}
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-purple-600 hover:text-purple-800 font-medium transition duration-300 transform group-hover:scale-105"
          >
            <ExternalLink className="w-5 h-5 mr-1 group-hover:scale-110 transition-transform duration-300" /> Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

// Typing Effect Component with Blinking Cursor
const TypingEffect = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (index < text.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(typingTimeout);
    } else {
      // Start cursor blinking after typing is complete
      const cursorInterval = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 500); // Blinks every 500ms
      return () => clearInterval(cursorInterval);
    }
  }, [index, text, speed]);

  return (
    <span className="font-semibold text-purple-600">
      {displayedText}
      <span className={`inline-block w-0.5 h-6 bg-purple-600 ml-1 align-bottom ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}></span>
    </span>
  );
};


// --- Page Components ---

const AboutPage = ({ setCurrentPage }) => (
  <section className="animate-fade-in flex flex-col md:flex-row items-center justify-center text-center md:text-left py-40 md:py-50 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl shadow-lg border border-indigo-100 relative overflow-hidden"> {/* Increased padding */}
    {/* Subtle background pattern */}
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 40 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 20v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 46v-4H4v4H0v2h4v4h2v-4h4v-2H6zm0-20v-4H4v4H0v2h4v4h2v-4h4v-2H6z'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>

    <div className="md:w-1/2 flex justify-center mb-18 md:mb-10 md:mr-20 z-10">
      {/* Replace with your actual photo */}
      <img
        src="https://placehold.co/250x250/A78BFA/ffffff?text=Your+Photo"
        alt="Your Profile"
        className="w-80 h-80 rounded-full object-cover border-4 border-indigo-300 shadow-xl ring-4 ring-indigo-200 transition-transform duration-500 hover:scale-105"
      />
    </div>
    <div className="md:w-1/2 z-10">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
        Hello, I'm <span className="text-indigo-700"> Amit Kumar Singh </span>
      </h1>
      <p className="mt-4 text-xl md:text-2xl text-gray-700 font-light">
        A <TypingEffect text="Passionate Cybersecurity Enthusiast" /> & a <TypingEffect text="Web Developer" /> with hands-on experience in both Building and Securing Web Applications.
      </p>
      <p className="mt-6 text-lg text-gray-600">
        In cybersecurity, I specialize in Ethical Hacking, Web Application Pentesting , Reconnaissance, and Vulnerability A ssessment. I’ve worked with tools such as Burp Suite, Nmap, Hydra, Wireshark, Nikto, Dirb, Gobuster, FFUF, Metasploit, and SQLMap etc.
        <br></br>
        
       On the development side, I work with the MERN stack — React, Express.js, Node.js, and MongoDB along with SQL. I also use tools and frameworks like Nextjs, Postman, Git, GitHub, Tailwind CSS, Bootstrap, and VS Code to streamline development and collaboration.  I also do programming in C++ and JavaScript.


      </p>
      <div className="mt-8 flex justify-center md:justify-start space-x-4 md:space-x-6 flex-wrap gap-4"> {/* Added gap-4 for spacing on smaller screens */}
        <button
          onClick={() => setCurrentPage('contact')}
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105 flex items-center group"
        >
          <MessageSquare className="w-5 h-5 mr-2 group-hover:rotate-6 transition-transform duration-300" /> Contact Me
        </button>
        <a
          href="https://github.com/amitsingh114" // Replace with your GitHub profile
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105 flex items-center group"
        >
          <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/amitsingh705/" // Replace with your LinkedIn profile
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105 flex items-center group"
        >
          <Linkedin className="w-5 h-5 mr-2 group-hover:translate-y-[-2px] transition-transform duration-300" /> LinkedIn
        </a>
      </div>
    </div>
  </section>
);

const SkillsPage = () => (
  <section className="animate-fade-in py-24 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-lg border border-indigo-100 relative overflow-hidden"> {/* Increased padding */}
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 20v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 46v-4H4v4H0v2h4v4h2v-4h4v-2H6zm0-20v-4H4v4H0v2h4v4h2v-4h4v-2H6z'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 z-10">My Skills</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 z-10">
      {/* Skill Card: Web Development */}
      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2 border border-gray-100 group">
        <div className="flex items-center text-indigo-600 mb-4">
          <Code className="w-8 h-8 mr-3 group-hover:scale-110 transition-transform duration-300" />
          <h3 className="text-2xl font-semibold">Web Development</h3>
        </div>
        <ul className="list-disc list-inside text-gray-700 space-y-2 text-base">
          <li><span className="font-medium">Frontend:</span> React, Next.js, HTML5, CSS3, JavaScript (ES6+), Tailwind CSS, Bootstrap</li>
          <li><span className="font-medium">Backend:</span> Node.js, Express.js, Python (Django/Flask), RESTful APIs</li>
          <li><span className="font-medium">Databases:</span> MongoDB, PostgreSQL, MySQL</li>
          <li><span className="font-medium">Version Control:</span> Git, GitHub, GitLab</li>
        </ul>
      </div>

      {/* Skill Card: Cybersecurity */}
      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2 border border-gray-100 group">
        <div className="flex items-center text-purple-600 mb-4">
          <Shield className="w-8 h-8 mr-3 group-hover:rotate-6 transition-transform duration-300" />
          <h3 className="text-2xl font-semibold">Cybersecurity</h3>
        </div>
        <ul className="list-disc list-inside text-gray-700 space-y-2 text-base">
          <li><span className="font-medium">Web App Security:</span> OWASP Top 10, SQLi, XSS, CSRF, IDOR, SSRF</li>
          <li><span className="font-medium">Tools & Practices:</span> Burp Suite, Nmap, Metasploit, Wireshark, Nessus, Kali Linux, SAST/DAST</li>
          <li><span className="font-medium">Concepts:</span> Penetration Testing, Vulnerability Assessment, Threat Modeling, Incident Response, Secure SDLC</li>
          <li><span className="font-medium">Secure Coding:</span> Input Validation, Authentication/Authorization, Cryptography, API Security</li>
        </ul>
      </div>
    </div>
  </section>
);

const EducationPage = () => (
  <section className="animate-fade-in py-24 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl shadow-lg border border-blue-100 relative overflow-hidden"> {/* Increased padding */}
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300BCD4' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 20v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 46v-4H4v4H0v2h4v4h2v-4h4v-2H6zm0-20v-4H4v4H0v2h4v4h2v-4h4v-2H6z'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 z-10">Education</h2>
    <div className="flex flex-col space-y-8 max-w-3xl mx-auto px-4 z-10">
      {/* Education Entry 1 */}
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out border border-gray-100 group">
        <div className="flex items-center mb-3">
          <GraduationCap className="w-7 h-7 text-blue-600 mr-3 group-hover:scale-110 transition-transform duration-300" />
          <div>
            <h3 className="text-xl font-bold text-gray-900">Bachelor's in Computer Science Engineering</h3>
            <p className="text-lg text-gray-700">Chandigarh University, Mohali, Punjab</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm">August 2022 - Present</p>
        <ul className="list-disc list-inside text-gray-700 mt-2 text-base">
          {/* <li>Specialized in Web Application Security and Digital Forensics.</li> */}
          {/* <li>Relevant Coursework: Advanced Cryptography, Network Security, Ethical Hacking, Secure Software Development.</li> */}
          <li><span className="font-medium">GPA:</span> 7.07/10.0</li>
        </ul>
      </div>

      {/* Education Entry 2 */}
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out border border-gray-100 group">
        <div className="flex items-center mb-3">
          <GraduationCap className="w-7 h-7 text-blue-600 mr-3 group-hover:scale-110 transition-transform duration-300" />
          <div>
            <h3 className="text-xl font-bold text-gray-900">Intermediate (UP Board)</h3>
            <p className="text-lg text-gray-700">Janta Inter College, Deoria,U.P.</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm">April 2019 - April 2021</p>
        <ul className="list-disc list-inside text-gray-700 mt-2 text-base">
          {/* <li>Focused on Software Engineering and Database Management.</li> */}
          {/* <li>Key Projects: Developed a secure online voting system.</li> */}
          <li><span className="font-medium">Percentage Score:</span>79.4%</li>
        </ul>
      </div>
      {/* Education Entry 3 */}
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out border border-gray-100 group">
        <div className="flex items-center mb-3">
          <GraduationCap className="w-7 h-7 text-blue-600 mr-3 group-hover:scale-110 transition-transform duration-300" />
          <div>
            <h3 className="text-xl font-bold text-gray-900">Matriculation (UP Board)</h3>
            <p className="text-lg text-gray-700">Linh Son Buddhist Intermediate College, Kushinagar, U.P.</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm">April 2015 - April 2017</p>
        <ul className="list-disc list-inside text-gray-700 mt-2 text-base">
          {/* <li>Focused on Software Engineering and Database Management.</li> */}
          {/* <li>Key Projects: Developed a secure online voting system.</li> */}
          <li><span className="font-medium">Percentage Score:</span>82.5%</li>
        </ul>
      </div>
    </div>

    
  </section>
);

const CertificationsPage = () => (
  <section className="animate-fade-in py-24 bg-gradient-to-br from-blue-50 to-purple-100 rounded-xl shadow-lg border border-orange-100 relative overflow-hidden"> {/* Increased padding */}
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FB923C' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 20v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 46v-4H4v4H0v2h4v4h2v-4h4v-2H6zm0-20v-4H4v4H0v2h4v4h2v-4h4v-2H6z'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 z-10">Certifications</h2>
    <div className="flex flex-col space-y-8 max-w-3xl mx-auto px-4 z-10">
      {/* Certification Entry 1 */}
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out border border-gray-100 group">
        <div className="flex items-center mb-3">
          <Award className="w-7 h-7 text-orange-500 mr-3 group-hover:rotate-12 transition-transform duration-300" />
          <div>
            <h3 className="text-xl font-bold text-gray-900">IBM Cybersecurity Analyst</h3>
            <p className="text-lg text-gray-700">Issued by IBM</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm">Issued: September 2024</p>
        <p className="text-gray-700 mt-2 text-base">Skills: Introduction to Cybersecurity Careers · Introduction to Cybersecurity Essentials · Introduction to Cybersecurity Tools & Cyberattacks · Operating Systems: Overview, Administration, and Security · Computer Networks and Network Security · Database Essentials and Vulnerabilities · Cybersecurity Architecture · Cybersecurity Compliance Framework, Standards & Regulations · Penetration Testing, Threat Hunting, and Cryptography · Incident Response and Digital Forensics · Cybersecurity Case Studies and Capstone Project · Cybersecurity Assessment: CompTIA Security+ & CYSA+ · Generative AI: Boost Your Cybersecurity Career · Cybersecurity Job Search, Resume, and Interview Prep
Skills: Introduction to Cybersecurity Careers · Introduction to Cybersecurity Essentials · Introduction to Cybersecurity Tools & Cyberattacks · Operating Systems: Overview, Administration, and Security · Computer Networks and Network Security · Database Essentials and Vulnerabilities · Cybersecurity Architecture · Cybersecurity Compliance Framework, Standards & Regulations · Penetration Testing, Threat Hunting, and Cryptography · Incident Response and Digital Forensics · Cybersecurity Case Studies and Capstone Project · Cybersecurity Assessment: CompTIA Security+ & CYSA+ · Generative AI: Boost Your Cybersecurity Career · Cybersecurity Job Search, Resume, and Interview Prep

</p>
      </div>

      {/* Certification Entry 2 */}
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out border border-gray-100 group">
        <div className="flex items-center mb-3">
          <Award className="w-7 h-7 text-orange-500 mr-3 group-hover:rotate-12 transition-transform duration-300" />
          <div>
            <h3 className="text-xl font-bold text-gray-900">Google Cybersecurity</h3>
            <p className="text-lg text-gray-700">Issued by Google</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm">Issued: November 2023</p>
        <p className="text-gray-700 mt-2 text-base">Skills: Foundations of Cybersecurity · Play It Safe: Manage Security Risks · Connect and Protect: Networks and Network Security · Tools of the Trade: Linux and SQL · Assets, Threats, and Vulnerabilities · Sound the Alarm: Detection and Response · Automate Cybersecurity Tasks with Python · Put It to Work: Prepare for Cybersecurity Jobs</p>
      </div>

      {/* Award/Scholarship Entry 1 */}
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out border border-gray-100 group">
        <div className="flex items-center mb-3">
          <Lightbulb className="w-7 h-7 text-yellow-500 mr-3 group-hover:scale-110 transition-transform duration-300" />
          <div>
            <h3 className="text-xl font-bold text-gray-900">The Complete Ethical Hacking</h3>
            <p className="text-lg text-gray-700">Udemy</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm">March 2024</p>
        <p className="text-gray-700 mt-2 text-base">Skills: Ethical Hacking · Cybersecurity · VPN & DNS · Dark Web · Kali Linux · Network Fundamentals · Wireless network attacks and protection · Man In The Middle attacks and protection · Beef Usage · Ubuntu Apache Server Installation · Wireshark Analysis · Metasploit · Maltego · Social Engineering · Trojans & Backdoors · Meterpreter · Website Pentesting · SQL Injection · XSS Vulnerabilities · Keylogger · Tunneling Services · Generative AI for Hacking · ChatGPT and Prompt Injection</p>
      </div>

      {/* Award/Scholarship Entry 2 */}
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out border border-gray-100 group">
        <div className="flex items-center mb-3">
          <Lightbulb className="w-7 h-7 text-yellow-500 mr-3 group-hover:scale-110 transition-transform duration-300" />
          <div>
            <h3 className="text-xl font-bold text-gray-900">Full Stack Web Development MASTERY Course - Novice to Expert</h3>
            <p className="text-lg text-gray-700">Udemy</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm">October 2023</p>
        <p className="text-gray-700 mt-2 text-base">Skills: Full-Stack Development · React.js · Node.js · Express.js · MongoDB · JavaScript · HTML5 · Cascading Style Sheets (CSS) · Tailwind CSS · REST APIs · jQuery · Git</p>
      </div>
      {/* Award/Scholarship Entry 5 */}
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out border border-gray-100 group">
        <div className="flex items-center mb-3">
          <Lightbulb className="w-7 h-7 text-yellow-500 mr-3 group-hover:scale-110 transition-transform duration-300" />
          <div>
            <h3 className="text-xl font-bold text-gray-900">Angular Developer</h3>
            <p className="text-lg text-gray-700">Infosys Springboard</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm">October 2023</p>
        <p className="text-gray-700 mt-2 text-base"> Completed a certified Angular development course on Infosys Springboard, gaining hands-on experience in components, services, routing, and building dynamic web applications using TypeScript.</p>
      </div>

      {/* Award/Scholarship Entry 6 */}
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out border border-gray-100 group">
        <div className="flex items-center mb-3">
          <Lightbulb className="w-7 h-7 text-yellow-500 mr-3 group-hover:scale-110 transition-transform duration-300" />
          <div>
            <h3 className="text-xl font-bold text-gray-900">Academic Paper Writing and IPR</h3>
            <p className="text-lg text-gray-700">Linkedin Learning</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm">April 2023</p>
        <p className="text-gray-700 mt-2 text-base"> Completed a certified course on Academic Paper Writing and Intellectual Property Rights via E-Learning (LinkedIn), covering research methodologies, paper structuring, citation styles, plagiarism ethics, and IPR fundamentals.</p>
      </div>
    </div>
  </section>
);

const ProjectsPage = () => (
  <section className="animate-fade-in py-24 bg-gray-100 rounded-xl shadow-inner border border-gray-200"> {/* Increased padding */}
    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Featured Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
      {/* Project Card 1 */}
      <ProjectCard
        title="ShadoCrypt"
        description="ShadoCrypt is a full-stack cryptographic utility tool built with React.js (frontend) and Python (backend) using Express. It supports symmetric encryption, hashing, and data encoding/decoding, allowing users to experiment with various algorithms securely through a clean, interactive UI.

🔐 Core Features:

Symmetric encryption/decryption (AES, DES, ChaCha20, etc.)

Hashing (SHA-256, SHA-512, bcrypt, etc.)

Encoding & decoding (Base64, Hex, ROT13, etc.)

Clean TailwindCSS-based UI with live output

Backend-powered cryptographic operations (via Python API)

🎯 Ideal for students, pentesters, and security enthusiasts who want to learn, test, and demo cryptography in action.

"
        technologies={['React', 'Node.js', 'Express', 'MongoDB', 'Python', 'Cryptography']}
        githubLink="https://github.com/amitsingh114/ShadoCrypt" // Replace with your project link
        liveLink="https://your-project1-live.com" // Replace with live demo link
      />

      {/* Project Card 2 */}
      <ProjectCard
        title="NewsApp - React, Express"
        description="A responsive and dynamic single-page news application built with ReactJS, leveraging NewsAPI to fetch the latest headlines from various categories including business, technology, sports, health, and more. The app supports seamless navigation using React Router, provides category-wise filtering, and features a clean UI powered by Bootstrap.

🔧 Features:

Real-time news fetched from external API

Category-based navigation

Loading spinners & error handling

Responsive layout for all devices

🔗 Ideal for learning React hooks, component-based architecture, and API integration in a modern frontend project."
        technologies={['React.js', 'Express.js', 'API Integration', 'NewsAPI']}
        githubLink="https://github.com/amitsingh114/newsapp-reactjs"
        liveLink="https://your-project2-live.com"
      />

      {/* Project Card 3 */}
      <ProjectCard
        title="Bootstrap E-commerce Portfolio Website"
        description="A responsive and modern portfolio website built using Bootstrap, tailored for tech companies offering digital services or products. The project features a clean UI with image sliders, product showcase sections, and a service-focused layout ideal for startups or agencies. This template emphasizes simplicity, performance, and cross-device compatibility."
        technologies={['Bootstrap']}
        githubLink="https://github.com/amitsingh114/bootstrap-project-ecommerce-portfolio"
        liveLink="https://your-project3-live.com"
      />

      {/* Project Card 4 (Add more as needed) */}
      <ProjectCard
        title="Light/Dark Mode Chrome Extension"
        description="A simple and effective Chrome extension that allows users to toggle between light and dark modes with a single click. Designed for a seamless user experience, this extension enhances web accessibility and personalization by adapting webpage themes based on user preferences."
        technologies={['React', 'Node.js', 'WebAuthn API']}
        githubLink="https://github.com/amitsingh114/chrome-extension"
        liveLink="https://your-project4-live.com"
      />
        
    </div>
    <div className="text-center mt-12">
      <a
        href="https://github.com/your-github?tab=repositories" // Link to ALL your GitHub repos
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center mx-auto w-fit group"
      >
        <Briefcase className="w-5 h-5 mr-2 group-hover:rotate-3 transition-transform duration-300" /> View All Projects <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
      </a>
    </div>
  </section>
);

const ResearchPublicationsPage = () => (
  <section className="animate-fade-in py-24 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl shadow-lg border border-teal-100 relative overflow-hidden"> {/* Increased padding */}
     <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310B981' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 20v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 46v-4H4v4H0v2h4v4h2v-4h4v-2H6zm0-20v-4H4v4H0v2h4v4h2v-4h4v-2H6z'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 z-10">Research & Publications</h2>
    <div className="flex flex-col space-y-8 max-w-3xl mx-auto px-4 z-10">
      {/* Publication Entry 1 */}
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out border border-gray-100 group">
        <div className="flex items-center mb-3">
          <BookOpen className="w-7 h-7 text-teal-600 mr-3 group-hover:scale-110 transition-transform duration-300" />
          <div>
            <h3 className="text-xl font-bold text-gray-900">"XploitGuard: Automated Vulnerability Scanning Tool"</h3>
            <p className="text-lg text-gray-700">International Journal of Research in Engineering, Science and Management</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm">Published: Jun 6, 2025</p>
        <p className="text-gray-700 mt-2 text-base">
          Vulnerability scanning is the process of discovering security vulnerabilities in computer systems, networks, and applications with the use of advanced scanning mechanisms. The research presents an automated state-of-the-art vulnerability scanning tool developed to improve organizational cybersecurity by enabling proactive defense strategies. The tool employs a combination of automated scanning techniques and human intelligence in the identification of existing vulnerabilities, misconfigurations, and unauthorized access points. Some of its features include network reconnaissance, system fingerprinting, and source code review and application configuration. The results are presented in a clear, actionable format in which the security professional has a clear way through prioritizing and patching vulnerabilities that conform to industry regulations. The tool is suited towards validating security for local networks and web environments by scanning IP addresses and URLs and is checking for vulnerable ports. In this internet-and-wireless-network-reliant era, Nictus, nuclei, Shodan, and other tools safeguard digital infrastructure. This paper emphasizes proactive vulnerability management as a strong defense against constantly evolving cyber dangers.
        </p>
        <div className="mt-3">
          <a
  href="https://journal.ijresm.com/index.php/ijresm/article/view/3299"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-600 hover:underline flex items-center z-10 relative"
>
  Read Publication <ExternalLink className="w-4 h-4 ml-1" />
</a>

        </div>
      </div>

      {/* Research Project Entry 1
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out border border-gray-100 group">
        <div className="flex items-center mb-3">
          <BookOpen className="w-7 h-7 text-teal-600 mr-3 group-hover:scale-110 transition-transform duration-300" />
          <div>
            <h3 className="text-xl font-bold text-gray-900">"Secure Communication Protocols for IoT Devices" (Research Project)</h3>
            <p className="text-lg text-gray-700">University Research Lab</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm">Period: 20XX - 20YY</p>
        <p className="text-gray-700 mt-2 text-base">
          Contributed to a research initiative focused on developing lightweight, secure communication protocols tailored for resource-constrained Internet of Things (IoT) devices.
        </p>
      </div> */}

      {/* Add more publications/research entries as needed */}
    </div>
  </section>
);

const ContactPage = () => (
  <section className="h-full w-full  bg-white from-indigo-50 to-purple-50 flex items-center justify-center px-2">
    <div className="h-full bg-white w-full max-w-5xl h-[65vh] rounded-xl shadow-lg border border-gray-300 flex flex-col items-center justify-center px-16 py-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Contact Information</h2>
      <div className="text-lg text-gray-700 space-y-3 text-center">
        <p>📞 Phone: +91-7052997257</p>
        <p>📧 Email: amitsingh705299@gmail.com</p>
      </div>
    </div>
  </section>
);








// Main App component
const App = () => {
  const [currentPage, setCurrentPage] = useState('about'); // Default page
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  const handleNavLinkClick = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
  };

  const NavButton = ({ page, label }) => (
    <button
      onClick={() => handleNavLinkClick(page)}
      className={`nav-link font-medium transition-colors duration-300 ease-in-out px-3 py-2 rounded-md ${
        currentPage === page ? 'text-indigo-700 bg-indigo-50 shadow-sm' : 'text-gray-600 hover:text-indigo-700 hover:bg-gray-50'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 antialiased flex flex-col items-center">
      {/* Navbar - Sticky and impressive */}
      <nav className="w-full bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg shadow-md py-4 px-6 md:px-12 flex justify-between items-center rounded-b-lg z-20 sticky top-0 border-b border-gray-200">
        <div className="text-2xl font-bold text-indigo-700 hover:scale-105 transition-transform duration-200">
          amit<span className="text-gray-500">.site</span>
        </div>
        {/* Desktop Navigation */}
        <div className="space-x-2 md:space-x-4 flex-wrap justify-center hidden md:flex">
          <NavButton page="about" label="About" />
          <NavButton page="skills" label="Skills" />
          <NavButton page="education" label="Education" />
          <NavButton page="certifications" label="Certifications" />
          <NavButton page="projects" label="Projects" />
          <NavButton page="research" label="Research" />
          <NavButton page="contact" label="Contact" />
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600 hover:text-indigo-700 focus:outline-none">
                {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden w-full bg-white bg-opacity-95 backdrop-filter backdrop-blur-lg shadow-md absolute top-[68px] left-0 z-10 flex flex-col items-center py-4 space-y-4 animate-slide-down">
          <NavButton page="about" label="About" />
          <NavButton page="skills" label="Skills" />
          <NavButton page="education" label="Education" />
          <NavButton page="certifications" label="Certifications" />
          <NavButton page="projects" label="Projects" />
          <NavButton page="research" label="Research" />
          <NavButton page="contact" label="Contact" />
        </div>
      )}

      <main className="w-full max-w-screen-2xl px-30 py-4 md:py-12 flex-grow">
        {(() => { // Using IIFE for conditional rendering
          switch (currentPage) {
            case 'about':
              return <AboutPage setCurrentPage={setCurrentPage} />;
            case 'skills':
              return <SkillsPage />;
            case 'education':
              return <EducationPage />;
            case 'certifications':
              return <CertificationsPage />;
            case 'projects':
              return <ProjectsPage />;
            case 'research':
              return <ResearchPublicationsPage />;
            case 'contact':
              return <ContactPage />;
            default:
              return <AboutPage setCurrentPage={setCurrentPage} />; // Fallback
          }
        })()}
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-white py-8 px-6 md:px-12 text-center rounded-t-lg">
        <div className="flex justify-center space-x-6 mb-4">
          {/* <a href="mailto:your.email@example.com" className="hover:text-indigo-400 transition duration-300 ease-in-out transform hover:scale-110">
            <Mail className="w-6 h-6" />
          </a> */}
          <a href="https://github.com/amitsingh114" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition duration-300 ease-in-out transform hover:scale-110">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/amitsingh705/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition duration-300 ease-in-out transform hover:scale-110">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} AMIT KUMAR SINGH. All rights reserved.</p>
        <p className="text-sm text-gray-400 mt-2">Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default App;
