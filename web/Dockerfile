FROM node:20.9.0-alpine3.18

# Instala o Yarn globalmente se ainda não estiver instalado
RUN command -v yarn >/dev/null 2>&1 || { npm install -g yarn@1.22.17; }

WORKDIR /app

COPY . .

# Usa o Yarn para instalar as dependências
RUN yarn global add @angular/cli@16.2.8
RUN yarn install

EXPOSE 4206

CMD ["yarn", "run", "dev"]

