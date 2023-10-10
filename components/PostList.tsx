// // components/PostList.tsx
// import React, { useEffect } from "react";
// import { usePosts, fetchPosts } from "../api/posts";
// import { BlogPost } from "../interfaces";
// import PostCard from "./PostCard";
// import styled from "styled-components";
// import { useDispatch } from "react-redux";
// import { setPosts } from "../redux/reducers/posts";
// import Button from "./Button/Button";

// const PostList: React.FC = () => {
//   const { data, isLoading, isError } = usePosts();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const posts = await fetchPosts();
//         const serializedPosts = posts.map((post: any) => ({
//           ...post,
//           created_at: new Date().toISOString(), // Convert to ISO string
//           updated_at: new Date().toISOString(), // Convert to ISO string
//         }));
//         dispatch(setPosts(serializedPosts));
//       } catch (error) {
//         console.error("An error occurred while fetching posts:", error);
//       }
//     };

//     fetchData();
//   }, [dispatch]);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isError) {
//     return <div>Error fetching posts.</div>;
//   }

//   if (!data) {
//     return null;
//   }

//   return (
//     <>
//       <h1>Blog Posts</h1>
//       {/* <Button onClick={}>Create Post</Button> */}
//       <StyledCont>
//         {data.map((post: BlogPost) => (
//           <div key={post.id}>
//             <PostCard post={post} />
//           </div>
//         ))}
//       </StyledCont>
//     </>
//   );
// };

// export default PostList;

// const StyledCont = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-wrap: wrap;
//   flex-grow: 1;
//   flex-basis: auto;
//   gap: 15px 10px;
// `;


// // components/PostList.tsx
// import React, { useEffect } from "react";
// import { usePosts, fetchPosts } from "../api/posts";
// import { BlogPost } from "../interfaces";
// import PostCard from "./PostCard";
// import styled from "styled-components";
// import { useDispatch, useSelector } from "react-redux";
// import { setPosts, searchPosts } from "../redux/reducers/posts"; // Import the new action
// import Button from "./Button/Button";
// import { RootState } from "../redux/store";

// const PostList: React.FC = () => {
//   const { data, isLoading, isError } = usePosts();
//   const dispatch = useDispatch();
//   const posts = useSelector((state: RootState) => state.posts.data); // Add this line to get the posts from the Redux store
//   const searchQuery = useSelector((state: RootState) => state.posts.searchQuery); // Add this line to get the search query from the Redux store

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const posts = await fetchPosts();
//         const serializedPosts = posts.map((post: any) => ({
//           ...post,
//           created_at: new Date().toISOString(),
//           updated_at: new Date().toISOString(),
//         }));
//         dispatch(setPosts(serializedPosts));
//       } catch (error) {
//         console.error("An error occurred while fetching posts:", error);
//       }
//     };

//     fetchData();
//   }, [dispatch]);

//   useEffect(() => {
//     // Handle the search query when it changes
//     if (searchQuery) {
//       dispatch(searchPosts(searchQuery));
//     }
//   }, [dispatch, searchQuery]);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isError) {
//     return <div>Error fetching posts.</div>;
//   }

//   if (!data) {
//     return null;
//   }

//   return (
//     <>
//       <h1>Blog Posts</h1>
//       <StyledCont>
//         {posts.map((post: BlogPost) => (
//           <div key={post.id}>
//             <PostCard post={post} />
//           </div>
//         ))}
//       </StyledCont>
//     </>
//   );
// };

// export default PostList;

// const StyledCont = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-wrap: wrap;
//   flex-grow: 1;
//   flex-basis: auto;
//   gap: 15px 10px;
// `;

// //Automatic search
// import React, { useState } from "react";
// import PostList from '../components/PostList';
// import { Modal, Button, Input } from "antd";
// import CreatePost from "../components/CreatePost";
// import { useDispatch } from "react-redux";
// import { searchPosts } from "../redux/reducers/posts";

// const Home: React.FC = () => {
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const dispatch = useDispatch();

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

//   const handleSearch = (query: string) => {
//     setSearchQuery(query); // Update the local state
//     dispatch(searchPosts(query)); // Dispatch the search action
//   };

//   return (
//     <>
//       <div>
//         <Input
//           placeholder="Search by title"
//           value={searchQuery}
//           onChange={(e) => handleSearch(e.target.value)} // Handle search as you type
//         />
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


// components/PostList.tsx
import React, { useEffect, useState } from "react";
import { usePosts, fetchPosts } from "../api/posts";
import { BlogPost } from "../interfaces";
import PostCard from "./PostCard";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setPosts } from "../redux/reducers/posts";
import { Pagination } from "antd";

const PostList: React.FC<{ searchValue: string; currentPage: number; onPageChange: (page: number) => void }> = ({
  searchValue,
  currentPage,
  onPageChange,
}) => {
  const { data, isLoading, isError } = usePosts();
  const dispatch = useDispatch();

  const [itemsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const posts = await fetchPosts();
        const serializedPosts = posts.map((post: any) => ({
          ...post,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        }));
        dispatch(setPosts(serializedPosts));
      } catch (error) {
        console.error("An error occurred while fetching posts:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching posts.</div>;
  }

  // Filter data based on searchValue in the post title
  const filteredData = data.filter((post: BlogPost) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  // Calculate the startIndex and endIndex based on currentPage and itemsPerPage
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedData = filteredData.slice(startIndex, endIndex);

  return (
    <>
      <h1>Blog Posts</h1>
      <StyledCont>
        {displayedData.map((post: BlogPost) => (
          <div key={post.id}>
            <PostCard post={post} />
          </div>
        ))}
      </StyledCont>
      <Pagination
        current={currentPage}
        total={filteredData.length}
        pageSize={itemsPerPage}
        onChange={onPageChange} // Pass the onPageChange callback
      />
    </>
  );
};

export default PostList;
const StyledCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-grow: 1;
  flex-basis: auto;
  gap: 15px 10px;
`;