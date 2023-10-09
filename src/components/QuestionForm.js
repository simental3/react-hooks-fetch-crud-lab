import React, { useState } from "react";

const initialState = {
  prompt: "",
  answer1: "",
  answer2: "",
  answer3: "",
  answer4: "",
  correctIndex: 0,
}

function QuestionForm({ onAddQuestion }) {
  const [formData, setFormData] = useState(initialState);

  // Event Handler
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmitNewForm(e) {
    e.preventDefault();
    const newQuestionData = {
      prompt: prompt,
      answers: [
        answer1,
        answer2,
        answer3,
        answer4,
      ],
      correctIndex: parseInt(correctIndex),
    }
    setFormData(initialState);

    fetch('http://localhost:4000/questions', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(newQuestionData)
    })
      .then((r) => r.json())
      .then((newQuestion) => onAddQuestion(newQuestion))
  }

  // JSX Elements
  const { prompt, answer1, answer2, answer3, answer4, correctIndex } = formData;

  return (
    <section>
      <h1>New Question</h1>
      <form onSubmit={handleSubmitNewForm}>

        <label>
          Prompt:
          <input
            type="text"
            name="prompt"
            value={prompt}
            onChange={handleChange}
          />
        </label>

        <label>
          Answer 1:
          <input
            type="text"
            name="answer1"
            value={answer1}
            onChange={handleChange}
          />
        </label>

        <label>
          Answer 2:
          <input
            type="text"
            name="answer2"
            value={answer2}
            onChange={handleChange}
          />
        </label>

        <label>
          Answer 3:
          <input
            type="text"
            name="answer3"
            value={answer3}
            onChange={handleChange}
          />
        </label>

        <label>
          Answer 4:
          <input
            type="text"
            name="answer4"
            value={answer4}
            onChange={handleChange}
          />
        </label>

        <label>
          Correct Answer:
          <select
            name="correctIndex"
            value={correctIndex}
            onChange={handleChange}
          >
            <option value="0">{answer1}</option>
            <option value="1">{answer2}</option>
            <option value="2">{answer3}</option>
            <option value="3">{answer4}</option>
          </select>
        </label>

        <button type="submit">Add Question</button>
      </form>
    </section>
  );
}

export default QuestionForm;
