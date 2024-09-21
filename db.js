import mysql from "mysql";

export const db = mysql.createConnection({
  host: process.env.NODE_HOST,
  user: process.env.NODE_USER,
  database: process.env.NODE_DATABASE,
  password: process.env.NODE_PASSWORD,
});
