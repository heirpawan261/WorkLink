import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Layers, MapPin, User as UserIcon, Menu, X, ShieldCheck, LogOut, Wrench } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { useAuth } from '../../context/AuthContext';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = async () => {
    await logout();
    setMobileMenuOpen(false);
    navigate('/login');
  };

  const getDashboardLink = () => {
    if (user?.role === 'professional') return '/professional/dashboard';
    return '/dashboard';
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* Brand */}
        <Link to="/" className="brand" onClick={() => setMobileMenuOpen(false)}>
          <div className="brand-icon">
            <Layers size={18} />
          </div>
          <span className="brand-title">
            Work<span className="brand-highlight">Link</span>
          </span>
          <span className="badge-radius">
            <MapPin size={12} /> 10 km Radius
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="nav-desktop-links">
          <Link
            to="/services"
            className={`nav-item ${isActive('/services') ? 'active' : ''}`}
          >
            Services
          </Link>
          <Link
            to="/workers"
            className={`nav-item ${isActive('/workers') ? 'active' : ''}`}
          >
            Find Workers
          </Link>
          {isAuthenticated && (
            <Link
              to={getDashboardLink()}
              className={`nav-item ${isActive(getDashboardLink()) ? 'active' : ''}`}
            >
              Dashboard
            </Link>
          )}
        </div>

        {/* Right CTA / Auth */}
        <div className="nav-actions">
          {isAuthenticated && user ? (
            <div className="flex items-center gap-3">
              <Link to={getDashboardLink()} className="flex items-center gap-2 text-sm font-semibold text-main hover:text-accent">
                <Badge variant={user.role === 'professional' ? 'primary' : 'secondary'} size="sm">
                  {user.role === 'professional' ? 'Pro' : 'Customer'}
                </Badge>
                <span>{user.name}</span>
              </Link>
              <Button variant="ghost" size="sm" icon={<LogOut size={15} />} onClick={handleLogout} title="Sign Out">
                Sign Out
              </Button>
            </div>
          ) : (
            <>
              <Link to="/login">
                <Button variant="ghost" size="sm" icon={<UserIcon size={15} />}>
                  Sign In
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="primary" size="sm" icon={<ShieldCheck size={15} />}>
                  Join WorkLink
                </Button>
              </Link>
            </>
          )}

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <Link
            to="/"
            className="mobile-nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/services"
            className="mobile-nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/workers"
            className="mobile-nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Find Workers
          </Link>
          {isAuthenticated && (
            <Link
              to={getDashboardLink()}
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard ({user?.role === 'professional' ? 'Pro' : 'Customer'})
            </Link>
          )}
          <div className="mobile-auth-divider">
            {isAuthenticated ? (
              <Button variant="outline" size="md" className="w-full" icon={<LogOut size={16} />} onClick={handleLogout}>
                Sign Out ({user?.name})
              </Button>
            ) : (
              <>
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" size="md" className="w-full">
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="primary" size="md" className="w-full">
                    Join WorkLink
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
