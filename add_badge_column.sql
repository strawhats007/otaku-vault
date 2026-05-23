-- Migration script to add the badge column if it does not already exist
-- Run this in your Supabase SQL Editor:

ALTER TABLE products ADD COLUMN IF NOT EXISTS badge text DEFAULT 'None';
