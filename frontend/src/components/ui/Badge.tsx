import React, { ReactNode } from 'react';

export interface BadgeProps {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'outline';
  size?: 'sm' | 'md';
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'primary',
  size = 'sm',
  icon,
  children,
  className = '',
}) => {
  const sizeClasses = {
    sm: 'text-xs px-2.5 py-0.5 rounded-full gap-1 font-semibold',
    md: 'text-sm px-3.5 py-1 rounded-full gap-1.5 font-semibold',
  };

  const variantClasses = {
    primary: 'badge-primary',
    secondary: 'badge-secondary',
    success: 'badge-success',
    warning: 'badge-warning',
    error: 'badge-error',
    outline: 'badge-outline',
  };

  return (
    <span className={`inline-flex items-center ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}>
      {icon && <span className="inline-flex text-current">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
