import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div 
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="contact-title">Let's Work Together</h2>
          <p className="contact-description">
            I'm currently seeking new opportunities and challenges in Data Science, AI Engineering, and Software Development. 
            Whether you have a question, a project in mind, or just want to say hi, feel free to drop a message!
          </p>

          <a href="mailto:contact.sarthak.shinde@gmail.com" className="btn btn-primary contact-btn">
            Get In Touch
          </a>

          <div className="contact-info">
            <a href="mailto:contact.sarthak.shinde@gmail.com" className="contact-item">
              <Mail size={20} />
              <span>contact.sarthak.shinde@gmail.com</span>
            </a>
            <a href="tel:+919146926454" className="contact-item">
              <Phone size={20} />
              <span>+91 914 692 6454</span>
            </a>
          </div>

          <div className="social-links">
            <a href="https://linkedin.com/in/sarthak-shinde-" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/SarthakShinde17" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={24} />
            </a>
          </div>
        </motion.div>
      </div>
      
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Sarthak Shinde. Designed and Built with standard clean practices.</p>
      </footer>
    </section>
  );
};

export default Contact;
