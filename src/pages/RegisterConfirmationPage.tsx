import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Mail } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';

const RegisterConfirmationPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="mt-4 text-2xl font-bold text-gray-900">
              Demande d'inscription envoyée!
            </h1>
            <p className="mt-2 text-md text-gray-600">
              Votre demande d'inscription en tant que responsable syndic a été envoyée avec succès.
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
                  Votre inscription est en cours de vérification par notre équipe. Vous recevrez un email de confirmation à l'adresse que vous avez fournie.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-md p-4 mb-6">
              <h3 className="text-sm font-medium text-gray-900 mb-2">
                Prochaines étapes:
              </h3>
              <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-600">
                <li>Notre équipe examine vos documents (délai habituel: 24-48h)</li>
                <li>Vous recevrez un email de confirmation à l'adresse <strong>contact@lumiatechnologie.com</strong></li>
                <li>Vous pourrez alors vous connecter et commencer à utiliser SyndExpress</li>
              </ol>
            </div>
            
            <div className="space-y-4">
              <Button variant="outline" className="w-full">
                <Link to="/login">
                  Retour à la page de connexion
                </Link>
              </Button>
              
              <p className="text-center text-xs text-gray-500">
                Des questions? Contactez notre support à{' '}
                <a href="mailto:contact@lumiatechnologie.com" className="text-primary-600 hover:text-primary-500">
                  contact@lumiatechnologie.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RegisterConfirmationPage;