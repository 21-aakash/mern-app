// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/authcontext';

import { useNavigate } from 'react-router-dom'; // For navigation



const Navbar = () => {
  const { logout ,  isLoggedIn} = useAuth();
 const imageurl= 'https://img.icons8.com/?size=100&id=xX6kidA5kQwo&format=png&color=000000';
 const navigate = useNavigate(); // Hook for navigation
//  const userId = localStorage.getItem('userId');
//  let flag= false; //

//  if(userId){
//   flag= true;
//  }

 const handleLogout = () => {
  localStorage.removeItem('userId'); // Remove userId from localStorage
 logout();
  
  navigate('/login'); // Redirect to login page
};



  const styles = {
    nav: {

     background:'#132828',
      padding: '3px',
      fontSize: '22px',
      fontFamily: 'Helvetica', 
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    ul: {
      listStyleType: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
      fontSize:'18px'
    },
    li: {
      display: 'inline',
    },
    link: {
      color: '#d2d4d4',
      textDecoration: 'none',
      padding: '8px 16px',
      borderRadius: '4px',
      transition: 'background-color 0.3s',
    },
    linkHover: {
      backgroundColor: '#555',
    },
    main:{
      display:'flex',
      alignItems:'center'
    },

    btn:{
      padding: '0.5rem 1rem',
    border: '2px solid #9e8329',
    backgroundColor: 'transparent',
    color: 'white',
    cursor: 'pointer',
    borderRadius: '5px',
    fontSize: '1rem',
    transition: 'background-color 0.3s ease, transform 0.3s ease'
    }
    
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.main}><div><img src={imageurl} style={{ width: '50px', height: '50px' }}  alt="" /></div>
      <div style={styles.li}><Link to="/" style={styles.link}>KOKO.app</Link></div></div>
    
      <ul style={styles.ul}>
        {!isLoggedIn ? (
          <>
            <li style={styles.li}><Link to="/login" style={styles.link}><button style={styles.btn}>Login</button></Link></li>
            <li style={styles.li}><Link to="/register" style={styles.link}><button style={styles.btn}>Register</button></Link></li>
          </>
        ) : (
          <>

           <li style={styles.li}>  <button onClick={handleLogout} style={styles.btn}>LogOut</button> </li>


          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
