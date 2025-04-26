import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Mail, AlertCircle } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';
import { signOut } from '../lib/supabase';

const AccountPendingPage: React.FC = () => {
  const handleLogout = async () => {
    await signOut();
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100">
              <Clock className="h-8 w-8 text-yellow-600" />
            </div>
            <h1 className="mt-4 text-2xl font-bold text-gray-900">
              Compte en attente d'approbation
            </h1>
            <p className="mt-2 text-md text-gray-600">
              Votre compte de responsable syndic est en cours de vérification.
            </p>
          </div>
          
          <div className="bg-white shadow rounded-lg p-6 sm:p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="flex-shrink-0">
                <Mail className="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <h2 className="text-lg font-medium text-gray-900">
                  Vérification en cours
                </h2>
                <p className="mt-1 text-gray-600">
                  Notre équipe est en train d'examiner vos documents et informations. Vous recevrez un email dès que votre compte sera approuvé.
                </p>
              </div>
            </div>
            
            <div className="bg-yellow-50 rounded-md p-4 mb-6 border-l-4 border-yellow-400">
              <div className="flex items-start">
                <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 mr-3" />
                <div>
                  <h3 className="text-sm font-medium text-yellow-800">
                    Compte limité
                  </h3>
                  <p className="mt-1 text-sm text-yellow-700">
                    Pendant cette période, votre accès à l'application est limité. Une fois approuvé, vous aurez accès à toutes les fonctionnalités de SyndExpress.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <Button variant="outline" className="w-full" onClick={handleLogout}>
                <Link to="/login">
                  Se déconnecter
                </Link>
              </Button>
              
              <p className="text-center text-xs text-gray-500">
                Besoin d'aide? Contactez notre support à{' '}
                <a href="mailto:contact@lumiatechnologie.com" className="text-primary-600 hover:text-primary-500">
                  contact@lumiatechnologie.com
                </a>
              </p>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="text-sm font-medium text-gray-900 mb-2">
                Combien de temps cela prend-il habituellement?
              </h3>
              <p className="text-sm text-gray-600">
                La vérification prend généralement 24 à 48 heures ouvrables. Si vous n'avez pas reçu de nouvelles après 2 jours ouvrables, n'hésitez pas à nous contacter.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AccountPendingPage;