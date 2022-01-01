import React from 'react'
import { Item } from '../../pages/t2dm'
import styles from '../../styles/Home.module.css'
import { Question } from '../interfaces/care-plan-wrapper'
import QuestionRow from './Question'

import FormGroup from '@mui/material/FormGroup';


type Props = {
    questions: Question[],
    handleAnswer: any
}

function Questionaire({ questions, handleAnswer }: Props) {

    // https://stackoverflow.com/a/11508490

    const initialState = new Map<string, boolean>()

    questions.map(q => initialState.set(q.id, q.answer))

    const [state, setState] = React.useState(initialState);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newState = new Map<string, boolean>(state)
        newState.set(event.target.name, event.target.checked)
        const answeredQuestion = questions.filter(q => q.id == event.target.name)[0]
        answeredQuestion.answer = event.target.checked
        handleAnswer(answeredQuestion)
        setState(newState);
    };

    return (
        <Item>
            <FormGroup>
                {questions.map(q => 
                    <QuestionRow
                        key={q.id}
                        question={q}
                        handleChange={handleChange}
                        checked={state.get(q.id) as boolean}
                    />
                )}
            </FormGroup>
        </Item>
    )
}

export default Questionaire
