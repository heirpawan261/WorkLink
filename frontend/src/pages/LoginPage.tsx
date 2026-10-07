import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { User, Eye, EyeOff, ArrowRight, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { useAuth } from '../context/AuthContext';

export const LoginPage: React.FC = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const [formErrors, setFormErrors] = useState<{ emailOrPhone?: string; password?: string }>({});
  const { login, isLoading, error: authError, clearError } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const validate = (): boolean => {
    const errors: { emailOrPhone?: string; password?: string } = {};

    if (!emailOrPhone.trim()) {
      errors.emailOrPhone = 'Email address or phone number is required.';
    }

    if (!password) {
      errors.password = 'Password is required.';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();

    if (!validate()) return;

    try {
      const user = await login({
        emailOrPhone,
        password,
        rememberMe,
      });

      // Role-based redirection
      const from = (location.state as any)?.from?.pathname;
      if (from) {
        navigate(from, { replace: true });
      } else if (user.role === 'professional') {
        navigate('/professional/dashboard', { replace: true });
      } else {
        navigate('/dashboard', { replace: true });
      }
    } catch (err) {
      // Error handled by AuthContext
    }
  };

  const handleDemoFill = (type: 'customer' | 'pro') => {
    clearError();
    setFormErrors({});
    if (type === 'customer') {
      setEmailOrPhone('customer@worklink.com');
      setPassword('password123');
    } else {
      setEmailOrPhone('pro@worklink.com');
      setPassword('password123');
    }
  };

  return (
    <div className="auth-page-container">
      <Card className="auth-card">
        <div className="auth-header">
          <div className="auth-icon-circle">
            <User size={22} />
          </div>
          <h1 className="auth-title">Welcome Back</h1>
          <p className="auth-subtitle">Sign in to manage your bookings or service profile.</p>
        </div>

        {/* Global Auth Error Alert */}
        {authError && (
          <div className="p-3 bg-error-bg border border-error rounded-md text-error text-sm flex items-center gap-2">
            <AlertCircle size={16} className="flex-shrink-0" />
            <span>{authError}</span>
          </div>
        )}

        {/* Form */}
        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label className="form-label">Email Address or Phone Number</label>
            <input
              type="text"
              placeholder="name@example.com or 10-digit phone"
              className={`form-input ${formErrors.emailOrPhone ? 'border-error' : ''}`}
              value={emailOrPhone}
              onChange={(e) => {
                setEmailOrPhone(e.target.value);
                if (formErrors.emailOrPhone) setFormErrors({ ...formErrors, emailOrPhone: undefined });
              }}
            />
            {formErrors.emailOrPhone && (
              <span className="text-xs text-error mt-1">{formErrors.emailOrPhone}</span>
            )}
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className={`form-input ${formErrors.password ? 'border-error' : ''}`}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (formErrors.password) setFormErrors({ ...formErrors, password: undefined });
                }}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-dim hover:text-main"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {formErrors.password && (
              <span className="text-xs text-error mt-1">{formErrors.password}</span>
            )}
          </div>

          <div className="flex justify-between items-center text-xs text-muted">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span>Remember this device</span>
            </label>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full mt-2"
            isLoading={isLoading}
            icon={<ArrowRight size={16} />}
            iconPosition="right"
          >
            Sign In to WorkLink
          </Button>
        </form>

        {/* Quick Demo Credentials Bar */}
        <div className="p-3 bg-secondary rounded border border-color text-xs flex flex-col gap-2 mt-2">
          <span className="font-semibold text-main">Quick Prototype Login Options:</span>
          <div className="flex gap-2 flex-wrap">
            <button
              type="button"
              className="text-accent underline hover:text-accent-hover text-xs"
              onClick={() => handleDemoFill('customer')}
            >
              Fill Demo Customer
            </button>
            <span className="text-dim">•</span>
            <button
              type="button"
              className="text-accent underline hover:text-accent-hover text-xs"
              onClick={() => handleDemoFill('pro')}
            >
              Fill Demo Professional
            </button>
          </div>
        </div>

        <div className="auth-footer">
          <p>Don't have an account? <Link to="/signup" className="auth-link">Sign Up</Link></p>
        </div>
      </Card>
    </div>
  );
};
