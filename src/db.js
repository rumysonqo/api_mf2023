import {createPool} from 'mysql2/promise'
import {DB_PORT, DB_DATABASE, DB_USER, DB_PASSWORD, DB_HOST} from './config.js'
export const cnx=createPool({
    host:DB_HOST,
    user:DB_USER,
    password:DB_PASSWORD,
    port:DB_PORT,
    database:DB_DATABASE
});