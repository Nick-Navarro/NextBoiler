import React from 'react'
import moment from 'moment'
import { NextPage } from 'next'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'
import { AppLayout } from '@/layouts/AppLayout'
import { HomeInitials } from '@/@types/initializations'
import { getHomePageInitialValues } from '@/services/initializations'
import { LOGGEDIN } from '@/../config/constants'
import styles from './home/home.module.scss'

const Home: NextPage<HomeInitials> = (): JSX.Element => {
  const { t } = useTranslation('common')

  return (
    <div className={styles.container}>
      <Head>
        <title>{t('meta.title')}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout authority={LOGGEDIN}>
        <main className={styles.main}>
          <h1 className={styles.title}>{t('heading.patientPortal')}</h1>

          <div className={styles.grid}>
            <a href="https://vitamedmd.net/" className={styles.card}>
              <h3>{t('heading.documentation')}</h3>
              <p>{t('paragraph.text')}</p>
            </a>
          </div>
        </main>
      </AppLayout>
      <footer className={styles.footer}>@{moment().format('YYYY')} TherapeuticsMS, Inc. All rights reserved.</footer>
    </div>
  )
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...getHomePageInitialValues(),
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

export default Home
