-- Revert to public access policies
DROP POLICY IF EXISTS "Only authenticated users can view all signature data" ON public.petition_signatures;
DROP POLICY IF EXISTS "Anyone can sign the petition" ON public.petition_signatures;

-- Restore original public access
CREATE POLICY "Anyone can view signatures"
ON public.petition_signatures
FOR SELECT
TO anon, authenticated
USING (true);

CREATE POLICY "Anyone can sign the petition"
ON public.petition_signatures
FOR INSERT
TO anon, authenticated
WITH CHECK (true);