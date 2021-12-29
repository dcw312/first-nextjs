import React, { useEffect, useState } from 'react'

function useCarePlan() {
  const [carePlanContext, setCarePlanContext] = useState({loading: true, carePlan: {}});
  
  useEffect(() => {
    fetch("/api/hello")
      .then(async (response) => {
        if (response.ok) {
            const newLocal = await response.json();
            setCarePlanContext({loading: false, carePlan: {name: newLocal.name}})
        }
    });
  }, []);
  
  return carePlanContext;
}

export default useCarePlan
