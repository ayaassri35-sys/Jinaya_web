// download.js
import fs from 'fs';
import path from 'path';
import https from 'https';

const images = {
  'hero.jpg': 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80',
  'about-chef.jpg': 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&q=80',
  'about-interior.jpg': 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=600&q=80',
  'about-food.jpg': 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80',
  'cesar.jpg': 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=600&q=80',
  'soupe.jpg': 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80',
  'bruschetta.jpg': 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=600&q=80',
  'carpaccio.jpg': 'https://images.unsplash.com/photo-1603073163308-9654c3fb70b5?w=600&q=80',
  'gambas.jpg': 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=600&q=80',
  'tajine.jpg': 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=600&q=80',
  'saumon.jpg': 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80',
  'entrecote.jpg': 'https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80',
  'risotto.jpg': 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?w=600&q=80',
  'carbonara.jpg': 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600&q=80',
  'margherita.jpg': 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80',
  'quattro-fromaggi.jpg': 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80',
  'pizza-truffe.jpg': 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80',
  'burger-gourmet.jpg': 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80',
  'chicken-burger.jpg': 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600&q=80',
  'cheesecake.jpg': 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&q=80',
  'fondant.jpg': 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80',
  'tiramisu.jpg': 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80',
  'orange-juice.jpg': 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=600&q=80',
  'smoothie.jpg': 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=600&q=80',
  'the-menthe.jpg': 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80',
  'mojito.jpg': 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&q=80',
  'espresso.jpg': 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=600&q=80',
};

const targetDir = path.resolve('public/dishes');
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
  console.log('Starting real food images download...');
  for (const [file, url] of Object.entries(images)) {
    const ok = await download(file, url);
    console.log(`${ok ? '✓' : '✗'} ${file}`);
  }
  console.log('Finished downloading all dish images.');
}

run();
