//src/pages/Login.js
import { useState } from "react";
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // 這裡可以加入驗證帳號密碼的程式碼

    alert('登入成功！');
  };

  return (
    <div>
      <h1>登入</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">帳號：</label>
        <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label htmlFor="password">密碼：</label>
        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">登入</button>
      </form>
    </div>
  );
};

export default Login