// // pages/post/[postId].tsx
// import React from "react";
// import { useSelector } from "react-redux";
// import { RootState } from "../../redux/store";
// import { useRouter } from "next/router";
// import styled from "styled-components";

// const PostDetailPage: React.FC = () => {
//   const router = useRouter();
//   const { postId } = router.query;

//   // Access the posts data from Redux
//   const posts = useSelector((state: RootState) => state.posts.data);

//   // Define isLoading based on whether posts are being fetched
//   const isLoading = useSelector((state: RootState) => state.posts.loading);

//   // Find the post with the matching ID
//   const post = posts.find((p) => p.id === Number(postId));

//   if (isLoading) {
//     return <div>Loading...</div>; // Handle the case where data is still being fetched
//   }

//   if (!post) {
//     return <div>Post not found.</div>; // Handle the case where the post is not found
//   }

//   return (
//     <StyledCont>
//       <div className="card-grid-space">
//         <div className="card2">
//           <div>
//             <div>
//               <h1>{post.title}</h1>
//               <p>{post.body}</p>
//               <p>Created At: {formatDate(post.created_at)}</p>
//               <p>Updated At: {formatDate(post.updated_at)}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </StyledCont>
//   );
// };

// export default PostDetailPage;

// const StyledCont = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-wrap: wrap;
//   flex-grow: 1;
//   flex-basis: auto;
//   gap: 15px 10px;
// `;

// function formatDate(date: Date | string) {
//   const formattedDate = new Date(date).toLocaleString("en-US", {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit",
//     timeZoneName: "short",
//   });

//   return formattedDate;
// }

// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "../../redux/store";
// import styled from "styled-components";
// import { BlogPost } from "../../interfaces";
// import { updatePost } from "../../redux/reducers/posts";
// import { deletePost } from "../../redux/actions/postsActions";
// import router, { useRouter } from "next/router";

// const PostDetailPage: React.FC = () => {
//   const { postId } = useRouter().query;
//   const dispatch = useDispatch();

//   // Access the posts data from Redux
//   const posts = useSelector((state: RootState) => state.posts.data);

//   // Define isLoading based on whether posts are being fetched
//   const isLoading = useSelector((state: RootState) => state.posts.loading);

//   // Find the post with the matching ID
//   const post = posts.find((p) => p.id === Number(postId));

//   // State to manage edited post data
//   const [editedPost, setEditedPost] = useState<BlogPost | null>(null);
//   console.log(editedPost, "editedPost");

//   const handleEditClick = () => {
//     // Initialize the edited post with the current post data
//     setEditedPost(post);
//   };

//   const handleCancelEdit = () => {
//     // Reset the edited post state to null to exit editing mode
//     setEditedPost(null);
//   };

//   const handleSaveEdit = () => {
//     if (editedPost) {
//       // Dispatch the updatePost action to update the post in Redux store
//       dispatch(updatePost(editedPost));
//       // Exit editing mode
//       setEditedPost(null);
//     }
//   };

//   const handleInputChange = (
//     event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     if (editedPost) {
//       // Update the edited post with the new input value
//       setEditedPost({
//         ...editedPost,
//         [event.target.name]: event.target.value,
//       });
//     }
//   };

//   const handleDeleteClick = () => {
//     if (postId) {
//       // Convert postId to a number
//       const postIdToDelete = Number(postId);
//       // Dispatch the deletePost action with the postId
//       dispatch(deletePost(postIdToDelete));
//       // Redirect to the home page or another appropriate location
//       router.push("/");
//     }
//   };

//   if (isLoading) {
//     return <div>Loading...</div>; // Handle the case where data is still being fetched
//   }

//   if (!post) {
//     return <div>Post not found.</div>; // Handle the case where the post is not found
//   }

//   return (
//     <StyledCont>
//       <div className="card-grid-space">
//         <div className="card2">
//           <div>
//             <h1>{post.title}</h1>
//             {editedPost ? (
//               <form onSubmit={handleSaveEdit}>
//                 <input
//                   name="title"
//                   value={editedPost.title}
//                   onChange={handleInputChange}
//                 />
//                 <textarea
//                   name="body"
//                   value={editedPost.body}
//                   onChange={handleInputChange}
//                 />
//                 <button type="submit">Save</button>
//                 <button type="button" onClick={handleCancelEdit}>
//                   Cancel
//                 </button>
//               </form>
//             ) : (
//               <>
//                 <p>{post.body}</p>
//                 <p>Created At: {formatDate(post.created_at)}</p>
//                 <p>Updated At: {formatDate(post.updated_at)}</p>
//               </>
//             )}

//             {editedPost ? (
//               <>
//                 <button onClick={handleSaveEdit}>Save</button>
//                 <button onClick={handleCancelEdit}>Cancel</button>
//               </>
//             ) : (
//               <button onClick={handleEditClick}>Edit</button>
//             )}
//           </div>
//         </div>
//       </div>
//     </StyledCont>
//   );
// };

// export default PostDetailPage;

// const StyledCont = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-wrap: wrap;
//   flex-grow: 1;
//   flex-basis: auto;
//   gap: 15px 10px;
// `;

// function formatDate(date: Date | string) {
//   const formattedDate = new Date(date).toLocaleString("en-US", {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit",
//     timeZoneName: "short",
//   });

//   return formattedDate;
// }

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import styled from "styled-components";
import { BlogPost } from "../../interfaces";
import { updatePost, deletePost } from "../../redux/reducers/posts";
import router, { useRouter } from "next/router";

const PostDetailPage: React.FC = () => {
  const { postId } = useRouter().query;
  const dispatch = useDispatch();

  // Access the posts data from Redux
  const posts = useSelector((state: RootState) => state.posts.data);

  // Find the post with the matching ID
  const post = posts.find((p) => p.id === Number(postId));

  // State to manage edited post data
  const [editedPost, setEditedPost] = useState<BlogPost | null>(null);

  const handleEditClick = () => {
    // Initialize the edited post with the current post data
    setEditedPost(post);
  };

  const handleCancelEdit = () => {
    // Reset the edited post state to null to exit editing mode
    setEditedPost(null);
  };

  const handleSaveEdit = () => {
    if (editedPost) {
      // Dispatch the updatePost action to update the post in Redux store
      dispatch(updatePost(editedPost));
      // Exit editing mode
      setEditedPost(null);
    }
  };

  const handleDeleteClick = () => {
    if (postId) {
      setTimeout(() => {
        // Dispatch the deletePost action to delete the post from Redux store
        dispatch(deletePost(Number(postId)));
        // Redirect to the home page or another appropriate location
        router.push("/");
      }, 1000);
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (editedPost) {
      // Update the edited post with the new input value
      setEditedPost({
        ...editedPost,
        [event.target.name]: event.target.value,
      });
    }
  };
  // ...

  return (
    <StyledCont>
      <div className="card-grid-space">
        <div className="card2">
          <div>
            {post ? (
              <>
                <h1>{post.title}</h1>
                {editedPost ? (
                  <form onSubmit={handleSaveEdit}>
                    <input
                      name="title"
                      value={editedPost.title}
                      onChange={handleInputChange}
                    />
                    <textarea
                      name="body"
                      value={editedPost.body}
                      onChange={handleInputChange}
                    />
                    <button type="submit">Save</button>
                    <button type="button" onClick={handleCancelEdit}>
                      Cancel
                    </button>
                  </form>
                ) : (
                  <p>{post.body}</p>
                )}
                <p>Created At: {formatDate(post.created_at)}</p>
                <p>Updated At: {formatDate(post.updated_at)}</p>
                {editedPost ? null : (
                  <button onClick={handleEditClick}>Edit</button>
                )}
                {!editedPost && (
                  <button onClick={handleDeleteClick}>Delete</button>
                )}
              </>
            ) : (
              <StyledP>DELETED!!!</StyledP>
            )}
          </div>
        </div>
      </div>
    </StyledCont>
  );
};

export default PostDetailPage;

const StyledCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-grow: 1;
  flex-basis: auto;
  gap: 15px 10px;
`;
const StyledP = styled.p`
color: red;
font-size: larger;
font-weight: 700;
background-color: white;
`;

function formatDate(date: Date | string) {
  const formattedDate = new Date(date).toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  });

  return formattedDate;
}
