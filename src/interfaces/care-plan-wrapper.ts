export interface Medication {
    id: string,
    desc: string
}

export interface Question {
    id: string, 
    text: string, 
    answer: boolean
}

export interface CarePlan {
    medications: Medication[]
}

export interface CarePlanWrapper {
    loading: boolean,
    carePlan: CarePlan,
    questionaire: Question[]
}
