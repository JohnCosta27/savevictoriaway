-- Fix the security definer view by enabling security invoker mode
-- This ensures the view respects RLS policies of the querying user
ALTER VIEW public.petition_signatures_public SET (security_invoker = on);