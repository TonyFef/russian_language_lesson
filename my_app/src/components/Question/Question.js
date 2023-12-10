import {
  Typography,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Fragment } from "react";

export function Question({questions}) {
    console.log(questions);
  return (
    <div className="Quesion">
      {questions.map(({ question, options }) => (
        <Fragment key={`${question}${Math.random()}`}>
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
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Fragment>
      ))}
    </div>
  );
}
