import React from 'react';
import { cn } from '../../lib/utils';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  isLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    variant = 'primary', 
    size = 'md', 
    className, 
    isLoading = false,
    children, 
    ...props 
  }, ref) => {
    // Base styles
    const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
    
    // Variants
    const variants = {
      primary: 'bg-primary-600 text-white hover:bg-primary-700 focus-visible:ring-primary-500',
      secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 focus-visible:ring-secondary-500',
      accent: 'bg-accent-500 text-white hover:bg-accent-600 focus-visible:ring-accent-400',
      outline: 'border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 focus-visible:ring-primary-500',
      ghost: 'hover:bg-gray-100 text-gray-700 focus-visible:ring-gray-500',
      link: 'text-primary-600 hover:text-primary-700 underline-offset-4 hover:underline focus-visible:ring-primary-500 p-0 h-auto',
    };
    
    // Sizes
    const sizes = {
      sm: 'px-3 py-1.5 text-xs',
      md: 'px-4 py-2 text-sm',
      lg: 'px-5 py-2.5 text-base',
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          isLoading && 'relative text-transparent transition-none hover:text-transparent',
          className
        )}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && (
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
            <svg 
              className="animate-spin h-5 w-5 text-current" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24"
            >
              <circle 
                className="opacity-25" 
                cx="12" 
                cy="12" 
                r="10" 
                stroke="currentColor" 
                strokeWidth="4"
              />
              <path 
                className="opacity-75" 
                fill="currentColor" 
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </div>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;