import React, { useEffect } from 'react';
import { FaArrowCircleLeft } from 'react-icons/fa';

const Form = ({
  showModal,
  toggleModal,
  post,
  addPost,
  updatePost,
  inputs,
  setInputs,
}) => {
  useEffect(() => {
    if (post) {
      setInputs({ title: post.title, body: post.body });
    }
  }, [post, setInputs]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const { title, body } = inputs;
    if (!post.id) {
      addPost(title, body);
      return;
    }
    updatePost(post.id, title, body);
  };
  const handleChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <div className={`modal ${showModal ? 'showModal' : 'hideModal'}`}>
      <div className="go-back-container">
        <button className="go-back" onClick={() => toggleModal(false)}>
          <FaArrowCircleLeft
            size={32}
            color="#41331c"
            onClick={() => toggleModal(false)}
          />
          <span>Go Back</span>
        </button>
      </div>
      <form className="modal-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="modal-form-input"
          value={inputs.title}
          onChange={handleChange}
          placeholder="Title"
          name="title"
          required
        />
        <textarea
          rows="10"
          className="modal-form-input"
          value={inputs.body}
          placeholder="Start typing ...."
          onChange={handleChange}
          name="body"
          required
        />
        <button type="submit" className="btn" onClick={handleSubmit}>
          {post.id ? 'Update post' : 'Add post'}
        </button>
      </form>
    </div>
  );
};

export default Form;
