import React from 'react'
import { Question } from '../interfaces/care-plan-wrapper'

type Props = {
    question: Question
}

function QuestionRow({ question }: Props) {
    return (
        <div>{question.text}
            <input type="checkbox" checked={question.answer} />
        </div>
    )
}

export default QuestionRow
