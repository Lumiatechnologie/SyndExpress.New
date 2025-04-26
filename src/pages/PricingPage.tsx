import React from 'react';
import { Check } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';

const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Tarification Simple et Transparente</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Commencez gratuitement et découvrez tous les avantages de SyndExpress
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Trial Plan */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Essai Gratuit</h3>
                <p className="text-gray-600 mb-6">Parfait pour tester notre solution</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">0 DH</span>
                  <span className="text-gray-600">/3 mois</span>
                </div>
                <Button className="w-full mb-8">Commencer l'essai gratuit</Button>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0" />
                    <span>Accès complet à toutes les fonctionnalités</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0" />
                    <span>Jusqu'à 50 unités</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0" />
                    <span>Support par email</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-primary-900 rounded-2xl shadow-lg overflow-hidden text-white">
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-2">Premium</h3>
                <p className="text-primary-100 mb-6">Pour une gestion professionnelle</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">500 DH</span>
                  <span className="text-primary-100">/an</span>
                </div>
                <Button className="w-full mb-8 bg-white text-primary-900 hover:bg-gray-100">
                  Souscrire maintenant
                </Button>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-primary-300 mr-2 flex-shrink-0" />
                    <span>Toutes les fonctionnalités de l'essai gratuit</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-primary-300 mr-2 flex-shrink-0" />
                    <span>Nombre illimité d'unités</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-primary-300 mr-2 flex-shrink-0" />
                    <span>Support prioritaire 24/7</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-primary-300 mr-2 flex-shrink-0" />
                    <span>Tableau de bord avancé</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-primary-300 mr-2 flex-shrink-0" />
                    <span>Rapports personnalisés</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-primary-300 mr-2 flex-shrink-0" />
                    <span>API pour intégrations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12">Questions Fréquentes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Puis-je annuler à tout moment ?
                </h3>
                <p className="text-gray-600">
                  Oui, vous pouvez annuler votre abonnement à tout moment. Vous ne serez pas facturé pour la période suivante.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Comment fonctionne l'essai gratuit ?
                </h3>
                <p className="text-gray-600">
                  L'essai gratuit vous donne accès à toutes les fonctionnalités pendant 3 mois, sans engagement.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Que se passe-t-il après l'essai gratuit ?
                </h3>
                <p className="text-gray-600">
                  À la fin de la période d'essai, vous pouvez choisir de passer au plan Premium ou de cesser d'utiliser le service.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Le support est-il inclus ?
                </h3>
                <p className="text-gray-600">
                  Oui, tous les plans incluent un support. Le plan Premium bénéficie d'un support prioritaire 24/7.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PricingPage;