// // pages/index.tsx
// import React, { useState } from "react";
// import PostList from '../components/PostList';
// import { Modal, Button } from "antd"; // Import Ant Design components
// import CreatePost from "../components/CreatePost";

// const Home: React.FC = () => {
//   const [isModalVisible, setIsModalVisible] = useState(false);

//   const showModal = () => {
//     setIsModalVisible(true);
//   };

//   const handleOk = () => {
//     // Handle form submission here (e.g., dispatching a createPost action)
//     setIsModalVisible(false);
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };
//   return (
//     <>
//     <div>
//        <Button type="primary" onClick={showModal}>
//         Create Post
//       </Button>
//       <Modal
//         title="Create a New Post"
//         open={isModalVisible}
//         onOk={handleOk}
//         onCancel={handleCancel}
//       >
//         <CreatePost />
//       </Modal>

//       <PostList />
//     </div>
//     </>
//   );
// };

// export default Home;



// import React, { useState } from "react";
// import PostList from '../components/PostList';
// import { Modal, Button, Input } from "antd"; // Import Ant Design components
// import CreatePost from "../components/CreatePost";
// import { useDispatch } from "react-redux";
// import { searchPosts } from "../redux/reducers/posts"; // Import the new action

// const Home: React.FC = () => {
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [searchQuery, setSearchQuery] = useState(""); // Add state for the search query
//   const dispatch = useDispatch(); // Redux dispatch function

//   const showModal = () => {
//     setIsModalVisible(true);
//   };

//   const handleOk = () => {
//     // Handle form submission here (e.g., dispatching a createPost action)
//     setIsModalVisible(false);
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };

//   const handleSearch = () => {
//     // Dispatch the searchPosts action with the search query
//     dispatch(searchPosts(searchQuery));
//   };

//   return (
//     <>
//       <div>
//         <Input
//           placeholder="Search by title"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <Button type="primary" onClick={handleSearch}>
//           Search
//         </Button>
//         <Button type="primary" onClick={showModal}>
//           Create Post
//         </Button>
//         <Modal
//           title="Create a New Post"
//           open={isModalVisible}
//           onOk={handleOk}
//           onCancel={handleCancel}
//         >
//           <CreatePost />
//         </Modal>

//         <PostList />
//       </div>
//     </>
//   );
// };

// export default Home;

// // pages/index.tsx Pagination
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
        visible={isModalVisible}
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
