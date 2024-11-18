//Postpage.jsx

import React, { useContext } from 'react';
import { savePost } from './utils/firebase';
import { PostContext} from './context/Postcontext';
import PostTypeSelector from './/PostTypeSelector';
import QuestionForm from './/QuestionForm';
import ArticleForm from './ArticleForm';
import './PostPage.css';

function PostPage() {
  const { postType, postData, image } = useContext(PostContext);

  function handleSubmit(e) {
    e.preventDefault();
    savePost(postType, postData, image);
  }

  return (
    <div className="post-page">
      <h1 className="post-page-title">New Post</h1>
      <PostTypeSelector />
      <div className="post-form-container">
        {postType === 'question' ? (<QuestionForm handleSubmit={handleSubmit} />) : (<ArticleForm handleSubmit={handleSubmit} />)}
      </div>
    </div>
  );
}

export default PostPage


