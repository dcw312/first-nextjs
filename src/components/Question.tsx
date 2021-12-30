import { FormControlLabel, Switch } from '@mui/material'
import React from 'react'
import { Question } from '../interfaces/care-plan-wrapper'

// import FormControlLabel from '@mui/material/FormControlLabel';
// import Switch from '@mui/material/Switch';

type Props = {
    question: Question,
    handleChange: any,
    checked: boolean
}

function QuestionRow({ 
    handleChange, 
    question,
    checked 
}: Props) {
    return (
        <FormControlLabel
          control= {
              <Switch checked={checked} onChange={handleChange} name={question.id} />
          }
          label={question.text}
         />
    )
}

export default QuestionRow
