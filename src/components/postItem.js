import React from 'react';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';

const PostsItem = ({ post, getPost, deletePost }) => {
  return (
    <div className="posts-item" onClick={() => getPost(post.id)}>
      <h2 className="posts-item__title">{post.title}</h2>
      <p>{post.body}</p>
      <div className="toolbox">
        <button className="toolbox__btn" onClick={() => getPost(post.id)}>
          <FaRegEdit color="#e8eaed" size={18} />
        </button>
        <button className="toolbox__btn" onClick={() => deletePost(post.id)}>
          <FaRegTrashAlt color="#e8eaed" size={18} />
        </button>
      </div>
    </div>
  );
};

export default PostsItem;
