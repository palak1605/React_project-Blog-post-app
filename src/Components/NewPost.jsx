import React, { useState } from "react";
import { newpost } from '../service/api.js';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "../styles/NewPost.css";
const initialValues = {
  title: '',
  categories: '',
  content: ''
}

const NewPost = () => {
  const [post, setPost] = useState(initialValues);
  const navigate = useNavigate();

  const onValueChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  }

  const newPostDetails = async (e) => {
    e.preventDefault();
    await newpost(post);
    navigate('/');
  }

  return (
    <div className="container mt-5">
      <div className="mb-3">
        <Link to="/" className="btn btn-secondary">
          Back to Index
        </Link>
      </div>
      <div className="card p-4">
        <h2 className="mb-4">Create a New Post</h2>
        <form onSubmit={(e) => newPostDetails(e)}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input type="text" className="form-control" id="title" onChange={(e) => onValueChange(e)} name="title" required />
          </div>
          <div className="mb-3">
            <label htmlFor="categories" className="form-label">
              Categories
            </label>
            <input type="text" className="form-control" id="categories" onChange={(e) => onValueChange(e)} name="categories" required />
          </div>
          <div className="mb-3">
            <label htmlFor="content" className="form-label">
              Content
            </label>
            <textarea className="form-control" id="content" onChange={(e) => onValueChange(e)} name="content" required></textarea>
          </div>
          <div >
            <button type="submit" className="btn btn-success">
              Submit
            </button>
            <input type="reset" className="btn btn-secondary" value="Clear" style={{ marginLeft: '10px' }} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPost;
