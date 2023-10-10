// // // components/PostList.tsx
// import React, { useEffect, useState } from "react";
// import { usePosts, fetchPosts } from "../api/posts";
// import { BlogPost } from "../interfaces";
// import PostCard from "./PostCard";
// import styled from "styled-components";
// import { useDispatch } from "react-redux";
// import { setPosts } from "../redux/reducers/posts";
// import { Pagination } from "antd";

//   const PostList: React.FC<{ searchValue: string }> = ({ searchValue }) => {
//   const { data, isLoading, isError } = usePosts();
//   const dispatch = useDispatch();

//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;

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

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isError) {
//     return <div>Error fetching posts.</div>;
//   }

//   // Check if data is available and not undefined
//   if (!data) {
//     return null;
//   }

//   // Now you can safely slice the data
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const displayedData = data.slice(startIndex, endIndex);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   return (
//     <>
//       <h1>Blog Posts</h1>
//       <StyledCont>
//         {displayedData.map((post: BlogPost) => (
//           <div key={post.id}>
//             <PostCard post={post} />
//           </div>
//         ))}
//       </StyledCont>
//       <Pagination
//         current={currentPage}
//         total={data.length}
//         pageSize={itemsPerPage}
//         onChange={handlePageChange}
//       />
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

  const [itemsPerPage] = useState(9);

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