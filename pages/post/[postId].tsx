// pages/post/[postId].tsx
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useRouter } from "next/router";

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
    <div>
      <h1>Post Detail Page</h1>
      <h2>{post.title}</h2>
      <p>Created at: {post.created_at.toLocaleString()}</p>
      <p>Created at: {post.updated_at.toLocaleString()}</p>
    </div>
  );
};

export default PostDetailPage;
