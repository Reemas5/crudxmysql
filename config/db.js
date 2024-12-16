const mysql = require('mysql2/promise'); 




const dot_env = require("dotenv")
dot_env.config()

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: '', 
    database: process.env.DATABASE,
    waitForConnections: true,
    connectionLimit: 10, 
    queueLimit: 0,      
})  
const testDatabaseConnection = async () => {
    try {
        const connection = await pool.getConnection();
        console.log('Connected to database');
        
    } catch (err) {
        console.error('Error:', err.message);
    }
};

testDatabaseConnection(); 





module.exports = {
    pool
};