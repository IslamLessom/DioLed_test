FROM node:18-alpine AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Этап запуска
FROM node:18-alpine AS production
WORKDIR /usr/src/app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY package*.json ./
RUN npm install --only=production
EXPOSE 3000
CMD ["npm", "start"]
