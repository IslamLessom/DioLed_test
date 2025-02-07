# Используем официальный образ Node.js
FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /usr/src/app

# Копируем package.json и устанавливаем зависимости
COPY package*.json ./
RUN npm install

# Копируем остальные файлы приложения
COPY . .

# **Добавляем команду для сборки приложения**
RUN npm run build

# Открываем порт приложения
EXPOSE 3000

# Запускаем приложение
CMD ["npm", "run", "start"]
