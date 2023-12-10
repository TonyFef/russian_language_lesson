import "./App.css";
import { Typography } from "@mui/material";
import { Question } from "./components/Question/Question";
import { questions } from "./utils/consts";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography>Вопрос 1:</Typography>
        <Question questions={questions} />
      </header>
    </div>
  );
}

export default App;
