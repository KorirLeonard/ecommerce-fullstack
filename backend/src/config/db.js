const sql = require("mssql");
require("dotenv").config();

console.log("DB_SERVER:", process.env.DB_SERVER);
console.log("DB_USER:", process.env.DB_USER);

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: false, // Use encryption if required
    trustServerCertificate: true, // Change to true if using self-signed certificates
  },
};

async function connectDB() {
  try {
    await sql.connect(config);
    console.log("Connected to the database successfully.");
  } catch (err) {
    console.error("Database connection failed:", err);
  }
}
module.exports = { sql, connectDB };
