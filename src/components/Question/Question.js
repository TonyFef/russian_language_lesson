import "./Question.css";
import {
  Typography,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";

export function Question({
  questions,
  path,
  setPath,
  currentQuestion,
  setCurrentQuestion,
}) {
  const questionActual =
    currentQuestion === "questions" ? questions : currentQuestion;

    console.log({currentQuestion, questions})

  function onFormControlLabelClick(e) {
    const { target } = e;
    const { value } = target;
    console.log(value, questionActual, path);
    if (questionActual?.question) {
      setCurrentQuestion(questionActual[value]);
      setPath([...path, value]);
    } else {
      // console.log(questionActual);
    }
  }

  return (
    <div className="Quesion">
      <Typography>{questionActual?.question}</Typography>
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
    </div>
  );
}
