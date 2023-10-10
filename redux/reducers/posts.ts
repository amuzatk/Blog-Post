import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Post {
  id: number;
  title: string;
  body: string;
  created_at: Date;
  updated_at: Date;
}

interface PostsState {
  data: Post[];
  loading: boolean;
  error: string | null;
  searchQuery: string; 
  currentPage: number; 
  postsPerPage: number;
}

const initialState: PostsState = {
  data: [],
  loading: false,
  error: null,
  searchQuery: '', 
  currentPage: 1,
  postsPerPage: 10, 
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
    
    updatePost: (state, action: PayloadAction<Post>) => {
      const index = state.data.findIndex((post) => post.id === action.payload.id);
      if (index !== -1) {
        state.data[index] = action.payload;
        state.loading = false;
        state.error = null;
      }
    },

    deletePost: (state, action: PayloadAction<number>) => {
      const postIdToDelete = action.payload;
      state.data = state.data.filter((post) => post.id !== postIdToDelete);
    },

    createPost: (state, action: PayloadAction<Post>) => {
      state.data.push(action.payload);
    },

    searchPosts: (state, action: PayloadAction<string>) => {
      const query = action.payload.toLowerCase();
      state.data = state.data.filter((post) =>
        post.title.toLowerCase().includes(query)
      );
    },
    
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },

    setPostsPerPage: (state, action: PayloadAction<number>) => {
      state.postsPerPage = action.payload;
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

export const { setPosts, updatePost, deletePost, createPost,searchPosts, setPage,setLoading, setError } = postsSlice.actions;
export default postsSlice.reducer;
