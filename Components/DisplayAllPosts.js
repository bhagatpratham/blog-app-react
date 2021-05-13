import React, { useRef, useState } from "react";
import CreateNewPost from "./CreateNewPost";
import ModifyPost from "./ModifyPost";
import Post from "./Post";

const DisplayAllPosts = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [allPosts, setAllPosts] = useState([]);
  const [createNewPost, setCreateNewPost] = useState(false);
  const [modifyPost, setModifyPost] = useState(false);
  const [editPostId, setEditPostId] = useState("");

  // To clear our state after the data has been captured
  const getTitle = useRef();
  const getContent = useRef();

  const savePostTitleToState = (e) => {
    setTitle(e.target.value);
  };

  const savePostContentToState = (e) => {
    setContent(e.target.value);
  };

  const toggleCreateNewPost = () => {
    setCreateNewPost(!createNewPost);
  };

  const toggleModifyPostComponent = () => {
    setModifyPost(!modifyPost);
  };

  const editPost = (id) => {
    setEditPostId(id);
    console.log(id);
    toggleModifyPostComponent();
  };

  const deletePost = (id) => {
    const modifiedPost = allPosts.filter((eachPost) => {
      return eachPost.id !== id;
    });
    setAllPosts(modifiedPost);
  };

  const updatePost = (event) => {
    event.preventDefault();
    const updatedPost = allPosts.map((eachPost) => {
      if (eachPost.id === editPostId) {
        return {
          ...eachPost,
          title: title || eachPost.title,
          content: content || eachPost.content,
        };
      }
      console.log(eachPost);
      return eachPost;
    });
    setAllPosts(updatedPost);
    toggleModifyPostComponent();
  };

  const savePost = (e) => {
    // This function is responsible for saving the captured input data into
    // allPosts state variables.
    e.preventDefault();
    const id = Date.now();
    setAllPosts([...allPosts, { title, content, id }]);
    console.log(allPosts);
    setTitle("");
    setContent("");
    getTitle.current.value = "";
    getContent.current.value = "";
    toggleCreateNewPost();
  };

  if (createNewPost) {
    return (
      <>
        <CreateNewPost
          savePostTitleToState={savePostTitleToState}
          savePostContentToState={savePostContentToState}
          getTitle={getTitle}
          getContent={getContent}
          savePost={savePost}
        />
      </>
    );
  } else if (modifyPost) {
    const post = allPosts.find((post) => {
      return post.id === editPostId;
    });
    return (
      <ModifyPost
        title={post.title}
        content={post.content}
        updatePost={updatePost}
        savePostTitleToState={savePostTitleToState}
        savePostContentToState={savePostContentToState}
      />
    );
  }
  return (
    <>
      <h2>All Posts</h2>
      {!allPosts.length ? (
        <div>
          <h3>There is nothing to see here!</h3>
        </div>
      ) : (
        allPosts.map((eachPost) => {
          return (
            <Post
              id={eachPost.id}
              key={eachPost.id}
              title={eachPost.title}
              content={eachPost.content}
              editPost={editPost}
              deletePost={deletePost}
            />
          );
        })
      )}
      <br />
      <br />
      <section className='button-wrapper'>
        <button className='button' onClick={toggleCreateNewPost}>
          Create New Post
        </button>
      </section>
    </>
  );
};

export default DisplayAllPosts;
