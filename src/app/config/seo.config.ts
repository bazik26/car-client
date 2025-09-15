import { BRAND_CONFIG } from '../constants';

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
}

export const SEO_CONFIG: Record<string, SEOConfig> = {
  // Главная страница
  home: {
    title: `${BRAND_CONFIG.name} - Продажа автомобилей в Саратове`,
    description: `${BRAND_CONFIG.name} - автодилер в Саратове. Широкий выбор автомобилей по выгодным ценам. Новые и подержанные авто с гарантией качества. Звоните: ${BRAND_CONFIG.phone}`,
    keywords: 'автомобили, продажа авто, Саратов, автодилер, новые автомобили, подержанные авто, Vam Auto'
  },

  // Страница поиска
  search: {
    title: `Поиск автомобилей | ${BRAND_CONFIG.name}`,
    description: `Поиск автомобилей в Саратове. Широкий выбор новых и подержанных авто по выгодным ценам. Фильтры по марке, модели, году, цене и характеристикам. ${BRAND_CONFIG.name}`,
    keywords: 'поиск автомобилей, каталог авто, Саратов, автодилер, новые автомобили, подержанные авто, фильтр автомобилей'
  },

  // Страница автомобиля (шаблон для динамического использования)
  car: {
    title: `{brand} {model} {year} - {price} ₽ | ${BRAND_CONFIG.name}`,
    description: `{brand} {model} {year} года. Пробег: {mileage} км. Цена: {price} ₽. {color} ${BRAND_CONFIG.name} - автодилер в Саратове.`,
    keywords: '{brand}, {model}, {year}, автомобиль, продажа авто, Саратов, {brandName}'
  },

  // О компании
  about: {
    title: `О компании ${BRAND_CONFIG.name}`,
    description: `${BRAND_CONFIG.name} - надежный автодилер в Саратове. Мы предлагаем широкий выбор качественных автомобилей по выгодным ценам. Наша команда профессионалов поможет вам найти идеальный автомобиль.`,
    keywords: 'о компании, автодилер, Саратов, автомобили, продажа авто, команда профессионалов'
  },

  // Команда
  team: {
    title: `Наша команда | ${BRAND_CONFIG.name}`,
    description: `Познакомьтесь с командой профессионалов ${BRAND_CONFIG.name}. Опытные специалисты по авторынку, логистике и работе с клиентами помогут вам найти идеальный автомобиль.`,
    keywords: 'команда, специалисты, автодилер, Саратов, профессионалы, опыт'
  },

  // Контакты
  contacts: {
    title: `Контакты | ${BRAND_CONFIG.name}`,
    description: `Свяжитесь с ${BRAND_CONFIG.name} в Саратове. Телефон: ${BRAND_CONFIG.phone}, email: ${BRAND_CONFIG.email}. Адрес: ${BRAND_CONFIG.address}. Мы поможем вам выбрать идеальный автомобиль.`,
    keywords: 'контакты, автодилер, Саратов, телефон, адрес, связь, автомобили'
  },

  // Политика конфиденциальности
  privacy: {
    title: `Политика конфиденциальности | ${BRAND_CONFIG.name}`,
    description: `Политика конфиденциальности ${BRAND_CONFIG.name}. Информация о том, как мы собираем, используем и защищаем ваши персональные данные.`,
    keywords: 'политика конфиденциальности, персональные данные, защита данных, конфиденциальность'
  },

  // Пользовательское соглашение
  terms: {
    title: `Пользовательское соглашение | ${BRAND_CONFIG.name}`,
    description: `Пользовательское соглашение ${BRAND_CONFIG.name}. Условия использования сайта и услуг автодилера.`,
    keywords: 'пользовательское соглашение, условия использования, правила сайта, автодилер'
  }
};

// Функция для замены плейсхолдеров в SEO конфиге
export function replaceSEOTemplate(template: string, data: Record<string, any>): string {
  return template.replace(/\{(\w+)\}/g, (match, key) => {
    return data[key] || match;
  });
}

// Функция для получения SEO конфига с заменой плейсхолдеров
export function getSEOConfig(page: string, data?: Record<string, any>): SEOConfig {
  const config = SEO_CONFIG[page];
  if (!config) {
    throw new Error(`SEO config not found for page: ${page}`);
  }

  if (!data) {
    return config;
  }

  return {
    title: replaceSEOTemplate(config.title, data),
    description: replaceSEOTemplate(config.description, data),
    keywords: replaceSEOTemplate(config.keywords, data),
    ogTitle: config.ogTitle ? replaceSEOTemplate(config.ogTitle, data) : undefined,
    ogDescription: config.ogDescription ? replaceSEOTemplate(config.ogDescription, data) : undefined,
    twitterTitle: config.twitterTitle ? replaceSEOTemplate(config.twitterTitle, data) : undefined,
    twitterDescription: config.twitterDescription ? replaceSEOTemplate(config.twitterDescription, data) : undefined
  };
}
