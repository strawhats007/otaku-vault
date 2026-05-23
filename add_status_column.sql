-- Add status column if it doesn't exist
ALTER TABLE products ADD COLUMN IF NOT EXISTS status text DEFAULT 'In Stock';

-- Update initial status values based on is_preorder
UPDATE products SET status = 'Pre-order' WHERE is_preorder = true;
