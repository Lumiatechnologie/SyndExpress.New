import React from 'react';
import { formatDate } from '../../lib/utils';

type Activity = {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'payment' | 'issue' | 'announcement' | 'document';
};

const RecentActivities: React.FC = () => {
  // This would typically come from API/database
  const activities: Activity[] = [
    {
      id: '1',
      title: 'Paiement reçu',
      description: 'John Doe a effectué un paiement de 350€ pour les charges du mois de Juin.',
      date: '2025-06-03T10:32:00Z',
      type: 'payment',
    },
    {
      id: '2',
      title: 'Problème signalé',
      description: 'Marie Martin a signalé un problème de fuite d\'eau dans l\'appartement 203.',
      date: '2025-06-02T14:45:00Z',
      type: 'issue',
    },
    {
      id: '3',
      title: 'Annonce publiée',
      description: 'Réunion des copropriétaires prévue le 15 juin à 18h dans la salle commune.',
      date: '2025-06-01T09:15:00Z',
      type: 'announcement',
    },
    {
      id: '4',
      title: 'Document ajouté',
      description: 'Le rapport financier du premier trimestre 2025 a été ajouté aux documents.',
      date: '2025-05-30T16:20:00Z',
      type: 'document',
    },
    {
      id: '5',
      title: 'Paiement en retard',
      description: 'Rappel envoyé à Pierre Dupont pour le paiement des charges de Mai.',
      date: '2025-05-28T11:10:00Z',
      type: 'payment',
    },
  ];
  
  const getActivityIcon = (type: Activity['type']) => {
    switch (type) {
      case 'payment':
        return (
          <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
            <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        );
      case 'issue':
        return (
          <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
            <svg className="h-4 w-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        );
      case 'announcement':
        return (
          <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
            <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
          </div>
        );
      case 'document':
        return (
          <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
            <svg className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        );
      default:
        return (
          <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
            <svg className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        );
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">Activités récentes</h3>
      </div>
      <ul className="divide-y divide-gray-200">
        {activities.map((activity) => (
          <li key={activity.id} className="p-6 hover:bg-gray-50 transition-colors">
            <div className="flex items-start space-x-4">
              {getActivityIcon(activity.type)}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {activity.title}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {activity.description}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {formatDate(activity.date)}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
        <a href="/activities" className="text-sm font-medium text-primary-600 hover:text-primary-500">
          Voir toutes les activités
        </a>
      </div>
    </div>
  );
};

export default RecentActivities;