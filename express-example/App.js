const express = require('express');
const cors = require('cors');

const app = express(); // 这里需要先定义 app
app.use(cors());

const mysql = require('mysql2'); // 导入 mysql2 模块

const port = 3000;

// 创建 MySQL 连接池（推荐连接池来提高性能）
const db = mysql.createPool({
  host: 'localhost',       // 本地数据库地址
  user: 'root',            // 数据库用户名
  password: 'Zhb290798466@', // 数据库密码
  database: 'customer', // 数据库名称
});

// 测试数据库连接
db.getConnection((err, connection) => {
  if (err) {
    console.error('数据库连接失败:', err.message);
  } else {
    console.log('成功连接到数据库');
    connection.release(); // 释放连接
  }
});

// 创建 API 路由
app.get('/', (req, res) => {
  res.send('欢迎访问 Express 应用程序');
});

// 查询数据库示例
app.get('/users', (req, res) => {
 
  const query = 'SELECT * FROM customer'; // 替换为你的表名
  db.query(query, (err, results) => {
    if (err) {
      console.error('查询失败:', err.message);
      res.status(500).send('数据库查询出错');
    } else {
      res.json(results);
    }
  });
});

// 启动服务器
app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}`);
});
