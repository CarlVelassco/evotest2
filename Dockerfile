
# 🔧 Стадия 1: сборка клиента
FROM node:18-alpine AS client-build

WORKDIR /app
COPY . .

RUN npm install
RUN npm run client:build

# 🗃 Стадия 2: сервер
FROM node:18-alpine AS server

WORKDIR /app

COPY --from=client-build /app /app

RUN npm install --omit=dev

EXPOSE 3000

CMD ["npm", "start"]
