//PostTypeSelector.jsx

import React, { useContext } from 'react';
import { PostContext } from './context/Postcontext';
import './PostTypeSelector.css';

function PostTypeSelector() {
  const { postType, handlePostTypeChange } = useContext(PostContext);

  return (
    <div className="post-type-selector">
      <select onChange={handlePostTypeChange} value={postType}>
        <option value="question">Question</option>
        <option value="article">Article</option>
      </select>
    </div>
  );
}

export default PostTypeSelector;
