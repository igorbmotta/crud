import mysql from 'mysql'

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'igordev123',
    database: 'crud'
})