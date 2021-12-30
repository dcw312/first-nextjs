import React from 'react'
import { Item } from '../../pages/t2dm'
import styles from '../../styles/Home.module.css'
import { CarePlan, CarePlanWrapper } from '../interfaces/care-plan-wrapper'
import Medication from './Medication'

function Medications(props: any) { 
    const {medications} = props.carePlan as CarePlan
    return (
        <Item>
            {medications.map(m => <Medication key={m.id} medication={m} />) }
        </Item>
    )
}

export default Medications
