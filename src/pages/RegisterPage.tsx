import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import RegisterForm from '../components/auth/RegisterForm';

const RegisterPage: React.FC = () => {
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
                      Créer un compte
                    </h1>
                    <p className="mt-2 text-sm text-gray-600">
                      Rejoignez SyndExpress pour une gestion immobilière simplifiée
                    </p>
                  </div>
                  
                  <RegisterForm />
                  
                  <div className="mt-6 text-center text-sm">
                    <p className="text-gray-600">
                      Vous avez déjà un compte?{' '}
                      <Link to="/login" className="font-medium text-primary-600 hover:text-primary-500">
                        Se connecter
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 bg-gradient-to-br from-accent-500 to-accent-700 text-white p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                <h2 className="text-xl sm:text-2xl font-bold mb-4">
                  Pourquoi choisir SyndExpress?
                </h2>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Gestion simplifiée:</strong> Tous vos documents, paiements et communications au même endroit</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Transparence totale:</strong> Suivez chaque transaction et décision</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Communication efficace:</strong> Échangez facilement avec résidents ou syndics</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Résolution rapide:</strong> Signalez et suivez les problèmes jusqu'à leur résolution</span>
                  </li>
                </ul>
                
                <div className="mt-6 pt-6 border-t border-white/30">
                  <p className="font-medium mb-2">Vous êtes...</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-lg p-4">
                      <h3 className="font-semibold text-lg mb-2">Résident</h3>
                      <p className="text-sm opacity-90">
                        Accédez à vos documents, suivez vos paiements et communiquez avec votre syndic.
                      </p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <h3 className="font-semibold text-lg mb-2">Syndic</h3>
                      <p className="text-sm opacity-90">
                        Gérez efficacement vos immeubles, les finances et les communications.
                      </p>
                    </div>
                  </div>
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

export default RegisterPage;