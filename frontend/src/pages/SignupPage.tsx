import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Wrench, Eye, EyeOff, ArrowRight, AlertCircle, ShieldCheck } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { useAuth } from '../context/AuthContext';
import { SERVICE_CATEGORIES } from '../constants';
import { UserRole } from '../types';

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  password?: string;
  confirmPassword?: string;
  location?: string;
  primaryService?: string;
  experienceYears?: string;
  skills?: string;
}

export const SignupPage: React.FC = () => {
  const [role, setRole] = useState<UserRole>('customer');

  // Form Fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [location, setLocation] = useState('Indiranagar, Bangalore');

  // Professional Fields
  const [primaryService, setPrimaryService] = useState('Electrician');
  const [experienceYears, setExperienceYears] = useState('5');
  const [skillsInput, setSkillsInput] = useState('MCB Repair, Wiring, Panel Upgrade');

  // UI state
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const { signupCustomer, signupProfessional, isLoading, error: authError, clearError } = useAuth();
  const navigate = useNavigate();

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!name.trim()) errs.name = 'Full name is required.';
    
    if (!email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!phone.trim()) {
      errs.phone = 'Phone number is required.';
    } else if (!/^\d{10}$/.test(phone.trim().replace(/[- ]/g, ''))) {
      errs.phone = 'Please enter a valid 10-digit phone number.';
    }

    if (!password) {
      errs.password = 'Password is required.';
    } else if (password.length < 6) {
      errs.password = 'Password must be at least 6 characters.';
    }

    if (password !== confirmPassword) {
      errs.confirmPassword = 'Passwords do not match.';
    }

    if (!location.trim()) {
      errs.location = 'Service location is required.';
    }

    // Professional Specific Validation
    if (role === 'professional') {
      if (!primaryService) errs.primaryService = 'Primary service category is required.';
      
      const expNum = Number(experienceYears);
      if (experienceYears === '' || isNaN(expNum) || expNum < 0) {
        errs.experienceYears = 'Experience must be a valid non-negative number.';
      }

      if (!skillsInput.trim()) {
        errs.skills = 'Please enter at least one trade skill.';
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();

    if (!validate()) return;

    try {
      if (role === 'customer') {
        await signupCustomer({
          name,
          email,
          phone,
          password,
          location,
        });
        navigate('/dashboard', { replace: true });
      } else {
        const skillsArray = skillsInput
          .split(',')
          .map((s) => s.trim())
          .filter(Boolean);

        await signupProfessional({
          name,
          email,
          phone,
          password,
          location,
          primaryService,
          experienceYears: Number(experienceYears),
          skills: skillsArray,
        });
        navigate('/professional/dashboard', { replace: true });
      }
    } catch (err) {
      // Error handled by AuthContext
    }
  };

  return (
    <div className="auth-page-container">
      <Card className="auth-card max-w-lg">
        <div className="auth-header">
          <div className="auth-icon-circle">
            <ShieldCheck size={22} />
          </div>
          <h1 className="auth-title">Create WorkLink Account</h1>
          <p className="auth-subtitle">Join as a customer requiring services or as a skilled trade professional.</p>
        </div>

        {/* Global Error Alert */}
        {authError && (
          <div className="p-3 bg-error-bg border border-error rounded-md text-error text-sm flex items-center gap-2">
            <AlertCircle size={16} className="flex-shrink-0" />
            <span>{authError}</span>
          </div>
        )}

        {/* Role Switcher Tabs */}
        <div className="role-switcher">
          <button
            type="button"
            className={`role-btn ${role === 'customer' ? 'active' : ''}`}
            onClick={() => {
              setRole('customer');
              setErrors({});
              clearError();
            }}
          >
            <User size={15} /> Customer
          </button>
          <button
            type="button"
            className={`role-btn ${role === 'professional' ? 'active' : ''}`}
            onClick={() => {
              setRole('professional');
              setErrors({});
              clearError();
            }}
          >
            <Wrench size={15} /> Professional
          </button>
        </div>

        {/* Form */}
        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              placeholder="Alex Morgan"
              className={`form-input ${errors.name ? 'border-error' : ''}`}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <span className="text-xs text-error mt-1">{errors.name}</span>}
          </div>

          <div className="grid-2-col gap-3">
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                placeholder="name@example.com"
                className={`form-input ${errors.email ? 'border-error' : ''}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <span className="text-xs text-error mt-1">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                placeholder="9876543210"
                className={`form-input ${errors.phone ? 'border-error' : ''}`}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {errors.phone && <span className="text-xs text-error mt-1">{errors.phone}</span>}
            </div>
          </div>

          <div className="grid-2-col gap-3">
            <div className="form-group">
              <label className="form-label">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className={`form-input ${errors.password ? 'border-error' : ''}`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-dim hover:text-main"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
              {errors.password && <span className="text-xs text-error mt-1">{errors.password}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">Confirm Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className={`form-input ${errors.confirmPassword ? 'border-error' : ''}`}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {errors.confirmPassword && (
                <span className="text-xs text-error mt-1">{errors.confirmPassword}</span>
              )}
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Service Location / Neighborhood</label>
            <input
              type="text"
              placeholder="e.g. Indiranagar, Bangalore"
              className={`form-input ${errors.location ? 'border-error' : ''}`}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            {errors.location && <span className="text-xs text-error mt-1">{errors.location}</span>}
          </div>

          {/* PROFESSIONAL SPECIFIC FIELDS */}
          {role === 'professional' && (
            <div className="p-3 bg-secondary rounded-md border border-color flex flex-col gap-3 mt-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs uppercase text-accent">Professional Profile Details</span>
                <Badge variant="warning" size="sm">Pending Verification Mode</Badge>
              </div>

              <div className="grid-2-col gap-3">
                <div className="form-group">
                  <label className="form-label">Primary Service Category</label>
                  <select
                    className="form-input"
                    value={primaryService}
                    onChange={(e) => setPrimaryService(e.target.value)}
                  >
                    {SERVICE_CATEGORIES.map((cat) => (
                      <option key={cat.id} value={cat.name}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Years of Experience</label>
                  <input
                    type="number"
                    min="0"
                    placeholder="e.g. 5"
                    className={`form-input ${errors.experienceYears ? 'border-error' : ''}`}
                    value={experienceYears}
                    onChange={(e) => setExperienceYears(e.target.value)}
                  />
                  {errors.experienceYears && (
                    <span className="text-xs text-error mt-1">{errors.experienceYears}</span>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Trade Skills & Specialties (Comma-separated)</label>
                <input
                  type="text"
                  placeholder="e.g. Wiring, MCB Repair, Panel Upgrade"
                  className={`form-input ${errors.skills ? 'border-error' : ''}`}
                  value={skillsInput}
                  onChange={(e) => setSkillsInput(e.target.value)}
                />
                {errors.skills && <span className="text-xs text-error mt-1">{errors.skills}</span>}
              </div>

              <p className="text-xs text-dim">
                * Note: New professional accounts are initially marked as <strong>Pending Verification</strong> until identity & trade credentials are reviewed.
              </p>
            </div>
          )}

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full mt-2"
            isLoading={isLoading}
            icon={<ArrowRight size={16} />}
            iconPosition="right"
          >
            Create {role === 'customer' ? 'Customer' : 'Professional'} Account
          </Button>
        </form>

        <div className="auth-footer">
          <p>Already have an account? <Link to="/login" className="auth-link">Sign In</Link></p>
        </div>
      </Card>
    </div>
  );
};
