import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Layers, Calendar, Clock, MapPin, Wrench, ChevronRight, LogOut, User as UserIcon } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { MOCK_BOOKINGS } from '../data/mockData';
import { useAuth } from '../context/AuthContext';

export const DashboardPage: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login', { replace: true });
  };

  return (
    <div className="page-container section-padding">
      <div className="page-header flex justify-between items-start md:items-center gap-4 flex-wrap">
        <div>
          <Badge variant="primary" icon={<Layers size={13} />}>
            CUSTOMER DASHBOARD
          </Badge>
          <h1 className="page-title mt-2">Welcome Back, {user?.name || 'Customer'}</h1>
          <p className="page-subtitle">Track your active bookings, location preferences, and service history.</p>
        </div>

        <div className="flex gap-2">
          <Link to="/workers">
            <Button variant="primary" size="sm" icon={<Wrench size={15} />}>
              Find Workers
            </Button>
          </Link>
          <Button variant="outline" size="sm" icon={<LogOut size={15} />} onClick={handleLogout}>
            Sign Out
          </Button>
        </div>
      </div>

      <div className="grid-3-col mt-6">
        <Card>
          <div className="text-sm text-muted">Active Bookings</div>
          <div className="text-2xl font-bold text-accent mt-1">1</div>
        </Card>
        <Card>
          <div className="text-sm text-muted">Service Location</div>
          <div className="text-base font-bold text-main mt-1 flex items-center gap-1">
            <MapPin size={15} className="text-accent" /> {user?.location || 'Indiranagar, Bangalore'}
          </div>
        </Card>
        <Card>
          <div className="text-sm text-muted">Account Status</div>
          <div className="text-base font-bold text-success mt-1">Active Customer</div>
        </Card>
      </div>

      <h2 className="text-xl font-bold mt-8 mb-4">Your Recent Bookings</h2>

      <div className="flex flex-col gap-4">
        {MOCK_BOOKINGS.map((booking) => (
          <Card key={booking.id} className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-lg">{booking.serviceName}</h3>
                <Badge variant="success" size="sm">{booking.status.toUpperCase()}</Badge>
              </div>
              <p className="text-sm text-muted mt-1">Worker: {booking.workerName}</p>
              <div className="flex flex-wrap gap-4 text-xs text-dim mt-2">
                <span className="flex items-center gap-1"><Calendar size={12} /> {booking.date}</span>
                <span className="flex items-center gap-1"><Clock size={12} /> {booking.timeSlot}</span>
                <span className="flex items-center gap-1"><MapPin size={12} /> {booking.location}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
              <div className="text-right">
                <div className="text-lg font-bold text-accent">₹{booking.totalAmount}</div>
                <div className="text-xs text-muted">{booking.hoursNeeded} hrs + travel</div>
              </div>
              <Button variant="outline" size="sm">
                Details <ChevronRight size={14} />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
