-- ============================================
-- Discount codes table setup for Supabase
-- Actual schema: id (serial), code, percentage, expiry_date, active, created_at
-- ============================================

-- Table already exists with these columns:
--   id serial PRIMARY KEY
--   code text NOT NULL UNIQUE
--   percentage integer NOT NULL
--   expiry_date date
--   active boolean DEFAULT true
--   created_at timestamptz DEFAULT now()

-- Seed data (run once):
INSERT INTO public.discount_codes (code, percentage, expiry_date, active) VALUES
('WELCOME10', 10, '2026-12-31', true),
('OTAKU25', 25, '2026-06-30', false),
('MEGA50', 50, '2026-05-31', true)
ON CONFLICT (code) DO NOTHING;
