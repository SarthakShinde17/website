import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    title: "Krishi Sahayak: AI-Powered Agri-Chatbot",
    tech: ["Python", "Flask", "LangChain", "Ollama", "ChromaDB", "RAG"],
    description: [
      "Engineered a privacy-first, offline Generative AI chatbot to assist Maharashtrian farmers with agricultural queries, eliminating the need for continuous internet connectivity.",
      "Implemented a Retrieval-Augmented Generation (RAG) pipeline to ground LLM responses in official Maharashtra government agricultural datasets, ensuring 100% domain accuracy and reducing hallucinations."
    ]
  },
  {
    title: "Customer Analysis Using K-means Clustering",
    tech: ["Python", "Jupyter Notebook", "K-Means"],
    description: [
      "Applied K-Means clustering to segment retail customer data and identify distinct purchasing patterns.",
      "Utilized metrics like the elbow method and silhouette score to determine the optimal number of customer clusters.",
      "The resulting customer segments allow for tailored promotions and enhanced customer retention."
    ]
  },
  {
    title: "BlueIn (SIH Prototype for OBIS Data Visualization)",
    tech: ["React", "TypeScript", "Supabase", "Drizzle ORM", "Tailwind CSS"],
    description: [
      "Developed a full-stack prototype for the Smart India Hackathon to address marine data accessibility challenges for the Ministry of Earth Sciences.",
      "The platform enables users to extract, visualize, and store reports from the Ocean Biodiversity Information System (OBIS).",
      "Interactive dashboard using Chart.js. Data is managed via Supabase PostgreSQL and Drizzle ORM for type-safe queries."
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Projects = () => {
  return (
    <section id="projects" className="section container">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        <FolderGit2 size={32} /> Featured Projects
      </motion.h2>

      <motion.div 
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={itemVariants} className="project-card">
            <div className="project-content">
              <div className="project-header">
                <FolderGit2 size={24} className="project-folder" />
                <a href="#" className="project-link" aria-label="External Link">
                  <ExternalLink size={20} />
                </a>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <div className="project-description">
                <ul>
                  {project.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
            <ul className="project-tech-list">
              {project.tech.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
