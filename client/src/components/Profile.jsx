import React from 'react';

const UserProfile = ({ user }) => {
  const styles = {
    container: {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '20px',
      margin: '20px 0',
      backgroundColor: '#fff',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      maxWidth: '600px',
      margin: '0 auto',
      textAlign: 'center',
    },
    profilePicture: {
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      objectFit: 'cover',
      marginBottom: '20px',
    },
    username: {
      fontSize: '24px',
      color: '#333',
      marginBottom: '10px',
    },
    desc: {
      fontSize: '16px',
      color: '#777',
      marginBottom: '10px',
    },
    info: {
      fontSize: '14px',
      color: '#555',
      marginBottom: '5px',
    },
  };

  return (
    <div style={styles.container}>
      {user.profilePicture && <img src={user.profilePicture} alt="Profile" style={styles.profilePicture} />}
      <h2 style={styles.username}>{user.username}</h2>
      <p style={styles.desc}>{user.desc}</p>
      <p style={styles.info}>City: {user.city}</p>
      <p style={styles.info}>From: {user.from}</p>
      <p style={styles.info}>Relationship: {user.relationship}</p>
    </div>
  );
};

export default UserProfile;
