-- Migration: Add discount_expiry column to public.products table
ALTER TABLE public.products 
ADD COLUMN IF NOT EXISTS discount_expiry DATE;
