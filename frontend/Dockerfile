FROM node:10 AS builder

COPY package.json package-lock.json /src/
WORKDIR /src
RUN npm install
COPY . /src/
RUN npm run build

FROM nginx:1.17-alpine

COPY nginx/ /etc/nginx/conf.d
COPY --from=builder /src/dist/jga/ /usr/share/nginx/html/

