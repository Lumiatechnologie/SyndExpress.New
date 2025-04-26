import React, { useState, useRef } from 'react';
import { Upload, X, File, CheckCircle } from 'lucide-react';
import { cn } from '../../lib/utils';
import Button from './Button';

type FileUploadProps = {
  label?: string;
  accept?: string;
  error?: string;
  helperText?: string;
  maxSize?: number; // in MB
  onChange?: (file: File | null) => void;
  value?: File | null;
  className?: string;
};

const FileUpload: React.FC<FileUploadProps> = ({
  label,
  accept = '.pdf,.jpg,.jpeg,.png',
  error,
  helperText,
  maxSize = 5, // Default max size is 5MB
  onChange,
  value,
  className,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(value || null);
  const [isDragging, setIsDragging] = useState(false);
  const [fileError, setFileError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (file: File | null) => {
    if (!file) {
      setSelectedFile(null);
      setFileError(null);
      onChange && onChange(null);
      return;
    }

    // Validate file size
    if (file.size > maxSize * 1024 * 1024) {
      setFileError(`La taille du fichier ne doit pas dépasser ${maxSize}MB`);
      return;
    }

    // Clear any previous errors
    setFileError(null);
    setSelectedFile(file);
    onChange && onChange(file);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    handleFileChange(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files?.length) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleRemoveFile = () => {
    handleFileChange(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={cn("space-y-1", className)}>
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      
      <div
        className={cn(
          "border-2 border-dashed rounded-lg p-4 transition-colors",
          isDragging ? "border-primary-500 bg-primary-50" : "border-gray-300 hover:border-gray-400",
          (error || fileError) && "border-red-500 hover:border-red-500",
          selectedFile && "border-green-500 bg-green-50"
        )}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept={accept}
          onChange={handleInputChange}
        />

        {selectedFile ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <File className="h-5 w-5 text-primary-600" />
              <span className="text-sm text-gray-600 truncate max-w-[200px]">
                {selectedFile.name}
              </span>
              <CheckCircle className="h-4 w-4 text-green-500" />
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleRemoveFile} 
              aria-label="Supprimer le fichier"
              className="text-gray-500 p-1 h-auto hover:text-red-500"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-4">
            <Upload className="h-8 w-8 text-gray-400 mb-2" />
            <p className="text-sm font-medium text-gray-700">
              Déposez votre fichier ici, ou{" "}
              <button
                type="button"
                className="text-primary-600 hover:text-primary-700 underline focus:outline-none"
                onClick={handleBrowseClick}
              >
                parcourez
              </button>
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {helperText || `Formats acceptés: ${accept}. Taille max: ${maxSize}MB`}
            </p>
          </div>
        )}
      </div>
      
      {(error || fileError) && (
        <p className="mt-1 text-sm text-red-600">
          {error || fileError}
        </p>
      )}
    </div>
  );
};

export default FileUpload;