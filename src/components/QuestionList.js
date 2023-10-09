import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onSetQuestionList }) {
  // Event Handlers
  const handleDeleteClick = (deletedId) => {
    const updatedList = questions.filter((question) => question.id !== deletedId)
    onSetQuestionList(updatedList);
  }

  const handleUpdateAnswer = (id, newCorrectIndex) => {
    const updatedQuestions = questions.map((question) => {
      if (question.id === id) {
        return { ...question, correctIndex: newCorrectIndex };
      }
      return question;
    });
    console.log(updatedQuestions);
    onSetQuestionList(updatedQuestions);
  };


  // JSX Elements
  const questionItems = questions.map((question) => (
    <QuestionItem
      key={question.id}
      question={question}
      onDeleteClick={handleDeleteClick}
      onUpdateAnswer={handleUpdateAnswer}
    />
  ));

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionItems}</ul>
    </section>
  );
}

export default QuestionList;
