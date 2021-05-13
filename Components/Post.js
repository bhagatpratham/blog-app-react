import React from "react";

const Post = ({ title, content, editPost, id, deletePost }) => {
  return (
    <div className='post-container'>
      <form>
        <h3>{title}</h3>
        <p className='post-content'>{content}</p>
        <button className='button' onClick={() => editPost(id)}>
          Edit
        </button>
        <button className='button' onClick={() => deletePost(id)}>
          Delete
        </button>
      </form>
    </div>
  );
};

export default Post;
