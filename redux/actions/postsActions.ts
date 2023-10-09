// // redux/actions/postsActions.ts
import { createAction } from '@reduxjs/toolkit';

// Create an action to delete a post by its ID
export const deletePost = createAction<number>('posts/deletePost');

export const CREATE_POST = 'posts/createPost';

export const createPost = createAction(CREATE_POST, (newPost) => ({
  payload: newPost,
}));

// Create an action to search posts by title
export const SEARCH_POSTS = 'posts/searchPosts';

export const searchPosts = createAction(SEARCH_POSTS, (query: string) => ({
  payload: query,
}));

export const SET_PAGE = 'posts/setPage';
export const SET_POSTS_PER_PAGE = 'posts/setPostsPerPage';

export const setPage = createAction(SET_PAGE, (page: number) => ({
  payload: page,
}));

export const setPostsPerPage = createAction(SET_POSTS_PER_PAGE, (count: number) => ({
  payload: count,
}));
