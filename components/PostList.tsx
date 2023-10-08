// components/PostList.tsx
import React, { useEffect } from "react";
import { usePosts, fetchPosts } from "../api/posts";
import { BlogPost } from "../interfaces";
import PostCard from "./PostCard";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setPosts } from "../redux/reducers/posts";

const PostList: React.FC = () => {
  const { data, isLoading, isError } = usePosts();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const posts = await fetchPosts();
        const serializedPosts = posts.map((post: any) => ({
          ...post,
          created_at: new Date().toISOString(), // Convert to ISO string
          updated_at: new Date().toISOString(), // Convert to ISO string
        }));
        dispatch(setPosts(serializedPosts));
      } catch (error) {
        console.error("An error occurred while fetching posts:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching posts.</div>;
  }

  if (!data) {
    return null;
  }

  return (
    <>
      <h1>Blog Posts</h1>
      <StyledCont>
        {data.map((post: BlogPost) => (
          <div key={post.id}>
            <PostCard post={post} />
          </div>
        ))}
      </StyledCont>
    </>
  );
};

export default PostList;

const StyledCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-grow: 1;
  flex-basis: auto;
  gap: 15px 10px;
`;