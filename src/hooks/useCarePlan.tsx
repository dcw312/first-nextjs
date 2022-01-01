import React, { useEffect, useState } from 'react'
import { CarePlanWrapper, Question } from '../interfaces/care-plan-wrapper';

function useCarePlan(answeredQuestions : Question[]) : CarePlanWrapper {
  const [carePlanContext, setCarePlanContext] = useState({
    loading: true, 
    carePlan: {},
    questionaire: {}
  } as CarePlanWrapper);
  
  useEffect(() => {
    fetch("/api/care-plan")
      .then(async (response) => {
        if (response.ok) {
            const newLocal = await response.json();
            console.log(['update-care-plan', answeredQuestions, newLocal])
            setCarePlanContext(newLocal)
        }
    });
  }, []);
  
  return carePlanContext;
}

export default useCarePlan
