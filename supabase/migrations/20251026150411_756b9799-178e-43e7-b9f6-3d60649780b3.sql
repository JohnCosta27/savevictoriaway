-- Create a public view that excludes email addresses
CREATE OR REPLACE VIEW public.petition_signatures_public AS
SELECT 
  id,
  created_at,
  name,
  comment
FROM public.petition_signatures;

-- Drop existing permissive policies
DROP POLICY IF EXISTS "Anyone can view signatures" ON public.petition_signatures;
DROP POLICY IF EXISTS "Anyone can sign the petition" ON public.petition_signatures;

-- Restrict direct table access - only authenticated users can view full data
CREATE POLICY "Only authenticated users can view all signature data"
ON public.petition_signatures
FOR SELECT
TO authenticated
USING (true);

-- Allow anyone to insert (it's a petition, people need to sign it)
CREATE POLICY "Anyone can sign the petition"
ON public.petition_signatures
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Grant SELECT on the public view to everyone (including anonymous)
GRANT SELECT ON public.petition_signatures_public TO anon, authenticated;