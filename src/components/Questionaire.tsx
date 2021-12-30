import React from 'react'
import { Item } from '../../pages/t2dm'
import styles from '../../styles/Home.module.css'
import { Question } from '../interfaces/care-plan-wrapper'
import QuestionRow from './Question'

type Props = {
    questions: Question[]
}

function Questionaire({questions} : Props) {
    return (
        <Item>
           {questions.map(q => <QuestionRow key={q.id} question={q} />)}
        </Item>
    )
}

export default Questionaire
