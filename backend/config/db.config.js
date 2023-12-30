//import mysql2 with promise
const mysql = require('mysql2/promise');
//prepare connection parametrs  used to connect to the 
//database using mysql2
const dbconfig = {
    host:process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 10
}
//create connection pool
const pool = mysql.createPool(dbconfig);
//prepare a function that will execute sql queries asynchronously
async function executeQuery(sql, params) {
  try {
    // const connection = await pool.getConnection();
    const [results, fields] = await pool.execute(sql, params);
    // connection.release();
    return results;
  } catch (error) {
    throw error;
  }
}
// export funtion
module.exports = {
  executeQuery
}



