const express = require('express');
const app = express();

// 中间件：解析 JSON 请求体
app.use(express.json());

// 模拟用户数据
let users = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 },
    { id: 3, name: 'Alice Johnson', age: 35 },
];

// 获取所有用户
app.get('/api/users', (req, res) => {
    res.json(users);
});

// 获取单个用户
app.get('/api/users/:id', (req, res) => {
    const user = users.find((u) => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
});

// 添加新用户
app.post('/api/users', (req, res) => {
    const { name, age } = req.body;
    if (!name || !age) {
        return res.status(400).json({ message: 'Name and age are required' });
    }
    const newUser = {
        id: users.length + 1,
        name,
        age,
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// 更新用户信息
app.put('/api/users/:id', (req, res) => {
    const { name, age } = req.body;
    const user = users.find((u) => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    if (name) user.name = name;
    if (age) user.age = age;
    res.json(user);
});

// 删除用户
app.delete('/api/users/:id', (req, res) => {
    const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));
    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }
    users.splice(userIndex, 1);
    res.status(204).send();
});

// 启动服务器
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
