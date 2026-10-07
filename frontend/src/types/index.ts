export interface ServiceCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  popular?: boolean;
  basePriceRange: string;
  activeWorkersCount: number;
}

export interface MatchExplanation {
  matchPercentage: number;
  skillMatch: boolean;
  experienceYears: number;
  availableAtRequestedTime: boolean;
  rating: number;
  distanceKm: number;
  withinBudget: boolean;
  reasons: string[];
}

export interface Worker {
  id: string;
  name: string;
  avatar: string;
  title: string;
  categorySlug: string;
  rating: number;
  reviewsCount: number;
  experienceYears: number;
  hourlyRate: number;
  distanceKm: number;
  location: string;
  verified: boolean;
  skills: string[];
  availability: 'Available Today' | 'Available Tomorrow' | 'Busy';
  bio: string;
  completedJobs: number;
  matchScore?: number;
  matchDetails?: MatchExplanation;
}

export type UserRole = 'customer' | 'professional' | 'admin';
export type VerificationStatus = 'pending' | 'verified' | 'rejected';

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  location: string;
  createdAt: string;
  // Professional specific fields
  primaryService?: string;
  experienceYears?: number;
  skills?: string[];
  verificationStatus?: VerificationStatus;
  hourlyRate?: number;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface LoginCredentials {
  emailOrPhone: string;
  password: string;
  rememberMe?: boolean;
}

export interface SignupCustomerPayload {
  name: string;
  email: string;
  phone: string;
  password: string;
  location: string;
}

export interface SignupProfessionalPayload {
  name: string;
  email: string;
  phone: string;
  password: string;
  location: string;
  primaryService: string;
  experienceYears: number;
  skills: string[];
}
