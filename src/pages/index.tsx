import React from 'react'
import moment from 'moment'
import { NextPage } from 'next'
import Head from 'next/head'
import { AppLayout } from '@/layouts/AppLayout'
import { HomeInitials } from '@/@types/initializations'
import { getHomePageInitialValues } from '@/services/initializations'
import { LOGGEDIN } from '@/../config/constants'
import styles from './home/home.module.scss'

const Home: NextPage<HomeInitials> = (): JSX.Element => (
  <div className={styles.container}>
    <Head>
      <title>Patient Portal</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <AppLayout authority={LOGGEDIN}>
      <main className={styles.main}>
        <h1 className={styles.title}>Starting Patient Portal</h1>

        <div className={styles.grid}>
          <a href="https://vitamedmd.net/" className={styles.card}>
            {/* <h3>{t('heading.documentation')}</h3>
              <p>{t('paragraph.text')}</p> */}
            <h3>Patient Portal translation documentation</h3>
            <p>Lets Go</p>
          </a>
        </div>
      </main>
    </AppLayout>
    <footer className={styles.footer}>@{moment().format('YYYY')} TherapeuticsMS, Inc. All rights reserved.</footer>
  </div>
)

export const getServerSideProps = async () => ({
  props: {
    ...getHomePageInitialValues(),
  },
})

export default Home
