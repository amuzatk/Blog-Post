// import { NextApiRequest, NextApiResponse } from 'next'
// import { sampleUserData } from '../../../utils/sample-data'

// const handler = (_req: NextApiRequest, res: NextApiResponse) => {
//   try {
//     if (!Array.isArray(sampleUserData)) {
//       throw new Error('Cannot find user data')
//     }

//     res.status(200).json(sampleUserData)
//   } catch (err: any) {
//     res.status(500).json({ statusCode: 500, message: err.message })
//   }
// }

// export default handler


import { NextApiRequest, NextApiResponse } from 'next'
import { sampleUserData } from '../../../utils/sample-data'
import axios from 'axios';
import { BlogPost } from '../../../interfaces/index';

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(sampleUserData)) {
      throw new Error('Cannot find user data')
    }

    res.status(200).json(sampleUserData)
    console.log(sampleUserData, 'posts')

  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}


// api/posts.ts


export const fetchPosts = async (): Promise<BlogPost[]> => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const posts = response.data.map((post: any) => ({
      id: post.id,
      title: post.title,
      content: post.body,
      created_at: new Date(), // You can set this to the actual created timestamp if available in the API
      updated_at: new Date(), // You can set this to the actual updated timestamp if available in the API
    }));
    console.log(posts, 'posts')
    return posts;
  } catch (error) {
    // Handle the error here
    console.error('An error occurred while fetching posts:', error);

    // You can also provide user feedback, e.g., show an error message
    // setUserFeedback('An error occurred while fetching posts. Please try again later.');

    // Return a default value or an empty array in case of an error
    return [];
  }
};


export default handler