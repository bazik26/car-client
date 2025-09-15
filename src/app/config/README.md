# SEO Configuration

Этот файл содержит централизованную конфигурацию SEO для всех страниц приложения.

## Структура

### SEO_CONFIG
Объект с конфигурацией для каждой страницы:
- `title` - заголовок страницы
- `description` - описание страницы
- `keywords` - ключевые слова
- `ogTitle`, `ogDescription` - Open Graph теги (опционально)
- `twitterTitle`, `twitterDescription` - Twitter Card теги (опционально)

### Плейсхолдеры
Для динамических страниц (например, страница автомобиля) используются плейсхолдеры:
- `{brand}` - марка автомобиля
- `{model}` - модель автомобиля
- `{year}` - год выпуска
- `{price}` - цена
- `{mileage}` - пробег
- `{color}` - цвет
- `{brandName}` - название компании

## Использование

### В компонентах
```typescript
import { SEOService } from '../../services/seo.service';

export class MyComponent implements OnInit {
  private readonly seoService = inject(SEOService);

  ngOnInit() {
    // Для статических страниц
    this.seoService.setSEO('home');
    
    // Для динамических страниц с данными
    this.seoService.setSEO('car', { brand: 'Toyota', model: 'Camry' });
    
    // Специальный метод для автомобилей
    this.seoService.setCarSEO(carData);
  }
}
```

### Добавление новой страницы
1. Добавьте конфигурацию в `SEO_CONFIG`:
```typescript
newPage: {
  title: 'Новая страница | Vam Auto',
  description: 'Описание новой страницы...',
  keywords: 'ключевые, слова, для, страницы'
}
```

2. Используйте в компоненте:
```typescript
this.seoService.setSEO('newPage');
```

### Изменение существующей конфигурации
Просто отредактируйте соответствующий объект в `SEO_CONFIG`. Изменения автоматически применятся ко всем страницам, использующим эту конфигурацию.

## Преимущества

- ✅ Централизованное управление SEO
- ✅ Легкое изменение конфигурации
- ✅ Поддержка динамических данных
- ✅ Консистентность между страницами
- ✅ Простота добавления новых страниц
- ✅ Автоматическое обновление всех meta тегов
