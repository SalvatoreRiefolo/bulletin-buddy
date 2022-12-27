FROM node:18-alpine as build
WORKDIR /app

RUN npm install -g @angular/cli

COPY package.json .
RUN npm install

COPY . .
RUN ng build

FROM nginx as runtime

EXPOSE 80

COPY --from=build /app/dist/bulletin-buddy-client /usr/share/nginx/html
