// import { useEffect, useState } from 'react';

// const Blog = () => {
//     const [posts, setPosts] = useState([]);
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(true);

//     const fetchPosts = async () => {
//         try {
//             const response = await fetch('http://symphony.great-site.net/wp-json/wp/v2/posts');
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             const data = await response.json();
//             setPosts(data);
//         } catch (error) {
//             console.error('Error fetching data:', error.message);
//             setError(error.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchPosts();
//     }, []);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     return (
//         <div>
//             <h1>Blog Posts</h1>
//             {posts.length > 0 ? (
//                 <ul>
//                     {posts.map((post) => (
//                         <li key={post.id} className="post-item">
//                             <h2>{post.title.rendered}</h2>
//                             <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
//                         </li>
//                     ))}
//                 </ul>
//             ) : (
//                 <p>No posts found.</p>
//             )}
//         </div>
//     );
// };

// export default Blog;
