import { Link } from "react-router-dom";

const BlogList = ({ blogs, handleDelete, title }) => {
  return (
    <>
      {blogs &&
        blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p>Written by {blog.author}</p>
            </Link>
            {/* <button onClick={() => handleDelete(blog.id)}></button> */}
          </div>
        ))}
    </>
  );
};

export default BlogList;
