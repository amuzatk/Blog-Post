// // components/CreatePost.tsx
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { createPost } from "../redux/reducers/posts";
// import { useRouter } from "next/router";

// const CreatePost: React.FC = () => {
//   const dispatch = useDispatch();
//   const router = useRouter();

//   // State to manage the new post data
//   const [newPost, setNewPost] = useState({
//     title: "",
//     body: "",
//   });

//   const handleInputChange = (
//     event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     // Update the new post data based on user input
//     setNewPost({
//       ...newPost,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     try {
//       // Dispatch the createPost action to add the new post to Redux
//       await dispatch(createPost(newPost));

//       // Redirect to the detail page for the newly created post
//       router.push(`/post/${newPost.id}`);
//     } catch (error) {
//       console.error("Error creating post:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Create a New Post</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="title">Title:</label>
//           <input
//             type="text"
//             id="title"
//             name="title"
//             value={newPost.title}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="body">Body:</label>
//           <textarea
//             id="body"
//             name="body"
//             value={newPost.body}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <button type="submit">Create Post</button>
//       </form>
//     </div>
//   );
// };

// export default CreatePost;


// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useRouter } from "next/router";
// // import { createPost } from "../../redux/reducers/posts";
// import { createPost } from "../redux/reducers/posts";

// const CreatePost: React.FC = () => {
//   const dispatch = useDispatch();
//   const router = useRouter();

//   // State to manage the new post data
//   const [newPost, setNewPost] = useState({
//     id: 0, // Replace with an actual unique ID generation method
//     title: "",
//     body: "",
//     created_at: new Date(),
//     updated_at: new Date(),
//   });

//   const handleInputChange = (
//     event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setNewPost({
//       ...newPost,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();

//     try {
//       // Dispatch the createPost action to add the new post to Redux
//       dispatch(createPost(newPost));

//       // Redirect to the detail page for the newly created post
//       router.push(`/post/${newPost.id}`);
//     } catch (error) {
//       console.error("Error creating post:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Create a New Post</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="title">Title:</label>
//           <input
//             type="text"
//             id="title"
//             name="title"
//             value={newPost.title}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="body">Body:</label>
//           <textarea
//             id="body"
//             name="body"
//             value={newPost.body}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <button type="submit">Create Post</button>
//       </form>
//     </div>
//   );
// };

// export default CreatePost;




import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { createPost } from "../redux/reducers/posts";

const CreatePost: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  // State to manage the new post data
  const [newPost, setNewPost] = useState({
    id: 0, // Use a number for ID
    title: "",
    body: "",
    created_at: new Date(), // Convert to Date object
    updated_at: new Date(), // Convert to Date object
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewPost({
      ...newPost,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      // Convert the new post data to Date objects
      const serializedPost = {
        ...newPost,
        created_at: new Date(),
        updated_at: new Date(),
      };

      // Dispatch the createPost action to add the new post to Redux
      dispatch(createPost(serializedPost));

      // Redirect to the detail page for the newly created post
      router.push(`/post/${newPost.id}`);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div>
      {/* <h1>Create a New Post</h1> */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newPost.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <textarea
            id="body"
            name="body"
            value={newPost.body}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
