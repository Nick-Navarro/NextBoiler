import React from 'react'
import moment from 'moment'
import { NextPage } from 'next'
import Head from 'next/head'
import { AppLayout } from '@/layouts/AppLayout'
import { HomeInitials } from '@/@types/initializations'
import { getHomePageInitialValues } from '@/services/initializations'
import { LOGGEDIN } from '@/../config/constants'
import styles from './home/home.module.scss'
import { messages as lang } from '../../public/locales/index'

const Home: NextPage<HomeInitials> = ({ i18n }): JSX.Element => (
  <div className={styles.container}>
    <Head>
      <title>{i18n['meta.title']}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <AppLayout authority={LOGGEDIN}>
      <main className={styles.main}>
        <h1 className={styles.title}>{i18n['heading.patientPortal']}</h1>

        <div className={styles.grid}>
          <a href="https://vitamedmd.net/" className={styles.card}>
            <h3>{i18n['heading.documentation']}</h3>
            <p>{i18n['paragraph.text']}</p>
          </a>
        </div>
      </main>
    </AppLayout>
    <footer className={styles.footer}>@{moment().format('YYYY')} TherapeuticsMS, Inc. All rights reserved.</footer>
  </div>
)

export const getServerSideProps = async ({ locale }) => {
  console.log({ props: locale, lang })

  return {
    props: {
      ...getHomePageInitialValues(),
      i18n: lang[locale],
    },
  }
}

export default Home
