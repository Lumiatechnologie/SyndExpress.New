import React from 'react';
import { Building2, Users, DollarSign, AlertCircle } from 'lucide-react';

type StatCardProps = {
  title: string;
  value: string | number;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  icon: React.ReactNode;
};

const StatCard = ({ title, value, change, trend, icon }: StatCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="mt-1 text-3xl font-semibold text-gray-900">{value}</p>
          
          {change && (
            <div className="mt-2 flex items-center text-sm">
              <span 
                className={`mr-1 ${
                  trend === 'up' 
                    ? 'text-green-600' 
                    : trend === 'down' 
                    ? 'text-red-600' 
                    : 'text-gray-600'
                }`}
              >
                {change}
              </span>
              
              {trend && (
                <svg 
                  className={`h-4 w-4 ${
                    trend === 'up' 
                      ? 'text-green-500' 
                      : trend === 'down' 
                      ? 'text-red-500' 
                      : 'text-gray-500'
                  }`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  {trend === 'up' ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  ) : trend === 'down' ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14" />
                  )}
                </svg>
              )}
            </div>
          )}
        </div>
        
        <div className="p-3 rounded-full bg-primary-50 text-primary-600">
          {icon}
        </div>
      </div>
    </div>
  );
};

const DashboardStats: React.FC = () => {
  // This would typically come from API/database
  const stats = [
    {
      title: "Propriétés",
      value: 4,
      change: "+1 depuis le mois dernier",
      trend: "up" as const,
      icon: <Building2 className="h-6 w-6" />,
    },
    {
      title: "Résidents",
      value: 42,
      change: "+3 depuis le mois dernier",
      trend: "up" as const,
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Paiements en attente",
      value: "2 500 €",
      change: "-15% depuis le mois dernier",
      trend: "down" as const,
      icon: <DollarSign className="h-6 w-6" />,
    },
    {
      title: "Problèmes ouverts",
      value: 5,
      change: "Inchangé depuis le mois dernier",
      trend: "neutral" as const,
      icon: <AlertCircle className="h-6 w-6" />,
    },
  ];
  
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default DashboardStats;