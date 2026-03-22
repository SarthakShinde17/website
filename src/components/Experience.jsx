import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    role: "AI-Engineer Volunteer",
    company: "Ioncare Tech Pvt Ltd.",
    location: "New Delhi, India",
    date: "Oct 2025 – Present",
    description: [
      "Participate in AI training, career development, and conference presentation skills workshops.",
      "Contribute to live AI-based projects, including workflow automation, website development, data mining, agentic AI, and mass emailing systems.",
      "Take ownership of technical and engineering problem-solving tasks, creating solutions that impact global virtual conference operations.",
      "Receive mentorship from senior US scientists, learning best practices in software engineering, AI, and project management."
    ]
  },
  {
    role: "Data Analyst and Researcher Intern",
    company: "Sujyot Sales and Services",
    location: "Nashik, India",
    date: "Sept 2025 – Jan 2026",
    description: [
      "Research on scientific, technical, and strategic domains as assigned.",
      "Data cleaning and visualization, with emphasis on preparing raw data and presenting it to reveal insights.",
      "Designed and carried out the full workflow for fine-tuning EasyOCR to improve accuracy from 90% to 99% on specialized client documents.",
      "Collaborative work, assisting teams as required and reporting daily progress to your respective seniors."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section container">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        <Briefcase size={32} /> Experience
      </motion.h2>
      
      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="timeline-item"
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>{exp.role}</h3>
                <span className="timeline-date">{exp.date}</span>
              </div>
              <h4 className="timeline-company">{exp.company} <span>| {exp.location}</span></h4>
              <ul className="timeline-description">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
