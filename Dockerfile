
# Stage 1: Build React app
FROM node:18 as build

WORKDIR /app
COPY client ./client
WORKDIR /app/client
RUN npm install && npm run build

# Stage 2: Serve using Express
FROM node:18
WORKDIR /app
COPY server ./server
COPY --from=build /app/client/dist ./client/dist
WORKDIR /app/server
RUN npm install express

CMD ["node", "index.js"]
