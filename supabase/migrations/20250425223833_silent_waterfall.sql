/*
  # Initial Schema Setup for SyndExpress

  1. New Tables
    - `profiles`
      - `id` (uuid, primary key, references auth.users.id)
      - `first_name` (text)
      - `last_name` (text)
      - `role` (text)
      - `verification_status` (text)
      - `created_at` (timestamp with timezone)
      - `updated_at` (timestamp with timezone)
    
    - `properties`
      - `id` (uuid, primary key)
      - `name` (text)
      - `address` (text)
      - `city` (text)
      - `postal_code` (text)
      - `syndic_id` (uuid, references profiles.id)
      - `created_at` (timestamp with timezone)
      - `updated_at` (timestamp with timezone)
    
    - `units`
      - `id` (uuid, primary key)
      - `property_id` (uuid, references properties.id)
      - `unit_number` (text)
      - `floor` (text)
      - `size` (numeric)
      - `owner_id` (uuid, references profiles.id)
      - `created_at` (timestamp with timezone)
      - `updated_at` (timestamp with timezone)
    
    - `payments`
      - `id` (uuid, primary key)
      - `unit_id` (uuid, references units.id)
      - `amount` (numeric)
      - `description` (text)
      - `due_date` (date)
      - `payment_date` (date)
      - `status` (text)
      - `created_at` (timestamp with timezone)
      - `updated_at` (timestamp with timezone)
    
    - `issues`
      - `id` (uuid, primary key)
      - `property_id` (uuid, references properties.id)
      - `unit_id` (uuid, references units.id, nullable)
      - `reported_by` (uuid, references profiles.id)
      - `title` (text)
      - `description` (text)
      - `status` (text)
      - `priority` (text)
      - `created_at` (timestamp with timezone)
      - `updated_at` (timestamp with timezone)
      - `resolved_at` (timestamp with timezone, nullable)
    
    - `announcements`
      - `id` (uuid, primary key)
      - `property_id` (uuid, references properties.id)
      - `title` (text)
      - `content` (text)
      - `created_by` (uuid, references profiles.id)
      - `created_at` (timestamp with timezone)
      - `updated_at` (timestamp with timezone)
    
    - `documents`
      - `id` (uuid, primary key)
      - `property_id` (uuid, references properties.id, nullable)
      - `title` (text)
      - `description` (text)
      - `file_path` (text)
      - `file_type` (text)
      - `uploaded_by` (uuid, references profiles.id)
      - `created_at` (timestamp with timezone)
      - `updated_at` (timestamp with timezone)
  
  2. Security
    - Enable RLS on all tables
    - Add appropriate policies for each table
*/

-- Create profiles table to store user details
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('admin', 'syndic', 'user')),
  verification_status TEXT NOT NULL DEFAULT 'pending' CHECK (verification_status IN ('pending', 'approved', 'rejected')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create properties table
CREATE TABLE IF NOT EXISTS properties (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  postal_code TEXT NOT NULL,
  syndic_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create units table
CREATE TABLE IF NOT EXISTS units (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  property_id UUID REFERENCES properties(id) ON DELETE CASCADE NOT NULL,
  unit_number TEXT NOT NULL,
  floor TEXT,
  size NUMERIC,
  owner_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (property_id, unit_number)
);

-- Create payments table
CREATE TABLE IF NOT EXISTS payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  unit_id UUID REFERENCES units(id) ON DELETE CASCADE NOT NULL,
  amount NUMERIC NOT NULL CHECK (amount > 0),
  description TEXT NOT NULL,
  due_date DATE NOT NULL,
  payment_date DATE,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'paid', 'overdue', 'canceled')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create issues table
CREATE TABLE IF NOT EXISTS issues (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  property_id UUID REFERENCES properties(id) ON DELETE CASCADE NOT NULL,
  unit_id UUID REFERENCES units(id) ON DELETE SET NULL,
  reported_by UUID REFERENCES profiles(id) ON DELETE SET NULL NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'in_progress', 'resolved', 'closed')),
  priority TEXT NOT NULL DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'urgent')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  resolved_at TIMESTAMPTZ
);

-- Create announcements table
CREATE TABLE IF NOT EXISTS announcements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  property_id UUID REFERENCES properties(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  created_by UUID REFERENCES profiles(id) ON DELETE SET NULL NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create documents table
CREATE TABLE IF NOT EXISTS documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  property_id UUID REFERENCES properties(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  file_path TEXT NOT NULL,
  file_type TEXT NOT NULL,
  uploaded_by UUID REFERENCES profiles(id) ON DELETE SET NULL NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create a view for recent activities
CREATE OR REPLACE VIEW recent_activities AS
SELECT 
  'payment' as type,
  payments.id,
  payments.created_at,
  payments.updated_at,
  payments.status,
  payments.unit_id,
  units.property_id,
  payments.description as title,
  CASE
    WHEN payments.status = 'paid' THEN 'Paiement effectué'
    WHEN payments.status = 'pending' THEN 'Paiement en attente'
    WHEN payments.status = 'overdue' THEN 'Paiement en retard'
    ELSE 'Paiement'
  END as description
FROM payments
JOIN units ON payments.unit_id = units.id

UNION ALL

SELECT 
  'issue' as type,
  issues.id,
  issues.created_at,
  issues.updated_at,
  issues.status,
  issues.unit_id,
  issues.property_id,
  issues.title,
  CASE
    WHEN issues.status = 'open' THEN 'Problème signalé'
    WHEN issues.status = 'in_progress' THEN 'Problème en cours de traitement'
    WHEN issues.status = 'resolved' THEN 'Problème résolu'
    WHEN issues.status = 'closed' THEN 'Problème clôturé'
    ELSE 'Problème'
  END as description
FROM issues

UNION ALL

SELECT 
  'announcement' as type,
  announcements.id,
  announcements.created_at,
  announcements.updated_at,
  'active' as status,
  NULL as unit_id,
  announcements.property_id,
  announcements.title,
  'Annonce publiée' as description
FROM announcements

UNION ALL

SELECT 
  'document' as type,
  documents.id,
  documents.created_at,
  documents.updated_at,
  'active' as status,
  NULL as unit_id,
  documents.property_id,
  documents.title,
  'Document ajouté' as description
FROM documents;

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE units ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE issues ENABLE ROW LEVEL SECURITY;
ALTER TABLE announcements ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;

-- Create policies for profiles
CREATE POLICY "Public profiles are viewable by everyone" ON profiles
  FOR SELECT USING (true);

CREATE POLICY "Users can update their own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

-- Create policies for properties
CREATE POLICY "Properties are viewable by authenticated users" ON properties
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Syndics can insert properties" ON properties
  FOR INSERT WITH CHECK (
    auth.uid() IN (
      SELECT id FROM profiles 
      WHERE role = 'syndic' 
      AND verification_status = 'approved'
    )
  );

CREATE POLICY "Syndics can update their properties" ON properties
  FOR UPDATE USING (
    auth.uid() = syndic_id AND
    auth.uid() IN (
      SELECT id FROM profiles 
      WHERE role = 'syndic' 
      AND verification_status = 'approved'
    )
  );

CREATE POLICY "Syndics can delete their properties" ON properties
  FOR DELETE USING (
    auth.uid() = syndic_id AND
    auth.uid() IN (
      SELECT id FROM profiles 
      WHERE role = 'syndic' 
      AND verification_status = 'approved'
    )
  );

-- Create policies for units
CREATE POLICY "Units are viewable by authenticated users" ON units
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Syndics can insert units for their properties" ON units
  FOR INSERT WITH CHECK (
    auth.uid() IN (
      SELECT syndic_id FROM properties 
      WHERE properties.id = property_id
    ) AND
    auth.uid() IN (
      SELECT id FROM profiles 
      WHERE role = 'syndic' 
      AND verification_status = 'approved'
    )
  );

CREATE POLICY "Syndics can update units for their properties" ON units
  FOR UPDATE USING (
    auth.uid() IN (
      SELECT syndic_id FROM properties 
      WHERE properties.id = property_id
    ) AND
    auth.uid() IN (
      SELECT id FROM profiles 
      WHERE role = 'syndic' 
      AND verification_status = 'approved'
    )
  );

CREATE POLICY "Syndics can delete units for their properties" ON units
  FOR DELETE USING (
    auth.uid() IN (
      SELECT syndic_id FROM properties 
      WHERE properties.id = property_id
    ) AND
    auth.uid() IN (
      SELECT id FROM profiles 
      WHERE role = 'syndic' 
      AND verification_status = 'approved'
    )
  );

-- Create policies for payments
CREATE POLICY "Payments are viewable by authenticated users" ON payments
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Syndics can insert payments" ON payments
  FOR INSERT WITH CHECK (
    auth.uid() IN (
      SELECT properties.syndic_id
      FROM units
      JOIN properties ON units.property_id = properties.id
      WHERE units.id = unit_id
    ) AND
    auth.uid() IN (
      SELECT id FROM profiles 
      WHERE role = 'syndic' 
      AND verification_status = 'approved'
    )
  );

CREATE POLICY "Syndics can update payments" ON payments
  FOR UPDATE USING (
    auth.uid() IN (
      SELECT properties.syndic_id
      FROM units
      JOIN properties ON units.property_id = properties.id
      WHERE units.id = unit_id
    ) AND
    auth.uid() IN (
      SELECT id FROM profiles 
      WHERE role = 'syndic' 
      AND verification_status = 'approved'
    )
  );

CREATE POLICY "Syndics can delete payments" ON payments
  FOR DELETE USING (
    auth.uid() IN (
      SELECT properties.syndic_id
      FROM units
      JOIN properties ON units.property_id = properties.id
      WHERE units.id = unit_id
    ) AND
    auth.uid() IN (
      SELECT id FROM profiles 
      WHERE role = 'syndic' 
      AND verification_status = 'approved'
    )
  );

-- Create policies for issues
CREATE POLICY "Issues are viewable by authenticated users" ON issues
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Users can insert issues" ON issues
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Users can update their own issues" ON issues
  FOR UPDATE USING (
    auth.uid() = reported_by OR
    auth.uid() IN (
      SELECT syndic_id FROM properties 
      WHERE properties.id = property_id
    )
  );

-- Create policies for announcements
CREATE POLICY "Announcements are viewable by authenticated users" ON announcements
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Syndics can insert announcements for their properties" ON announcements
  FOR INSERT WITH CHECK (
    auth.uid() IN (
      SELECT syndic_id FROM properties 
      WHERE properties.id = property_id
    ) AND
    auth.uid() IN (
      SELECT id FROM profiles 
      WHERE role = 'syndic' 
      AND verification_status = 'approved'
    )
  );

CREATE POLICY "Syndics can update their announcements" ON announcements
  FOR UPDATE USING (
    auth.uid() = created_by AND
    auth.uid() IN (
      SELECT id FROM profiles 
      WHERE role = 'syndic' 
      AND verification_status = 'approved'
    )
  );

CREATE POLICY "Syndics can delete their announcements" ON announcements
  FOR DELETE USING (
    auth.uid() = created_by AND
    auth.uid() IN (
      SELECT id FROM profiles 
      WHERE role = 'syndic' 
      AND verification_status = 'approved'
    )
  );

-- Create policies for documents
CREATE POLICY "Documents are viewable by authenticated users" ON documents
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Syndics can insert documents" ON documents
  FOR INSERT WITH CHECK (
    (property_id IS NULL) OR
    (
      auth.uid() IN (
        SELECT syndic_id FROM properties 
        WHERE properties.id = property_id
      ) AND
      auth.uid() IN (
        SELECT id FROM profiles 
        WHERE role = 'syndic' 
        AND verification_status = 'approved'
      )
    )
  );

CREATE POLICY "Syndics can update their documents" ON documents
  FOR UPDATE USING (
    auth.uid() = uploaded_by AND
    auth.uid() IN (
      SELECT id FROM profiles 
      WHERE role = 'syndic' 
      AND verification_status = 'approved'
    )
  );

CREATE POLICY "Syndics can delete their documents" ON documents
  FOR DELETE USING (
    auth.uid() = uploaded_by AND
    auth.uid() IN (
      SELECT id FROM profiles 
      WHERE role = 'syndic' 
      AND verification_status = 'approved'
    )
  );

-- Create a function to handle user registration
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO profiles (id, first_name, last_name, role, verification_status)
  VALUES (
    new.id,
    new.raw_user_meta_data->>'first_name',
    new.raw_user_meta_data->>'last_name',
    COALESCE(new.raw_user_meta_data->>'role', 'user'),
    CASE 
      WHEN new.raw_user_meta_data->>'role' = 'syndic' THEN 'pending'
      ELSE 'approved'
    END
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create a trigger to call the function when a new user is created
CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- Create a function to update the updated_at column
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers to automatically update the updated_at column
CREATE TRIGGER update_profiles_modtime
BEFORE UPDATE ON profiles
FOR EACH ROW EXECUTE FUNCTION update_modified_column();

CREATE TRIGGER update_properties_modtime
BEFORE UPDATE ON properties
FOR EACH ROW EXECUTE FUNCTION update_modified_column();

CREATE TRIGGER update_units_modtime
BEFORE UPDATE ON units
FOR EACH ROW EXECUTE FUNCTION update_modified_column();

CREATE TRIGGER update_payments_modtime
BEFORE UPDATE ON payments
FOR EACH ROW EXECUTE FUNCTION update_modified_column();

CREATE TRIGGER update_issues_modtime
BEFORE UPDATE ON issues
FOR EACH ROW EXECUTE FUNCTION update_modified_column();

CREATE TRIGGER update_announcements_modtime
BEFORE UPDATE ON announcements
FOR EACH ROW EXECUTE FUNCTION update_modified_column();

CREATE TRIGGER update_documents_modtime
BEFORE UPDATE ON documents
FOR EACH ROW EXECUTE FUNCTION update_modified_column();