// // pages/index.tsx Pagination
// import React, { useState } from "react";
// import PostList from '../components/PostList';
// import { Modal, Button, Input, Pagination } from "antd"; // Import Pagination from Ant Design
// import CreatePost from "../components/CreatePost";
// import { useDispatch, useSelector } from "react-redux";
// import { searchPosts, setPage } from "../redux/reducers/posts"; // Import the new actions
// import { RootState } from "../redux/store";

// const Home: React.FC = () => {
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [searchValue, setSearchValue] = useState("");
//   const [currentPage, setCurrentPage] = useState(1); // Add currentPage state
//   const [searchQuery, setSearchQuery] = useState("");
//   const dispatch = useDispatch();
//   const showModal = () => {
//     setIsModalVisible(true);
//   };

//   const handleOk = () => {
//     setIsModalVisible(false);
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };

//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchValue(e.target.value);
//   };

//   const handleSearch = () => {
//     // When searching, reset currentPage to 1
//     setCurrentPage(1);
//   };

//   const handlePageChange = (page: number) => {
//     // Update the currentPage state when the user interacts with pagination
//     setCurrentPage(page);
//   };

//   return (
//     <div>
//       <Button type="primary" onClick={showModal}>
//         Create Post
//       </Button>
//       <Input
//         type="text"
//         placeholder="Search posts..."
//         value={searchValue}
//         onChange={handleSearchChange}
//       />
//       <Button onClick={handleSearch}>Search</Button>
//       <Modal
//         title="Create a New Post"
//         open={isModalVisible}
//         onOk={handleOk}
//         onCancel={handleCancel}
//       >
//         <CreatePost />
//       </Modal>

//       <PostList currentPage={currentPage} searchValue={searchValue} onPageChange={handlePageChange} />
//     </div>
//   );
// };

// export default Home;

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
