import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAutho] = useState("mario");
  const [response, setresponse] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    {
      setLoading(true);
    }
    const { ok, status } = await fetch(`http://localhost:3000/blogs/`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    });
    setLoading(false);
    if (ok) {
      navigate("/");
    } else {
      setresponse("server error");
    }
  };
  return (
    <div className="create">
      {response && <h4 className="response">{response}</h4>}
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Blog title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="">Blog body</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label htmlFor="">Blog Author</label>
        <select value={author} onChange={(e) => setAutho(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!loading && <button>Add blog</button>}
        {loading && <button disabled>Add blog...</button>}
      </form>
    </div>
  );
};

export default Create;
