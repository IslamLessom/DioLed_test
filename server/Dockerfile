# Используем официальный образ Node.js
FROM node:14-alpine

# Устанавливаем рабочую директорию
WORKDIR /usr/src/app

# Копируем package.json и устанавливаем зависимости
COPY package*.json ./
RUN npm install

# Копируем остальные файлы приложения
COPY . .

# Открываем порт приложения
EXPOSE 5000

# Запускаем приложение
CMD ["node", "src/index.js"]
