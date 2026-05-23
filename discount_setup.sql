-- Create discount_codes table in public schema
CREATE TABLE IF NOT EXISTS public.discount_codes (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    code TEXT UNIQUE NOT NULL,
    percentage INTEGER NOT NULL CHECK (percentage >= 0 AND percentage <= 100),
    expiry_date DATE,
    active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.discount_codes ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public select (so checkout page can validate coupons)
CREATE POLICY "Allow public select discounts" ON public.discount_codes
    FOR SELECT USING (true);

-- Only whitelisted admins can insert, update and delete discount codes
CREATE POLICY "Admin discounts insert" ON public.discount_codes
    FOR INSERT TO authenticated WITH CHECK (EXISTS (SELECT 1 FROM public.admins WHERE public.admins.id = auth.uid()));

CREATE POLICY "Admin discounts update" ON public.discount_codes
    FOR UPDATE TO authenticated USING (EXISTS (SELECT 1 FROM public.admins WHERE public.admins.id = auth.uid()));

CREATE POLICY "Admin discounts delete" ON public.discount_codes
    FOR DELETE TO authenticated USING (EXISTS (SELECT 1 FROM public.admins WHERE public.admins.id = auth.uid()));
