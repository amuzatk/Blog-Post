import React, { useState } from "react";
import PostList from "../components/PostList";
import { Modal, Button, Input } from "antd";
import CreatePost from "../components/CreatePost";

const Home: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

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
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container">
      <div className="search">
      <Button type="primary" onClick={showModal}>
        Create Post
      </Button>
      <Input
        type="text"
        placeholder="Search posts by title..."
        value={searchValue}
        onChange={handleSearchChange}
      />
      <Button onClick={handleSearch}>Search</Button>
      </div>
      <Modal
        title="Create a New Post"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <CreatePost />
      </Modal>

      <PostList currentPage={currentPage} searchValue={searchValue} onPageChange={handlePageChange} />
    </div>
  );
};

export default Home;
