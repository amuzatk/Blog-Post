// pages/post/[postId].tsx
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useRouter } from "next/router";
import styled from "styled-components";

const PostDetailPage: React.FC = () => {
  const router = useRouter();
  const { postId } = router.query;
  console.log(postId, "postId");

  // Access the posts data from Redux
  const posts = useSelector((state: RootState) => state.posts.data);
  console.log(posts, "posts");

  // Define isLoading based on whether posts are being fetched
  const isLoading = useSelector((state: RootState) => state.posts.loading);

  // Find the post with the matching ID
  const post = posts.find((p) => p.id === Number(postId));

  console.log("Posts:", posts); // Check if posts are being retrieved
  console.log("Post:", post); // Check if the correct post is being found

  if (isLoading) {
    return <div>Loading...</div>; // Handle the case where data is still being fetched
  }

  if (!post) {
    return <div>Post not found.</div>; // Handle the case where the post is not found
  }

  return (
    <StyledCont>
      <div className="card-grid-space">
        <div className="card2">
          <div>
            <div>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
              <p>Created At: {post.created_at.toLocaleString()}</p>
              <p>Updated At: {post.updated_at.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
    </StyledCont>
  );
};

export default PostDetailPage;

const StyledCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-grow: 1;
  flex-basis: auto;
  gap: 15px 10px;
`;
