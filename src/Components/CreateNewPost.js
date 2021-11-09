import React from "react";

const CreateNewPost = (props) => {
  return (
    <div className='create-post'>
      <form onSubmit={props.savePost}>
        <h1>Create New Post</h1>
        <input
          type='text'
          placeholder='Title'
          size='39'
          required
          onChange={props.savePostTitleToState}
          ref={props.getTitle}
        />
        <br />
        <br />
        <textarea
          placeholder='contents'
          rows='8'
          cols='41'
          required
          onChange={props.savePostContentToState}
          ref={props.getContent}
        ></textarea>
        <br />
        <br />
        <section className='button-wrapper'>
          <button className='button'>Save Post</button>
        </section>
      </form>
    </div>
  );
};

export default CreateNewPost;
