// components/CreatePostModal.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../redux/reducers/posts";

interface CreatePostModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const CreatePostModal: React.FC<CreatePostModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  const [newPost, setNewPost] = useState({
    id: 0, // Replace with an actual unique ID generation method
    title: "",
    body: "",
    created_at: new Date(),
    updated_at: new Date(),
  });
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dispatch the createPost action with the new post data
    dispatch(createPost(newPost));
    // Close the modal
    onRequestClose();
  };

  return (
    <div className={`modal ${isOpen ? "modal-open" : ""}`}>
      <div className="modal-content">
        <h2>Create a New Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={newPost.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Body:</label>
            <textarea
              name="body"
              value={newPost.body}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePostModal;