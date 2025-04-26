import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Building2, User, AlertTriangle } from 'lucide-react';
import { signUp } from '../../lib/supabase';
import Input from '../ui/Input';
import Button from '../ui/Button';
import FileUpload from '../ui/FileUpload';

type RegisterFormValues = {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  userType: 'user' | 'syndic';
};

type FileState = {
  electricityBill: File | null;
};

const RegisterForm: React.FC = () => {
  const { 
    register, 
    handleSubmit, 
    watch,
    formState: { errors, isSubmitting } 
  } = useForm<RegisterFormValues>({
    defaultValues: {
      userType: 'user',
    }
  });
  
  const [serverError, setServerError] = useState<string | null>(null);
  const [files, setFiles] = useState<FileState>({
    electricityBill: null,
  });
  const navigate = useNavigate();
  
  const userType = watch('userType');
  const isRequiredDocuments = userType === 'syndic';
  
  const handleFileChange = (name: keyof FileState) => (file: File | null) => {
    setFiles(prev => ({ ...prev, [name]: file }));
  };
  
  const onSubmit = async (data: RegisterFormValues) => {
    try {
      setServerError(null);
      
      // Validate that password and confirmPassword match
      if (data.password !== data.confirmPassword) {
        setServerError("Les mots de passe ne correspondent pas");
        return;
      }
      
      // For syndic accounts, validate required documents
      if (data.userType === 'syndic' && !files.electricityBill) {
        setServerError("La facture d'électricité est requise pour les comptes syndic");
        return;
      }
      
      // Prepare user metadata
      const userData = {
        first_name: data.firstName,
        last_name: data.lastName,
        role: data.userType,
        // Simplified approach for demo purposes
        // In a real app, you'd upload documents to storage and save references
        documents_pending: data.userType === 'syndic' ? true : false,
        verification_status: data.userType === 'syndic' ? 'pending' : 'approved',
      };
      
      // Register user with Supabase
      const { error } = await signUp(data.email, data.password, userData);
      
      if (error) {
        throw error;
      }
      
      // For syndic accounts, show confirmation message
      if (data.userType === 'syndic') {
        navigate('/register/confirmation');
      } else {
        // Regular users can proceed to login
        navigate('/login', { 
          state: { 
            message: "Votre compte a été créé avec succès. Vous pouvez maintenant vous connecter." 
          } 
        });
      }
    } catch (error: any) {
      console.error('Registration error:', error);
      setServerError(error.message || "Une erreur est survenue lors de l'inscription. Veuillez réessayer.");
    }
  };
  
  return (
    <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Créer un compte</h2>
        <p className="mt-2 text-sm text-gray-600">
          Rejoignez SyndExpress pour gérer vos propriétés
        </p>
      </div>
      
      {serverError && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
          <div className="flex items-center">
            <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
            <p className="text-sm text-red-700">{serverError}</p>
          </div>
        </div>
      )}
      
      <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-4">
          {/* User Type Selection */}
          <div className="flex flex-col space-y-3">
            <label className="text-sm font-medium text-gray-700">Type de compte</label>
            <div className="grid grid-cols-2 gap-4">
              <label className={`
                flex flex-col items-center justify-center p-4 border rounded-lg cursor-pointer transition
                ${userType === 'user' 
                  ? 'border-primary-500 bg-primary-50 shadow-sm' 
                  : 'border-gray-300 hover:border-gray-400'}
              `}>
                <input
                  type="radio"
                  value="user"
                  className="sr-only"
                  {...register('userType')}
                />
                <User className="h-8 w-8 text-primary-600 mb-2" />
                <span className="text-sm font-medium">Utilisateur</span>
                <span className="text-xs text-gray-500 mt-1 text-center">
                  Compte standard pour les résidents
                </span>
              </label>
              
              <label className={`
                flex flex-col items-center justify-center p-4 border rounded-lg cursor-pointer transition
                ${userType === 'syndic' 
                  ? 'border-primary-500 bg-primary-50 shadow-sm' 
                  : 'border-gray-300 hover:border-gray-400'}
              `}>
                <input
                  type="radio"
                  value="syndic"
                  className="sr-only"
                  {...register('userType')}
                />
                <Building2 className="h-8 w-8 text-primary-600 mb-2" />
                <span className="text-sm font-medium">Responsable Syndic</span>
                <span className="text-xs text-gray-500 mt-1 text-center">
                  Pour les gestionnaires d'immeubles
                </span>
              </label>
            </div>
          </div>
          
          {/* Personal Information */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Input
              label="Prénom"
              {...register('firstName', { 
                required: "Le prénom est requis" 
              })}
              error={errors.firstName?.message}
              placeholder="Jean"
            />
            
            <Input
              label="Nom"
              {...register('lastName', { 
                required: "Le nom est requis" 
              })}
              error={errors.lastName?.message}
              placeholder="Dupont"
            />
          </div>
          
          {/* Account Information */}
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
              required: "Le mot de passe est requis",
              minLength: {
                value: 8,
                message: "Le mot de passe doit contenir au moins 8 caractères"
              }
            })}
            error={errors.password?.message}
            placeholder="••••••••"
          />
          
          <Input
            label="Confirmer le mot de passe"
            type="password"
            {...register('confirmPassword', { 
              required: "Veuillez confirmer votre mot de passe",
              validate: (value) => 
                value === watch('password') || "Les mots de passe ne correspondent pas"
            })}
            error={errors.confirmPassword?.message}
            placeholder="••••••••"
          />
          
          {/* Documents section for syndic managers */}
          {isRequiredDocuments && (
            <div className="pt-2">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Documents requis</h3>
              <div className="space-y-4">
                <FileUpload
                  label="Facture d'électricité (pour vérification)"
                  accept=".pdf,.jpg,.jpeg,.png"
                  helperText="Document obligatoire pour les comptes de responsable syndic"
                  onChange={handleFileChange('electricityBill')}
                  value={files.electricityBill}
                />
              </div>
              <p className="mt-4 text-xs text-gray-500">
                Note: Votre demande de compte syndic sera examinée par notre équipe. Une fois approuvée, vous recevrez un email de confirmation.
              </p>
            </div>
          )}
        </div>
        
        <div>
          <Button 
            type="submit" 
            className="w-full"
            isLoading={isSubmitting}
          >
            S'inscrire
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;