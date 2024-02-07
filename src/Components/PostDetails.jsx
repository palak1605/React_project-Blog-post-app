import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getpost, deletepost, newlikepost } from "../service/api.js";
import "../styles/PostDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "../Slice/postSlice.js";

const PostDetails = () => {
  const [post, setPost] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  let { id } = useParams();
  id = parseInt(id, 10);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const likedPosts = useSelector((state) => state.posts);
  useEffect(() => {
    if (likedPosts.some((likedPost) => likedPost === id)) {
      setIsLiked(true);
    } else setIsLiked(false);
    getAllPosts();
  }, []);
  useEffect(() => {}, [isLiked]);

  const getAllPosts = async () => {
    let response = await getpost(id);

    setPost(response.data);
  };

  const deletePostHandler = async () => {
    let response = await deletepost(id);
    console.log(response);
    navigate("/");
  };

  const likeHandler = async (id) => {
    dispatch(toggleLike({ postId: id }));
    try {
      setIsLiked(!isLiked);
    } catch (error) {
      console.error("Error while liking the post", error);
    }
  };

  return (
    <div className="container post-details">
      <div className="row">
        <div className="col-4">
          <Link to="/">Back to Index</Link>
        </div>
        <div className="col-8">
          <button
            onClick={(e) => {
              likeHandler(id);
            }}
            className={`btn btn-md ${isLiked ? "btn-danger" : "btn-info"}`}
          >
            {isLiked ? "Like 1" : "Like "}
          </button>
          <Link to={`/edit/${post.id}`} className="btn btn-secondary btn-md">
            Edit
          </Link>
          <button onClick={deletePostHandler} className="btn btn-dark btn-md">
            Delete
          </button>
        </div>
      </div>
      <div className="row">
        <i>
          **Content of the post will be displayed over here that would be
          fetched from the backend.**
        </i>
      </div>

      <ul className="post-content" id="texture">
        <li key={post.id}>
          <h1>{post.title}</h1>
          <h3>{post.categories}</h3>
          <p>{post.content}</p>
        </li>
      </ul>
    </div>
  );
};

export default PostDetails;
