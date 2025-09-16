import { BRAND_CONFIG } from '../constants';

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
}

export const SEO_CONFIG: Record<string, SEOConfig> = {
  // Главная страница
  home: {
    title: `${BRAND_CONFIG.name} - Пригон автомобилей из Европы в Россию`,
    description: `${BRAND_CONFIG.name} - компания по пригону авто из Европы в Россию. Подбор, покупка, доставка и растаможка автомобилей под ключ. Гарантия прозрачности сделки и выгодные условия. Звоните: ${BRAND_CONFIG.phone}`,
    keywords: 'пригон авто, авто из Европы, купить авто, растаможка, доставка авто, автомобили под ключ, ${BRAND_CONFIG.name}',
    ogTitle: `${BRAND_CONFIG.name} - Авто из Европы под ключ`,
    ogDescription: `Пригон авто из Европы в Россию с ${BRAND_CONFIG.name}. Подбор, доставка и растаможка. Надежно и выгодно.`,
    ogImage: `${BRAND_CONFIG.ogImage}`,
    twitterTitle: `${BRAND_CONFIG.name} - Пригон авто из Европы`,
    twitterDescription: `Купи автомобиль из Европы с ${BRAND_CONFIG.name}. Подбор, доставка, растаможка и оформление под ключ.`,
    twitterImage: `${BRAND_CONFIG.ogImage}`
  },

  // Страница поиска
  search: {
    title: `Поиск автомобилей из Европы | ${BRAND_CONFIG.name}`,
    description: `Поиск автомобилей для пригона из Европы в Россию. Удобные фильтры по марке, модели, году, цене и характеристикам. ${BRAND_CONFIG.name} - пригон под ключ.`,
    keywords: 'поиск авто Европа, каталог автомобилей, пригон машин, купить авто из Европы, ${BRAND_CONFIG.name}',
    ogTitle: `Поиск авто из Европы | ${BRAND_CONFIG.name}`,
    ogDescription: `Найдите авто из Европы для пригона в Россию. ${BRAND_CONFIG.name} - удобный поиск и полное сопровождение сделки.`,
    ogImage: `${BRAND_CONFIG.ogImage}`,
    twitterTitle: `Поиск авто | ${BRAND_CONFIG.name}`,
    twitterDescription: `Подбор и пригон авто из Европы в Россию с ${BRAND_CONFIG.name}. Полный каталог и фильтры.`,
    twitterImage: `${BRAND_CONFIG.ogImage}`
  },

  // Страница автомобиля
  car: {
    title: `{brand} {model} {year} - {price} ₽ | ${BRAND_CONFIG.name}`,
    description: `{brand} {model} {year} года. Пробег: {mileage} км. Цена: {price} ₽. Автомобиль с Европы. Полное сопровождение: покупка, доставка и растаможка с ${BRAND_CONFIG.name}.`,
    keywords: '{brand}, {model}, {year}, авто Европа, пригон авто, купить автомобиль, ${BRAND_CONFIG.name}',
    ogTitle: `{brand} {model} {year} | ${BRAND_CONFIG.name}`,
    ogDescription: `{brand} {model} {year}. Цена {price} ₽. Пригон авто из Европы с ${BRAND_CONFIG.name}.`,
    ogImage: `${BRAND_CONFIG.ogImage}`,
    twitterTitle: `{brand} {model} {year} | ${BRAND_CONFIG.name}`,
    twitterDescription: `{brand} {model} {year}. Доставка и растаможка авто из Европы с ${BRAND_CONFIG.name}.`,
    twitterImage: `${BRAND_CONFIG.ogImage}`
  },

  // О компании
  about: {
    title: `О компании ${BRAND_CONFIG.name}`,
    description: `${BRAND_CONFIG.name} - эксперт в пригоне автомобилей из Европы. Работаем по всей России. Предлагаем подбор, проверку, доставку и оформление авто под ключ. Надежность и опыт на каждом этапе.`,
    keywords: 'о компании, пригон авто, авто Европа, доставка автомобилей, ${BRAND_CONFIG.name}',
    ogTitle: `О компании ${BRAND_CONFIG.name}`,
    ogDescription: `Узнайте больше о ${BRAND_CONFIG.name} - эксперт по пригону авто из Европы в Россию.`,
    ogImage: `${BRAND_CONFIG.ogImage}`,
    twitterTitle: `О компании | ${BRAND_CONFIG.name}`,
    twitterDescription: `${BRAND_CONFIG.name} - пригон авто из Европы. Полное сопровождение сделки.`,
    twitterImage: `${BRAND_CONFIG.ogImage}`
  },

  // Команда
  team: {
    title: `Наша команда | ${BRAND_CONFIG.name}`,
    description: `Познакомьтесь с командой ${BRAND_CONFIG.name}. Специалисты по подбору и пригону автомобилей из Европы в Россию. Опытные менеджеры, брокеры и логисты помогут вам получить идеальное авто под ключ.`,
    keywords: 'команда, эксперты, пригон авто, специалисты, ${BRAND_CONFIG.name}',
    ogTitle: `Команда ${BRAND_CONFIG.name}`,
    ogDescription: `Специалисты ${BRAND_CONFIG.name} по подбору и пригону авто из Европы. Опыт и надежность.`,
    ogImage: `${BRAND_CONFIG.ogImage}`,
    twitterTitle: `Наша команда | ${BRAND_CONFIG.name}`,
    twitterDescription: `Команда ${BRAND_CONFIG.name} - эксперты по пригону авто из Европы.`,
    twitterImage: `${BRAND_CONFIG.ogImage}`
  },

  // Контакты
  contacts: {
    title: `Контакты | ${BRAND_CONFIG.name}`,
    description: `Свяжитесь с ${BRAND_CONFIG.name}. Консультации по пригону авто из Европы, расчет стоимости и ответы на все вопросы. Телефон: ${BRAND_CONFIG.phone}.`,
    keywords: 'контакты, ${BRAND_CONFIG.name}, телефон, пригон авто, авто Европа',
    ogTitle: `Контакты | ${BRAND_CONFIG.name}`,
    ogDescription: `Контакты ${BRAND_CONFIG.name} - консультации по пригону авто из Европы в Россию.`,
    ogImage: `${BRAND_CONFIG.ogImage}`,
    twitterTitle: `Контакты | ${BRAND_CONFIG.name}`,
    twitterDescription: `Свяжитесь с ${BRAND_CONFIG.name} для консультации по пригону авто из Европы.`,
    twitterImage: `${BRAND_CONFIG.ogImage}`
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
    ogTitle: replaceSEOTemplate(config.ogTitle, data),
    ogDescription: replaceSEOTemplate(config.ogDescription, data),
    ogImage: replaceSEOTemplate(config.ogImage, data),
    twitterTitle: replaceSEOTemplate(config.twitterTitle, data),
    twitterDescription: replaceSEOTemplate(config.twitterDescription, data),
    twitterImage: replaceSEOTemplate(config.twitterImage, data)
  };
}