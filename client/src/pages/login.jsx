import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/api';
import { useAuth } from '../context/authcontext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login: setLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      
      const res = await login({ email, password });
      console.log(res);

      const { _id: userId, email:mail } = res; 
      
      console.log(userId);

      //Store userId in local storage or state management
      localStorage.setItem('userId', userId);
      console.log(email);
      localStorage.setItem('email', mail);
      
// Update the context
setLoggedIn(true);


      navigate('/');
      console.log("Login successful");
     // console.log(user.body);

    } catch (err) {
      console.log(err);
    }
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#c4c4c4',
      
       
    },
    form: {
     
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      borderRadius: '8px',
      backgroundColor: 'white',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    input: {
      
      fontSize: '22px',
      fontFamily: 'Helvetica',
      width: '350px',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '4px',
      border: '1px solid #ccc',
    },
    button:{
      padding: '0.5rem 1rem',
    border: '2px',
    backgroundColor: '#c9ad2f',
    color: 'white',
    cursor: 'pointer',
    borderRadius: '5px',
    fontSize: '1rem',
    transition: 'background-color 0.3s ease, transform 0.3s ease'
    },
    
    buttonHover: {
      backgroundColor: '#0056b3',
    },
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
        
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
