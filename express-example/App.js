const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json()); 

// Database connection pool
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Zhb290798466@',
  database: 'customer',
  connectionLimit: 20, // Set a connection pool limit
});

// Check database connection
db.getConnection((err, connection) => {
  if (err) {
    console.error('数据库连接失败:', err.message);
  } else {
    console.log('成功连接到数据库');
    connection.release();
  }
});

// Routes
app.get('/', (req, res) => {
  res.send('欢迎访问 Express 应用程序');
});

app.post('/users', (req, res) => {

  const person = req.body;

  if (
    !person.house_number || !person.street || !person.zip_code ||
    !person.email || !person.first_name || !person.last_name
  ) {
    return res.status(400).send("Missing required fields");
  }

  const query = `
    INSERT INTO customer (house_number, street, zip_code, email, first_name, last_name) 
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  db.query(
    query,
    [
      person.house_number,
      person.street,
      person.zip_code,
      person.email,
      person.first_name,
      person.last_name,
    ],
    (err, results) => {
      if (err) {
        console.error('Insert failed:', err.message);
        res.status(500).send('Insert data failed');
      } else {
        res.status(201).json({ message: 'User added successfully', results });
      }
    }
  );
});

app.get('/users', (req, res) => {
  console.log('Incoming request:', req.method, req.url);

  const query = 'SELECT * FROM customer';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Query failed:', err.message);
      res.status(500).send('Database query failed');
    } else {
      res.json(results);
    }
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
