import React from 'react';
import { cn } from '../../lib/utils';

type InputProps = {
  label?: string;
  error?: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    const id = props.id || props.name;
    
    return (
      <div className="space-y-1">
        {label && (
          <label 
            htmlFor={id} 
            className="block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={cn(
            "block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm placeholder-gray-400 focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500",
            className
          )}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${id}-error` : undefined}
          {...props}
        />
        {error && (
          <p id={`${id}-error`} className="mt-1 text-sm text-red-600">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;