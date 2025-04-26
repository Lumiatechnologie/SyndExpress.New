import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import { signIn } from '../../lib/supabase';
import Input from '../ui/Input';
import Button from '../ui/Button';

type LoginFormValues = {
  email: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting } 
  } = useForm<LoginFormValues>();
  
  const [serverError, setServerError] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Check if there's a success message from registration
  const successMessage = location.state?.message || null;
  
  const onSubmit = async (data: LoginFormValues) => {
    try {
      setServerError(null);
      
      const { data: authData, error } = await signIn(data.email, data.password);
      
      if (error) {
        throw error;
      }
      
      if (authData?.user) {
        // Check if the user is a syndic with pending verification
        if (
          authData.user.user_metadata.role === 'syndic' && 
          authData.user.user_metadata.verification_status === 'pending'
        ) {
          // Redirect to a pending approval page
          navigate('/account-pending');
        } else {
          // Regular login for approved users
          navigate('/dashboard');
        }
      }
    } catch (error: any) {
      console.error('Login error:', error);
      setServerError(
        error.message === 'Invalid login credentials'
          ? "Email ou mot de passe incorrect"
          : error.message || "Une erreur est survenue lors de la connexion. Veuillez réessayer."
      );
    }
  };
  
  return (
    <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Connexion</h2>
        <p className="mt-2 text-sm text-gray-600">
          Accédez à votre compte SyndExpress
        </p>
      </div>
      
      {successMessage && (
        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-green-700">{successMessage}</p>
            </div>
          </div>
        </div>
      )}
      
      {serverError && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
          <div className="flex items-center">
            <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
            <p className="text-sm text-red-700">{serverError}</p>
          </div>
        </div>
      )}
      
      <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <Input
            label="Email"
            type="email"
            {...register('email', { 
              required: "L'email est requis",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Adresse email invalide"
              }
            })}
            error={errors.email?.message}
            placeholder="exemple@email.com"
          />
          
          <Input
            label="Mot de passe"
            type="password"
            {...register('password', { 
              required: "Le mot de passe est requis" 
            })}
            error={errors.password?.message}
            placeholder="••••••••"
          />
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                Se souvenir de moi
              </label>
            </div>
            
            <div className="text-sm">
              <a href="/forgot-password" className="font-medium text-primary-600 hover:text-primary-500">
                Mot de passe oublié?
              </a>
            </div>
          </div>
        </div>
        
        <div>
          <Button 
            type="submit" 
            className="w-full"
            isLoading={isSubmitting}
          >
            Se connecter
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;