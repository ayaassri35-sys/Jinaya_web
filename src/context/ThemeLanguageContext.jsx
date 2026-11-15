// src/context/ThemeLanguageContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

const ThemeLanguageContext = createContext(null);

export const translations = {
  fr: {
    // Nav
    home: 'Accueil',
    menu: 'Menu',
    about: 'À Propos',
    contact: 'Contact',
    reserve: 'Réserver',
    reserveTable: 'Réserver une table',
    cart: 'Panier',
    cuisineSubtitle: 'Cuisine Internationale',

    // Hero
    heroBadge: 'Cuisine Internationale • Casablanca',
    heroTitle1: 'Découvrez une ',
    heroTitleHighlight: 'expérience',
    heroTitle2: ' culinaire unique',
    heroSubtitle: 'Des saveurs authentiques, des ingrédients frais et une passion pour la cuisine. Chaque plat est une invitation au voyage.',
    discoverMenu: 'Découvrir notre menu',
    yearsExp: 'Années d\'expérience',
    menuDishesCount: 'Plats au menu',
    clientRating: 'Note client',

    // Menu section
    selection: 'Notre Sélection',
    ourMenu: 'Notre Menu',
    menuSubtitle: 'Chaque plat est préparé à la commande avec des ingrédients soigneusement sélectionnés.',
    searchPlaceholder: 'Rechercher un plat…',
    sortByPrice: 'Trier par prix',
    sortDefault: 'Par défaut',
    sortAsc: 'Prix croissant',
    sortDesc: 'Prix décroissant',
    noDishesFound: 'Aucun plat trouvé',
    noDishesSub: 'Essayez une autre recherche ou choisissez une catégorie différente.',
    resetFilters: 'Réinitialiser les filtres',
    dishesFound: 'plat(s) trouvé(s)',
    add: 'Ajouter',
    added: 'Ajouté',
    viewDetails: 'Détails du plat',

    // Modal Details
    ingredients: 'Ingrédients & Préparation',
    close: 'Fermer',
    calories: 'Calories',
    prepTime: 'Temps de prép.',
    category: 'Catégorie',

    // Cart
    myCart: 'Mon Panier',
    cartEmpty: 'Votre panier est vide',
    cartEmptySub: 'Ajoutez des plats savoureux depuis notre menu.',
    browseMenu: 'Voir le menu',
    subtotal: 'Sous-total',
    delivery: 'Livraison',
    free: 'Gratuite',
    total: 'Total',
    checkout: 'Commander via WhatsApp',
    clearCart: 'Vider le panier',
    orderSuccess: '🎉 Commande envoyée sur WhatsApp !',
    orderSuccessSub: 'Votre commande a été préparée pour envoi direct au restaurant.',

    // Checkout Form
    completeOrder: 'Finaliser la commande WhatsApp',
    backToCart: 'Retour au panier',
    fullName: 'Nom complet',
    phone: 'Téléphone WhatsApp',
    deliveryAddress: 'Adresse de livraison (Casablanca)',
    notes: 'Notes spéciales (allergies, cuisson...)',
    sendWhatsApp: 'Envoyer la commande sur WhatsApp',
    sending: 'Préparation...',
    orderSummary: 'Récapitulatif de la commande',
    reqName: 'Le nom complet est requis.',
    reqPhone: 'Le numéro de téléphone est requis.',
    reqPhoneValid: 'Veuillez saisir un numéro valide.',
    reqAddress: 'L\'adresse de livraison est requise.',

    // About
    aboutBadge: 'Notre Histoire',
    aboutTitle: 'À Propos de Bella Taste',
    aboutP1: 'Fondée en 2009 à Casablanca, Bella Taste est née d\'une passion pour la gastronomie internationale d\'exception.',
    aboutP2: 'Nos chefs réinterprètent les classiques du monde entier avec des ingrédients frais du terroir marocain.',
    freshIng: 'Ingrédients Frais',
    freshIngDesc: 'Sélectionnés chaque matin auprès de nos producteurs partenaires.',
    culinaryExc: 'Excellence Culinaire',
    culinaryExcDesc: 'Une brigade passionnée formée aux plus hauts standards de la gastronomie.',
    passion: 'Passion & Créativité',
    passionDesc: 'Chaque assiette éveille vos sens avec raffinement et élégance.',
    attentiveService: 'Service Attentionné',
    attentiveServiceDesc: 'Un accueil chaleureux pour faire de votre repas un moment mémorable.',

    // Reservation
    resBadge: 'Réservation',
    resTitle: 'Réservez votre Table',
    resDesc: 'Planifiez votre prochaine expérience culinaire chez Bella Taste.',
    openingHours: 'Horaires d\'ouverture',
    hoursLine1: 'Lundi – Vendredi : 12h – 15h | 19h – 23h',
    hoursLine2: 'Samedi – Dimanche : 12h – 23h30',
    resPhone: 'Réservation directe',
    resPhoneSub: 'Disponible 7j/7 de 10h à 22h',
    policy: 'Politique de réservation',
    policySub: 'Confirmation instantanée et accueil prioritaire.',
    demoNote: 'Mode démonstration — Réservation instantanée simulée.',
    resName: 'Nom complet',
    resDate: 'Date',
    resTime: 'Heure',
    resGuests: 'Nombre de personnes',
    resSpecial: 'Demandes particulières',
    confirmRes: 'Confirmer la réservation',
    confirming: 'Confirmation en cours…',
    resSuccessTitle: 'Réservation confirmée !',
    resSuccessSub: 'Merci ! Votre table est réservée. À très bientôt chez Bella Taste.',
    newRes: 'Nouvelle réservation',

    // Contact & Footer
    findUs: 'Nous Trouver',
    contactTitle: 'Contact & Accès',
    addressTitle: 'Adresse',
    addressText: '123 Boulevard Mohammed V, Casablanca 20000, Maroc',
    phoneTitle: 'Téléphone',
    emailTitle: 'Email',
    followUs: 'Suivez-nous',
    rightsReserved: 'Tous droits réservés.',
    madeWithLove: 'Fait avec passion à Casablanca',
  },

  ar: {
    // Nav
    home: 'الرئيسية',
    menu: 'قائمة الطعام',
    about: 'من نحن',
    contact: 'اتصل بنا',
    reserve: 'حجز طاولة',
    reserveTable: 'احجز طاولة الآن',
    cart: 'السلة',
    cuisineSubtitle: 'مأكولات عالمية راقية',

    // Hero
    heroBadge: 'مأكولات عالمية • الدار البيضاء',
    heroTitle1: 'اكتشف ',
    heroTitleHighlight: 'تجربة',
    heroTitle2: ' تذوق استثنائية',
    heroSubtitle: 'نكهات أصيلة، مكونات طازجة وشغف لا ينتهي بفنون الطهي الرفيعة. كل طبق رحلة لا تُنسى.',
    discoverMenu: 'استكشف القائمة',
    yearsExp: 'سنوات من الخبرة',
    menuDishesCount: 'طبق في القائمة',
    clientRating: 'تقييم الزبائن',

    // Menu section
    selection: 'تشكيلتنا المختارة',
    ourMenu: 'قائمة الأطباق',
    menuSubtitle: 'يتم إعداد كل طبق عند الطلب بعناية فائقة باستخدام أجود المكونات الطازجة.',
    searchPlaceholder: 'ابحث عن وجبة أو مشروب…',
    sortByPrice: 'ترتيب حسب السعر',
    sortDefault: 'الترتيب الافتراضي',
    sortAsc: 'السعر: من الأقل إلى الأعلى',
    sortDesc: 'السعر: من الأعلى إلى الأقل',
    noDishesFound: 'لم يتم العثور على أطباق',
    noDishesSub: 'جرّب كلمة بحث أخرى أو اختر فئة مختلفة.',
    resetFilters: 'إعادة تعيين الفلاتر',
    dishesFound: 'طبق متوفر',
    add: 'إضافة',
    added: 'تمت الإضافة',
    viewDetails: 'تفاصيل الطبق',

    // Modal Details
    ingredients: 'المكونات وطريقة التحضير',
    close: 'إغلاق',
    calories: 'السعرات الحرارية',
    prepTime: 'مدة التحضير',
    category: 'الفئة',

    // Cart
    myCart: 'سلة المشتريات',
    cartEmpty: 'سلتك فارغة حالياً',
    cartEmptySub: 'أضف أطباقاً شهية من قائمة طعامنا المميزة.',
    browseMenu: 'تصفح القائمة',
    subtotal: 'المجموع الفرعي',
    delivery: 'التوصيل',
    free: 'مجاني',
    total: 'المجموع الإجمالي',
    checkout: 'إرسال الطلب عبر واتساب',
    clearCart: 'تفريغ السلة',
    orderSuccess: '🎉 تم تجهيز طلبك للواتساب !',
    orderSuccessSub: 'تم فتح تطبيق واتساب للتواصل مع المطعم وتأكيد طلبك مباشرة.',

    // Checkout Form
    completeOrder: 'إتمام الطلب عبر واتساب',
    backToCart: 'العودة إلى السلة',
    fullName: 'الاسم الكامل',
    phone: 'رقم الهاتف (واتساب)',
    deliveryAddress: 'عنوان التوصيل (الدار البيضاء)',
    notes: 'ملاحظات خاصة (حساسية، تعليمات إضافية...)',
    sendWhatsApp: 'تأكيد وإرسال الطلب عبر واتساب',
    sending: 'جاري التجهيز...',
    orderSummary: 'ملخص الطلب',
    reqName: 'الاسم الكامل مطلوب.',
    reqPhone: 'رقم الهاتف مطلوب.',
    reqPhoneValid: 'يرجى إدخال رقم هاتف صحيح.',
    reqAddress: 'عنوان التوصيل مطلوب.',

    // About
    aboutBadge: 'قصتنا',
    aboutTitle: 'عن مطعم Bella Taste',
    aboutP1: 'تأسس مطعم Bella Taste في عام 2009 بالدار البيضاء بدافع شغف عميق بفنون الطهي العالمية الفاخرة.',
    aboutP2: 'يبتكر طهاتنا أطباقاً تجمع بين أرقى التقاليد العالمية وأجود المكونات الطازجة المغربية.',
    freshIng: 'مكونات طازجة',
    freshIngDesc: 'يتم اختيارها كل صباح من أفضل المزارع والمنتجين المحليين.',
    culinaryExc: 'إبداع طهي استثنائي',
    culinaryExcDesc: 'فريق من أمهر الطهاة المحترفين الملتزمين بأعلى معايير الجودة.',
    passion: 'شغف وأناقة',
    passionDesc: 'نقدم تجارب غنية تسعد الحواس وتترك ذكريات تدوم طويلاً.',
    attentiveService: 'خدمة راقية ومتميزة',
    attentiveServiceDesc: 'ضيافة مغربية أصيلة بلمسة عالمية تليق بضيوفنا الكرام.',

    // Reservation
    resBadge: 'الحجوزات',
    resTitle: 'احجز طاولتك المفضلة',
    resDesc: 'خطط لأمسية طعام ساحرة في أجواء هادئة وأنيقة لدى Bella Taste.',
    openingHours: 'ساعات العمل',
    hoursLine1: 'الاثنين – الجمعة : 12:00 – 15:00 | 19:00 – 23:00',
    hoursLine2: 'السبت – الأحد : 12:00 – 23:30',
    resPhone: 'الحجز عبر الهاتف',
    resPhoneSub: 'متاح 7 أيام في الأسبوع من 10:00 إلى 22:00',
    policy: 'سياسة الحجز',
    policySub: 'تأكيد فوري وأولوية في الاستقبال.',
    demoNote: 'نسخة تجريبية — يتم محاكاة الحجز فوراً.',
    resName: 'الاسم الكامل',
    resDate: 'التاريخ',
    resTime: 'الوقت',
    resGuests: 'عدد الضيوف',
    resSpecial: 'طلبات خاصة',
    confirmRes: 'تأكيد الحجز',
    confirming: 'جاري التأكيد…',
    resSuccessTitle: 'تم تأكيد حجزك بنجاح !',
    resSuccessSub: 'شكراً لاختيارك Bella Taste. نتطلع لاستقبالك بكل سرور.',
    newRes: 'حجز جديد',

    // Contact & Footer
    findUs: 'موقعنا',
    contactTitle: 'الاتصال والموقع',
    addressTitle: 'العنوان',
    addressText: '123 شارع محمد الخامس، الدار البيضاء 20000، المغرب',
    phoneTitle: 'الهاتف',
    emailTitle: 'البريد الإلكتروني',
    followUs: 'تابعنا',
    rightsReserved: 'جميع الحقوق محفوظة.',
    madeWithLove: 'صُنع بحب في الدار البيضاء',
  }
};

export function ThemeLanguageProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('bt_theme') || 'dark';
  });

  const [lang, setLang] = useState(() => {
    return localStorage.getItem('bt_lang') || 'fr';
  });

  useEffect(() => {
    localStorage.setItem('bt_theme', theme);
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light-mode');
      root.classList.remove('dark-mode');
    } else {
      root.classList.add('dark-mode');
      root.classList.remove('light-mode');
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('bt_lang', lang);
    const root = document.documentElement;
    root.setAttribute('lang', lang);
    root.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  }, [lang]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  const toggleLanguage = () => setLang(prev => prev === 'fr' ? 'ar' : 'fr');

  const t = translations[lang] || translations.fr;

  return (
    <ThemeLanguageContext.Provider value={{ theme, lang, toggleTheme, toggleLanguage, setLang, t }}>
      {children}
    </ThemeLanguageContext.Provider>
  );
}

export function useThemeLanguage() {
  const context = useContext(ThemeLanguageContext);
  if (!context) throw new Error('useThemeLanguage must be used within ThemeLanguageProvider');
  return context;
}
