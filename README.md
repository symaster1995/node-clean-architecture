# A simple Node.js REST API boilerplate using Clean Architecture

## Project Setup

```
git clone https://github.com/symaster1995/node-clean-architecture.git
cd node-clean-architecture
npm install
npm run dev
```

Initialize database

```
npx sequelize-cli db:migrate:all
npx sequelize-cli db:seed:all
```

Use [http://localhost:5000/api/v1/users](http://localhost:5000/api/v1/users) 

Check infrastructure/database/seeders/new-demo-user.js for the demo user

Use [http://localhost:5000/api/v1/login](http://localhost:5000/api/v1/login) to login.

## Testing

- `npm run test`: Run all test
- `npm run test:unit`: Run unit test

## Clean Architecture

This project uses "[Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)" concept

### Layers Diagram

![Layers of Clean Architecture](/doc/ca.jpg)

### The Dependency Rule

The overriding rule that makes this architecture work is The Dependency Rule. This rule says that source code dependencies can only point inwards. Nothing in an inner circle can know anything at all about something in an outer circle.

### Folder Structure

```
project
    └ node_modules
    └ src
        └ core
            └ entity
            └ repository
            └ use_cases
        └ infrastructure
            └ application
            └ config
            └ database
            └ helper
            └ jwt
            └ routes
            └ utils
        └ interfaces
            └ controllers
            └ data_provider
            └ serializers
    └ test
    └ index.js
```

### Work Flow

![Work Flow](/doc/wflow.svg)

### Tech Used
- node
- express
- argon2
- awilix
- awilix-express
- mysql2
- sequelize
- jsonwebtoken
- morgan
- chai
- eslint
- mocha