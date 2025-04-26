import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const AboutPage: React.FC = () => {
  const team = [
    {
      name: "DALLAL Mohamed",
      role: "CEO Co-fondateur",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      description: "Expert en gestion d'entreprise et développement commercial."
    },
    {
      name: "BADR EL KHALILI",
      role: "CEO Co-Fondateur",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
      description: "Spécialiste en stratégie d'entreprise et innovation technologique."
    },
    {
      name: "Ayman Dakir",
      role: "Développeur Full Stack",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg",
      description: "Expert en développement web et applications modernes."
    },
    {
      name: "Abdelillah",
      role: "Développeur Full Stack",
      image: "https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg",
      description: "Spécialiste en architecture logicielle et développement full-stack."
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
              <h1 className="text-4xl font-bold mb-6">Qui sommes-nous ?</h1>
              <p className="text-xl text-primary-100 max-w-2xl mx-auto">
                Une équipe passionnée par l'innovation et dédiée à la transformation numérique de la gestion immobilière
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Notre Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Chez SyndExpress, nous nous engageons à simplifier la gestion des copropriétés en fournissant des outils innovants et intuitifs. Notre objectif est de faciliter la communication entre les syndics et les résidents tout en optimisant la gestion quotidienne des immeubles.
                </p>
                <p className="text-lg text-gray-600">
                  Nous croyons en la transparence, l'efficacité et la simplicité. C'est pourquoi nous développons continuellement notre plateforme pour répondre aux besoins évolutifs de nos utilisateurs.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" 
                  alt="Notre équipe au travail"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">Notre Équipe</h2>
              <p className="mt-4 text-lg text-gray-600">
                Des experts passionnés qui travaillent pour votre succès
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-primary-600 mb-4">{member.role}</p>
                    <p className="text-gray-600">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">Nos Valeurs</h2>
              <p className="mt-4 text-lg text-gray-600">
                Les principes qui guident nos actions au quotidien
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl text-primary-600">🎯</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                <p className="text-gray-600">
                  Nous recherchons constamment de nouvelles solutions pour améliorer l'expérience utilisateur.
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl text-primary-600">🤝</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Collaboration</h3>
                <p className="text-gray-600">
                  Nous croyons en la force du travail d'équipe et de la communication ouverte.
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl text-primary-600">⭐</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Excellence</h3>
                <p className="text-gray-600">
                  Nous visons l'excellence dans chaque aspect de notre service.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;