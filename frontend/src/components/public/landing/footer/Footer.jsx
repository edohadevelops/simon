import { useTrack } from '../../../../context/TrackContext';
import './style.css';

const Footer = () => {
  const { track } = useTrack();
  return (
    <footer className="footer-section">
      <div className="footer-inner">
        <span className="footer-logo font-display">S.L</span>
        <p className="footer-copy">
          © 2026 Simon Peter Lotigo.
        </p>
        <p className="footer-sub">Springfield, MO · simonlotigo@yahoo.com</p>
      </div>
    </footer>
  );
};

export default Footer;
