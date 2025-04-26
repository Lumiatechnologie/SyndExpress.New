import React from 'react';
import { formatDate } from '../../lib/utils';

type Payment = {
  id: string;
  description: string;
  amount: number;
  dueDate: string;
  status: 'pending' | 'paid' | 'overdue';
};

const UpcomingPayments: React.FC = () => {
  // This would typically come from API/database
  const payments: Payment[] = [
    {
      id: '1',
      description: 'Charges de copropriété - Juillet 2025',
      amount: 350,
      dueDate: '2025-07-15T00:00:00Z',
      status: 'pending',
    },
    {
      id: '2',
      description: 'Fonds de réserve - Q3 2025',
      amount: 150,
      dueDate: '2025-07-30T00:00:00Z',
      status: 'pending',
    },
    {
      id: '3',
      description: 'Charges de copropriété - Juin 2025',
      amount: 350,
      dueDate: '2025-06-15T00:00:00Z',
      status: 'paid',
    },
    {
      id: '4',
      description: 'Réparation ascenseur - Contribution spéciale',
      amount: 120,
      dueDate: '2025-05-30T00:00:00Z',
      status: 'overdue',
    },
  ];
  
  const getStatusBadge = (status: Payment['status']) => {
    switch (status) {
      case 'pending':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            En attente
          </span>
        );
      case 'paid':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Payé
          </span>
        );
      case 'overdue':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            En retard
          </span>
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">Paiements à venir</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Montant
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date d'échéance
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Statut
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {payments.map((payment) => (
              <tr key={payment.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{payment.description}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 font-medium">{payment.amount} €</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{formatDate(payment.dueDate)}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getStatusBadge(payment.status)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
        <a href="/payments" className="text-sm font-medium text-primary-600 hover:text-primary-500">
          Voir tous les paiements
        </a>
      </div>
    </div>
  );
};

export default UpcomingPayments;