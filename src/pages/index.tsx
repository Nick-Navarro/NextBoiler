
import React from 'react'
import moment from 'moment'

import Head from 'next/head'

import { AppLayout } from '@/layouts/AppLayout'

import styles from './home/home.module.scss'
import { LOGGEDIN } from '@/../config/constants'

export default function Home() {
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
            <a href="https://vitamedmd.net/" className={styles.card}>
              <h3>Documentation</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
                quia necessitatibus fugiat ratione odio nulla id nam.
              </p>
            </a>
          </div>
        </main>
      </AppLayout>

      <footer className={styles.footer}>
        @{moment().format(`YYYY`)} TherapeuticsMS, Inc. All rights reserved.
      </footer>
    </div>
  )
}
