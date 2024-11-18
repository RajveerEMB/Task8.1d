//Postcontext.jsx
import React, { createContext, useState } from 'react';

export const PostContext = createContext();

export function PostProvider({ children }) {
  const [postType, setPostType] = useState('question');
  const [postData, setPostData] = useState({
    title: '',
    description: '',
    tags: '',
    abstract: '',
    articleText: '',
    imageUrl: ''
  });
  const [image, setImage] = useState(null);


  function handlePostTypeChange(e) {
    setPostType(e.target.value);
  }


  function handleInputChange(e) {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value
    });
  }


  function handleImageChange(e) {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  }

  
  return (
    <PostContext.Provider value={{ postType, postData, image, handlePostTypeChange, handleInputChange, handleImageChange }}>
      {children}
    </PostContext.Provider>
  );
}


