

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import { fetchPost } from '../services/api'; // Adjusted import based on your fetch function
import Post from '../components/Post';
import { Link } from 'react-router-dom';


const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userId = localStorage.getItem('userId');
  const navigate = useNavigate(); // Hook for navigation
  const email = localStorage.getItem('email');

  const handlePostDelete = (deletedPostId) => {
    setPosts(posts.filter(post => post._id !== deletedPostId));
  };


  const username = email.replace('@gmail.com', '');
const styles={

  main: {
    
          backgroundColor: '#bbf4d8',
          display: 'flex',
          flexDirection: 'column',
          gap:'10px',
          height:'100vh',
          overflowY: 'auto'

  },
  btn:{
    padding: '0.5rem 1rem',
  border: '2px ',
  backgroundColor: '#132828',
  color: 'white',
  cursor: 'pointer',
  borderRadius: '5px',
  fontSize: '0.8rem',
  margin:'-0.5rem 0',
  transition: 'background-color 0.3s ease, transform 0.3s ease'
  },
  logoutButton: {
    padding: '0.5rem 1rem',
    border: '2px',
    backgroundColor: '#c9ad2f',
    color: 'black',
    cursor: 'pointer',
    
    fontSize: '1rem',
    transition: 'background-color 0.3s ease, transform 0.3s ease'
  },
  boxes:{

      
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem'

  },
  link: {
    color: '#d2d4d4',
    textDecoration: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    transition: 'background-color 0.3s',
  },
  para:{
    
  margin:'1rem 4rem',
  fontFamily:'Helvetica'
  
  }
}



  useEffect(() => {
    if (!userId) {
      // Redirect to login if userId is not available
      navigate('/login');
      return;
    }

    const getPosts = async () => {
      try {
        const res = await fetchPost(userId); // Fetch all posts for the logged-in user
        setPosts(res);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
       //localStorage.removeItem('userId'); // Remove userId from localStorage

  }, [userId, navigate]);

  // const handleLogout = () => {
  //   localStorage.removeItem('userId'); // Remove userId from localStorage
  //   navigate('/login'); // Redirect to login page
  // };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div style={styles.main}>
          {/* <button onClick={handleLogout} style={styles.logoutButton}>Logout</button> Logout Button */}
            <li style={styles.li}><Link to="/new-post" style={styles.link}> <button style={styles.btn}>Create Post + </button> </Link></li>
            <div style={styles.para}>Hey {username}.....</div>
            <div style={styles.boxes} >
      
      {posts.length > 0 ? (
        posts.map((post) => (
          <Post key={post._id} post={post} onDelete={handlePostDelete} />
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
    
    </div>
  
  );
};



export default Home;
