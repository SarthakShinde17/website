import { motion } from 'framer-motion';
import { BookOpen, Award, Code2 } from 'lucide-react';
import './SkillsEducation.css';

const skills = [
  { category: "Languages", items: ["Python", "Java"] },
  { category: "Databases", items: ["PostgreSQL", "SQL"] },
  { category: "AI & Data Science", items: ["Generative AI (LLMs, TTS, videogen, imagegen)", "Langchain", "Ollama (Llama 3/Mistral)", "RAG", "Scikit-learn", "Pandas", "NumPy", "N8N basics"] },
  { category: "DevOps & Tools", items: ["Git", "GitHub", "VS Code", "Jupyter Notebook"] },
  { category: "Visualization Tools", items: ["Looker Studio", "Power BI", "Tableau"] }
];

const education = [
  {
    degree: "Bachelor of Technology in Information Technology and Data Science",
    institution: "Ajeenkya D Y Patil University",
    location: "Pune, India",
    date: "Aug 2022 – May 2026 (Expected)"
  },
  {
    degree: "Secondary Education",
    institution: "Shri Mhalsakant Vidhyalay",
    location: "Pune, India",
    date: "2020 - 2022"
  }
];

const certifications = [
  "Data Science and Machine Learning (Theory and Projects) A to Z - Infosys Springboard.",
  "Python Essentials 1 & 2 - Cisco Networking Academy/ OpenEDG Python Institute.",
  "Future Skills for Youth - Deutsche Bank / Rubicon Foundation."
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const SkillsEducation = () => {
  return (
    <section id="skills" className="section container">
      <div className="skills-edu-grid">
        
        <div className="skills-column">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            <Code2 size={32} /> Skills
          </motion.h2>

          <div className="skills-list">
            {skills.map((skillGroup, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="skill-category"
              >
                <h3>{skillGroup.category}</h3>
                <div className="skill-tags">
                  {skillGroup.items.map((item, i) => (
                    <span key={i} className="skill-tag">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="edu-column">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            <BookOpen size={32} /> Education
          </motion.h2>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="edu-list"
          >
            {education.map((edu, index) => (
              <motion.div key={index} variants={itemVariants} className="edu-card">
                <h3>{edu.degree}</h3>
                <h4 className="institution">{edu.institution} <span>| {edu.location}</span></h4>
                <div className="date">{edu.date}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="section-title"
            style={{ marginTop: '4rem' }}
          >
            <Award size={32} /> Certification
          </motion.h2>

          <motion.ul 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="cert-list"
          >
            {certifications.map((cert, index) => (
              <motion.li key={index} variants={itemVariants}>
                {cert}
              </motion.li>
            ))}
          </motion.ul>
        </div>

      </div>
    </section>
  );
};

export default SkillsEducation;
