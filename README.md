We got your back, the project already uses docker so you can build docker image 
1.  Clone this repo
2.  Copy the  `.env.example`  file over to your own  `.env`  file and update the variables
3.  Run  `docker-compose up -d`  to setup local environment with Docker

## Installation

### local dev

```bash
npm install
```

###  Run Migrations
Migrations are created in our database in Docker and seeds will be pushed.
```bash
$ prisma migrate dev 
```

## Description

  

[Express](https://expressjs.com/es/) Node framework😎.
[PRISMA](http://prisma.io/) ORM starter Package.
  
```

## Running the app


```bash

# development

$ npm run start

```
###  Swagger

```bash

# development


 GET    | https://apok-test.onrender.com/node/parents
 GET    | https://apok-test.onrender.com/node/:id
 GET    | https://apok-test.onrender.com/node/:id/children
 DELETE | https://apok-test.onrender.com/node/:id   
 POST   | https://apok-test.onrender.com/node #body ={ parenId? type int}


 
```