import React from 'react';
import { Link } from 'react-router-dom';
import {
  Zap,
  Droplets,
  Hammer,
  Paintbrush,
  Wind,
  Wrench,
  Tv,
  Search,
  ShieldCheck,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowRight,
  Sliders,
  DollarSign,
  UserCheck,
  Briefcase,
  TrendingUp,
  UserPlus,
  Check
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { SERVICE_CATEGORIES } from '../constants';
import { MOCK_WORKERS } from '../data/mockData';

export const LandingPage: React.FC = () => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return <Zap size={22} />;
      case 'Droplets': return <Droplets size={22} />;
      case 'Hammer': return <Hammer size={22} />;
      case 'Paintbrush': return <Paintbrush size={22} />;
      case 'Wind': return <Wind size={22} />;
      case 'Wrench': return <Wrench size={22} />;
      case 'Tv': return <Tv size={22} />;
      default: return <Wrench size={22} />;
    }
  };

  const sampleWorker = MOCK_WORKERS[0];

  return (
    <div className="landing-page">
      {/* SECTION 1: HERO */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-badge">
            <MapPin size={13} />
            <span>DYNAMIC 10 KM SERVICE RADIUS</span>
          </div>

          <h1 className="hero-main-title">
            Right Labour.<br />
            <span className="brand-highlight">Right Work.</span> Right Time.
          </h1>

          <p className="hero-subtext">
            WorkLink connects home and business owners with verified electricians, plumbers, carpenters, AC technicians, mechanics, and appliance repair specialists based on trade skill, experience, location, availability, and transparent rates.
          </p>

          <div className="hero-cta-group">
            <Link to="/workers">
              <Button size="lg" variant="primary" icon={<Search size={18} />}>
                Find a Professional
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="lg" variant="outline" icon={<Briefcase size={18} />}>
                Become a Professional
              </Button>
            </Link>
          </div>

          {/* Practical Metrics Bar */}
          <div className="hero-stats-bar">
            <div className="stat-item">
              <span className="stat-value">10 km</span>
              <span className="stat-label">Service Radius</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">7 Trades</span>
              <span className="stat-label">Skilled Categories</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">Multi-Factor</span>
              <span className="stat-label">Worker Ranking</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">Upfront</span>
              <span className="stat-label">Hourly & Travel Rates</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SERVICE CATEGORIES */}
      <section className="section-padding">
        <div className="section-header">
          <Badge variant="secondary" icon={<Sliders size={13} />}>
            SERVICES
          </Badge>
          <h2 className="section-title">Major Skilled Service Categories</h2>
          <p className="section-subtitle">
            Browse verified local professionals specialized in home maintenance and repair trades.
          </p>
        </div>

        <div className="category-grid">
          {SERVICE_CATEGORIES.map((cat) => (
            <Link to={`/workers?category=${cat.slug}`} key={cat.id} className="category-card-link">
              <Card className="category-card" hoverable>
                <div className="category-card-top">
                  <div className="category-icon-box">
                    {renderIcon(cat.icon)}
                  </div>
                  {cat.popular && (
                    <Badge variant="success" size="sm">Active</Badge>
                  )}
                </div>
                <h3 className="category-name">{cat.name}</h3>
                <p className="category-desc">{cat.description}</p>
                <div className="category-footer">
                  <span className="category-price">{cat.basePriceRange}</span>
                  <span className="category-workers">{cat.activeWorkersCount} available</span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 3: HOW WORKLINK WORKS */}
      <section className="section-padding how-it-works-section">
        <div className="page-container">
          <div className="section-header">
            <Badge variant="secondary" icon={<TrendingUp size={13} />}>
              PROCESS
            </Badge>
            <h2 className="section-title">How WorkLink Works</h2>
            <p className="section-subtitle">
              A straightforward process to connect you with suitable, available technicians.
            </p>
          </div>

          <div className="steps-grid">
            <Card className="step-card">
              <div className="step-number-badge">Step 1</div>
              <div className="step-icon-box">
                <Search size={20} />
              </div>
              <h3 className="step-title">Tell Us What You Need</h3>
              <p className="step-desc">
                Select your service category and describe the specific repair or installation job within your location.
              </p>
            </Card>

            <Card className="step-card">
              <div className="step-number-badge">Step 2</div>
              <div className="step-icon-box text-accent">
                <Sliders size={20} />
              </div>
              <h3 className="step-title">Get Intelligent Recommendations</h3>
              <p className="step-desc">
                WorkLink ranks workers by skill match, trade experience, rating, 10 km distance, and budget fit.
              </p>
            </Card>

            <Card className="step-card">
              <div className="step-number-badge">Step 3</div>
              <div className="step-icon-box text-warning">
                <Clock size={20} />
              </div>
              <h3 className="step-title">Book the Right Professional</h3>
              <p className="step-desc">
                Review worker profiles, check their match breakdown, select working hours, and pick a time slot.
              </p>
            </Card>

            <Card className="step-card">
              <div className="step-number-badge">Step 4</div>
              <div className="step-icon-box text-success">
                <CheckCircle2 size={20} />
              </div>
              <h3 className="step-title">Get the Job Done</h3>
              <p className="step-desc">
                The verified worker completes the service on-site. Pay securely upon your satisfaction.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY WORKLINK */}
      <section className="section-padding">
        <div className="page-container">
          <div className="section-header">
            <Badge variant="outline" icon={<ShieldCheck size={13} />}>
              TRUST & ACCURACY
            </Badge>
            <h2 className="section-title">Why Choose WorkLink</h2>
            <p className="section-subtitle">
              Built specifically to overcome the reliability issues of unverified local search.
            </p>
          </div>

          <div className="why-grid">
            <Card hoverable>
              <div className="why-icon-box">
                <UserCheck size={22} />
              </div>
              <h3 className="why-card-title">Verified Professionals</h3>
              <p className="why-card-desc">
                Every worker undergoes trade skill validation and identity verification before accepting jobs.
              </p>
            </Card>

            <Card hoverable>
              <div className="why-icon-box text-accent">
                <Sliders size={22} />
              </div>
              <h3 className="why-card-title">Smart Matching</h3>
              <p className="why-card-desc">
                Evaluates specific trade skills, experience years, customer ratings, proximity, and hourly rates.
              </p>
            </Card>

            <Card hoverable>
              <div className="why-icon-box text-success">
                <MapPin size={22} />
              </div>
              <h3 className="why-card-title">10 km Service Radius</h3>
              <p className="why-card-desc">
                Focuses on local dispatch boundaries to minimize technician travel times and travel surcharge fees.
              </p>
            </Card>

            <Card hoverable>
              <div className="why-icon-box text-warning">
                <DollarSign size={22} />
              </div>
              <h3 className="why-card-title">Transparent Pricing</h3>
              <p className="why-card-desc">
                Calculates hourly rates and travel expenses clearly before you confirm the booking request.
              </p>
            </Card>

            <Card hoverable>
              <div className="why-icon-box">
                <CheckCircle2 size={22} />
              </div>
              <h3 className="why-card-title">Personalized Recommendations</h3>
              <p className="why-card-desc">
                Considers your budget preferences, job urgency, and past worker feedback for future bookings.
              </p>
            </Card>

            <Card hoverable>
              <div className="why-icon-box text-accent">
                <ShieldCheck size={22} />
              </div>
              <h3 className="why-card-title">Secure Booking</h3>
              <p className="why-card-desc">
                Confirmed schedules with payment held safely until work is completed to your satisfaction.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 5: EXPLAINABLE MATCHING DEMO */}
      <section className="section-padding feature-highlight-section">
        <div className="feature-container">
          <div className="feature-text-side">
            <Badge variant="secondary" icon={<Sliders size={13} />}>
              MATCH ANALYSIS
            </Badge>
            <h2 className="feature-title">
              Clear Recommendation Scoring
            </h2>
            <p className="feature-description">
              WorkLink provides an explicit score breakdown for recommended workers so you understand why a professional is suitable for your task.
            </p>

            <div className="match-factors-grid mt-2">
              <div className="factor-pill">
                <Check size={14} className="text-success" />
                <span><strong>Required Skill:</strong> Circuit & Panel Repair</span>
              </div>
              <div className="factor-pill">
                <Check size={14} className="text-success" />
                <span><strong>Experience:</strong> 7 Years Verified</span>
              </div>
              <div className="factor-pill">
                <Check size={14} className="text-success" />
                <span><strong>Availability:</strong> Today</span>
              </div>
              <div className="factor-pill">
                <Check size={14} className="text-success" />
                <span><strong>Rating:</strong> 4.9★</span>
              </div>
              <div className="factor-pill">
                <Check size={14} className="text-success" />
                <span><strong>Distance:</strong> 2.4 km away</span>
              </div>
              <div className="factor-pill">
                <Check size={14} className="text-success" />
                <span><strong>Price:</strong> Within Budget</span>
              </div>
            </div>

            <Link to="/workers" className="mt-4 inline-block">
              <Button variant="primary" icon={<ArrowRight size={16} />} iconPosition="right">
                Explore Available Workers
              </Button>
            </Link>
          </div>

          {/* Sample Match Card */}
          <div className="feature-card-side">
            <Card className="sample-match-card">
              <div className="sample-match-header">
                <div className="sample-avatar-group">
                  <img src={sampleWorker.avatar} alt={sampleWorker.name} className="sample-avatar" />
                  <div>
                    <h4 className="sample-name">{sampleWorker.name}</h4>
                    <span className="sample-title">{sampleWorker.title}</span>
                  </div>
                </div>
                <div className="sample-score-pill">
                  <span>94% Match</span>
                </div>
              </div>

              {/* 6 Metric Check Matrix */}
              <div className="match-matrix-grid">
                <div className="matrix-item success">
                  <span>Skill</span>
                  <Check size={13} />
                </div>
                <div className="matrix-item success">
                  <span>Experience</span>
                  <Check size={13} />
                </div>
                <div className="matrix-item success">
                  <span>Available</span>
                  <Check size={13} />
                </div>
                <div className="matrix-item success">
                  <span>4.8★ Rating</span>
                  <Check size={13} />
                </div>
                <div className="matrix-item success">
                  <span>3.2 km Away</span>
                  <Check size={13} />
                </div>
                <div className="matrix-item success">
                  <span>Budget Fit</span>
                  <Check size={13} />
                </div>
              </div>

              <div className="match-explanation-box">
                <h5 className="explanation-title">Recommendation Match Factors</h5>
                <ul className="explanation-list">
                  <li className="explanation-item">✓ Required skill matched (Circuit Board Repair)</li>
                  <li className="explanation-item">✓ 5+ years verified trade experience</li>
                  <li className="explanation-item">✓ Available at requested time slot today</li>
                  <li className="explanation-item">✓ 4.8★ rating based on verified customer feedback</li>
                  <li className="explanation-item">✓ 3.2 km location proximity (Fast arrival)</li>
                  <li className="explanation-item">✓ Hourly rate within budget range</li>
                </ul>
              </div>

              <div className="sample-card-actions">
                <div className="sample-price">
                  <span className="price-num">₹{sampleWorker.hourlyRate}</span>
                  <span className="price-unit">/ hour</span>
                </div>
                <Link to={`/worker/${sampleWorker.id}`}>
                  <Button variant="primary" size="sm">
                    View Profile & Book
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 6: DUAL VALUE PROP */}
      <section className="section-padding">
        <div className="page-container">
          <div className="section-header">
            <Badge variant="primary" icon={<UserCheck size={13} />}>
              MARKETPLACE
            </Badge>
            <h2 className="section-title">Built for Customers & Service Professionals</h2>
            <p className="section-subtitle">
              Fair pricing and reliable dispatch for customers; steady jobs and direct income for skilled workers.
            </p>
          </div>

          <div className="grid-2-col">
            {/* Customer Card */}
            <Card className="value-prop-card">
              <div className="value-prop-header">
                <div className="value-icon-box">
                  <Search size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">For Customers</h3>
                  <span className="text-xs text-muted">Reliable Local Skilled Services</span>
                </div>
              </div>

              <ul className="value-prop-list">
                <li>
                  <CheckCircle2 size={16} className="text-success flex-shrink-0" />
                  <span><strong>Clear Matching:</strong> Find workers based on actual trade skills, experience, and local distance.</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="text-success flex-shrink-0" />
                  <span><strong>10 km Radius:</strong> Guaranteed local response times and low travel overhead.</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="text-success flex-shrink-0" />
                  <span><strong>Upfront Rates:</strong> See hourly rates and calculated travel costs before requesting work.</span>
                </li>
              </ul>

              <Link to="/workers" className="mt-6 block">
                <Button variant="primary" size="md" className="w-full" icon={<ArrowRight size={16} />} iconPosition="right">
                  Find a Skilled Worker
                </Button>
              </Link>
            </Card>

            {/* Worker Card */}
            <Card className="value-prop-card">
              <div className="value-prop-header">
                <div className="value-icon-box text-accent">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">For Skilled Workers</h3>
                  <span className="text-xs text-muted">Local Job Stream & Fair Earnings</span>
                </div>
              </div>

              <ul className="value-prop-list">
                <li>
                  <CheckCircle2 size={16} className="text-accent flex-shrink-0" />
                  <span><strong>Neighborhood Requests:</strong> Receive job matches near your location based on your trade skills.</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="text-accent flex-shrink-0" />
                  <span><strong>Set Your Rates:</strong> Receive fair hourly compensation with transparent travel expense coverage.</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="text-accent flex-shrink-0" />
                  <span><strong>Build Trade Reputation:</strong> Earn ratings and build a reliable local customer base.</span>
                </li>
              </ul>

              <Link to="/signup" className="mt-6 block">
                <Button variant="outline" size="md" className="w-full" icon={<UserPlus size={16} />} iconPosition="right">
                  Register as Professional
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 7: FINAL CTA */}
      <section className="section-padding final-cta-section">
        <div className="page-container text-center">
          <div className="final-cta-box">
            <h2 className="final-cta-title">
              Need a skilled professional or looking for local service jobs?
            </h2>

            <p className="final-cta-subtext">
              Connect with verified electricians, plumbers, carpenters, AC technicians, mechanics, and appliance repair workers within 10 km.
            </p>

            <div className="hero-cta-group">
              <Link to="/workers">
                <Button size="lg" variant="primary" icon={<Search size={18} />}>
                  Find a Professional
                </Button>
              </Link>
              <Link to="/signup">
                <Button size="lg" variant="secondary" icon={<Briefcase size={18} />}>
                  Become a Professional
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
