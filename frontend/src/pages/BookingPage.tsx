import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { MOCK_WORKERS } from '../data/mockData';

export const BookingPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const worker = MOCK_WORKERS.find((w) => w.id === id) || MOCK_WORKERS[0];

  return (
    <div className="page-container section-padding">
      <Link to={`/worker/${worker.id}`} className="back-link mb-4 inline-flex items-center gap-2 text-sm text-muted">
        <ArrowLeft size={16} /> Back to Worker Profile
      </Link>

      <div className="max-w-2xl mx-auto">
        <Card>
          <div className="flex items-center gap-3 pb-4 border-b border-color">
            <Calendar size={24} className="text-accent" />
            <div>
              <h1 className="text-xl font-bold">Book Service with {worker.name}</h1>
              <p className="text-xs text-muted">Select working hours and location within 10 km service radius</p>
            </div>
          </div>

          <form className="mt-6 flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label className="form-label">Service Date</label>
              <input type="date" className="form-input" defaultValue="2026-10-08" />
            </div>

            <div className="form-group">
              <label className="form-label">Preferred Time Slot</label>
              <select className="form-input">
                <option>Morning (09:00 AM - 12:00 PM)</option>
                <option>Afternoon (01:00 PM - 04:00 PM)</option>
                <option>Evening (05:00 PM - 08:00 PM)</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Estimated Working Hours Needed</label>
              <select className="form-input">
                <option value="1">1 Hour (Quick repair / Fix)</option>
                <option value="2">2 Hours (Standard service)</option>
                <option value="4">4 Hours (Half day repair)</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Service Address (Within 10 km)</label>
              <textarea placeholder="Enter full address, landmark, and floor number" className="form-input" rows={3}></textarea>
            </div>

            <div className="p-4 rounded-xl bg-secondary border border-color flex flex-col gap-2 text-sm">
              <div className="flex justify-between">
                <span>Working Rate (2 hrs @ ₹{worker.hourlyRate}/hr)</span>
                <span>₹{worker.hourlyRate * 2}</span>
              </div>
              <div className="flex justify-between">
                <span>Travel Expense (2.4 km distance)</span>
                <span>₹100</span>
              </div>
              <div className="flex justify-between font-bold text-base pt-2 border-t border-color text-accent">
                <span>Total Estimated Cost</span>
                <span>₹{worker.hourlyRate * 2 + 100}</span>
              </div>
            </div>

            <Button variant="primary" size="lg" className="w-full mt-2" icon={<CheckCircle2 size={18} />}>
              Confirm & Request Booking
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};
