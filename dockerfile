FROM node:22

WORKDIR /home/app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run","start:prod"]
