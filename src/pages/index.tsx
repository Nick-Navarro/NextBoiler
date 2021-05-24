import React from 'react'
import moment from 'moment'

import { NextPage } from 'next'
import Head from 'next/head'

import { AppLayout } from '@/layouts/AppLayout'
import { HomeInitials } from '@/@types/initializations'

import { getHomePageInitialValues } from '@/services/initializations'

import { LOGGEDIN } from '@/../config/constants'
import styles from './home/home.module.scss'

const Home: NextPage<HomeInitials> = (props): JSX.Element => {
  const {
    homeData: { user },
  } = props

  return (
    <div className={styles.container}>
      <Head>
        <title>Patient Portal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout authority={LOGGEDIN}>
        <main className={styles.main}>
          <h1 className={styles.title}>Starting Patient Portal</h1>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Welcome, {user.fullName}</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis quia necessitatibus fugiat ratione
                odio nulla id nam.
              </p>
            </div>
          </div>
        </main>
      </AppLayout>

      <footer className={styles.footer}>@{moment().format('YYYY')} TherapeuticsMS, Inc. All rights reserved.</footer>
    </div>
  )
}

export const getServerSideProps = async () => getHomePageInitialValues()

export default Home
