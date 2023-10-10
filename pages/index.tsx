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
import PostList from '../components/PostList';
import { Modal, Button, Input, Pagination } from "antd"; // Import Pagination from Ant Design
import CreatePost from "../components/CreatePost";
import { useDispatch, useSelector } from "react-redux";
import { searchPosts, setPage } from "../redux/reducers/posts"; // Import the new actions
import { RootState } from "../redux/store";

const Home: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const currentPage = useSelector((state: RootState) => state.posts.currentPage); // Add this line to get the current page from the Redux store

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

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    dispatch(searchPosts(query));
  };

  const handlePageChange = (page: number) => {
    dispatch(setPage(page)); // Dispatch the setPage action with the selected page
  };

  return (
    <>
      <div>
        <Input
          placeholder="Search by title"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
        />
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

        <PostList searchValue={""} currentPage={0} onPageChange={function (page: number): void {
          throw new Error("Function not implemented.");
        } } />
        
        <Pagination
          current={currentPage}
          total={41}
          pageSize={10}
          onChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default Home;
