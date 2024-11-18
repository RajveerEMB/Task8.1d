//ArticcleForm.jsx

import React, { useContext } from 'react';
import { PostContext } from './context/Postcontext';
import './ArticleForm.css';

function ArticleForm(props) {
  const { postData, handleInputChange, handleImageChange } = useContext(PostContext);

  return (
    <form className="articleform" onSubmit={props.handleSubmit}>
      <label >Title</label>
      <input id="article-title" name="title" type="text" placeholder="Enter the title of your article" onChange={handleInputChange} value={postData.title} />

      <label >Abstract</label>
      <input id="article-abstract" name="abstract" type="text" placeholder="Provide a summary of your article" onChange={handleInputChange} value={postData.abstract} />

      <label >Article Text</label>
      <textarea id="article-text" name="articleText" placeholder="Write your article here" onChange={handleInputChange} value={postData.articleText}></textarea>

      <label >Tags</label>
      <textarea id="article-tags" name="tags" placeholder="Add tags to describe your article" onChange={handleInputChange} value={postData.tags}></textarea>

      <label>Upload Image</label>
      <input id="article-image" type="file" onChange={handleImageChange} />


      <button type="submit">Post</button>
    </form>
  );
}

export default ArticleForm;
