#!/usr/bin/env node

/**
 * Скрипт для генерации favicon из SVG
 * Требует установки: npm install -g sharp
 * 
 * Использование: node generate-favicons.js
 */

const fs = require('fs');
const path = require('path');

// Проверяем, установлен ли sharp
let sharp;
try {
  sharp = require('sharp');
} catch (error) {
  console.log('❌ Sharp не установлен. Установите его командой:');
  console.log('   npm install -g sharp');
  console.log('');
  console.log('📝 Альтернативные способы генерации PNG:');
  console.log('1. Онлайн генератор: https://realfavicongenerator.net/');
  console.log('2. Онлайн генератор: https://favicon.io/');
  console.log('3. Используйте только SVG favicon (современные браузеры)');
  process.exit(1);
}

// Читаем SVG файл
const svgPath = path.join(__dirname, 'public', 'favicon.svg');
if (!fs.existsSync(svgPath)) {
  console.log('❌ Файл favicon.svg не найден в папке public/');
  process.exit(1);
}

const svgContent = fs.readFileSync(svgPath, 'utf8');

// Размеры для генерации
const sizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 192, name: 'android-chrome-192x192.png' },
  { size: 512, name: 'android-chrome-512x512.png' }
];

console.log('🎨 Генерация PNG favicon из SVG для Vam Auto...');
console.log('');

// Генерируем PNG файлы
async function generateFavicons() {
  try {
    for (const { size, name } of sizes) {
      const outputPath = path.join(__dirname, 'public', name);
      
      await sharp(Buffer.from(svgContent))
        .resize(size, size)
        .png()
        .toFile(outputPath);
      
      console.log(`✅ Создан: ${name} (${size}x${size})`);
    }
    
    console.log('');
    console.log('🎉 Все favicon файлы успешно созданы!');
    console.log('');
    console.log('📁 Созданные файлы:');
    sizes.forEach(({ size, name }) => {
      console.log(`   - public/${name} (${size}x${size})`);
    });
    console.log('');
    console.log('🚀 Теперь можете собрать проект: npm run build');
    
  } catch (error) {
    console.error('❌ Ошибка при генерации favicon:', error.message);
    process.exit(1);
  }
}

generateFavicons();
