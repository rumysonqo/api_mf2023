import {createPool} from 'mysql2/promise'
export const cnx=createPool({
    host:'localhost',
    user:'root',
    password:'Norte1348',
    port:3306,
    database:'siga'
});