import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
  const {
    data: blogs,
    error,
    isLoading,
  } = useFetch("http://localhost:3000/blogs");

  const handleDelete = (id) => {
    setBlogs((blogs) => blogs.filter((blog) => blog.id !== id));
  };
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>LOADING...</div>}
      <h2>Homepage</h2>
      <BlogList blogs={blogs} handleDelete={handleDelete} title={"Homepage"} />
    </div>
  );
};

export default Home;
