import React from "react";

function QuestionItem({ question, onDeleteClick, onUpdateAnswer }) {
  const { id, prompt, answers, correctIndex } = question;

  // Event Handlers
  function handleDeleteClick() {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'DELETE',
    })
      .then((r) => r.json())
      .then(() => onDeleteClick(id))
  }

  function handleUpdateAnswer(e) {
    const newCorrectIndex = parseInt(e.target.value)
    const updatedAnswerData = {correctIndex: newCorrectIndex}

    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(updatedAnswerData)
    })
      .then((r) => r.json())
      .then(() => onUpdateAnswer(id, newCorrectIndex))
  }


  // JSX Element
  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleUpdateAnswer}>
          {options}
        </select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
