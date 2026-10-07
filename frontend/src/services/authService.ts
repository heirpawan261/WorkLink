import { User, LoginCredentials, SignupCustomerPayload, SignupProfessionalPayload } from '../types';

const SESSION_STORAGE_KEY = 'worklink_user_session';

// Mock Initial Database Users
const MOCK_USERS_DB: User[] = [
  {
    id: 'usr-customer-1',
    name: 'Alex Morgan',
    email: 'customer@worklink.com',
    phone: '9876543210',
    role: 'customer',
    location: 'Indiranagar, Bangalore',
    createdAt: '2026-01-15T08:00:00Z',
  },
  {
    id: 'usr-pro-1',
    name: 'Rajesh Kumar',
    email: 'pro@worklink.com',
    phone: '9876543211',
    role: 'professional',
    location: 'Koramangala, Bangalore',
    primaryService: 'Electrician',
    experienceYears: 7,
    skills: ['MCB & Fuse Repair', 'Heavy Load Wiring', 'Smart Switchboard', 'Inverter Setup'],
    verificationStatus: 'verified',
    hourlyRate: 450,
    createdAt: '2025-11-10T10:30:00Z',
  },
];

export class AuthService {
  // Helper to retrieve local storage DB or initialize
  private static getUsersDB(): User[] {
    const stored = localStorage.getItem('worklink_users_db');
    if (!stored) {
      localStorage.setItem('worklink_users_db', JSON.stringify(MOCK_USERS_DB));
      return MOCK_USERS_DB;
    }
    try {
      return JSON.parse(stored);
    } catch {
      return MOCK_USERS_DB;
    }
  }

  private static saveUserToDB(user: User): void {
    const db = this.getUsersDB();
    db.push(user);
    localStorage.setItem('worklink_users_db', JSON.stringify(db));
  }

  // Simulate async delay
  private static delay(ms = 250): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // Login method
  static async login(credentials: LoginCredentials): Promise<User> {
    await this.delay();

    const db = this.getUsersDB();
    const query = credentials.emailOrPhone.trim().toLowerCase();

    // Match by email or phone
    const user = db.find(
      (u) => u.email.toLowerCase() === query || u.phone.trim() === query
    );

    if (!user) {
      throw new Error('No account found with this email or phone number.');
    }

    // In a real backend, password hash validation occurs here
    if (credentials.password.length < 6) {
      throw new Error('Invalid password provided.');
    }

    // Save session
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(user));
    return user;
  }

  // Signup Customer method
  static async signupCustomer(payload: SignupCustomerPayload): Promise<User> {
    await this.delay();

    const db = this.getUsersDB();
    const emailExists = db.some((u) => u.email.toLowerCase() === payload.email.trim().toLowerCase());
    if (emailExists) {
      throw new Error('An account with this email address already exists.');
    }

    const newUser: User = {
      id: `usr-cust-${Date.now()}`,
      name: payload.name.trim(),
      email: payload.email.trim().toLowerCase(),
      phone: payload.phone.trim(),
      role: 'customer',
      location: payload.location.trim(),
      createdAt: new Date().toISOString(),
    };

    this.saveUserToDB(newUser);
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(newUser));
    return newUser;
  }

  // Signup Professional method
  static async signupProfessional(payload: SignupProfessionalPayload): Promise<User> {
    await this.delay();

    const db = this.getUsersDB();
    const emailExists = db.some((u) => u.email.toLowerCase() === payload.email.trim().toLowerCase());
    if (emailExists) {
      throw new Error('An account with this email address already exists.');
    }

    const newUser: User = {
      id: `usr-pro-${Date.now()}`,
      name: payload.name.trim(),
      email: payload.email.trim().toLowerCase(),
      phone: payload.phone.trim(),
      role: 'professional',
      location: payload.location.trim(),
      primaryService: payload.primaryService,
      experienceYears: Number(payload.experienceYears),
      skills: payload.skills,
      verificationStatus: 'pending', // Explicit mock verification status
      hourlyRate: 400, // Base default hourly rate
      createdAt: new Date().toISOString(),
    };

    this.saveUserToDB(newUser);
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(newUser));
    return newUser;
  }

  // Retrieve Active Session
  static getCurrentSession(): User | null {
    const sessionStr = localStorage.getItem(SESSION_STORAGE_KEY);
    if (!sessionStr) return null;
    try {
      return JSON.parse(sessionStr);
    } catch {
      return null;
    }
  }

  // Logout
  static async logout(): Promise<void> {
    await this.delay(100);
    localStorage.removeItem(SESSION_STORAGE_KEY);
  }
}
