# Stage 1: Build React app
FROM node:18 AS build
WORKDIR /app
COPY client ./client
WORKDIR /app/client
RUN npm install && npm run build

# Stage 2: Serve using Express
FROM node:18
WORKDIR /app
COPY server ./server
COPY --from=build /app/client/build ./server/public
WORKDIR /app/server
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
