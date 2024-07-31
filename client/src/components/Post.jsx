
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { deletePost } from '../services/api'; // Import your deletePost API function

// const Post = ({ post, onDelete }) => {
//   const navigate = useNavigate();

//   const handleDelete = async () => {
//     try {
//       await deletePost(post._id); // Call your delete API function
//       if (onDelete) {
//         onDelete(post._id); // Notify parent component to remove post from UI
//       }
//     } catch (error) {
//       console.error('Error deleting post:', error);
//     }
//   };

//   const styles = {
//     container: {
//       border: '1px solid #ccc',
//       borderRadius: '8px',
//       padding: '20px',
//       margin: '20px 0',
//       backgroundColor: '#3dddbb',
//       boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//       maxWidth: '400px',
//       maxHeight: '400px',
//       margin: '0 auto',
//     },
//     image: {
//       width: '100%',
//       height: 'auto',
//       borderRadius: '8px',
//       marginBottom: '10px',
//     },
//     desc: {
//       fontSize: '16px',
//       color: '#333',
//       marginBottom: '10px',
//     },
//     likes: {
//       fontSize: '14px',
//       color: '#777',
//     },
//     button: {
//       marginTop: '10px',
//       padding: '10px 20px',
//       borderRadius: '4px',
//       border: 'none',
//       backgroundColor: '#dc3545',
//       color: '#fff',
//       cursor: 'pointer',
//       transition: 'background-color 0.3s',
//     },
//     buttonHover: {
//       backgroundColor: '#c82333',
//     },
//   };

//   return (
//     <div style={styles.container}>
//       {post.img && <img src={post.img} alt="Post" style={styles.image} />}
//       <p style={styles.desc}>{post.desc}</p>
//       <span style={styles.likes}>Likes: {post.likes.length}</span>
//       <button
//         style={styles.button}
//         onClick={handleDelete}
//       >
//         Delete Post
//       </button>
//     </div>
//   );
// };

// export default Post;










 import { deletePost } from '../services/api'; // Import your deletePost API function



import React from 'react';

const Post = ({ post,onDelete }) => {

  console.log(post);
  const {_id : postId , userId: Id} = post;
  

  const handleDelete = async () => {
    try {
      await deletePost(postId , Id); // Call your delete API function
      if (onDelete) {
        onDelete(postId); // Notify parent component to remove post from UI
      }
      console.log("post deleted");
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };
  
  const styles = {
    
    container: {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '20px',
      margin: '20px 0',
      backgroundColor: '#3dddbb',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      maxWidth: '400px',
      maxHeight: '400px',
      margin: '0 auto',
    },
    image: {
      width: '100%',
      height: 'auto',
      borderRadius: '8px',
      marginBottom: '10px',
    },
    likes: {
            fontSize: '20px',
            color: '#777',
          },
          button: {
            marginTop: '10px',
            padding: '2px 5px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#dc3545',
            color: '#fff',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          },
    desc: {
      fontSize: '16px',
      color: '#333',
      marginBottom: '10px',
    },
    likes: {
      fontSize: '14px',
      color: '#777',
    },
    boxes:
    {
      display:'flex',
      justifyContent: 'space-between',
    }
  };

  return (
    <div style={styles.container}>

      {post.img && <img src={post.img} alt="Post" style={styles.image} />}
<div style={styles.boxes}>

<div>
<p style={styles.desc}>{post.desc}</p>
<span style={styles.likes}>Likes: {post.likes.length}</span>

</div>

<button
        style={styles.button}
        onClick={handleDelete}
      >
        Delete Post
      </button>
</div>
     
     


    </div>
  );
};

export default Post;