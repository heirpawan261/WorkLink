import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, LoginCredentials, SignupCustomerPayload, SignupProfessionalPayload } from '../types';
import { AuthService } from '../services/authService';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (credentials: LoginCredentials) => Promise<User>;
  signupCustomer: (payload: SignupCustomerPayload) => Promise<User>;
  signupProfessional: (payload: SignupProfessionalPayload) => Promise<User>;
  logout: () => Promise<void>;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Restore session on mount
  useEffect(() => {
    try {
      const activeUser = AuthService.getCurrentSession();
      setUser(activeUser);
    } catch (err: any) {
      console.error('Failed to load session:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = async (credentials: LoginCredentials): Promise<User> => {
    setIsLoading(true);
    setError(null);
    try {
      const loggedUser = await AuthService.login(credentials);
      setUser(loggedUser);
      return loggedUser;
    } catch (err: any) {
      const msg = err.message || 'Authentication failed. Please check your details.';
      setError(msg);
      throw new Error(msg);
    } finally {
      setIsLoading(false);
    }
  };

  const signupCustomer = async (payload: SignupCustomerPayload): Promise<User> => {
    setIsLoading(true);
    setError(null);
    try {
      const newUser = await AuthService.signupCustomer(payload);
      setUser(newUser);
      return newUser;
    } catch (err: any) {
      const msg = err.message || 'Registration failed.';
      setError(msg);
      throw new Error(msg);
    } finally {
      setIsLoading(false);
    }
  };

  const signupProfessional = async (payload: SignupProfessionalPayload): Promise<User> => {
    setIsLoading(true);
    setError(null);
    try {
      const newUser = await AuthService.signupProfessional(payload);
      setUser(newUser);
      return newUser;
    } catch (err: any) {
      const msg = err.message || 'Registration failed.';
      setError(msg);
      throw new Error(msg);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async (): Promise<void> => {
    setIsLoading(true);
    try {
      await AuthService.logout();
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const clearError = () => setError(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        error,
        login,
        signupCustomer,
        signupProfessional,
        logout,
        clearError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
