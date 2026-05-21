-- SQL to create the orders table in public schema and set up RLS policies
CREATE TABLE IF NOT EXISTS public.orders (
    id SERIAL PRIMARY KEY,
    order_id TEXT,
    customer_name TEXT,
    phone TEXT,
    email TEXT,
    address TEXT,
    city TEXT,
    products JSONB,
    subtotal NUMERIC,
    delivery_fee NUMERIC,
    total NUMERIC,
    payment_method TEXT,
    status TEXT DEFAULT 'Processing',
    created_at TIMESTAMP DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Create policies to allow anyone to insert orders and read orders
CREATE POLICY "Allow insert" ON public.orders FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow read" ON public.orders FOR SELECT USING (true);
