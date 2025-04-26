import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import LoginForm from '../components/auth/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl w-full">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="p-6 sm:p-8 md:p-10">
                  <div className="text-center mb-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                      Connexion
                    </h1>
                    <p className="mt-2 text-sm text-gray-600">
                      Accédez à votre compte SyndExpress
                    </p>
                  </div>
                  
                  <LoginForm />
                  
                  <div className="mt-6 text-center text-sm">
                    <p className="text-gray-600">
                      Vous n'avez pas de compte?{' '}
                      <Link to="/register" className="font-medium text-primary-600 hover:text-primary-500">
                        S'inscrire
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 bg-primary-700 text-white p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                <h2 className="text-xl sm:text-2xl font-bold mb-4">
                  Bienvenue sur SyndExpress
                </h2>
                <p className="mb-6">
                  La plateforme innovante pour la gestion de copropriété.
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary-300 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Accédez à tous vos documents importants</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary-300 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Suivez vos paiements et vos factures</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary-300 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Communiquez facilement avec votre syndic</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary-300 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Signalez des problèmes et suivez leur résolution</span>
                  </li>
                </ul>
                
                <div className="mt-8 pt-6 border-t border-primary-600">
                  <p className="italic text-sm">
                    "SyndExpress a transformé la gestion de notre copropriété, tout est maintenant plus simple et transparent."
                  </p>
                  <p className="mt-2 font-medium">
                    - Ahmed Benali, Syndic à Casablanca
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LoginPage;