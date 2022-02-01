const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const authRouter = require('./auth/auth-router');
const userRouter = require('./users/users-router')
const itemsRouter = require('./items/items-router')
const marketsRouter = require('./markets/market-router')

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/auth', authRouter)
server.use('/api/users', userRouter)
server.use('/api/markets', marketsRouter)
server.use('/api/items', itemsRouter)


server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server


