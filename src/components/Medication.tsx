import React from 'react'
import { Medication } from '../interfaces/care-plan-wrapper'

type Props = {
    medication: Medication
}

function Medication({ medication }: Props) {

    return (
        <div>
            {medication.desc}
        </div>
    )
}

export default Medication
