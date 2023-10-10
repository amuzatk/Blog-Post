import axios from 'axios';
import { useQuery } from 'react-query';
import { BlogPost } from '../interfaces'; 

export const fetchPosts = async () => {
  try {
    
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const postsFromApi = response.data;

    const postsWithTimestamps: BlogPost[] = postsFromApi.map((post: any) => ({
      id: post.id,
      title: post.title,
      body: post.body,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(), 
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