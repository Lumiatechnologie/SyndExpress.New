import React from 'react';
import { Link } from 'react-router-dom';
import { Gauge, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand and description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center">
              <div className="relative h-10 w-10">
                <div className="absolute inset-0 bg-white transform rotate-45">
                  <div className="absolute inset-0.5 bg-gray-900">
                    <Gauge className="h-8 w-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  </div>
                </div>
              </div>
              <span className="ml-2 text-xl font-bold">SyndExpress</span>
            </div>
            <p className="mt-4 text-gray-400 text-sm">
              La solution moderne de gestion de syndic pour vos propriétés. 
              Simplifiez la gestion immobilière et améliorez la communication avec vos résidents.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-white transition">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Légal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition">
                  Conditions d'utilisation
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-400 hover:text-white transition">
                  Politique des cookies
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-primary-400 mt-0.5 mr-2" />
                <a href="mailto:contact@lumiatechnologie.com" className="text-gray-400 hover:text-white transition">
                  contact@lumiatechnologie.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-primary-400 mt-0.5 mr-2" />
                <span className="text-gray-400">+33 666 197 344</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-400 mt-0.5 mr-2" />
                <span className="text-gray-400">59 Rue des Passementiers<br />42100 Saint-Étienne</span>
              </li>
            </ul>
            
            {/* Google Maps */}
            <div className="mt-4 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2813.004857391947!2d4.386547776891533!3d45.43893673545244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f5a9c76e424b69%3A0x9d9f3c5c6a2cf4d8!2s59%20Rue%20des%20Passementiers%2C%2042100%20Saint-%C3%89tienne!5e0!3m2!1sfr!2sfr!4v1709922275346!5m2!1sfr!2sfr"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} SyndExpress. Tous droits réservés.
          </p>
          <p className="mt-4 md:mt-0 text-gray-400 text-sm">
            Développé par <a href="https://lumiatechnologie.com" className="text-primary-400 hover:text-primary-300" target="_blank" rel="noopener noreferrer">Lumia Technologie</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;