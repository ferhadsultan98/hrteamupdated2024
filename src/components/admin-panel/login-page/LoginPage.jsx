import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Örnek kullanıcı adı ve şifre kontrolü
    if (username === 'ferhadsultan' && password === 'farxad14') {
      // Başarılı girişte token oluşturulup saklanır
      const token = 'exampleToken';
      localStorage.setItem('authToken', token);
      navigate('/admin/dashboard'); // Dashboard'a yönlendirme
    } else {
      alert('Invalid credentials. Please try again.'); // Hata mesajı
    }
  };

  return (
    <div className="LoginBody">
      <div className="login-container">
        <div className="login-form">
          <h2>Admin Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
