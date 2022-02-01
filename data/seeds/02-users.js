const bcrypt = require('bcrypt')

const password = '123'

const hash = bcrypt.hashSync(password, 8)

const users = [
  { username: 'Test', password: hash },
  { username: 'alex', password: hash },
  { username: 'marshall', password: hash },
  { username: 'kelsey', password: hash },
  { username: 'adam', password: hash }
]

exports.users = users

exports.seed = function (knex) {
  return knex('users').insert(users)
};
