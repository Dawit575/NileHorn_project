import React, { useState } from 'react';
import style from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/Auth_context.jsx';
import { toast } from 'react-toastify';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { login } = useAuth();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await login(formData);

    if (result.success === true) {
      toast.success('Login Successful!');

      navigate('/admin');
    } else {
      toast.error(result.message);
    }
  };

  return (
    <div className={style.login_container}>
      <h1 className={style.login_text}>Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
        />

        <button className={style.login_btn} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
