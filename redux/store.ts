// redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './reducers/posts'; // Import your posts reducer

const store = configureStore({
  reducer: {
    posts: postsReducer, // Add your posts reducer here
    // Add other reducers if needed
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
