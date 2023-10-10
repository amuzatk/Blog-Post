import React, { useState } from "react";
import CreatePostModal from "../components/CreatePostModal";
import PostList from "../components/PostList";
import { Modal, Button, Input } from "antd"; // Import Ant Design components
import CreatePost from "../components/CreatePost";

const Home: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // Add currentPage state

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    // When searching, reset currentPage to 1
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    // Update the currentPage state when the user interacts with pagination
    setCurrentPage(page);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Create Post
      </Button>
      <Input
        type="text"
        placeholder="Search posts..."
        value={searchValue}
        onChange={handleSearchChange}
      />
      <Button onClick={handleSearch}>Search</Button>
      <Modal
        title="Create a New Post"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <CreatePost />
      </Modal>

      <PostList currentPage={currentPage} searchValue={searchValue} onPageChange={handlePageChange} />
    </div>
  );
};

export default Home;