import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questionList, setQuestionList] = useState([]);


  // useEffect Hook
  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then((r) => r.json())
      .then((questionsData) => setQuestionList(questionsData))
  }, []);


  // Event Handler
  const handleAddQuestion = (newQuestion) => {
    const updatedQuestions = [...questionList, newQuestion]
    setQuestionList(updatedQuestions);
  }


  // JSX Elements
  const questionFormElement = <QuestionForm onAddQuestion={handleAddQuestion} />

  const questionListElement = (
    <QuestionList
      questions={questionList}
      onSetQuestionList={setQuestionList}
    />
  )


  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? questionFormElement : questionListElement}
    </main>
  );
}

export default App;
