import "./App.css";
import { Typography } from "@mui/material";
import { Question } from "./components/Question/Question";
import { questions } from "./utils/consts";
import { useState } from "react";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1);

  return (
    <div className="App">
      <header className="App-header">
        <Typography>Вопрос {currentQuestionIndex}:</Typography>
        <Question questions={questions} setCurrentQuestionIndex={setCurrentQuestionIndex} />
      </header>
    </div>
  );
}

export default App;
