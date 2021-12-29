import React, { useEffect, useState } from 'react'
import { CarePlanWrapper } from '../interfaces/care-plan-wrapper';

function useCarePlan() : CarePlanWrapper {
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
            setCarePlanContext(newLocal)
        }
    });
  }, []);
  
  return carePlanContext;
}

export default useCarePlan
