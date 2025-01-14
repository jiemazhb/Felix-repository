import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]); // 用于存储用户数据
  const [loading, setLoading] = useState(true); // 加载状态
  const [error, setError] = useState(null); // 错误状态

  useEffect(() => {
    // 调用后端 API 获取用户数据
    axios.get('http://localhost:3000/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>加载中...</div>;
  if (error) return <div>加载失败: {error}</div>;

  return (
    <div className="App">
      <h1>用户列表</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            ID: {user.id}, Name: {user.name}, Email: {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;