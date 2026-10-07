import { Worker, Booking } from '../types';

export const MOCK_WORKERS: Worker[] = [
  {
    id: 'w-101',
    name: 'Rajesh Kumar',
    avatar: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&q=80&w=250',
    title: 'Master Electrician & Circuit Specialist',
    categorySlug: 'electrician',
    rating: 4.9,
    reviewsCount: 142,
    experienceYears: 7,
    hourlyRate: 450,
    distanceKm: 2.4,
    location: 'Indiranagar, Bangalore (2.4 km away)',
    verified: true,
    skills: ['MCB & Fuse Repair', 'Heavy Load Wiring', 'Smart Switchboard', 'Inverter Setup'],
    availability: 'Available Today',
    bio: 'Certified industrial & residential electrician with 7+ years of experience resolving complex short circuits, panel upgrades, and safety wiring.',
    completedJobs: 310,
    matchScore: 96,
    matchDetails: {
      matchPercentage: 96,
      skillMatch: true,
      experienceYears: 7,
      availableAtRequestedTime: true,
      rating: 4.9,
      distanceKm: 2.4,
      withinBudget: true,
      reasons: [
        '✓ Certified Master Electrician skill match',
        '✓ 7 years hands-on experience',
        '✓ Available immediately today',
        '✓ 4.9★ rating across 142 verified reviews',
        '✓ 2.4 km away (within 10 km service radius)',
        '✓ Hourly rate within standard budget'
      ]
    }
  },
  {
    id: 'w-102',
    name: 'Suresh Sharma',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250',
    title: 'Senior HVAC & AC Service Specialist',
    categorySlug: 'ac-technician',
    rating: 4.8,
    reviewsCount: 98,
    experienceYears: 6,
    hourlyRate: 500,
    distanceKm: 3.8,
    location: 'Koramangala, Bangalore (3.8 km away)',
    verified: true,
    skills: ['Split AC Servicing', 'Gas Charging (R32/R410)', 'Compressor Diagnostics', 'Leak Repair'],
    availability: 'Available Today',
    bio: 'Expert AC technician specializing in inverter split ACs, deep foam washing, and precision refrigerant leak detection.',
    completedJobs: 245,
    matchScore: 92,
    matchDetails: {
      matchPercentage: 92,
      skillMatch: true,
      experienceYears: 6,
      availableAtRequestedTime: true,
      rating: 4.8,
      distanceKm: 3.8,
      withinBudget: true,
      reasons: [
        '✓ HVAC & Inverter AC repair skill matched',
        '✓ 6 years specialized experience',
        '✓ Available for slot today',
        '✓ 4.8★ top-rated technician',
        '✓ 3.8 km away'
      ]
    }
  },
  {
    id: 'w-103',
    name: 'Vikram Singh',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=250',
    title: 'Sanitary Plumbing & Pipefitting Expert',
    categorySlug: 'plumber',
    rating: 4.7,
    reviewsCount: 115,
    experienceYears: 5,
    hourlyRate: 400,
    distanceKm: 1.8,
    location: 'HSR Layout, Bangalore (1.8 km away)',
    verified: true,
    skills: ['Hydro-jet Drain Cleaning', 'Trenchless Pipe Leak', 'Bathroom Fitting', 'Water Heater Setup'],
    availability: 'Available Today',
    bio: 'Prompt sanitary expert specializing in high-pressure clog removals, concealed pipe leaks, and modern bathroom installations.',
    completedJobs: 180,
    matchScore: 89,
    matchDetails: {
      matchPercentage: 89,
      skillMatch: true,
      experienceYears: 5,
      availableAtRequestedTime: true,
      rating: 4.7,
      distanceKm: 1.8,
      withinBudget: true,
      reasons: [
        '✓ Hydro-jet & Pipe leak skill matched',
        '✓ 5 years plumbing experience',
        '✓ 1.8 km proximity (Fast arrival)',
        '✓ Competitive hourly rate'
      ]
    }
  },
  {
    id: 'w-104',
    name: 'Amit Patel',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=250',
    title: 'Custom Furniture & Woodwork Craftsman',
    categorySlug: 'carpenter',
    rating: 4.9,
    reviewsCount: 84,
    experienceYears: 8,
    hourlyRate: 550,
    distanceKm: 5.2,
    location: 'BTM Layout, Bangalore (5.2 km away)',
    verified: true,
    skills: ['Modular Kitchen Repair', 'Door Lock Installation', 'Custom Wardrobes', 'Polishing'],
    availability: 'Available Tomorrow',
    bio: 'Precision craftsman with 8 years of woodwork experience. Expert in modular furniture restoration and custom cabinetry.',
    completedJobs: 190,
    matchScore: 88,
    matchDetails: {
      matchPercentage: 88,
      skillMatch: true,
      experienceYears: 8,
      availableAtRequestedTime: false,
      rating: 4.9,
      distanceKm: 5.2,
      withinBudget: true,
      reasons: [
        '✓ Custom Woodwork skill matched',
        '✓ 8 years experience',
        '✓ 4.9★ rating',
        '⚡ Available tomorrow'
      ]
    }
  }
];

export const MOCK_BOOKINGS: Booking[] = [
  {
    id: 'bk-501',
    workerId: 'w-101',
    workerName: 'Rajesh Kumar',
    serviceName: 'Electrician — Circuit Board Repair',
    date: '2026-10-08',
    timeSlot: '10:00 AM - 12:00 PM',
    hoursNeeded: 2,
    hourlyRate: 450,
    travelExpense: 100,
    totalAmount: 1000,
    status: 'confirmed',
    location: 'Indiranagar 100ft Road, Bangalore',
    notes: 'Main switch tripping whenever high-load AC is turned on.'
  }
];
