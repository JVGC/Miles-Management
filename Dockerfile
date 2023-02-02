FROM node:18-alpine3.16

WORKDIR /usr/app


ENV NODE_ENV=development

COPY yarn.lock .
COPY package.json .
RUN yarn install
RUN yarn postinstall

COPY . .

CMD ["yarn", "dev"]

EXPOSE 3000