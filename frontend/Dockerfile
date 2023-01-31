FROM node:14.15.4
WORKDIR /client

COPY package.json .

ADD . .

RUN npm i


EXPOSE 3000

CMD ["npm", "start"]