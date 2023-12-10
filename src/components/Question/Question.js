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

  function onFormControlLabelClick(e) {
    const correctAnswer = questions[currentIndex].correctAnswer;
    console.log("hi", correctAnswer);
    if (e.target.value === correctAnswer) {
      alert("Правильно!");
      setCurrentIndex(currentIndex + 1);
      setCurrentQuestionIndex(currentIndex + 2);
    } else {
      alert("Неправильно!");
    }
  }

  return (
    <div className="Quesion">
      {questions.map(({ question, options }, index) => (
        <div
          key={`${question}${Math.random()}`}
          className={index === currentIndex ? "show" : "hide"}
        >
          <Typography>{question}</Typography>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="none"
              name="radio-buttons-group"
            >
              {options.map(({ value, label }) => (
                <FormControlLabel
                  value={value}
                  control={<Radio />}
                  label={label}
                  key={value}
                  onClick={onFormControlLabelClick}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </div>
      ))}
    </div>
  );
}
