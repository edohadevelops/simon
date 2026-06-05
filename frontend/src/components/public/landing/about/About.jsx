import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import ProfilePhoto from '../../../../assets/SimonProfile.jpeg';
import { FaLinkedin } from 'react-icons/fa';
import { useTrack } from '../../../../context/TrackContext';
import CVDropdown from '../cvdownload/CVDropdown';
import './style.css';

const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } };

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { track, activeTrack } = useTrack();

  return (
    <section id="about" className="about-section" ref={ref}>
      {/* Photo */}
      <motion.div
        className="about-photo-wrapper"
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="about-photo-frame">
          <img src={ProfilePhoto} alt="Simon Lotigo" className="about-photo" />
          <div
            className="about-photo-accent"
            style={{ borderColor: track.color }}
          />
        </div>
        {/* Floating stat */}
        <motion.div
          className="about-float-badge"
          style={{ background: `${track.color}15`, borderColor: `${track.color}30` }}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="about-float-value font-display" style={{ color: track.color }}>{track.highlights[0].value}</span>
          <span className="about-float-label">{track.highlights[0].label}</span>
        </motion.div>
      </motion.div>

      {/* Text content */}
      <div className="about-content">
        <motion.p
          className="about-label"
          style={{ color: track.color }}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          About Me
        </motion.p>

        <AnimatePresence mode="wait">
          <motion.h3
            key={`heading-${activeTrack}`}
            className="about-heading font-display"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            Meet Simon
          </motion.h3>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p
            key={`summary-${activeTrack}`}
            className="about-summary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            {track.bio}
          </motion.p>
        </AnimatePresence>

        {/* Stats */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`stats-${activeTrack}`}
            className="about-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {track.highlights.map((h, i) => (
              <div key={i} className="about-stat">
                <span className="about-stat-value font-display" style={{ color: track.color }}>
                  {h.value}
                </span>
                <span className="about-stat-label">{h.label}</span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Education */}
        <motion.div
          className="about-edu"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="about-edu-item">
            <span className="about-edu-degree">Master of Business Administration (MBA)</span>
            <span className="about-edu-school">Missouri State University · Expected May 2027</span>
          </div>
          <div className="about-edu-item">
            <span className="about-edu-degree">B.S. Actuarial Mathematics (Minor: Computer Science)</span>
            <span className="about-edu-school">Missouri State University · May 2023 · Dean's List (7 semesters)</span>
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          className="about-actions"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <CVDropdown accentColor={track.color} />
          <a
            href="https://www.linkedin.com/in/simon-lotigo/"
            target="_blank"
            rel="noreferrer"
            className="about-social-btn"
          >
            <FaLinkedin size={18} />
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
