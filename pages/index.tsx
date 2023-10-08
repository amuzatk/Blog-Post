// pages/index.tsx
import React, { useState } from "react";
import CreatePostModal from "../components/CreatePostModal";
import PostList from '../components/PostList';
import { Modal, Button } from "antd"; // Import Ant Design components
import CreatePost from "../components/CreatePost";

const Home: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    // Handle form submission here (e.g., dispatching a createPost action)
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
       <Button type="primary" onClick={showModal}>
        Create Post
      </Button>
      <Modal
        title="Create a New Post"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <CreatePost />
      </Modal>

      <PostList />
    </div>
  );
};

export default Home;
