import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    data: blog,
    error,
    isLoading,
  } = useFetch(`http://localhost:3000/blogs/${id}`);
  console.log(blog);
  const handleClick = async (id) => {
    await fetch(`http://localhost:3000/blogs/${id}`, {
      method: "delete",
    });
    navigate("/");
  };
  return (
    <div className="blog-details">
      {isLoading && <div>LOADING...</div>}
      {error && <div>{error.message}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={() => handleClick(blog.id)}>Delete</button>
        </article>
      )}
    </div>
  );
};
export default BlogDetails;
