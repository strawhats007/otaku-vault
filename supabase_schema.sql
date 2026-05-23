-- 1. Create the products table
CREATE TABLE IF NOT EXISTS public.products (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    price NUMERIC NOT NULL,
    original_price NUMERIC,
    image TEXT NOT NULL,
    second_image TEXT,
    hover_image_url TEXT,
    category TEXT,
    series TEXT,
    scale TEXT,
    material TEXT,
    size TEXT,
    stock INTEGER DEFAULT 0,
    badge TEXT,
    is_preorder BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- 3. Create policies for product read and write access
-- Allow anyone (public/anon) to read products
CREATE POLICY "Allow public read access" ON public.products
    FOR SELECT USING (true);

-- Only whitelisted admins can modify products
CREATE POLICY "Admin products write access" ON public.products
    FOR ALL TO authenticated
    USING (EXISTS (SELECT 1 FROM public.admins WHERE public.admins.id = auth.uid()));


-- 4. Seed the products table with sample anime figures
INSERT INTO public.products (name, price, original_price, image, second_image, category, series, scale, material, size, stock, badge, is_preorder)
VALUES 
('Monkey D. Luffy - Gear 5', 2899, 3624, 'images/luffy_gear5_1779161050741.png', 'https://picsum.photos/id/100/400/300', 'Figures', 'One Piece', '1/7', 'PVC', '21cm', 10, '-20%', false),
('Naruto Uzumaki - Sage Mode', 4199, NULL, 'images/naruto_sage_1779161069637.png', 'https://picsum.photos/id/200/400/300', 'Figures', 'Naruto', '1/8', 'PVC', '22cm', 5, 'NEW', false),
('Nezuko Kamado - Demon Form', 3499, NULL, 'images/nezuko_demon_1779161090026.png', 'https://picsum.photos/id/300/400/300', 'Figures', 'Demon Slayer', '1/7', 'PVC', '18cm', 8, 'HOT', false),
('Goku - Ultra Instinct', 8999, NULL, 'images/goku_ui_1779161109260.png', 'https://picsum.photos/id/400/400/300', 'Figures', 'Dragon Ball Z', '1/6', 'PVC', '30cm', 3, NULL, false),
('Gojo Satoru - Blindfolded', 4749, 5587, 'images/gojo_satoru_1779161136685.png', 'https://picsum.photos/id/500/400/300', 'Figures', 'Jujutsu Kaisen', '1/7', 'PVC/ABS', '25cm', 7, '-15%', false),
('Eren Yeager - Founding Titan', 5299, NULL, 'images/eren_yeager_1779161155761.png', 'https://picsum.photos/id/600/400/300', 'Figures', 'Attack on Titan', '1/7', 'PVC', '26cm', 4, 'NEW', false),
('Izuku Midoriya - Full Cowl', 3199, NULL, 'images/izuku_midoriya_1779161169887.png', 'https://picsum.photos/id/700/400/300', 'Figures', 'My Hero Academia', '1/8', 'PVC/ABS', '20cm', 12, NULL, false),
('Roronoa Zoro - Wado Ichimonji', 1499, 1999, 'images/zoro_wado_1779161184154.png', 'https://picsum.photos/id/800/400/300', 'Accessories', 'One Piece', '1/1', 'Wood/Metal', '104cm', 2, '-25%', false),
('Rengoku Kyojuro - Flame Hashira', 4899, NULL, 'images/rengoku_flame_1779161199200.png', 'https://picsum.photos/id/900/400/300', 'Figures', 'Demon Slayer', '1/8', 'PVC', '22cm', 0, 'PRE-ORDER', true);
