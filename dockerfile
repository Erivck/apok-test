FROM node:22

WORKDIR /home/app

COPY . .

EXPOSE 3000

CMD ["npm", "start"]