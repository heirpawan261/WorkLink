import React from 'react';
import { Wrench, ShieldCheck, MapPin, Clock, Award, CheckCircle2, User, LogOut } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const ProfessionalDashboardPage: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login', { replace: true });
  };

  const isVerified = user?.verificationStatus === 'verified';

  return (
    <div className="page-container section-padding">
      {/* Header */}
      <div className="page-header flex justify-between items-start md:items-center gap-4 flex-wrap">
        <div>
          <div className="flex items-center gap-2">
            <Badge variant="primary" icon={<Wrench size={13} />}>
              PROFESSIONAL PORTAL
            </Badge>
            {isVerified ? (
              <Badge variant="success" icon={<ShieldCheck size={13} />}>Verified Pro</Badge>
            ) : (
              <Badge variant="warning" icon={<Clock size={13} />}>Pending Verification</Badge>
            )}
          </div>
          <h1 className="page-title mt-2">Welcome, {user?.name || 'Technician'}</h1>
          <p className="page-subtitle">Manage your trade profile, service area, and job requests.</p>
        </div>

        <Button variant="outline" size="sm" icon={<LogOut size={15} />} onClick={handleLogout}>
          Sign Out
        </Button>
      </div>

      {/* Verification Status Banner */}
      {!isVerified && (
        <div className="mt-6 p-4 bg-warning-bg border border-warning rounded-md text-warning text-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <div>
            <strong className="font-bold block text-base">Account Pending Verification</strong>
            <span>Your trade credentials and location are under review. You can still customize your skills and rates.</span>
          </div>
          <Badge variant="outline">Mock Verification Status</Badge>
        </div>
      )}

      {/* Quick Metrics */}
      <div className="grid-3-col mt-6">
        <Card>
          <div className="text-sm text-muted">Primary Service</div>
          <div className="text-xl font-bold text-main mt-1">{user?.primaryService || 'General Repair'}</div>
        </Card>
        <Card>
          <div className="text-sm text-muted">Trade Experience</div>
          <div className="text-xl font-bold text-accent mt-1">{user?.experienceYears || 0} Years</div>
        </Card>
        <Card>
          <div className="text-sm text-muted">Hourly Rate</div>
          <div className="text-xl font-bold text-success mt-1">₹{user?.hourlyRate || 400} / hr</div>
        </Card>
      </div>

      {/* Profile Details Card */}
      <div className="grid-2-col mt-6">
        <Card>
          <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
            <User size={18} className="text-accent" /> Account Information
          </h3>

          <div className="flex flex-col gap-2.5 text-sm">
            <div className="flex justify-between py-1.5 border-b border-color">
              <span className="text-muted">Full Name</span>
              <span className="font-semibold">{user?.name}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-color">
              <span className="text-muted">Email Address</span>
              <span className="font-semibold">{user?.email}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-color">
              <span className="text-muted">Phone Number</span>
              <span className="font-semibold">{user?.phone}</span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="text-muted">Primary Location</span>
              <span className="font-semibold flex items-center gap-1">
                <MapPin size={13} /> {user?.location}
              </span>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
            <Award size={18} className="text-accent" /> Verified Trade Skills
          </h3>

          <div className="flex flex-wrap gap-2 mb-4">
            {user?.skills && user.skills.length > 0 ? (
              user.skills.map((skill, i) => (
                <Badge key={i} variant="primary" size="md">{skill}</Badge>
              ))
            ) : (
              <span className="text-sm text-muted">No skills listed yet.</span>
            )}
          </div>

          <div className="p-3 bg-secondary rounded border border-color text-xs text-muted">
            Matching engine routes customer requests within <strong>10 km of {user?.location}</strong> directly to your profile.
          </div>
        </Card>
      </div>
    </div>
  );
};
