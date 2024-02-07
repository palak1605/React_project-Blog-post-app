import React, { useState, useEffect } from "react";
import { getposts } from "../service/api.js";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "../Slice/postSlice.js";
import "../styles/Listview.css";
import { newlikepost } from "../service/api.js";

const Listview = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();
  const likedPosts = useSelector((state) => state.posts);

  useEffect(() => {
    getAllPosts();
  }, [likedPosts]);

  const getAllPosts = async () => {
    let response = await getposts();

    if (likedPosts.length > 0) {
      const newBlogsWithLikes = response.data.map((blog) => {
        let newBlog = blog;
        if (likedPosts.some((likedPost) => likedPost === blog.id)) {
          newBlog = { ...blog, likes: 1 };
        }
        return newBlog;
      });
      setPosts(newBlogsWithLikes);
    } else setPosts(response.data);
  };
  const likeHandler = async (id) => {
    dispatch(toggleLike({ postId: id }));
    try {
      // await newlikepost(id);
    } catch (error) {
      console.error("Error while liking the post", error);
    }
  };
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          {/* <Link to={`/read/${post.id}`} className="card-link"> */}
          <div className="card bg-light">
            <div
              onClick={() => navigate(`/read/${post.id}`)}
              className="card-body"
            >
              <h5 className="card-title text-dark">{post.title}</h5>
              <h6 className="card-subtitle mb-2 text-secondary">
                {post.categories}
              </h6>
              <p className="card-text text-secondary"></p>

              <button
                onClick={(e) => {
                  likeHandler(post.id);
                  e.stopPropagation();
                }}
                className={`btn btn-md ${
                  post.likes ? "btn-danger" : "btn-info"
                }`}
              >
                {post.likes ? "Liked" : "Like"}({post.likes})
              </button>
            </div>
          </div>
         
        </li>
      ))}
    </ul>
  );
};

export default Listview;
