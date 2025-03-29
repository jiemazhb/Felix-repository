const { Sequelize } = require('sequelize');
require('dotenv').config(); // 加载环境变量

// 从环境变量中读取数据库配置
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql', // 数据库类型
    logging: false, // 禁用 Sequelize 的 SQL 日志
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

module.exports = { sequelize, connectDB };
