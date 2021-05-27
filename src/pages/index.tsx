import React from 'react'
import moment from 'moment'
import { NextPage } from 'next'
import Head from 'next/head'
import { AppLayout } from '@/layouts/AppLayout'
import { HomeInitials } from '@/@types/initializations'
import { getHomePageInitialValues } from '@/services/initializations'
import { LOGGEDIN } from '@/../config/constants'
import { useIntl } from 'react-intl'
import styles from './home/home.module.scss'

const Home: NextPage<HomeInitials> = (): JSX.Element => {
  const { formatMessage: f } = useIntl()
  return (
    <div className={styles.container}>
      <Head>
        <title>{f({ id: 'meta.title' })}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout authority={LOGGEDIN}>
        <main className={styles.main}>
          <h1 className={styles.title}>{f({ id: 'heading.patientPortal' })}</h1>
          <div className={styles.grid}>
            <a href="https://vitamedmd.net/" className={styles.card}>
              <h3>{f({ id: 'heading.documentation' })}</h3>
              <p>{f({ id: 'paragraph.text' })}</p>
            </a>
          </div>
        </main>
      </AppLayout>
      <footer className={styles.footer}>@{moment().format('YYYY')} TherapeuticsMS, Inc. All rights reserved.</footer>
    </div>
  )
}

export const getServerSideProps = async () => ({
  props: {
    ...getHomePageInitialValues(),
  },
})

export default Home
