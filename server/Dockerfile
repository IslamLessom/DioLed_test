# Используем официальный образ Node.js
FROM node:19-alpine

# Устанавливаем рабочую директорию
WORKDIR /src

# Копируем package.json и устанавливаем зависимости
COPY package.json package-lock.json ./
RUN npm install

# Устанавливаем ts-node глобально
RUN npm install -g ts-node

# Копируем остальные файлы
COPY . .

# Открываем порт 3000 для Express приложения
EXPOSE 3000

# Запускаем сервер
CMD ["ts-node", "src/index.ts"]