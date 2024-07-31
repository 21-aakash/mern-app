
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { createPost } from '../services/api';

// const NewPost = () => {
//   const [desc, setDesc] = useState('');
//   const [img, setImg] = useState(null); // Change to handle file objects
//   const navigate = useNavigate();
//   const userId = localStorage.getItem('userId');

//   const handleFileChange = (e) => {
//     setImg(e.target.files[0]); // Get the file object
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Create FormData object
//     const formData = new FormData();
//     formData.append('userId', userId);
//     formData.append('desc', desc);
//     if (img) {
//       formData.append('img', img); // Append the file
//     }

//     try {
//       await createPost(formData);
//       navigate('/');
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const styles = {
//     container: {
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       height: '100vh',
//       backgroundColor: '#3dddbb',
//     },
//     form: {
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       padding: '20px',
//       borderRadius: '8px',
//       backgroundColor: '#fff',
//       boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//     },
//     input: {
//       width: '300px',
//       padding: '10px',
//       margin: '10px 0',
//       borderRadius: '4px',
//       border: '1px solid #ccc',
//       fontSize: '22px',
//       fontFamily: 'Helvetica',
//     },
//     button: {
//       padding: '10px 20px',
//       borderRadius: '4px',
//       border: 'none',
//       backgroundColor: '#007bff',
//       color: '#fff',
//       cursor: 'pointer',
//       transition: 'background-color 0.3s',
    
//     buttonHover: {
//      };

//   return (
//     <div style={styles.container}>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <input
//           type="text"
//           placeholder="Description"
//           value={desc}
//           onChange={(e) => setDesc(e.target.value)}
//           required
//           style={styles.input}
//         />
//         <input
//           type="file"
//           accept=".png, .jpeg, .jpg"
//           onChange={handleFileChange}
//           style={styles.input}
//         />
//         <button type="submit" style={styles.button}>
//           Create Post
//         </button>
//       </form>
//     </div>
//   );
// };

// export default NewPost;


//  backgroundColor: '#0056b3',
//     },
//   





import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../services/api';

const NewPost = () => {
  const [desc, setDesc] = useState('');
  const [img, setImg] = useState('');
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = { 
      userId: userId,  
      desc, 
      img 
    };
    
    try {
      await createPost(newPost);
      navigate('/');
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
      backgroundColor: '#3dddbb',
     
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      borderRadius: '8px',
      backgroundColor: '#fff',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    input: {
      width: '300px',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '4px',
      border: '1px solid #ccc',
      fontSize: '22px',
      fontFamily: 'Helvetica',
    },
    button: {
      padding: '10px 20px',
      borderRadius: '4px',
      border: 'none',
      backgroundColor: '#007bff',
      color: '#fff',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={img}
          onChange={(e) => setImg(e.target.value)}
          style={styles.input}
        />

        



        <button type="submit" style={styles.button}>
          Create Post
        </button>
      </form>
    </div>
  );
};

export default NewPost;
