import axios from 'axios';
import { useQuery } from 'react-query';
import { BlogPost } from '../interfaces'; // Import the BlogPost interface

export const fetchPosts = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const postsFromApi = response.data;
    // console.log(postsFromApi,'postsFromApi')

    // Add created_at and updated_at fields to each post
    // const postsWithTimestamps: BlogPost[] = postsFromApi.map((post: any) => ({
    //   id: post.id,
    //   title: post.title,
    //   body: post.body,
    //   created_at: new Date(), // Generate or parse the created_at timestamp
    //   updated_at: new Date(), // Generate or parse the updated_at timestamp
    // }));
    const postsWithTimestamps: BlogPost[] = postsFromApi.map((post: any) => ({
      id: post.id,
      title: post.title,
      body: post.body,
      created_at: new Date().toISOString(), // Convert to ISO string
      updated_at: new Date().toISOString(), // Convert to ISO string
    }));
    
    

    return postsWithTimestamps;
  } catch (error) {
    console.error('An error occurred while fetching posts:', error);
    return [];
  }
};

export const usePosts = () => {
  return useQuery('posts', fetchPosts);
};