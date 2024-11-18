// QuestionForm.jsx

import React, { useContext } from 'react';
import { PostContext } from './context/Postcontext';
import './QuestionForm.css';

function QuestionForm(props) {
  const { postData, handleInputChange } = useContext(PostContext);

  return (
    <form className="question-form" onSubmit={props.handleSubmit}>
      <label >Title</label>
      <input id="question-title" name="title" type="text" placeholder="Enter the title of your question" onChange={handleInputChange} value={postData.title} />

      <label >Describe</label>
      <textarea id="question-description" name="description" placeholder="Provide details about your question" onChange={handleInputChange} value={postData.description}></textarea>

      <label >Tags</label>
      <textarea id="question-tags" name="tags" placeholder="Add tags to describe your question" onChange={handleInputChange} value={postData.tags}></textarea>

      <button type="submit">Post</button>
    </form>
  );
}

export default QuestionForm;
