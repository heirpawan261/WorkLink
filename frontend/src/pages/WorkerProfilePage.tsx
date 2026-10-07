import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShieldCheck, Star, MapPin, ArrowLeft, Calendar } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { MOCK_WORKERS } from '../data/mockData';

export const WorkerProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const worker = MOCK_WORKERS.find((w) => w.id === id) || MOCK_WORKERS[0];

  return (
    <div className="page-container section-padding">
      <Link to="/workers" className="back-link mb-4 inline-flex items-center gap-2 text-sm text-muted">
        <ArrowLeft size={16} /> Back to Search Results
      </Link>

      <div className="profile-layout-grid mt-4">
        {/* Main Details */}
        <div className="profile-main">
          <Card className="profile-header-card">
            <div className="flex gap-4 items-start">
              <img src={worker.avatar} alt={worker.name} className="profile-avatar" />
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold">{worker.name}</h1>
                  {worker.verified && <Badge variant="success" icon={<ShieldCheck size={14} />}>Verified Pro</Badge>}
                </div>
                <p className="text-muted text-base">{worker.title}</p>
                <div className="flex items-center gap-4 mt-2 text-sm">
                  <span className="flex items-center gap-1 font-semibold text-warning">
                    <Star size={16} /> {worker.rating} ({worker.reviewsCount} reviews)
                  </span>
                  <span className="flex items-center gap-1 text-muted">
                    <MapPin size={16} /> {worker.location}
                  </span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="mt-4">
            <h3 className="text-lg font-bold mb-2">About {worker.name}</h3>
            <p className="text-muted">{worker.bio}</p>

            <h3 className="text-lg font-bold mt-6 mb-3">Verified Skills</h3>
            <div className="flex flex-wrap gap-2">
              {worker.skills.map((skill, i) => (
                <Badge key={i} variant="primary" size="md">{skill}</Badge>
              ))}
            </div>

            <h3 className="text-lg font-bold mt-6 mb-3">Work History & Stats</h3>
            <div className="grid-2-col">
              <div className="stat-box">
                <span className="stat-num">{worker.experienceYears} Years</span>
                <span className="stat-desc">Professional Experience</span>
              </div>
              <div className="stat-box">
                <span className="stat-num">{worker.completedJobs}+</span>
                <span className="stat-desc">Jobs Completed</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Booking Sidebar */}
        <div className="profile-sidebar">
          <Card className="booking-sticky-card">
            <div className="flex justify-between items-center pb-4 border-b border-color">
              <div>
                <span className="text-2xl font-bold text-accent">₹{worker.hourlyRate}</span>
                <span className="text-xs text-muted"> / hour</span>
              </div>
              <Badge variant="success">{worker.availability}</Badge>
            </div>

            <div className="mt-4 text-xs text-muted">
              Estimated travel expense within 10 km: <strong className="text-main">₹100</strong>
            </div>

            <Link to={`/book/${worker.id}`} className="mt-6 block">
              <Button variant="primary" size="lg" className="w-full" icon={<Calendar size={18} />}>
                Proceed to Booking
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
};
