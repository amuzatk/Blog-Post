// redux/actions/postsActions.ts
import { createAction } from '@reduxjs/toolkit';

// Create an action to delete a post by its ID
export const deletePost = createAction<number>('posts/deletePost');
