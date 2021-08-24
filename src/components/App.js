import React, { useEffect, useState } from 'react';
import { IoAdd } from 'react-icons/io5';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PostsList from './postList';
import Form from './form';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});
  const [inputs, setInputs] = useState({ title: '', body: '' });
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data.posts))
      .catch((error) => console.log('Error fetching posts', error));
  };
  const getPost = (id) => {
    fetch(`/api/post/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data.posts);
        setToggle(true);
      })
      .catch((error) => console.log('Note not found', error));
  };
  const addPost = (title, body) => {
    if (!title || !body) {
      toast.error('Please fill all the required input fields');
      return;
    }
    fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: body,
      }),
    })
      .then((res) => {
        console.log(res.json());
        getPosts();
        setToggle(false);
        setInputs({ title: '', body: '' });
        toast.success('Note added successfully');
      })
      .catch((error) => {
        console.log('Error adding note.', error);
        toast.error('Error adding note.');
      });
  };

  const updatePost = (id, title, body) => {
    if (!title || !body) {
      toast.error('Please fill all the required input fields');
      return;
    }
    fetch(`/api/posts/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        title: title,
        body: body,
      }),
    })
      .then((res) => {
        getPosts();
        setToggle(false);
        toast.success('Note updated successfully.');
      })
      .catch((error) => {
        console.log('Note not found', error);
        toast.error('Error updating note.');
      });
  };

  const deletePost = (id) => {
    fetch(`/api/posts/${id}`, { method: 'DELETE' })
      .then((res) => {
        getPosts();
        toast.success('Note deleted successfully');
      })
      .catch((error) => {
        console.log('Note not found', error);
        toast.error('Error deleting note.');
      });
  };

  const handleAdd = () => {
    setInputs({ title: '', body: '' });
    setPost([]);
    setToggle(true);
  };

  return (
    <div className="container">
      <header className="header">
        <h1 className="header__title">posts</h1>
        <button className="btn" onClick={handleAdd}>
          Add Post <IoAdd className="btn__icon" size="24" />
        </button>
      </header>
      <PostsList
        posts={posts}
        getNote={getPost}
        setToggle={setToggle}
        deleteNote={deletePost}
      />
      <Form
        showModal={toggle}
        post={post}
        toggleModal={setToggle}
        addNote={addPost}
        updateNote={updatePost}
        inputs={inputs}
        setInputs={setInputs}
      />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
      />
    </div>
  );
};

export default App;
