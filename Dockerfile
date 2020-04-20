FROM node:12.16-alpine

ENV NODE_ENV production
ENV PORT 3001

WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

RUN npm install --production --silent
RUN npm install -g pm2 --silent

COPY . .

RUN npm run build

EXPOSE 3001

CMD ["npm", "run", "start"]