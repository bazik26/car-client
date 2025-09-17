// Конфигурация проекта для кастомизации отображения
export interface ProjectConfig {
  // Основная информация
  name: string;
  domain: string;
  logo: string;
  
  // Цветовая схема
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  
  // Настройки отображения автомобилей
  carDisplay: {
    showPrice: boolean;
    showMileage: boolean;
    showYear: boolean;
    showEngine: boolean;
    showPower: boolean;
    showFuel: boolean;
    showGearbox: boolean;
    showDrive: boolean;
    showDescription: boolean;
    showOptions: boolean;
    showImages: boolean;
    maxImages: number;
  };
  
  // Фильтры по умолчанию
  defaultFilters: {
    brands: string[];
    years: { min: number; max: number };
    priceRange: { min: number; max: number };
    mileageRange: { min: number; max: number };
  };
  
  // SEO настройки
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  
  // Контактная информация
  contacts: {
    phone: string;
    email: string;
    address: string;
    telegram: string;
    whatsapp: string;
  };
  
  // Социальные сети
  social: {
    telegram: string;
    whatsapp: string;
    instagram: string;
    youtube: string;
  };
  
  // Аналитика
  analytics: {
    yandexMetrika: string;
    googleAnalytics: string;
  };
}

// Конфигурации для разных проектов
export const PROJECT_CONFIGS: { [key: string]: ProjectConfig } = {
  // Основной проект - Adena Trans
  'adenatrans': {
    name: 'Adena Trans',
    domain: 'adenatrans.ru',
    logo: '/assets/logo-adenatrans.svg',
    
    primaryColor: '#217e02',
    secondaryColor: '#1a6b02',
    accentColor: '#28a745',
    
    carDisplay: {
      showPrice: true,
      showMileage: true,
      showYear: true,
      showEngine: true,
      showPower: true,
      showFuel: true,
      showGearbox: true,
      showDrive: true,
      showDescription: true,
      showOptions: true,
      showImages: true,
      maxImages: 10
    },
    
    defaultFilters: {
      brands: ['BMW', 'Mercedes-Benz', 'Audi', 'Toyota', 'Honda'],
      years: { min: 2015, max: 2024 },
      priceRange: { min: 500000, max: 5000000 },
      mileageRange: { min: 0, max: 200000 }
    },
    
    seo: {
      title: 'Adena Trans - Автомобили с пробегом в Саратове',
      description: 'Продажа автомобилей с пробегом. Пригон из Европы, США, Китая. Гарантия качества.',
      keywords: ['автомобили', 'с пробегом', 'Саратов', 'пригон', 'Европа']
    },
    
    contacts: {
      phone: '+7 (999) 123-45-67',
      email: 'info@adenatrans.ru',
      address: 'Саратов, ул. Примерная, 123',
      telegram: 'https://t.me/+hVO_6kT2CjFlNTVh',
      whatsapp: '+79991234567'
    },
    
    social: {
      telegram: 'https://t.me/+hVO_6kT2CjFlNTVh',
      whatsapp: 'https://wa.me/79991234567',
      instagram: 'https://instagram.com/adenatrans',
      youtube: 'https://youtube.com/@adenatrans'
    },
    
    analytics: {
      yandexMetrika: '104180964',
      googleAnalytics: ''
    }
  },
  
  // Проект для премиум автомобилей
  'premiumcars': {
    name: 'Premium Cars',
    domain: 'premiumcars.ru',
    logo: '/assets/logo-premium.svg',
    
    primaryColor: '#1a1a1a',
    secondaryColor: '#333333',
    accentColor: '#ffd700',
    
    carDisplay: {
      showPrice: true,
      showMileage: true,
      showYear: true,
      showEngine: true,
      showPower: true,
      showFuel: true,
      showGearbox: true,
      showDrive: true,
      showDescription: true,
      showOptions: true,
      showImages: true,
      maxImages: 15
    },
    
    defaultFilters: {
      brands: ['BMW', 'Mercedes-Benz', 'Audi', 'Lexus', 'Porsche'],
      years: { min: 2018, max: 2024 },
      priceRange: { min: 2000000, max: 15000000 },
      mileageRange: { min: 0, max: 100000 }
    },
    
    seo: {
      title: 'Premium Cars - Премиум автомобили',
      description: 'Эксклюзивные премиум автомобили. Только лучшие модели.',
      keywords: ['премиум', 'автомобили', 'люкс', 'BMW', 'Mercedes']
    },
    
    contacts: {
      phone: '+7 (999) 765-43-21',
      email: 'info@premiumcars.ru',
      address: 'Москва, ул. Премиумная, 456',
      telegram: 'https://t.me/premiumcars',
      whatsapp: '+79997654321'
    },
    
    social: {
      telegram: 'https://t.me/premiumcars',
      whatsapp: 'https://wa.me/79997654321',
      instagram: 'https://instagram.com/premiumcars',
      youtube: 'https://youtube.com/@premiumcars'
    },
    
    analytics: {
      yandexMetrika: '104180965',
      googleAnalytics: ''
    }
  },
  
  // Проект для бюджетных автомобилей
  'budgetcars': {
    name: 'Budget Cars',
    domain: 'budgetcars.ru',
    logo: '/assets/logo-budget.svg',
    
    primaryColor: '#007bff',
    secondaryColor: '#0056b3',
    accentColor: '#28a745',
    
    carDisplay: {
      showPrice: true,
      showMileage: true,
      showYear: true,
      showEngine: false,
      showPower: false,
      showFuel: true,
      showGearbox: true,
      showDrive: false,
      showDescription: true,
      showOptions: false,
      showImages: true,
      maxImages: 5
    },
    
    defaultFilters: {
      brands: ['Lada', 'Renault', 'Kia', 'Hyundai', 'Skoda'],
      years: { min: 2010, max: 2024 },
      priceRange: { min: 200000, max: 1500000 },
      mileageRange: { min: 0, max: 300000 }
    },
    
    seo: {
      title: 'Budget Cars - Недорогие автомобили',
      description: 'Автомобили по доступным ценам. Качество и надежность.',
      keywords: ['бюджетные', 'автомобили', 'недорого', 'Lada', 'Kia']
    },
    
    contacts: {
      phone: '+7 (999) 111-22-33',
      email: 'info@budgetcars.ru',
      address: 'Екатеринбург, ул. Бюджетная, 789',
      telegram: 'https://t.me/budgetcars',
      whatsapp: '+79991112233'
    },
    
    social: {
      telegram: 'https://t.me/budgetcars',
      whatsapp: 'https://wa.me/79991112233',
      instagram: 'https://instagram.com/budgetcars',
      youtube: 'https://youtube.com/@budgetcars'
    },
    
    analytics: {
      yandexMetrika: '104180966',
      googleAnalytics: ''
    }
  }
};

// Функция для получения конфигурации проекта
export function getProjectConfig(projectKey: string = 'adenatrans'): ProjectConfig {
  return PROJECT_CONFIGS[projectKey] || PROJECT_CONFIGS['adenatrans'];
}

// Функция для определения проекта по домену
export function getProjectByDomain(domain: string): string {
  const domainMap: { [key: string]: string } = {
    'adenatrans.ru': 'adenatrans',
    'premiumcars.ru': 'premiumcars',
    'budgetcars.ru': 'budgetcars'
  };
  
  return domainMap[domain] || 'adenatrans';
}
