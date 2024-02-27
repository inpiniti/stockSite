FROM node:18.17-alpine

# 작업 디렉토리 설정
WORKDIR /webapp

# node_modules 폴더와 빌드된 파일을 Docker 이미지에 복사
COPY node_modules ./node_modules
COPY .output ./output

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

# 애플리케이션 실행
CMD ["node", "/webapp/output/server/index.mjs"]

# 도커 빌드
# docker build -t comis:1.0 .