# Используем официальный образ Node.js
FROM node:14-alpine

# Устанавливаем рабочую директорию
WORKDIR /usr/src/app

# Копируем package.json и устанавливаем зависимости
COPY package*.json ./
RUN npm install

# Копируем остальные файлы приложения
COPY . .

# Экспортируем порт
EXPOSE 3001

# Запускаем приложение
CMD ["npm", "run", "start"]
