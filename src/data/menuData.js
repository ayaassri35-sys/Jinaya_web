// src/data/menuData.js
// High definition real food photographs stored locally in /dishes for 100% reliable and instantaneous offline loading

export const categories = [
  { id: 'tout',       label: { fr: 'Tout', ar: 'الكل' },            emoji: '🍽️' },
  { id: 'entrees',    label: { fr: 'Entrées', ar: 'مقبلات' },        emoji: '🥗' },
  { id: 'plats',      label: { fr: 'Plats principaux', ar: 'الأطباق الرئيسية' }, emoji: '🍛' },
  { id: 'pizzas',     label: { fr: 'Pizzas', ar: 'بيتزا' },          emoji: '🍕' },
  { id: 'burgers',    label: { fr: 'Burgers', ar: 'برغر' },         emoji: '🍔' },
  { id: 'desserts',   label: { fr: 'Desserts', ar: 'حلويات' },       emoji: '🍰' },
  { id: 'boissons',   label: { fr: 'Boissons', ar: 'مشروبات' },      emoji: '🥤' },
];

export const menuItems = [
  // ─── Entrées ───────────────────────────────────────────────
  {
    id: 1,
    name: { fr: 'Salade César Tradition', ar: 'سلطة سيزر التقليدية' },
    description: {
      fr: 'Romaine croquante, copeaux de parmesan Reggiano, croûtons dorés à l\'ail et sauce César crémeuse.',
      ar: 'خس روماني مقرمش، شرائح جبن بارميزان ريجيانو، خبز محمص بالثوم وصلصة سيزر كريمية محضرة منزلياً.'
    },
    longDescription: {
      fr: 'Un grand classique préparé selon la méthode traditionnelle : cœur de romaine fraîche lavée à l\'eau glacée, émulsion d\'anchois et parmesan affiné 24 mois, croustillants au levain.',
      ar: 'طبق كلاسيكي راقٍ يحضر بأفضل المكونات: قلوب الخس الروماني الطازج مع تتبيلة الأنشوجة الكريمية والبارميزان المعتق 24 شهراً ومقرمشات الخبز الطبيعي.'
    },
    price: 55,
    category: 'entrees',
    badge: { fr: 'Populaire', ar: 'الأكثر طلباً' },
    calories: '320 kcal',
    prepTime: '10 min',
    image: '/dishes/cesar.jpg',
  },
  {
    id: 2,
    name: { fr: 'Soupe Veloutée du Jour', ar: 'شوربة اليوم المخملية' },
    description: {
      fr: 'Préparée quotidiennement avec les légumes du marché et une touche de crème fraîche.',
      ar: 'محضرة يومياً من خضار السوق الطازجة مع لمسة كريمية ناعمة وأعشاب عطرية.'
    },
    longDescription: {
      fr: 'Notre chef concocte chaque matin une soupe veloutée de saison, accompagnée d\'huile d\'olive extra vierge et de graines torréfiées.',
      ar: 'شوربة يومية ساخنة ومغذية يبتكرها الشيف صباح كل يوم من خضار الموسم الطازجة، تقدم مع قطرات زيت الزيتون البكر ومقرمشات الحبوب.'
    },
    price: 35,
    category: 'entrees',
    badge: null,
    calories: '180 kcal',
    prepTime: '8 min',
    image: '/dishes/soupe.jpg',
  },
  {
    id: 3,
    name: { fr: 'Bruschetta Caprese', ar: 'بروشيتا كابريزي الإيطالية' },
    description: {
      fr: 'Pain de campagne frotté à l\'ail, tomates cerises marinées, basilic frais et mozzarella di bufala.',
      ar: 'خبز ريفي محمص بزيت الزيتون والثوم، طماطم كرزية متبلة، ريحان طازج وموزاريلا بوفالا.'
    },
    longDescription: {
      fr: 'Tranches croustillantes de pain artisanal au levain garnies de concassé de tomates de saison, réduction balsamique de Modène et basilic génois.',
      ar: 'شرائح خبز الحطب المقرمشة مدهونة بزيت الزيتون البكر والثوم مع قطع الطماطم الكرزية الحلوة، صلصة البلسميك المعتقة وجبن الموزاريلا الفاخر.'
    },
    price: 45,
    category: 'entrees',
    badge: { fr: 'Végétarien', ar: 'نباتي' },
    calories: '260 kcal',
    prepTime: '12 min',
    image: '/dishes/bruschetta.jpg',
  },
  {
    id: 4,
    name: { fr: 'Carpaccio de Bœuf Black Angus', ar: 'كارباتشيو لحم أنجوس الفاخر' },
    description: {
      fr: 'Fines tranches de filet de bœuf, câpres de Pantelleria, roquette sauvage et parmesan.',
      ar: 'شرائح رقيقة جداً من فيليه اللحم الفاخر مع نبات الكبر، الجرجير البري وشرائح البارميزان.'
    },
    longDescription: {
      fr: 'Tranches très fines de filet de bœuf Black Angus mariné au citron et huile d\'olive toscane, servies avec roquette poivrée et copeaux de parmesan.',
      ar: 'لحم أنجوس أسود عالي الجودة مقطع بعناية فائقة ومتبل بزيت الزيتون التوسكاني والليمون، مع لمسة الجرجير الطازج.'
    },
    price: 85,
    category: 'entrees',
    badge: { fr: 'Nouveau', ar: 'جديد' },
    calories: '290 kcal',
    prepTime: '10 min',
    image: '/dishes/carpaccio.jpg',
  },
  {
    id: 5,
    name: { fr: 'Gambas Sautées à l\'Ail', ar: 'جمبري ملكي مشوح بالثوم والليمون' },
    description: {
      fr: 'Gambas fraîches sautées à la minute, beurre persillé, ail doux et piment doux d\'Espelette.',
      ar: 'جمبري طازج مشوح على النار مع الزبدة، البقدونس، الثوم ولمسة من الليمون وفلفل إسبليت.'
    },
    longDescription: {
      fr: 'Gambas sauvages de l\'Atlantique saisies vivement à l\'huile d\'olive et beurre clarifié, déglacées au jus de citron frais avec herbes du jardin.',
      ar: 'جمبري أطلسي بري طازج يقلى سريعاً في الزبدة المتبلة بالثوم والبقدونس والليمون، نكهة بحرية غنية لا تقاوم.'
    },
    price: 110,
    category: 'entrees',
    badge: { fr: 'Populaire', ar: 'الأكثر طلباً' },
    calories: '340 kcal',
    prepTime: '15 min',
    image: '/dishes/gambas.jpg',
  },

  // ─── Plats principaux ──────────────────────────────────────
  {
    id: 6,
    name: { fr: 'Tajine de Poulet aux Citrons Confits', ar: 'طاجين دجاج بلدي بالليمون المصير والزيتون' },
    description: {
      fr: 'Poulet fermier tendre mijoté lentement au safran de Taliouine, olives violettes et citrons confits.',
      ar: 'دجاج بلدي طري مطهو ببطء على الفحم مع زعفران تالوين، زيتون متبل وليمون مصير معتق.'
    },
    longDescription: {
      fr: 'Recette signature marocaine cuite dans un plat traditionnel en terre cuite. La chair est ultra-fondante et la sauce onctueuse parfumée au gingembre et safran.',
      ar: 'وصفة مغربية أصيلة تُطهى في طاجين فخاري أصيل حتى ينضج اللحم ويصبح طرياً جداً مع مرق غني بالزنجبيل والزعفران الحر والكزبرة.'
    },
    price: 85,
    category: 'plats',
    badge: { fr: 'Populaire', ar: 'الأكثر طلباً' },
    calories: '580 kcal',
    prepTime: '25 min',
    image: '/dishes/tajine.jpg',
  },
  {
    id: 7,
    name: { fr: 'Pavé de Saumon Norvégien Grillé', ar: 'فيليه السلمون النرويجي المشوي' },
    description: {
      fr: 'Saumon frais cuit à l\'unilatérale, écrasé de pommes de terre aux herbes et coulis citron-aneth.',
      ar: 'قطعة سلمون نرويجي طازج مشوية بعناية مع هريس البطاطس بالأعشاب وصلصة الليمون والشبت.'
    },
    longDescription: {
      fr: 'Cuit avec une peau dorée croustillante et un cœur fondant et rosé. Accompagné de légumes glacés et d\'une sauce soyeuse au beurre blanc.',
      ar: 'سلمون طازج يتميز بطبقة خارجية مقرمشة ولب طري ناعم، يقدم مع خضار سوتيه وصلصة الزبدة والليمون الفاخرة.'
    },
    price: 120,
    category: 'plats',
    badge: null,
    calories: '510 kcal',
    prepTime: '20 min',
    image: '/dishes/saumon.jpg',
  },
  {
    id: 8,
    name: { fr: 'Entrecôte Grillée Black Angus (300g)', ar: 'ستيك أنتريكوت أنجوس مشوي (300 غرام)' },
    description: {
      fr: 'Viande persillée de premier choix, sauce onctueuse au poivre vert de Madagascar et frites dorées.',
      ar: 'لحم أنجوس رخامي فاخر مشوي على اللهب، يقدم مع صوص الفلفل الأخضر الكريمي والبطاطس المقرمشة.'
    },
    longDescription: {
      fr: 'Une pièce de viande d\'exception maturée avec soin. Saisie à haute température pour conserver tout son jus et sa tendreté incomparable.',
      ar: 'قطعة ستيك معتقة ومشوية حسب رغبتكم بدرجة النضج المثالية مع بطاطس مقلية ذهبية وصلصة الفلفل الأسود العطرية.'
    },
    price: 150,
    category: 'plats',
    badge: { fr: 'Populaire', ar: 'الأكثر طلباً' },
    calories: '720 kcal',
    prepTime: '20 min',
    image: '/dishes/entrecote.jpg',
  },
  {
    id: 9,
    name: { fr: 'Risotto Crémeux aux Morilles & Truffe', ar: 'ريزوتو إيطالي كريمي بالفطر والكمأة' },
    description: {
      fr: 'Riz Carnaroli lié au parmesan Reggiano 24 mois, champignons sauvages et effluves de truffe.',
      ar: 'أرز كارنارولي الإيطالي مطهو بمرق الفطر وجبن البارميزان مع قطع الفطر البري وزيت الكمأة الفاخر.'
    },
    longDescription: {
      fr: 'La quintessence de l\'Italie du Nord. Un risotto onctueux à point (all\'onda), parfumé au vin blanc sec, truffe et beurre noisette.',
      ar: 'طبق إيطالي ملكي بقوام غني وناعم يذوب في الفم، بنكهة الفطر البري وجبن البارميزان الأصيل ولمسات زيت الكمأة الإيطالي.'
    },
    price: 95,
    category: 'plats',
    badge: { fr: 'Végétarien', ar: 'نباتي' },
    calories: '490 kcal',
    prepTime: '22 min',
    image: '/dishes/risotto.jpg',
  },
  {
    id: 10,
    name: { fr: 'Pâtes Tagliatelles Carbonara', ar: 'باستا تالياتيلي كاربونارا الأصلية' },
    description: {
      fr: 'Pâtes fraîches al dente, guanciale croustillant doré, jaunes d\'œufs et pecorino romano râpé.',
      ar: 'باستا طازجة محضرة على الطريقة الرومانية الأصلية مع اللحم المقدد والبيض وجبن بيكورينو رومانو.'
    },
    longDescription: {
      fr: 'Préparée sans crème selon l\'authentique recette romaine. L\'onctuosité provient de l\'émulsion délicate entre l\'eau de cuisson, le pecorino et les jaunes d\'œufs frais.',
      ar: 'الوصفة الرومانية الحقيقية بدون كريمة صناعية، قوام كريمي طبيعي ناتج عن تمازج جبن البيكورينو مع صفار البيض الطازج والفلفل الأسود المحمص.'
    },
    price: 75,
    category: 'plats',
    badge: { fr: 'Nouveau', ar: 'جديد' },
    calories: '610 kcal',
    prepTime: '15 min',
    image: '/dishes/carbonara.jpg',
  },

  // ─── Pizzas ────────────────────────────────────────────────
  {
    id: 11,
    name: { fr: 'Pizza Margherita Di Bufala', ar: 'بيتزا مارغريتا دي بوفالا' },
    description: {
      fr: 'Pâte napolitaine fermentée 48h, sauce tomate San Marzano DOP, mozzarella di bufala et basilic.',
      ar: 'عجينة نابولية متخمرة لمدة 48 ساعة، صلصة طماطم سان مارزانو، موزاريلا بوفالا طازجة وريحان.'
    },
    longDescription: {
      fr: 'Cuite en 90 secondes dans notre four à haute température. La pâte est alvéolée, légère et croustillante, surmontée d\'ingrédients italiens certifiés.',
      ar: 'تُخبز في فرن الحجر بحرارة عالية، عجينة هشة ومقرمشة ومكونات إيطالية معتمدة تمنحك طعم نابولي الأصيل.'
    },
    price: 65,
    category: 'pizzas',
    badge: { fr: 'Végétarien', ar: 'نباتي' },
    calories: '680 kcal',
    prepTime: '12 min',
    image: '/dishes/margherita.jpg',
  },
  {
    id: 12,
    name: { fr: 'Pizza Quattro Formaggi DOP', ar: 'بيتزا الأجبان الأربعة الفاخرة' },
    description: {
      fr: 'Mozzarella fior di latte, gorgonzola fondant, taleggio crémeux et parmesan reggiano.',
      ar: 'مزيج رائع من أربعة أجبان إيطالية: موزاريلا، جورجونزولا، تاليجيو وجبن بارميزان معتق.'
    },
    longDescription: {
      fr: 'Une harmonie parfaite de quatre fromages italiens d\'appellation contrôlée offrant un équilibre irrésistible entre douceur et puissance.',
      ar: 'تناغم ساحر بين نعومة جبن الموزاريلا وقوة جبن الجورجونزولا والبارميزان فوق عجينة نابولية رقيقة ومقرمشة.'
    },
    price: 85,
    category: 'pizzas',
    badge: { fr: 'Populaire', ar: 'الأكثر طلباً' },
    calories: '790 kcal',
    prepTime: '12 min',
    image: '/dishes/quattro-fromaggi.jpg',
  },
  {
    id: 13,
    name: { fr: 'Pizza Truffe Noire & Burrata', ar: 'بيتزا الكمأة السوداء وجبن البوراتا' },
    description: {
      fr: 'Crème de truffe blanche, champignons de Paris, burrata entière au centre et roquette.',
      ar: 'كريمة الكمأة الإيطالية، فطر طازج، كرة بوراتا كاملة غنية بالكريمة وجرجير بري.'
    },
    longDescription: {
      fr: 'Notre pizza la plus luxueuse : base crème de truffe noble, cuite au feu de bois puis surmontée d\'une burrata fraîche des Pouilles.',
      ar: 'أفخم أنواع البيتزا لدينا: قاعدة من صوص الكمأة الإيطالية يعلوها جبن البوراتا الغني بالكريمة الطازجة مع رذاذ زيت الزيتون.'
    },
    price: 110,
    category: 'pizzas',
    badge: { fr: 'Nouveau', ar: 'جديد' },
    calories: '840 kcal',
    prepTime: '14 min',
    image: '/dishes/pizza-truffe.jpg',
  },

  // ─── Burgers ───────────────────────────────────────────────
  {
    id: 14,
    name: { fr: 'Burger Gourmet Bella Taste', ar: 'برغر بيلا تيست جورميه الفاخر' },
    description: {
      fr: 'Steak de bœuf haché maison 180g, cheddar rouge affiné, confit d\'oignons et sauce secrète.',
      ar: 'لحم بقري مفروم طازج 180 غرام، جبن شيدر معتق، بصل مكرمل وصوص خاص في خبز بريوش طازج.'
    },
    longDescription: {
      fr: 'Pain brioché toasté au beurre, steak pur bœuf juteux, salade croquante, cornichons maison et sauce fumée signature. Servi avec frites croustillantes.',
      ar: 'خبز بريوش مخبوز يومياً، لحم مشوي غني بالعصارة، جبن شيدر ذائب وصوص المطعم الخاص مع بطاطس مقلية ذهبية.'
    },
    price: 75,
    category: 'burgers',
    badge: { fr: 'Populaire', ar: 'الأكثر طلباً' },
    calories: '750 kcal',
    prepTime: '15 min',
    image: '/dishes/burger-gourmet.jpg',
  },
  {
    id: 15,
    name: { fr: 'Crispy Chicken & Cheddar', ar: 'برغر كريسبي تشيكن المقرمش' },
    description: {
      fr: 'Filet de poulet mariné pané minute au panko, coleslaw maison, cheddar et sauce cocktail.',
      ar: 'صدر دجاج مقرمش متبل ومغطى بفتات البانكو، سلطة كولسلو، جبن شيدر وصوص لذيذ.'
    },
    longDescription: {
      fr: 'Poulet mariné au babeurre puis enrobé d\'une panure ultra croustillante, accompagné d\'une sauce piquante douce et salade croquante.',
      ar: 'دجاج متبل بخلطة بهارات خاصة ومقلي حتى القرمشة التامة، يقدم في خبز بريوش طري مع صوص رانش اللذيذ.'
    },
    price: 65,
    category: 'burgers',
    badge: null,
    calories: '690 kcal',
    prepTime: '15 min',
    image: '/dishes/chicken-burger.jpg',
  },

  // ─── Desserts ──────────────────────────────────────────────
  {
    id: 16,
    name: { fr: 'Cheesecake Coulis Fruits Rouges', ar: 'تشيز كيك نيويورك بالتوت المشكل' },
    description: {
      fr: 'Base biscuitée sablée croustillante, appareil onctueux au cream cheese et coulis de framboises.',
      ar: 'قاعدة بسكويت مقرمشة مع طبقة غنية من جبن الكريمة الناعم وصوص التوت البري المنعش.'
    },
    longDescription: {
      fr: 'Cuit lentement au bain-marie pour obtenir une texture soyeuse inégalée. Nappé d\'un coulis de framboises fraîches et myrtilles sauvages.',
      ar: 'حلوى نيويوركية كلاسيكية محضرة على أصولها، قوام مخملي ناعم وتوازن مثالي بين حلاوة الجبن وحموضة التوت الطبيعي.'
    },
    price: 45,
    category: 'desserts',
    badge: { fr: 'Populaire', ar: 'الأكثر طلباً' },
    calories: '420 kcal',
    prepTime: '5 min',
    image: '/dishes/cheesecake.jpg',
  },
  {
    id: 17,
    name: { fr: 'Fondant au Chocolat Noir 70%', ar: 'فوندان الشوكولاتة الداكنة بقلب ذائب' },
    description: {
      fr: 'Cœur coulant intense au chocolat Valrhona, servi avec une boule de glace vanille Bourbon.',
      ar: 'كيك الشوكولاتة الفاخرة بقلب دافئ وذائب، يقدم مع آيس كريم فانيليا مدغشقر الطبيعية.'
    },
    longDescription: {
      fr: 'Cuit à la commande, ce gâteau offre une croûte délicate et un cœur de chocolat noir chaud intensément parfumé, sublimé par la fraîcheur de la glace.',
      ar: 'يخبز فور طلبكم لضمان تدفق الشوكولاتة الساخنة والغنية فور أول قضمة، تناقض ساحر مع برودة آيس كريم الفانيليا الطبيعي.'
    },
    price: 50,
    category: 'desserts',
    badge: { fr: 'Populaire', ar: 'الأكثر طلباً' },
    calories: '480 kcal',
    prepTime: '12 min',
    image: '/dishes/fondant.jpg',
  },
  {
    id: 18,
    name: { fr: 'Tiramisu Artisanal au Café Espresso', ar: 'تيراميسو إيطالي أصيل بالإسبريسو' },
    description: {
      fr: 'Biscuits savoiardi imbibés de café pur arabica, crème aérienne au mascarpone et cacao amer.',
      ar: 'بسكويت سافوياردي مشرب بقهوة الإسبريسو الإيطالية، كريمة الماسكاربوني الهوائية ورشة كاكاو.'
    },
    longDescription: {
      fr: 'Recette vénitienne traditionnelle à base de mascarpone frais fouetté, parfumé à la vanille et saupoudré de pur cacao néerlandais.',
      ar: 'وصفة البندقية الكلاسيكية الأصيلة، طبقات خفيفة ولذيذة تمزج مرارة القهوة وحلاوة الكريمة في تناغم رائع.'
    },
    price: 45,
    category: 'desserts',
    badge: { fr: 'Nouveau', ar: 'جديد' },
    calories: '380 kcal',
    prepTime: '5 min',
    image: '/dishes/tiramisu.jpg',
  },

  // ─── Boissons ──────────────────────────────────────────────
  {
    id: 19,
    name: { fr: 'Jus d\'Orange Pressé Minute', ar: 'عصير برتقال طبيعي معصور طازجاً' },
    description: {
      fr: 'Oranges douces du Maroc pressées à la commande, sans sucres ajoutés ni conservateurs.',
      ar: 'برتقال مغربي حلو يعصر طازجاً عند الطلب مباشرة، بدون أي سكر مضاف أو مواد حافظة.'
    },
    longDescription: {
      fr: '100% pur jus naturel, riche en vitamines C et antioxydants, rafraîchissant et vivifiant.',
      ar: 'عصير طبيعي 100% مليء بالفيتامينات والحيوية، منعش ومثالي مع كل الوجبات.'
    },
    price: 25,
    category: 'boissons',
    badge: null,
    calories: '110 kcal',
    prepTime: '4 min',
    image: '/dishes/orange-juice.jpg',
  },
  {
    id: 20,
    name: { fr: 'Smoothie Exotique Mangue & Passion', ar: 'سموذي المانجو والباشن فروت الاستوائي' },
    description: {
      fr: 'Mangue mûre, fruit de la passion, ananas frais et lait d\'amande velouté.',
      ar: 'مانجو استوائية ناضجة، فاكهة الباشن، أناناس طازج وحليب لوز ناعم.'
    },
    longDescription: {
      fr: 'Un cocktail vitaminé mixé glacé pour une texture onctueuse et une explosion de saveurs tropicales.',
      ar: 'مزيج منعش من الفواكه الاستوائية الطبيعية المخفوقة مع الثلج، يمنحك شعوراً فورياً بالانتعاش.'
    },
    price: 35,
    category: 'boissons',
    badge: { fr: 'Végétarien', ar: 'نباتي' },
    calories: '160 kcal',
    prepTime: '5 min',
    image: '/dishes/smoothie.jpg',
  },
  {
    id: 21,
    name: { fr: 'Thé Traditionnel à la Menthe Fraîche', ar: 'شاي مغربي أصيل بالنعناع الطازج' },
    description: {
      fr: 'Thé vert gunpowder infusé avec menthe fraîche du jardin et sucre de canne.',
      ar: 'شاي أخضر أصيل منقوع بأوراق النعناع الطازجة ومعطر بنكهات الضيافة المغربية العريقة.'
    },
    longDescription: {
      fr: 'Servi dans la plus pure tradition marocaine, versé de haut dans des verres ciselés pour former une belle mousse blanche.',
      ar: 'يقدم في إبريق فضي تقليدي ويُسكب من علو في كؤوس زجاجية مزخرفة لتكوين رغوة مميزة تعكس كرم الضيافة.'
    },
    price: 20,
    category: 'boissons',
    badge: null,
    calories: '60 kcal',
    prepTime: '6 min',
    image: '/dishes/the-menthe.jpg',
  },
  {
    id: 22,
    name: { fr: 'Mojito Passion & Menthe (Sans alcool)', ar: 'موهيتو الباشن والنعناع المنعش (بدون كحول)' },
    description: {
      fr: 'Citron vert pilé, feuilles de menthe fraîche, purée de passion et eau pétillante fraîche.',
      ar: 'قطع ليمون أخضر مهروس، أوراق نعناع طازجة، هريس الباشن فروت ومياه فوارة مثلجة.'
    },
    longDescription: {
      fr: 'Le mocktail parfait pour accompagner vos déjeuners et dîners estivaux, rafraîchissant et festif.',
      ar: 'مشروب منعش للغاية يجمع بين انتعاش النعناع وحموضة الليمون مع حلاوة فاكهة الباشن الطبيعية والمياه الغازية.'
    },
    price: 35,
    category: 'boissons',
    badge: { fr: 'Nouveau', ar: 'جديد' },
    calories: '120 kcal',
    prepTime: '5 min',
    image: '/dishes/mojito.jpg',
  },
  {
    id: 23,
    name: { fr: 'Café Espresso Grand Cru', ar: 'قهوة إسبريسو حبوب مختارة' },
    description: {
      fr: '100% Arabica d\'Éthiopie torréfié artisanalement, crema onctueuse et arômes de noisette.',
      ar: 'بن أرابيكا إثيوبي فاخر 100%، رغوة كريمية غنية ونكهة عطرية متوازنة ذات مذاق استثنائي.'
    },
    longDescription: {
      fr: 'Extrait avec précision sur machine italienne haute pression pour révéler toutes les subtilités aromatiques du terroir africain.',
      ar: 'يستخلص بدقة عالية عبر ماكينة إيطالية احترافية ليمنحك فنجان قهوة مركز وغني بالنكهات الأصلية.'
    },
    price: 18,
    category: 'boissons',
    badge: null,
    calories: '5 kcal',
    prepTime: '3 min',
    image: '/dishes/espresso.jpg',
  },
];
