import React from 'react'
import styles from '../../styles/Home.module.css'
import { CarePlan, CarePlanWrapper } from '../interfaces/care-plan-wrapper'
import Medication from './Medication'

function Medications(props: any) { 
    const {medications} = props.carePlan as CarePlan
    return (
        <div className={styles.card}>
            {medications.map(m => <Medication key={m.id} medication={m} />) }
        </div>
    )
}

export default Medications
