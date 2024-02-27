FROM node:18.17-alpine

WORKDIR /webapp

COPY package.json package-lock.json ./

RUN npm install

COPY .output ./output

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD ["node", "/webapp/.output/server/index.mjs"]

# 도커 빌드
# docker build -t comis:1.0 .