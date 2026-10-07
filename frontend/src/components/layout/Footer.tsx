import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, ShieldCheck, MapPin } from 'lucide-react';
import { APP_NAME, APP_TAGLINE } from '../../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <Link to="/" className="brand">
              <div className="brand-icon">
                <Layers size={18} />
              </div>
              <span className="brand-title">
                Work<span className="brand-highlight">Link</span>
              </span>
            </Link>
            <p className="footer-tagline">{APP_TAGLINE}</p>
            <div className="footer-badges">
              <span className="footer-badge">
                <MapPin size={12} /> 10 km Service Radius
              </span>
              <span className="footer-badge">
                <ShieldCheck size={12} /> Verified Professionals
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Platform</h4>
            <ul className="footer-links">
              <li><Link to="/services">Services Catalog</Link></li>
              <li><Link to="/workers">Find Verified Workers</Link></li>
              <li><Link to="/dashboard">Customer Dashboard</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="footer-col">
            <h4 className="footer-heading">Skilled Trades</h4>
            <ul className="footer-links">
              <li><Link to="/workers?category=electrician">Electricians</Link></li>
              <li><Link to="/workers?category=plumber">Plumbers</Link></li>
              <li><Link to="/workers?category=ac-technician">AC Technicians</Link></li>
              <li><Link to="/workers?category=carpenter">Carpenters</Link></li>
              <li><Link to="/workers?category=mechanic">Mechanics</Link></li>
            </ul>
          </div>

          {/* Trust & Legal */}
          <div className="footer-col">
            <h4 className="footer-heading">Trust & Legal</h4>
            <ul className="footer-links">
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/signup" className="footer-cta-link">Become a Professional &rarr;</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            &copy; {new Date().getFullYear()} {APP_NAME}. Skilled Labour Marketplace. All rights reserved.
          </div>
          <div className="footer-meta">
            Intelligent Skilled-Worker Match Engine
          </div>
        </div>
      </div>
    </footer>
  );
};
