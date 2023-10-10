// components/PostCard.tsx
import React from "react";
import { BlogPost } from "../interfaces";
import { useRouter } from "next/router"; // Import useRouter
import Image from "next/image";
import Button from "./Button/Button";
import styled from "styled-components";
import Link from "next/link";

interface PostCardProps {
  post: BlogPost;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const router = useRouter(); // Initialize the router

  // const handleReadMoreClick = () => {
  //   // Navigate to the detail page with the post's ID
  //   router.push(`/post/${post.id}`);
  // };

  return (
    <StyledCard>
      <div className="card-grid-space">
        <div className="card">
          <div>
            <h1>{post.title}</h1>
            <p>
              {post.body.length > 50
                ? `${post.body.substring(0, 50)}...`
                : post.body}
            </p>
            <div className="date">
              <p> {formatDate(post.created_at)}</p>
            </div>
            <Link
              className="tags"
              href="/post/[postId]"
              as={`/post/${post.id}`}
            >
              <Button>Read More</Button>
            </Link>
          </div>
        </div>
      </div>
    </StyledCard>
  );
};

export default PostCard;

const StyledCard = styled.div``;

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
