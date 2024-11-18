import React, { useEffect, useState } from 'react';
import { fetchQuestions } from './utils/firebase';
import Draggable from 'react-draggable';
import './FindQuestion.css';

function FindQuestion() {
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [filter, setFilter] = useState({
    date: '',
    tag: '',
    title: ''
  });

  useEffect(() => {
    fetchQuestions(setQuestions);
  }, []);

  useEffect(() => {
    setFilteredQuestions(questions);
  }, [questions]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({
      ...filter,
      [name]: value
    });

    let filtered = questions;

    if (filter.date) {
      filtered = filtered.filter(question =>
        question.date && new Date(question.date.seconds * 1000).toLocaleDateString().includes(filter.date)
      );
    }
    if (filter.tag) {
      filtered = filtered.filter(question => question.tags.includes(filter.tag));
    }
    if (filter.title) {
      filtered = filtered.filter(question => question.title.toLowerCase().includes(filter.title.toLowerCase()));
    }
    setFilteredQuestions(filtered);
  };

  const toggleDetails = (id) => {
    setQuestions(questions.map(question => {
      if (question.id === id) {
        return { ...question, expanded: !question.expanded };
      }
      return question;
    }));
  };

  return (
    <div className="find-question">
      <h1>Find Question</h1>
      <div className="filters">
        <input
          type="text"
          name="date"
          placeholder="Filter by date"
          value={filter.date}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="tag"
          placeholder="Filter by tag"
          value={filter.tag}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="title"
          placeholder="Filter by title"
          value={filter.title}
          onChange={handleFilterChange}
        />
      </div>
      <div className="question-list">
        {filteredQuestions.map((question) => (
          <Draggable key={question.id}>
            <div className="question-card">
              <h2>{question.title}</h2>
              <button onClick={() => toggleDetails(question.id)}>Details</button>
              {question.expanded && (
                <div className="question-details">
                  <p>{question.description}</p>
                  <p>Tags: {question.tags}</p>
                  <p>Date: {question.date ? new Date(question.date.seconds * 1000).toLocaleDateString() : 'N/A'}</p>
                  <p>{question.abstract}</p>
                  <p>{question.articleText}</p>
                  <img src={question.imageUrl} alt={question.title} />
                </div>
              )}
            </div>
          </Draggable>
        ))}
      </div>
    </div>
  );
}

export default FindQuestion;
