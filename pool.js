const { Pool } = require('pg');
const { database } = require('pg/lib/defaults');
require("dotenv").config();
/* 
const devConfig = {
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
}

const proConfig = {
    connectionString: process.env.DATABASE_URL
}

exports.pool = new Pool(process.env.NODE_ENV === "production" ? proConfig : devConfig); */

exports.pool = new Pool(
    {
        user: "jsrrjrwfbkgzrf",
        host : "ec2-54-225-203-79.compute-1.amazonaws.com",
        database: "d125qk1gru47mv",
        password: "96109793cab756bc0d0036b1efaa13469d7ddcb4916c4428c69a110cb383b986",
        port: 5432

    }
)