import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase, getUser } from '../lib/supabase';
import type { User } from '@supabase/supabase-js';

type AuthContextType = {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
  userRole: 'admin' | 'syndic' | 'user' | null;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  isAuthenticated: false,
  userRole: null,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [userRole, setUserRole] = useState<'admin' | 'syndic' | 'user' | null>(null);

  useEffect(() => {
    // Load user on mount
    const loadUser = async () => {
      try {
        const currentUser = await getUser();
        setUser(currentUser || null);
        
        // Set user role based on metadata
        if (currentUser?.user_metadata?.role) {
          setUserRole(currentUser.user_metadata.role);
        } else {
          setUserRole(null);
        }
      } catch (error) {
        console.error('Error loading user:', error);
      } finally {
        setLoading(false);
      }
    };

    loadUser();

    // Listen for auth changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user || null);
        setLoading(false);
        
        if (session?.user?.user_metadata?.role) {
          setUserRole(session.user.user_metadata.role);
        } else {
          setUserRole(null);
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const value = {
    user,
    loading,
    isAuthenticated: !!user,
    userRole,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);