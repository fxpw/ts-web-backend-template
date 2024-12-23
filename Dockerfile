# Используем официальный Node.js образ
FROM node:16

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все исходники приложения
COPY . .

# Устанавливаем Nodemon для разработки
RUN npm install -D nodemon tsx

# Запускаем приложение в режиме разработки
CMD ["sh", "-c", "if [ \"$NODE_ENV\" = 'production' ]; then npm run build && node ./dist/index.js; else npx nodemon --inspect=0.0.0.0:9229 ./src/index.ts; fi"]
