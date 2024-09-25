import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

export const db = mysql.createConnection({
  host: process.env.NODE_HOST,
  user: process.env.NODE_USER,
  database: process.env.NODE_DATABASE,
  password: process.env.NODE_PASSWORD,
});

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
    return;
  }
  console.log("Conectado ao banco de dados!");
});