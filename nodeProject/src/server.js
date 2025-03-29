const app = require('./app');
const dotenv = require('dotenv');
const { connectDB } = require('./config/dbConfig'); 
// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 5000;

// 连接数据库
connectDB();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
