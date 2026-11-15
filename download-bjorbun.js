// scripts/download-bjorbun-assets.js
import fs from 'fs';
import path from 'path';
import https from 'https';

const assets = {
  // Hero and signature burgers
  'hero-burger.png': 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&auto=format&fit=crop&q=85',
  'cheese-lava.png': 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800&auto=format&fit=crop&q=85',
  'ultimate-stack.png': 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&auto=format&fit=crop&q=85',
  'black-bun.png': 'https://images.unsplash.com/photo-1582196016295-f8c8bd4b3e99?w=800&auto=format&fit=crop&q=85',
  'why-burger.png': 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=1000&auto=format&fit=crop&q=85',
  
  // Menu preview circular categories
  'cat-fries.png': 'https://images.unsplash.com/photo-1576107232684-1279f3908594?w=600&auto=format&fit=crop&q=85',
  'cat-burger.png': 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&auto=format&fit=crop&q=85',
  'cat-drink.png': 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&auto=format&fit=crop&q=85',

  // Customer testimonial
  'testimonial-user.jpg': 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&auto=format&fit=crop&q=85',
  'testimonial-user-2.jpg': 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=85',
  'testimonial-user-3.jpg': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=85',

  // Extra delicious menu items
  'truffle-burger.png': 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=800&auto=format&fit=crop&q=85',
  'bbq-bacon-burger.png': 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=800&auto=format&fit=crop&q=85',
  'crispy-chicken.png': 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?w=800&auto=format&fit=crop&q=85',
  'loaded-fries.png': 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=800&auto=format&fit=crop&q=85',
  'onion-rings.png': 'https://images.unsplash.com/photo-1639024471287-032f66085de8?w=800&auto=format&fit=crop&q=85',
  'milkshake.png': 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&auto=format&fit=crop&q=85'
};

const targetDir = path.resolve('public/bjorbun');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function download(filename, url) {
  return new Promise((resolve) => {
    const dest = path.join(targetDir, filename);
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, (redRes) => {
          redRes.pipe(file);
          file.on('finish', () => { file.close(); resolve(true); });
        }).on('error', () => resolve(false));
      } else {
        res.pipe(file);
        file.on('finish', () => { file.close(); resolve(true); });
      }
    }).on('error', () => resolve(false));
  });
}

async function run() {
  console.log('Downloading BJORBUN high-res assets...');
  for (const [file, url] of Object.entries(assets)) {
    const ok = await download(file, url);
    console.log(`${ok ? '✓' : '✗'} ${file}`);
  }
  console.log('Done downloading assets.');
}

run();
