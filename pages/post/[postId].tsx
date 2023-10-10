import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import styled from "styled-components";
import { BlogPost } from "../../interfaces";
import { updatePost, deletePost } from "../../redux/reducers/posts";
import router, { useRouter } from "next/router";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Link from "next/link";

const PostDetailPage: React.FC = () => {
  const { postId } = useRouter().query;
  const dispatch = useDispatch();

  const posts = useSelector((state: RootState) => state.posts.data);

  const post = posts.find((p) => p.id === Number(postId));

  const [editedPost, setEditedPost] = useState<BlogPost | null>(null);

  const handleEditClick = () => {
    setEditedPost(post);
  };

  const handleCancelEdit = () => {
    setEditedPost(null);
  };

  const handleSaveEdit = () => {
    if (editedPost) {
      dispatch(updatePost(editedPost));
      setEditedPost(null);
    }
  };

  const handleDeleteClick = () => {
    if (postId) {
      setTimeout(() => {
        dispatch(deletePost(Number(postId)));
        router.push("/");
      }, 1000);
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (editedPost) {
      setEditedPost({
        ...editedPost,
        [event.target.name]: event.target.value,
      });
    }
  };
  
  return (
    <StyledCont>
      <div className="card-grid-space">
        <div className="card2">
          <div >
            <Link href="/" className="arrow-home">
                <ArrowLeftOutlined /> Home
            </Link>
            {post ? (
              <>
                <h1>{post.title}</h1>
                {editedPost ? (
                  <form onSubmit={handleSaveEdit}>
                    <input
                      name="title"
                      value={editedPost.title}
                      onChange={handleInputChange}
                    />
                    <textarea
                      name="body"
                      value={editedPost.body}
                      onChange={handleInputChange}
                    />
                    <button type="submit">Save</button>
                    <button type="button" onClick={handleCancelEdit}>
                      Cancel
                    </button>
                  </form>
                ) : (
                  <p>{post.body}</p>
                )}
                <p>Created At: {formatDate(post.created_at)}</p>
                <p>Updated At: {formatDate(post.updated_at)}</p>
                {editedPost ? null : (
                  <button onClick={handleEditClick}>Edit</button>
                )}
                {!editedPost && (
                  <button onClick={handleDeleteClick}>Delete</button>
                )}
              </>
            ) : (
              <StyledP>DELETED!!!</StyledP>
            )}
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
const StyledP = styled.p`
color: red;
font-size: larger;
font-weight: 700;
background-color: white;
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

