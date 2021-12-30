const { Pool } = require('pg');
exports.pool = new Pool({
    user: 'jsrrjrwfbkgzrf',
    host: 'ec2-54-225-203-79.compute-1.amazonaws.com',
    database: 'd125qk1gru47mv',
    password: '96109793cab756bc0d0036b1efaa13469d7ddcb4916c4428c69a110cb383b986',
    port: 5432
});
