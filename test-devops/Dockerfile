# Node 20 versiyonunu kullanıyoruz
FROM node:20-alpine

# Uygulama dizinine geç
WORKDIR /app

# package.json ve package-lock.json dosyalarını kopyala
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm install

# Tüm dosyaları kopyala
COPY . .

# Build işlemini yap
RUN npm run build

# Portu dışa aç
EXPOSE 3000

# Uygulamayı başlat
CMD ["npm", "start"]
