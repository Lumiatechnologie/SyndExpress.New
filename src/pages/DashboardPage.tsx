import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import DashboardStats from '../components/dashboard/DashboardStats';
import RecentActivities from '../components/dashboard/RecentActivities';
import UpcomingPayments from '../components/dashboard/UpcomingPayments';
import { useAuth } from '../contexts/AuthContext';

const DashboardPage: React.FC = () => {
  const { user, userRole } = useAuth();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page header */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex-1 min-w-0">
                <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                  Tableau de bord
                </h1>
                <p className="mt-1 text-sm text-gray-500">
                  {userRole === 'syndic' 
                    ? 'Bienvenue sur votre espace de gestion syndic' 
                    : 'Bienvenue sur votre espace résident'}
                </p>
              </div>
              <div className="mt-4 md:mt-0 flex md:ml-4">
                {userRole === 'syndic' && (
                  <button
                    type="button"
                    className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    Ajouter une propriété
                  </button>
                )}
                {userRole === 'user' && (
                  <button
                    type="button"
                    className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    Signaler un problème
                  </button>
                )}
              </div>
            </div>
          </div>
          
          {/* Stats grid */}
          <div className="mb-10">
            <DashboardStats />
          </div>
          
          {/* Content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="lg:col-span-1">
              <RecentActivities />
            </div>
            <div className="lg:col-span-1">
              <UpcomingPayments />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DashboardPage;