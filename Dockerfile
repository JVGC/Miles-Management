FROM node:18-alpine

WORKDIR /usr/app


ENV NODE_ENV=development

COPY yarn.lock .
COPY package.json .
RUN yarn install


COPY . .

CMD ["yarn", "dev"]

EXPOSE 3000