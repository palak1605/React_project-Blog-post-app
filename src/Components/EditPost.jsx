import React, { useEffect } from "react";
import { useState } from "react";
import { getpost, updatepost } from "../service/api.js";
import { useNavigate, useParams } from "react-router-dom";

import { Link } from "react-router-dom";

const initialValues = {
  title: "",
  categories: "",
  content: "",
};
const EditPost = () => {
  const [post, setpost] = useState(initialValues);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    async function fetchData() {
      let response = await getpost(id);
      setpost(response.data);
    }
    fetchData();
  }, []);
  const onValueChange = (e) => {
    setpost({ ...post, [e.target.name]: e.target.value });
  };
  const newpostDetails = async (e) => {
    e.preventDefault();
    await updatepost(post, id);
    navigate("/");
  };

  return (
    <div className="container">
      <div>
        <Link to="/">back to index</Link>
      </div>
      <div class="p-3 mb-2 bg-secondary text-white">
        <form
          onSubmit={(e) => {
            newpostDetails(e);
          }}
        >
          <div className="mb-3">
            <label for="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              value={post.title}
              className="form-control"
              id="title"
              onChange={(e) => onValueChange(e)}
              name="title"
            />
          </div>
          <div className="mb-3">
            <label for="categories" className="form-label">
              Categories
            </label>
            <input
              type="text"
              value={post.categories}
              className="form-control"
              id="categories"
              onChange={(e) => onValueChange(e)}
              name="categories"
            />
          </div>
          <div className="mb-3">
            <label for="content" className="form-label">
              Content
            </label>
            <textarea
              className="form-control"
              id="content"
              value={post.content}
              onChange={(e) => onValueChange(e)}
              name="content"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
          <input type="reset" className="btn btn-secondary" value="Cancel" />
        </form>
      </div>
    </div>
  );
};

export default EditPost;
