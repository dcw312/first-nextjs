import React from 'react'
import styles from '../../styles/Home.module.css'
import { Question } from '../interfaces/care-plan-wrapper'
import QuestionRow from './Question'

type Props = {
    questions: Question[]
}

function Questionaire({questions} : Props) {
    return (
        <div className={styles.card}>
           {questions.map(q => <QuestionRow key={q.id} question={q} />)}
        </div>
    )
}

export default Questionaire
