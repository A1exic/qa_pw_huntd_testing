FROM mcr.microsoft.com/playwright:v1.44.1-noble

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

CMD ["npx", "playwright", "test", "--reporter=allure-playwright"]