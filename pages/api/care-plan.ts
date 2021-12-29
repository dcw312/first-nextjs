// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { CarePlanWrapper } from '../../src/interfaces/care-plan-wrapper';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CarePlanWrapper>
) {
  await new Promise(r => setTimeout(r, 2000));
  res.status(200).json(demoCarePlan())
}

const medications = [{id: "med1", desc: "Insulin"}, {id: "med2", desc: "Trulicity"}]
const questions = [{id: "A1C", text: "Hight A1C?", answer: false}, {id: "TrulicityAlrg", text: "Alergic to Trulicity?", answer: false}]

function demoCarePlan(): CarePlanWrapper {
  return {
    loading: false,
    carePlan: { medications: medications },
    questionaire: questions
  }
}
