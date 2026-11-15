// src/data/bjorbunData.js

export const SIGNATURE_BURGERS = [
  {
    id: 'cheese-lava',
    badgeNumber: '01',
    badgeLabel: 'Most Popular',
    name: 'CHEESE LAVA BEAST',
    shortDesc: 'Double smashed beef patty drenched in molten cheddar cheese lava, grilled onions & beast sauce.',
    price: 14.99,
    image: '/bjorbun/cheese-lava.png',
    calories: '890 kcal',
    rating: 4.9,
    reviewsCount: 320,
    tags: ['Best Seller', 'Extra Cheesy', 'Chef Special']
  },
  {
    id: 'ultimate-stack',
    badgeNumber: '02',
    badgeLabel: 'Chef Choice',
    name: 'ULTIMATE DRIP STACK',
    shortDesc: 'Towering double smash stack dripping with signature smoke sauce, crispy bacon & american melt.',
    price: 16.99,
    image: '/bjorbun/ultimate-stack.png',
    calories: '960 kcal',
    rating: 5.0,
    reviewsCount: 284,
    tags: ['Juicy', 'Smoked Bacon', 'Double Patty']
  },
  {
    id: 'smoky-black',
    badgeNumber: '03',
    badgeLabel: 'Unique Flavor',
    name: 'SMOKY BLACK BUN',
    shortDesc: 'Artisan activated charcoal bun, 100% black angus beef, smoked bacon, aged cheddar & tangy pickles.',
    price: 15.99,
    image: '/bjorbun/black-bun.png',
    calories: '820 kcal',
    rating: 4.8,
    reviewsCount: 195,
    tags: ['Charcoal Bun', 'Angus Beef', 'Smoky']
  }
];

export const CATEGORIES = [
  {
    id: 'fries',
    name: 'FRIES & SIDES',
    label: 'FRIES & SIDES',
    image: '/bjorbun/cat-fries.png',
    description: 'Crispy hand-cut fries, loaded cheesy bites & crunchy golden snacks.'
  },
  {
    id: 'burger',
    name: 'BURGER',
    label: 'BURGER',
    image: '/bjorbun/classic-burger.png',
    description: '100% smashed beef, artisan brioche buns, melted cheeses & signature sauces.'
  },
  {
    id: 'drink',
    name: 'DRINK',
    label: 'DRINK',
    image: '/bjorbun/drink-splash.png',
    description: 'Refreshing craft sodas, thick gourmet milkshakes & fresh iced teas.'
  }
];

export const ALL_MENU_ITEMS = [
  // --- BURGERS ---
  {
    id: 'b1',
    category: 'burger',
    name: 'Cheese Lava Beast',
    price: 14.99,
    image: '/bjorbun/cheese-lava.png',
    description: 'Double beef patty smothered in rich creamy cheddar lava, grilled onions on toasted brioche.',
    isSignature: true,
    tag: 'Bestseller'
  },
  {
    id: 'b2',
    category: 'burger',
    name: 'Ultimate Drip Stack',
    price: 16.99,
    image: '/bjorbun/ultimate-stack.png',
    description: 'Double beef patty dripping in house secret BBQ sauce, crispy maple bacon, double american melt.',
    isSignature: true,
    tag: 'Chef Choice'
  },
  {
    id: 'b3',
    category: 'burger',
    name: 'Smoky Black Bun',
    price: 15.99,
    image: '/bjorbun/black-bun.png',
    description: 'Artisan black bun, angus beef patty, crispy bacon strips, roasted garlic aioli, house pickles.',
    isSignature: true,
    tag: 'Unique Bun'
  },
  {
    id: 'b4',
    category: 'burger',
    name: 'Truffle Mushroom Melt',
    price: 16.49,
    image: '/bjorbun/truffle-burger.png',
    description: 'Sautéed wild forest mushrooms, black truffle aioli, melted swiss emmental cheese on buttered bun.',
    tag: 'Gourmet'
  },
  {
    id: 'b5',
    category: 'burger',
    name: 'BBQ Bacon Overload',
    price: 15.49,
    image: '/bjorbun/bbq-bacon-burger.png',
    description: 'Double applewood smoked bacon, crispy onion strings, bold BBQ glaze, monterey jack cheese.',
    tag: 'Smoky'
  },
  {
    id: 'b6',
    category: 'burger',
    name: 'Crispy Buttermilk Chicken',
    price: 13.99,
    image: '/bjorbun/crispy-chicken.png',
    description: '24hr spiced buttermilk marinated crunchy chicken breast, tangy red cabbage slaw, hot honey drizzle.',
    tag: 'Crispy'
  },

  // --- FRIES & SIDES ---
  {
    id: 's1',
    category: 'fries',
    name: 'Golden Crinkle Cut Fries',
    price: 4.99,
    image: '/bjorbun/cat-fries.png',
    description: 'Golden crispy crinkle-cut Idaho potatoes, lightly dusted with sea salt and rosemary.',
    tag: 'Classic'
  },
  {
    id: 's2',
    category: 'fries',
    name: 'Cheese Lava Loaded Fries',
    price: 7.99,
    image: '/bjorbun/loaded-fries.png',
    description: 'Hot crunchy fries smothered in molten cheddar lava, crispy chopped bacon and pickled jalapeños.',
    tag: 'Must Try'
  },
  {
    id: 's3',
    category: 'fries',
    name: 'Beer-Battered Onion Rings',
    price: 6.49,
    image: '/bjorbun/onion-rings.png',
    description: 'Thick sliced sweet vidalia onions tossed in golden craft beer batter with smoky ranch dip.',
    tag: 'Crunchy'
  },
  {
    id: 's4',
    category: 'fries',
    name: 'Sweet Potato Waffle Fries',
    price: 5.49,
    image: '/bjorbun/sweet-potato-fries.png',
    description: 'Crispy waffle cut sweet potatoes served hot with maple spiced dipping sauce.',
    tag: 'Sweet & Salty'
  },
  {
    id: 's5',
    category: 'fries',
    name: 'Crispy Mozzarella Sticks',
    price: 6.99,
    image: '/bjorbun/mozzarella-sticks.png',
    description: 'Stretchy herb-breaded mozzarella sticks fried golden brown with house tomato marinara.',
    tag: 'Cheesy'
  },
  {
    id: 's6',
    category: 'fries',
    name: 'Truffle Parmesan Fries',
    price: 6.99,
    image: '/bjorbun/loaded-fries.png',
    description: 'Tossed in white truffle oil, freshly grated 24-month Parmigiano Reggiano and fresh parsley.',
    tag: 'Premium'
  },

  // --- DRINKS ---
  {
    id: 'd1',
    category: 'drink',
    name: 'Signature Craft Cola',
    price: 3.99,
    image: '/bjorbun/drink-splash.png',
    description: 'Artisanal cane sugar cola infused with real Madagascar vanilla and served over crushed crystal ice.',
    tag: 'Ice Cold'
  },
  {
    id: 'd2',
    category: 'drink',
    name: 'Lotus Salted Caramel Shake',
    price: 6.99,
    image: '/bjorbun/milkshake.png',
    description: 'Hand-churned rich vanilla gelato blended with Biscoff lotus biscuits and whipped cream.',
    tag: 'Thick & Sweet'
  },
  {
    id: 'd3',
    category: 'drink',
    name: 'Sparkling Mint Limeade',
    price: 4.99,
    image: '/dishes/mojito.jpg',
    description: 'Freshly squeezed Key limes, muddled garden mint, raw organic agave nectar and sparkling water.',
    tag: 'Refreshing'
  },
  {
    id: 'd4',
    category: 'drink',
    name: 'Iced Peach Hibiscus Tea',
    price: 4.49,
    image: '/bjorbun/iced-tea.png',
    description: 'Slow-brewed organic crimson hibiscus flowers sweetened with Georgia white peach nectar.',
    tag: 'Fruity'
  },
  {
    id: 'd5',
    category: 'drink',
    name: 'Cold Brew Vanilla Cream',
    price: 5.29,
    image: '/bjorbun/cold-brew.png',
    description: 'Single-origin 18-hour cold brew coffee topped with a velvety layer of sweet vanilla cold foam.',
    tag: 'Energy'
  },
  {
    id: 'd6',
    category: 'drink',
    name: 'Craft Strawberry Lemonade',
    price: 4.49,
    image: '/dishes/smoothie.jpg',
    description: 'Crushed sweet summer strawberries with cloudy lemonade and a touch of fresh basil.',
    tag: 'Sweet'
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Dakatama Aditya Yapao',
    role: 'Food Blogger & Burger Enthusiast',
    avatar: '/bjorbun/testimonial-user.jpg',
    quote: '"Hands down the best burger in town! The patties are super juicy and the cheese melts perfectly. I\'m officially addicted"',
    rating: 5
  },
  {
    id: 2,
    name: 'Samantha Rivera',
    role: 'Local Guide & Culinary Writer',
    avatar: '/bjorbun/testimonial-user-2.jpg',
    quote: '"The Smoky Black Bun burger is an absolute masterpiece. The subtle charcoal smokiness paired with aged cheddar is unmatched!"',
    rating: 5
  },
  {
    id: 3,
    name: 'Marcus Sterling',
    role: 'Regular Patron',
    avatar: '/bjorbun/testimonial-user-3.jpg',
    quote: '"Cheese Lava Beast exceeded all expectations. Hot, loaded, perfectly spiced and the staff is genuinely friendly and fast!"',
    rating: 5
  }
];

export const WHY_FEATURES = [
  {
    id: 1,
    title: 'FRESH AND PREMIUM',
    desc: 'We carefully select fresh, high-quality ingredients every day — from premium beef patties and crisp vegetables to soft freshly baked buns.',
    icon: 'Leaf'
  },
  {
    id: 2,
    title: 'PERFECTLY GRILLED EVERY TIME',
    desc: 'Each burger is grilled to perfection using special techniques to lock in juiciness and create a delicious smoky aroma.',
    icon: 'Flame'
  },
  {
    id: 3,
    title: 'FAST & FRIENDLY SERVICE',
    desc: 'Enjoy quick preparation without compromising quality, served by a team that cares about your experience.',
    icon: 'Zap'
  }
];
