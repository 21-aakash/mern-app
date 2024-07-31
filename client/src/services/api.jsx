import axios from 'axios';
import Register from '../pages/register';

// Create an axios instance with a base URL
const API = axios.create({ baseURL: 'http://localhost:8800/api' });

// Auth endpoints
export const register = async (userData) => {
  try {
    const response = await API.post('/auth/register', userData);
   
    console.log(response.data);
    console.log("registration done....");
    alert("Hurry! Registration done...")
    return response.data;


  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};



export const login = async (userData) => {
  try {
    const response = await API.post('/auth/login', userData);
    alert("Hurry! Login done..");

    return response.data;
      
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};


// export const fetchPosts = async () => {
//   try {
//     const response = await API.get('/posts'); 
//     return response;
//   } catch (error) {
//     throw error;
//   }
// };

// Post endpoints
export const fetchPost = async (userId) => {
  try {
    const response = await API.get(`/posts/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching post with id ${userId}:`, error);
    throw error;
  }
};

export const createPost = async (postData) => {
  try {
    const response = await API.post('/posts', postData);
    return response.data;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
};


export const updatePost = async (id, postData) => {
  try {
    const response = await API.put(`/posts/${id}`, postData);
    return response.data;
  } catch (error) {
    console.error(`Error updating post with id ${id}:`, error);
    throw error;
  }
};
//delete a post

export const deletePost = async (id, userId) => {
  try {
    const response = await API.delete(`/posts/${id}`, { data: { userId } });
    return response.data;
  } catch (error) {
    console.error(`Error deleting post with id ${id}:`, error);
    throw error;
  }
};

// export const deletePost = async (postId) => {
//   try {
//     const response = await API.delete(`/posts/${postId}`);
//     return response.data;
//   } catch (error) {
//     console.error('Error deleting post:', error);
//     throw error;
//   }
// };

export const likePost = async (id, userId) => {
  try {
    const response = await API.put(`/posts/${id}/like`, { userId });
    return response.data;
  } catch (error) {
    console.error(`Error liking post with id ${id}:`, error);
    throw error;
  }
};

// User endpoints
export const fetchUser = async (id) => {
  try {
    const response = await API.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with id ${id}:`, error);
    throw error;
  }
};

export const updateUser = async (id, userData) => {
  try {
    const response = await API.put(`/users/${id}`, userData);
    return response.data;
  } catch (error) {
    console.error(`Error updating user with id ${id}:`, error);
    throw error;
  }
};

export const deleteUser = async (id, userId) => {
  try {
    const response = await API.delete(`/users/${id}`, { data: { userId } });
    return response.data;
  } catch (error) {
    console.error(`Error deleting user with id ${id}:`, error);
    throw error;
  }
};

export const followUser = async (id, userId) => {
  try {
    const response = await API.put(`/users/${id}/follow`, { userId });
    return response.data;
  } catch (error) {
    console.error(`Error following user with id ${id}:`, error);
    throw error;
  }
};

export const unfollowUser = async (id, userId) => {
  try {
    const response = await API.put(`/users/${id}/unfollow`, { userId });
    return response.data;
  } catch (error) {
    console.error(`Error unfollowing user with id ${id}:`, error);
    throw error;
  }
};
