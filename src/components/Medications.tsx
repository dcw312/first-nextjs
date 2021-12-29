import React from 'react'
import styles from '../../styles/Home.module.css'

function Medications(props : any) {
    return (
        <div className={styles.card}>
            Medications for {props.carePlan.name}
        </div>
    )
}

export default Medications
