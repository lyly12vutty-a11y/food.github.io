from pathlib import Path
import html

names = [
    'Burger', 'Pizza Margherita', 'Fried Chicken', 'Sushi Roll',
    'Ramen', 'Pad Thai', 'Steak', 'Noodles Bowl',
    'Pasta Carbonara', 'Salad Bowl', 'Coffee', 'Bubble Tea',
    'Ice Cream', 'Chocolate Cake', 'Healthy Smoothie', 'Grilled Fish'
]
colors = [
    ('#FF6B35', '#F7931E'), ('#FF8A65', '#FFB74D'), ('#F06292', '#F48FB1'),
    ('#4DB6AC', '#81C784'), ('#64B5F6', '#4FC3F7'), ('#9575CD', '#B39DDB'),
    ('#F57C00', '#FFB74D'), ('#7CB342', '#C0CA33'), ('#FF7043', '#FFAB91'),
    ('#BA68C8', '#E1BEE7'), ('#6D4C41', '#A1887F'), ('#5C6BC0', '#7986CB'),
    ('#FF8A65', '#FFCC80'), ('#F06292', '#F8BBD0'), ('#43A047', '#66BB6A'),
    ('#1E88E5', '#42A5F5')
]

folder = Path('images')
folder.mkdir(exist_ok=True)

for i, name in enumerate(names, start=1):
    c1, c2 = colors[(i - 1) % len(colors)]
    safe_name = html.escape(name)
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
  <defs>
    <linearGradient id="grad{i}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="{c1}"/>
      <stop offset="100%" stop-color="{c2}"/>
    </linearGradient>
  </defs>
  <rect width="400" height="300" rx="32" fill="url(#grad{i})"/>
  <rect x="50" y="60" width="300" height="180" rx="24" fill="white" opacity="0.95"/>
  <circle cx="150" cy="125" r="28" fill="{c1}" opacity="0.92"/>
  <circle cx="235" cy="145" r="22" fill="{c2}" opacity="0.94"/>
  <path d="M90 190 C145 225 255 225 310 190" fill="none" stroke="{c1}" stroke-width="18" stroke-linecap="round" opacity="0.55"/>
  <path d="M95 110 Q130 70 170 110" fill="none" stroke="{c2}" stroke-width="12" stroke-linecap="round" opacity="0.8"/>
  <text x="200" y="265" text-anchor="middle" font-family="Segoe UI, sans-serif" font-size="24" fill="#212121" font-weight="700">{safe_name}</text>
</svg>'''
    (folder / f'food-{i}.svg').write_text(svg, encoding='utf-8')

print(f'Created {len(names)} local SVG images in {folder.resolve()}')
