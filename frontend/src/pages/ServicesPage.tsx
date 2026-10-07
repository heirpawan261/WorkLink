import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Droplets, Hammer, Paintbrush, Wind, Wrench, Tv, Sliders, ArrowRight } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { SERVICE_CATEGORIES } from '../constants';

export const ServicesPage: React.FC = () => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return <Zap size={28} />;
      case 'Droplets': return <Droplets size={28} />;
      case 'Hammer': return <Hammer size={28} />;
      case 'Paintbrush': return <Paintbrush size={28} />;
      case 'Wind': return <Wind size={28} />;
      case 'Wrench': return <Wrench size={28} />;
      case 'Tv': return <Tv size={28} />;
      default: return <Wrench size={28} />;
    }
  };

  return (
    <div className="page-container section-padding">
      <div className="page-header text-center">
        <Badge variant="primary" icon={<Sliders size={14} />}>
          SERVICE CATALOG
        </Badge>
        <h1 className="page-title mt-2">All Skilled Service Categories</h1>
        <p className="page-subtitle">
          Find verified technicians specialized in electrical, plumbing, HVAC, mechanics, and household repairs within your 10 km radius.
        </p>
      </div>

      <div className="category-grid mt-8">
        {SERVICE_CATEGORIES.map((cat) => (
          <Card key={cat.id} className="category-page-card">
            <div className="category-icon-box mb-4">
              {renderIcon(cat.icon)}
            </div>
            <h3 className="text-xl font-bold mb-2">{cat.name}</h3>
            <p className="text-muted text-sm mb-4">{cat.description}</p>
            <div className="flex justify-between items-center pt-4 border-t border-color text-xs">
              <span className="font-semibold text-accent">{cat.basePriceRange}</span>
              <span className="text-dim">{cat.activeWorkersCount} Professionals</span>
            </div>
            <Link to={`/workers?category=${cat.slug}`} className="mt-4 block">
              <Button variant="outline" size="sm" className="w-full" icon={<ArrowRight size={14} />} iconPosition="right">
                Browse {cat.name}s
              </Button>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};
