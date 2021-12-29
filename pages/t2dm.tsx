import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import LoadingGuard from '../src/components/LoadingGuard'
import Medications from '../src/components/Medications'
import OrderDialog from '../src/components/OrderDialog'
import Questionaire from '../src/components/Questionaire'
import useCarePlan from '../src/hooks/useCarePlan'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const carePlanContext = {questionaire: null, carePlan: null}
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

        <div className={styles.grid}>
          <div className={styles.card}>Patient: David Wilson ({patientId})</div>
          <LoadingGuard loading={carePlan.loading} >
              <Questionaire questionaire={carePlanContext.questionaire} />
              <Medications carePlan={carePlanContext.carePlan} />
          </LoadingGuard>
          <OrderDialog />
        </div>
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
