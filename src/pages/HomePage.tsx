import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, DollarSign, Users, Clock, CheckSquare, ShieldCheck } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary-800 to-primary-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-pattern opacity-10"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Gestion de syndic simplifiée et professionnelle
                </h1>
                <p className="text-lg md:text-xl opacity-90 max-w-xl">
                  SyndExpress vous offre une solution moderne et intuitive pour gérer vos propriétés, communiquer avec les résidents et suivre vos finances.
                </p>
                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                  <Link to="/register">
                    <Button size="lg" className="shadow-lg shadow-primary-500/30 w-full sm:w-auto">
                      Commencer maintenant
                    </Button>
                  </Link>
                  <Link to="/about">
                    <Button 
                      size="lg" 
                      className="bg-white text-primary-900 hover:bg-gray-100 w-full sm:w-auto border-2 border-white"
                    >
                      En savoir pluss
                    </Button>
                  </Link>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                  <div className="flex items-center space-x-2">
                    <CheckSquare className="h-5 w-5 text-accent-300" />
                    <span className="text-sm">Facile à utiliser</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckSquare className="h-5 w-5 text-accent-300" />
                    <span className="text-sm">100% sécurisé</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckSquare className="h-5 w-5 text-accent-300" />
                    <span className="text-sm">Support 24/7</span>
                  </div>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
                <div className="relative rounded-2xl shadow-2xl overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="SyndExpress Dashboard" 
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Fonctionnalités puissantes pour votre gestion immobilière
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Découvrez les outils qui rendent SyndExpress indispensable pour les gestionnaires de copropriétés.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md p-6 transition hover:shadow-lg">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-5">
                  <Building2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Gestion des propriétés</h3>
                <p className="text-gray-600">
                  Gérez facilement vos immeubles, appartements et espaces communs en un seul endroit.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 transition hover:shadow-lg">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-5">
                  <DollarSign className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Suivi financier</h3>
                <p className="text-gray-600">
                  Suivez les paiements des charges, générez des factures et gérez votre comptabilité.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 transition hover:shadow-lg">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-5">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Communication résidents</h3>
                <p className="text-gray-600">
                  Facilitez les échanges avec les résidents et diffusez des informations importantes.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 transition hover:shadow-lg">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-5">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Planification</h3>
                <p className="text-gray-600">
                  Organisez les réunions, suivez les interventions et planifiez l'entretien.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 transition hover:shadow-lg">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-5">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Sécurité avancée</h3>
                <p className="text-gray-600">
                  Protection des données personnelles et gestion sécurisée des accès.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 transition hover:shadow-lg">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-5">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Rapports et documents</h3>
                <p className="text-gray-600">
                  Générez des rapports détaillés et gérez tous vos documents importants.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Ils nous font confiance
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Découvrez ce que nos clients disent de SyndExpress.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="flex space-x-1 mb-4 text-accent-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "SyndExpress a révolutionné notre gestion de copropriété. Plus de paperasse, plus de retards de paiements, tout est transparent et facile à suivre."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                  <div>
                    <h4 className="font-medium text-gray-900">Sophie Moreau</h4>
                    <p className="text-sm text-gray-500">Résidence Les Oliviers</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="flex space-x-1 mb-4 text-accent-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "En tant que responsable syndic, je peux enfin gérer efficacement nos 3 immeubles. L'interface est intuitive et le support client est exceptionnel."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                  <div>
                    <h4 className="font-medium text-gray-900">Ahmed Benali</h4>
                    <p className="text-sm text-gray-500">Syndic Horizon Bleu</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="flex space-x-1 mb-4 text-accent-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "La transparence sur les finances de notre copropriété a changé la dynamique entre résidents. Plus de conflits, plus de confiance."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                  <div>
                    <h4 className="font-medium text-gray-900">Marie Dubois</h4>
                    <p className="text-sm text-gray-500">Résidence Grand Parc</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/testimonials">
                <Button variant="outline">
                  Voir plus de témoignages
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-secondary-700 to-secondary-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              Prêt à transformer votre gestion de syndic?
            </h2>
            <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">
              Rejoignez des milliers de syndics qui ont simplifié leur gestion immobilière avec SyndExpress.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/register">
                <Button size="lg" className="shadow-lg w-full sm:w-auto">
                  Démarrer gratuitement
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-secondary-900 w-full sm:w-auto"
                >
                  Nous contacter
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;
