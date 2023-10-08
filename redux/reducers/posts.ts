// redux/reducers/posts.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Post {
  id: number;
  title: string;
  created_at: string; // Change to string for ISO date strings
  updated_at: string; // Change to string for ISO 
}


interface PostsState {
  data: Post[];
  loading: boolean;
  error: string | null;
}
const initialState: PostsState = {
  data: [],
  loading: false,
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setPosts, setLoading, setError } = postsSlice.actions;
export default postsSlice.reducer;