// // pages/index.tsx
// import React, { useState } from "react";
// import CreatePostModal from "../components/CreatePostModal";
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
//   );
// };

// export default Home;


// import React, { useState } from "react";
// import CreatePostModal from "../components/CreatePostModal";
// import PostList from '../components/PostList';
// import { Modal, Button } from "antd"; // Import Ant Design components
// import CreatePost from "../components/CreatePost";

// const Home: React.FC = () => {
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [searchValue, setSearchValue] = useState(""); // Add state for search input value

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

//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchValue(e.target.value);
//   };

//   return (
//     <div>
//       <Button type="primary" onClick={showModal}>
//         Create Post
//       </Button>
//       <input
//         type="text"
//         placeholder="Search posts..."
//         value={searchValue}
//         onChange={handleSearchChange}
//       />
//       <Modal
//         title="Create a New Post"
//         open={isModalVisible}
//         onOk={handleOk}
//         onCancel={handleCancel}
//       >
//         <CreatePost />
//       </Modal>

//       <PostList searchValue={searchValue} /> {/* Pass the searchValue as a prop */}
//     </div>
//   );
// };

// export default Home;


import React, { useState } from "react";
import CreatePostModal from "../components/CreatePostModal";
import PostList from '../components/PostList';
import { Modal, Button, Input } from "antd"; // Import Ant Design components
import CreatePost from "../components/CreatePost";

const Home: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchValue, setSearchValue] = useState(""); // Add state for search input value

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

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    // You can trigger the search here, e.g., by passing the searchValue to the PostList component.
    // This depends on how you want to implement the search logic.
    // For now, let's just print the searchValue to the console.
    console.log("Search Value:", searchValue);
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
        visible={isModalVisible} // Use "visible" instead of "open"
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <CreatePost />
      </Modal>

      <PostList searchValue={searchValue} />
    </div>
  );
};

export default Home;
