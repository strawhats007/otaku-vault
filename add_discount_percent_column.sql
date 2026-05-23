-- Migration: Add discount_percent column to public.products table
ALTER TABLE public.products 
ADD COLUMN IF NOT EXISTS discount_percent INTEGER DEFAULT 0 CHECK (discount_percent >= 0 AND discount_percent <= 100);
