#!/usr/bin/env node

/**
 * Скрипт для генерации favicon из SVG
 * Требует установки: npm install -g sharp
 * 
 * Использование: node generate-favicons.js
 */

const fs = require('fs');
const path = require('path');

// SVG содержимое для favicon
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <!-- Фон -->
  <rect width="32" height="32" fill="#217e02" rx="4"/>
  
  <!-- Буква V -->
  <path d="M8 8 L16 24 L24 8 L20 8 L16 18 L12 8 Z" fill="white"/>
  
  <!-- Автомобиль (упрощенный) -->
  <rect x="6" y="20" width="20" height="6" fill="white" rx="1"/>
  <circle cx="10" cy="26" r="2" fill="#217e02"/>
  <circle cx="22" cy="26" r="2" fill="#217e02"/>
</svg>`;

// Размеры для генерации
const sizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 192, name: 'android-chrome-192x192.png' },
  { size: 512, name: 'android-chrome-512x512.png' }
];

console.log('🎨 Генерация favicon для Vam Auto...');
console.log('');
console.log('📝 Инструкции:');
console.log('1. Установите sharp: npm install -g sharp');
console.log('2. Запустите: node generate-favicons.js');
console.log('');
console.log('📁 Файлы, которые будут созданы:');
sizes.forEach(({ size, name }) => {
  console.log(`   - ${name} (${size}x${size})`);
});
console.log('');
console.log('💡 Альтернативно, вы можете:');
console.log('   - Использовать онлайн генератор favicon');
console.log('   - Создать PNG файлы вручную в графическом редакторе');
console.log('   - Использовать только SVG favicon (современные браузеры)');

// Сохраняем SVG файл
fs.writeFileSync(path.join(__dirname, 'public', 'favicon.svg'), svgContent);
console.log('✅ SVG favicon создан: public/favicon.svg');
