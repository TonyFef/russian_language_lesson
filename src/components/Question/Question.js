import "./Question.css";
import {
  Typography,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";

export function Question({ questions, setCurrentQuestionIndex }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState("questions");
  console.log(currentQuestion);
  const questionActual =
    currentQuestion === "questions" ? questions : currentQuestion;

  function onFormControlLabelClick(e) {
    const { target } = e;
    const { value } = target;
    console.log(value, questionActual);
    if (questionActual?.question) {
      setCurrentQuestion(questionActual[value]);
    } else {
      console.log(questionActual);
    }
    // const correctAnswer = questions[currentIndex].correctAnswer;
    // if (e.target.value === correctAnswer) {
    //   alert("Правильно!");
    //   setCurrentIndex(currentIndex + 1);
    //   setCurrentQuestionIndex(currentIndex + 2);
    // } else {
    //   alert("Неправильно!");
    // }
  }

  return (
    <div className="Quesion">
      <Typography>{questionActual?.question}</Typography>
      {/* {questionActual.map(({ question, options }, index) => (
        <div
          key={`${question}${Math.random()}`}
          className={index === currentIndex ? "show" : "hide"}
        >
          <Typography>{question}</Typography> */}
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="none"
          name="radio-buttons-group"
        >
          {questionActual?.options ? (
            questionActual?.options.map(({ value, label }) => (
              <FormControlLabel
                value={value}
                control={<Radio />}
                label={label}
                key={value}
                onClick={onFormControlLabelClick}
              />
            ))
          ) : (
            <Typography>{questionActual?.answer}</Typography>
          )}
        </RadioGroup>
      </FormControl>
      {/* //   </div> */}
      {/* // ))} */}
    </div>
  );
}
