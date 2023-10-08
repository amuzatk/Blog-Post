// // redux/reducers/posts.ts
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface Post {
//   id: number;
//   title: string;
//   body: string;
//   created_at: string; // Change to string for ISO date strings
//   updated_at: string; // Change to string for ISO 
// }


// interface PostsState {
//   data: Post[];
//   loading: boolean;
//   error: string | null;
// }
// const initialState: PostsState = {
//   data: [],
//   loading: false,
//   error: null,
// };

// const postsSlice = createSlice({
//   name: 'posts',
//   initialState,
//   reducers: {
//     setPosts: (state, action: PayloadAction<Post[]>) => {
//       state.data = action.payload;
//       state.loading = false;
//       state.error = null;
//     },
    
//     setLoading: (state, action: PayloadAction<boolean>) => {
//       state.loading = action.payload;
//     },
//     setError: (state, action: PayloadAction<string | null>) => {
//       state.error = action.payload;
//       state.loading = false;
//     },
//   },
// });

// export const { setPosts, setLoading, setError } = postsSlice.actions;
// export default postsSlice.reducer;

// // redux/reducers/posts.ts
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { CREATE_POST } from '../actions/postsActions';

// interface Post {
//   id: number;
//   title: string;
//   body: string;
//   created_at: Date; // Change to Date
//   updated_at: Date; // Change to Date
// }

// interface PostsState {
//   data: Post[];
//   loading: boolean;
//   error: string | null;
// }
// const initialState: PostsState = {
//   data: [],
//   loading: false,
//   error: null,
// };

// const postsSlice = createSlice({
//   name: 'posts',
//   initialState,
//   reducers: {
//     setPosts: (state, action: PayloadAction<Post[]>) => {
//       state.data = action.payload;
//       state.loading = false;
//       state.error = null;
//     },
    
//     updatePost: (state, action: PayloadAction<Post>) => {
//       // Find the index of the post to be updated
//       const index = state.data.findIndex((post) => post.id === action.payload.id);
//       if (index !== -1) {
//         // Update the post in the array
//         state.data[index] = action.payload;
//         state.loading = false;
//         state.error = null;
//       }
//     },

//     deletePost: (state, action: PayloadAction<number>) => {
//       const postIdToDelete = action.payload;
//       state.data = state.data.filter((post) => post.id !== postIdToDelete);
//     },

//     createPost: (state, action: PayloadAction<Post>) => {
//       // Add the new post to the array of posts
//       state.data.push(action.payload);
//     },

//     setLoading: (state, action: PayloadAction<boolean>) => {
//       state.loading = action.payload;
//     },
//     setError: (state, action: PayloadAction<string | null>) => {
//       state.error = action.payload;
//       state.loading = false;
//     },
//   },
// });

// export const { setPosts, updatePost,deletePost, createPost,setLoading, setError } = postsSlice.actions;
// export default postsSlice.reducer;


// redux/reducers/posts.ts
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
    
    updatePost: (state, action: PayloadAction<Post>) => {
      // Find the index of the post to be updated
      const index = state.data.findIndex((post) => post.id === action.payload.id);
      if (index !== -1) {
        // Update the post in the array
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
      // Add the new post to the array of posts
      state.data.push(action.payload);
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

export const { setPosts, updatePost, deletePost, createPost, setLoading, setError } = postsSlice.actions;
export default postsSlice.reducer;
