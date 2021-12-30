import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import LoadingGuard from '../src/components/LoadingGuard'
import Medications from '../src/components/Medications'
import OrderDialog from '../src/components/OrderDialog'
import QuestionRow from '../src/components/Question'
import Questionaire from '../src/components/Questionaire'
import useCarePlan from '../src/hooks/useCarePlan'
import styles from '../styles/Home.module.css'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';


export const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Home: NextPage = () => {
  const patientId = '2'

  const carePlan = useCarePlan()
  
  return (
    <div className={styles.container}>
      <Head>
        <title>T2DM</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          T2DM
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <Stack>
          <Item>Patient: David Wilson ({patientId})</Item>
          <LoadingGuard loading={carePlan.loading} >
              <Questionaire questions={carePlan.questionaire} />            
              <Medications carePlan={carePlan.carePlan} />
          </LoadingGuard>
          <OrderDialog />
        </Stack>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
