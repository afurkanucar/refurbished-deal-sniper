# Hafif ve güvenli bir imaj kullanıyoruz
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
# Güvenlik için root olmayan bir kullanıcıyla çalıştır
USER node
CMD ["node", "src/server.js"]

