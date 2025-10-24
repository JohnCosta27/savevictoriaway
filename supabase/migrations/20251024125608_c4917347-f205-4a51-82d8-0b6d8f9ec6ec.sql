-- Create petition signatures table
CREATE TABLE public.petition_signatures (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  comment TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.petition_signatures ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert signatures (public petition)
CREATE POLICY "Anyone can sign the petition"
ON public.petition_signatures
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Allow anyone to view signatures and testimonies
CREATE POLICY "Anyone can view signatures"
ON public.petition_signatures
FOR SELECT
TO anon, authenticated
USING (true);

-- Create index for faster queries by date
CREATE INDEX idx_petition_signatures_created_at 
ON public.petition_signatures(created_at DESC);

-- Enable realtime for live signature updates
ALTER PUBLICATION supabase_realtime ADD TABLE public.petition_signatures;