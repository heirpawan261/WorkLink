import React, { HTMLAttributes, ReactNode } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
  glass?: boolean;
  children: ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  hoverable = true,
  glass = true,
  children,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`card ${hoverable ? 'card-hoverable' : ''} ${glass ? 'card-glass' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
