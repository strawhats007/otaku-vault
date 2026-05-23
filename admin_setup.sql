-- 1. Create the admins table in public schema
CREATE TABLE IF NOT EXISTS public.admins (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable RLS on admins table
ALTER TABLE public.admins ENABLE ROW LEVEL SECURITY;

-- Allow authenticated users to read admins (required for dashboard validation checks)
CREATE POLICY "Allow authenticated read admins" ON public.admins
    FOR SELECT TO authenticated USING (true);

-- 2. Re-enable RLS on products and orders
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- 3. Drop legacy policies if they exist
DROP POLICY IF EXISTS "Allow public read access" ON public.products;
DROP POLICY IF EXISTS "Allow admin insert" ON public.products;
DROP POLICY IF EXISTS "Allow admin update" ON public.products;
DROP POLICY IF EXISTS "Allow admin delete" ON public.products;
DROP POLICY IF EXISTS "Admin products access" ON public.products;
DROP POLICY IF EXISTS "Allow insert" ON public.orders;
DROP POLICY IF EXISTS "Allow read" ON public.orders;
DROP POLICY IF EXISTS "Admin orders access" ON public.orders;

-- 4. Create secure RLS policies for Products:
-- Anyone can view products (needed for storefront home page)
CREATE POLICY "Allow public read products" ON public.products
    FOR SELECT USING (true);

-- Only whitelisted admins can modify products
CREATE POLICY "Admin products write access" ON public.products
    FOR ALL TO authenticated
    USING (EXISTS (SELECT 1 FROM public.admins WHERE public.admins.id = auth.uid()));

-- 5. Create secure RLS policies for Orders:
-- Anyone can create an order (checkout page)
CREATE POLICY "Allow public insert orders" ON public.orders
    FOR INSERT WITH CHECK (true);

-- Only whitelisted admins can read and update orders
CREATE POLICY "Admin orders access" ON public.orders
    FOR ALL TO authenticated
    USING (EXISTS (SELECT 1 FROM public.admins WHERE public.admins.id = auth.uid()));
