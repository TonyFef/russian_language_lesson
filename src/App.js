import "./App.css";
import { Typography, Button } from "@mui/material";
import { Question } from "./components/Question/Question";
import { questions } from "./utils/consts";
import { useState } from "react";

function App() {
  const [path, setPath] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState("questions");

  function onBackButtonClick() {
    if (path.length > 1) {
      path.pop();
      let smth = questions;
      path.forEach((item) => {
        smth = smth[item];
      });
      setCurrentQuestion(smth);
    } else {
      setCurrentQuestion(questions);
    }
  }

  return (
    <div className="App">
      <div className="App-header">
        <Button
          variant="text"
          style={{ right: "20%", opacity: "0.3" }}
          onClick={onBackButtonClick}
        >
          Назад
        </Button>
        <Typography>Вопрос {path.length + 1}:</Typography>
        <Question
          path={path}
          setPath={setPath}
          questions={questions}
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
        />
      </div>
    </div>
  );
}

export default App;
