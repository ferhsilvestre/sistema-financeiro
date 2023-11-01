FROM node:20.9.0-alpine3.18

WORKDIR /app

COPY . .

RUN echo n | npm install --global @angular/cli@16.2.8
RUN echo n | npm install

EXPOSE 4206

CMD ["npm","run", "dev"]