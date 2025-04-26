import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, LogOut, User, ChevronDown, Gauge } from 'lucide-react';
import { signOut } from '../../lib/supabase';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { user, isAuthenticated, userRole } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);
  
  const handleLogout = async () => {
    await signOut();
    navigate('/login');
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <div className="relative h-12 w-12">
                <div className="absolute inset-0 bg-black transform rotate-45">
                  <div className="absolute inset-0.5 bg-white">
                    <Gauge className="h-10 w-10 text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  </div>
                </div>
              </div>
              <span className="ml-3 text-2xl font-bold text-black tracking-wide">
                SYNDEXPRESS
              </span>
            </Link>
            
            {/* Desktop navigation */}
            <nav className="hidden md:ml-10 md:flex md:space-x-8 md:items-center">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition"
              >
                Accueil
              </Link>
              <Link 
                to="/services" 
                className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition"
              >
                Services
              </Link>
              <Link 
                to="/pricing" 
                className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition"
              >
                Tarifs
              </Link>
              <Link 
                to="/blog" 
                className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition"
              >
                Blog
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition"
              >
                Qui sommes-nous ?
              </Link>
              {isAuthenticated && (
                <>
                  <Link 
                    to="/dashboard" 
                    className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition"
                  >
                    Tableau de bord
                  </Link>
                </>
              )}
            </nav>
          </div>
          
          {/* Desktop action buttons */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={toggleUserMenu}
                  className="flex items-center text-sm font-medium text-gray-700 rounded-md hover:text-primary-600 focus:outline-none gap-1"
                >
                  <User className="h-5 w-5 mr-1" />
                  <span className="mr-1">{user?.email?.split('@')[0]}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 ring-1 ring-black ring-opacity-5">
                    <Link 
                      to="/profile" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Profil
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Se déconnecter
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline">Se connecter</Button>
                </Link>
                <Link to="/register">
                  <Button>S'inscrire</Button>
                </Link>
              </>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="pt-2 pb-3 space-y-1 px-4">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              to="/services" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/pricing" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Tarifs
            </Link>
            <Link 
              to="/blog" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Qui sommes-nous ?
            </Link>
            {isAuthenticated && (
              <Link 
                to="/dashboard" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Tableau de bord
              </Link>
            )}
          </div>
          
          {/* Mobile action buttons */}
          <div className="pt-4 pb-3 border-t border-gray-200">
            {isAuthenticated ? (
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-medium">
                    {user?.email?.[0].toUpperCase()}
                  </div>
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">{user?.email?.split('@')[0]}</div>
                  <div className="text-sm font-medium text-gray-500">{user?.email}</div>
                </div>
              </div>
            ) : (
              <div className="mt-3 space-y-1 px-4">
                <Link to="/login">
                  <Button variant="outline" className="w-full justify-center mb-2">
                    Se connecter
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="w-full justify-center">
                    S'inscrire
                  </Button>
                </Link>
              </div>
            )}
            
            {isAuthenticated && (
              <div className="mt-3 space-y-1 px-4">
                <Link 
                  to="/profile"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                >
                  Profil
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="w-full flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                >
                  <LogOut className="h-5 w-5 mr-2" />
                  Se déconnecter
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;