import React from 'react';
import PostsItem from './postItem';

const PostsList = ({ posts, getPost, setToggle, deletePost }) => {
  return (
    <div className="posts-container">
      {posts &&
        posts.map((post) => (
          <PostsItem
            key={post.id}
            post={post}
            getpost={getPost}
            toggleModal={setToggle}
            deletepost={deletePost}
          />
        ))}
    </div>
  );
};
export default PostsList;
