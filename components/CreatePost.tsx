import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { createPost } from "../redux/reducers/posts";

const CreatePost: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [newPost, setNewPost] = useState({
    id: 0,
    title: "",
    body: "",
    created_at: new Date(),
    updated_at: new Date(),
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewPost({
      ...newPost,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const serializedPost = {
        ...newPost,
        created_at: new Date(),
        updated_at: new Date(),
      };

      dispatch(createPost(serializedPost));
      router.push(`/post/${newPost.id}`);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newPost.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <textarea
            id="body"
            name="body"
            value={newPost.body}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
