# Используем официальный образ Node.js
FROM node:18-alpine AS build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json и устанавливаем зависимости
COPY package.json package-lock.json ./
RUN npm i -D encoding

# Копируем остальные файлы и собираем приложение
COPY . .
RUN CI=false npm run build 

# Используем Nginx для обслуживания статических файлов
FROM nginx:stable-alpine
COPY --from=build /app/out /usr/share/nginx/html

# Открываем порт 80
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
