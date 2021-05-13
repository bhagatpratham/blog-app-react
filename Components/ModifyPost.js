import React from "react";

const ModifyPost = (props) => {
  return (
    <div className='create-post'>
      <form>
        <h1>Modify Post</h1>
        <input
          type='text'
          placeholder='Title'
          size='39'
          required
          defaultValue={props.title}
          onChange={props.savePostTitleToState}
        />
        <textarea
          placeholder='contents'
          rows='8'
          cols='41'
          required
          defaultValue={props.content}
          onChange={props.savePostContentToState}
        ></textarea>
        <section className='button-wrapper'>
          <button className='button' onClick={props.updatePost}>
            Update Post
          </button>
        </section>
      </form>
    </div>
  );
};

export default ModifyPost;
