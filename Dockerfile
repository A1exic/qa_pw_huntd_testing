FROM mcr.microsoft.com/playwright:v1.44.1-noble

WORKDIR /app

COPY package*.json tsconfig.json ./
RUN npm ci

RUN npx playwright install --with-deps

COPY . .

CMD ["npx", "playwright", "test", "--reporter=allure-playwright"]