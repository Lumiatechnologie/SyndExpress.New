import React from 'react';
import { Shield, Users, FileText, Bell, PieChart, Settings } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Gestion sécurisée",
      description: "Protection des données et gestion sécurisée des accès pour tous les utilisateurs."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Communication résidents",
      description: "Plateforme de communication intégrée entre syndics et résidents."
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Gestion documentaire",
      description: "Stockage et partage sécurisé de tous les documents importants."
    },
    {
      icon: <Bell className="h-8 w-8" />,
      title: "Notifications",
      description: "Système d'alertes et de notifications pour les événements importants."
    },
    {
      icon: <PieChart className="h-8 w-8" />,
      title: "Suivi financier",
      description: "Tableau de bord complet pour le suivi des paiements et des dépenses."
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Maintenance",
      description: "Suivi des interventions et planification de la maintenance."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-6">Nos Services</h1>
              <p className="text-xl text-primary-100 max-w-2xl mx-auto">
                Des solutions complètes pour une gestion efficace de vos copropriétés
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="text-primary-600 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">
                Fonctionnalités principales
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Découvrez les outils qui font de SyndExpress la solution idéale pour votre copropriété
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg"
                  alt="Dashboard"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">
                  Tableau de bord intuitif
                </h3>
                <p className="text-gray-600 mb-6">
                  Notre interface utilisateur moderne vous permet de visualiser en un coup d'œil toutes les informations importantes de votre copropriété.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="h-6 w-6 text-primary-600 mr-2">✓</span>
                    <span>Vue d'ensemble des paiements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 text-primary-600 mr-2">✓</span>
                    <span>Suivi des interventions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 text-primary-600 mr-2">✓</span>
                    <span>Gestion des documents</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;