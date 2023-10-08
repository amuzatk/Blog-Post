// pages/post/[postId].tsx
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useRouter } from "next/router";
import styled from "styled-components";

const PostDetailPage: React.FC = () => {
  const router = useRouter();
  const { postId } = router.query;

  // Access the posts data from Redux
  const posts = useSelector((state: RootState) => state.posts.data);

  // Define isLoading based on whether posts are being fetched
  const isLoading = useSelector((state: RootState) => state.posts.loading);

  // Find the post with the matching ID
  const post = posts.find((p) => p.id === Number(postId));

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
              <p>Created At: {formatDate(post.created_at)}</p>
              <p>Updated At: {formatDate(post.updated_at)}</p>
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

function formatDate(date: Date | string) {
  const formattedDate = new Date(date).toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  });

  return formattedDate;
}
