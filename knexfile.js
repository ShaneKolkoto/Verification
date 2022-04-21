// Update with your config settings.
const dbCreds = require('./config/dbCreds')
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: dbCreds.DB_NAME,
      user:     dbCreds.DB_USER,
      password: dbCreds.DB_PASSWORD,
      host: dbCreds.DB_HOST,
      port: dbCreds.DB_PORT
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  },

  staging: {
    client: 'pg',
    connection: {
      database: dbCreds.DB_NAME,
      user:     dbCreds.DB_USER,
      password: dbCreds.DB_PASSWORD,
      host: dbCreds.DB_HOST,
      port: dbCreds.DB_PORT
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  },

  production: {
    client: 'pg',
    connection: {
      database: dbCreds.DB_NAME,
      user:     dbCreds.DB_USER,
      password: dbCreds.DB_PASSWORD,
      host: dbCreds.DB_HOST,
      port: dbCreds.DB_PORT
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  }
};
