import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Star, MapPin, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { MOCK_WORKERS } from '../data/mockData';

export const WorkersPage: React.FC = () => {
  return (
    <div className="page-container section-padding">
      <div className="page-header">
        <Badge variant="primary" icon={<Sparkles size={14} />}>
          VERIFIED PROFESSIONALS
        </Badge>
        <h1 className="page-title mt-2">Available Skilled Workers (10 km Radius)</h1>
        <p className="page-subtitle">
          Workers ranked by skills, experience, real-time availability, distance, and match score.
        </p>
      </div>

      {/* Search & Filter Bar Placeholder */}
      <div className="search-filter-bar mt-6">
        <div className="search-input-wrapper">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Describe your issue or search by skill (e.g. MCB tripping, AC gas leak...)"
            className="search-input"
          />
        </div>
        <Button variant="secondary" icon={<Filter size={16} />}>
          Filter (10 km)
        </Button>
      </div>

      {/* Workers List */}
      <div className="workers-list-grid mt-8">
        {MOCK_WORKERS.map((worker) => (
          <Card key={worker.id} className="worker-card">
            <div className="worker-card-header">
              <img src={worker.avatar} alt={worker.name} className="worker-avatar" />
              <div className="worker-info flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold">{worker.name}</h3>
                  {worker.verified && (
                    <span title="Verified Worker" className="inline-flex">
                      <ShieldCheck size={18} className="text-accent" />
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted">{worker.title}</p>
                <div className="worker-meta-bar mt-1">
                  <span className="meta-item">
                    <Star size={14} className="star-icon" /> {worker.rating} ({worker.reviewsCount})
                  </span>
                  <span className="meta-item">
                    <MapPin size={14} /> {worker.location}
                  </span>
                </div>
              </div>
              <div className="match-score-badge">
                <Sparkles size={14} />
                <span>{worker.matchScore}% Match</span>
              </div>
            </div>

            <p className="worker-bio mt-3">{worker.bio}</p>

            <div className="worker-skills-tags mt-3">
              {worker.skills.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>

            <div className="worker-card-footer mt-4 pt-3 border-t border-color flex justify-between items-center">
              <div>
                <span className="text-xl font-bold text-accent">₹{worker.hourlyRate}</span>
                <span className="text-xs text-muted"> / hour</span>
              </div>
              <Link to={`/worker/${worker.id}`}>
                <Button variant="primary" size="sm" icon={<ArrowRight size={14} />} iconPosition="right">
                  View Profile
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
