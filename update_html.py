import re

with open('index.html', 'r') as f:
    content = f.read()

# Title
content = content.replace(
    '<title>Figure Haven - Premium Anime Figures & Collectibles</title>',
    '<title>OtakuVault - Premium Anime Figures & Collectibles</title>'
)

# Header Logo
content = content.replace(
    '<span class="text-white font-heading font-bold text-2xl tracking-tight">FIGURE</span>\n                <span class="text-accent font-heading font-bold text-2xl tracking-tight">HAVEN</span>',
    '<span class="text-white font-heading font-bold text-2xl tracking-tight">OTAKU</span>\n                <span class="text-accent font-heading font-bold text-2xl tracking-tight">VAULT</span>'
)

# Footer Logo
content = content.replace(
    '<span class="text-white font-heading font-bold text-2xl">FIGURE</span>\n                        <span class="text-accent font-heading font-bold text-2xl">HAVEN</span>',
    '<span class="text-white font-heading font-bold text-2xl">OTAKU</span>\n                        <span class="text-accent font-heading font-bold text-2xl">VAULT</span>'
)

# Footer Copyright
content = content.replace(
    '© 2024 Figure Haven. All rights reserved.',
    '© 2024 OtakuVault. All rights reserved.'
)

# Featured Image
featured = '''<div class="bg-gray-200 border-2 border-dashed rounded-2xl w-full h-64 mb-4 flex items-center justify-center">
                            <span class="text-gray-400 font-medium">Featured Figure Image</span>
                        </div>'''
featured_repl = '''<div class="rounded-2xl w-full h-64 mb-4 overflow-hidden">
                            <img src="images/featured_tanjiro_1779161024681.png" alt="Tanjiro Kamado" class="w-full h-full object-cover">
                        </div>'''
content = content.replace(featured, featured_repl)

# Product Cards
products = [
    ('Monkey D. Luffy - Gear 5', 'luffy_gear5_1779161050741.png'),
    ('Naruto Uzumaki - Sage Mode', 'naruto_sage_1779161069637.png'),
    ('Nezuko Kamado - Demon Form', 'nezuko_demon_1779161090026.png'),
    ('Goku - Ultra Instinct', 'goku_ui_1779161109260.png'),
    ('Gojo Satoru - Blindfolded', 'gojo_satoru_1779161136685.png'),
    ('Eren Yeager - Founding Titan', 'eren_yeager_1779161155761.png'),
    ('Izuku Midoriya - Full Cowl', 'izuku_midoriya_1779161169887.png'),
    ('Roronoa Zoro - Wado Ichimonji', 'zoro_wado_1779161184154.png'),
    ('Rengoku Kyojuro - Flame Hashira', 'rengoku_flame_1779161199200.png')
]

for title, img in products:
    pattern = (r'<div class="bg-gray-200 border-2 border-dashed w-full h-48 flex items-center justify-center">\s*'
               r'<span class="text-gray-400 text-sm">Product Image</span>\s*'
               r'</div>(?s:.*?)' + re.escape(title))
    
    repl = f'<img src="images/{img}" alt="{title}" class="w-full h-48 object-cover">\\1{title}'
    
    # We need to capture the middle part, so let's adjust the pattern
    pattern = re.compile(
        r'<div class="bg-gray-200 border-2 border-dashed w-full h-48 flex items-center justify-center">\s*'
        r'<span class="text-gray-400 text-sm">Product Image</span>\s*'
        r'</div>(.*?<h3 class="font-bold text-primary text-base mb-1 truncate">)' + re.escape(title),
        re.DOTALL
    )
    
    def replacement(m):
        return f'<img src="images/{img}" alt="{title}" class="w-full h-48 object-cover">{m.group(1)}{title}'
        
    content = pattern.sub(replacement, content, count=1)

with open('index.html', 'w') as f:
    f.write(content)
