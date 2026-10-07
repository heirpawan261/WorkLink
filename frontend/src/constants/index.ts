import { ServiceCategory } from '../types';

export const APP_NAME = 'WorkLink';
export const APP_TAGLINE = 'Find the right skilled professional. Not just the nearest one.';
export const DEFAULT_SERVICE_RADIUS_KM = 10;

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'cat-1',
    name: 'Electrician',
    slug: 'electrician',
    description: 'Wiring, circuit repairs, fixture installation & electrical safety audits.',
    icon: 'Zap',
    popular: true,
    basePriceRange: '₹350 - ₹700 / hr',
    activeWorkersCount: 42,
  },
  {
    id: 'cat-2',
    name: 'Plumber',
    slug: 'plumber',
    description: 'Pipe leaks, drainage clearing, tap replacements & bathroom fittings.',
    icon: 'Droplets',
    popular: true,
    basePriceRange: '₹300 - ₹650 / hr',
    activeWorkersCount: 38,
  },
  {
    id: 'cat-3',
    name: 'Carpenter',
    slug: 'carpenter',
    description: 'Furniture repair, door fittings, custom woodwork & cabinet installation.',
    icon: 'Hammer',
    popular: false,
    basePriceRange: '₹400 - ₹800 / hr',
    activeWorkersCount: 29,
  },
  {
    id: 'cat-4',
    name: 'Painter',
    slug: 'painter',
    description: 'Interior & exterior wall painting, waterproof coating & touch-ups.',
    icon: 'Paintbrush',
    popular: false,
    basePriceRange: '₹300 - ₹600 / hr',
    activeWorkersCount: 31,
  },
  {
    id: 'cat-5',
    name: 'AC Technician',
    slug: 'ac-technician',
    description: 'AC servicing, gas refilling, compressor repair & split/window installation.',
    icon: 'Wind',
    popular: true,
    basePriceRange: '₹450 - ₹900 / hr',
    activeWorkersCount: 54,
  },
  {
    id: 'cat-6',
    name: 'Mechanic',
    slug: 'mechanic',
    description: 'On-demand two-wheeler & car roadside repairs, battery jumpstart & diagnostics.',
    icon: 'Wrench',
    popular: false,
    basePriceRange: '₹350 - ₹750 / hr',
    activeWorkersCount: 23,
  },
  {
    id: 'cat-7',
    name: 'Appliance Repair',
    slug: 'appliance-repair',
    description: 'Washing machine, refrigerator, microwave & water purifier servicing.',
    icon: 'Tv',
    popular: true,
    basePriceRange: '₹350 - ₹700 / hr',
    activeWorkersCount: 47,
  },
];
