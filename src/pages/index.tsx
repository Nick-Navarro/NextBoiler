import React from 'react'
import moment from 'moment'
import { NextPage } from 'next'
import Head from 'next/head'
import { AppLayout } from '@/layouts/AppLayout'
import { HomeInitials } from '@/@types/initializations'
import { getHomePageInitialValues } from '@/services/initializations'
import { LOGGEDIN } from '@/../config/constants'
import { useIntl } from 'react-intl'
import { API, withSSRContext, graphqlOperation } from 'aws-amplify'
import Patient from '@/components/Patient'
import * as queries from '../graphql/queries'
import styles from './home/home.module.scss'

const Home: NextPage<HomeInitials> = ({ patientProfile }): JSX.Element => {
  const { formatMessage: f } = useIntl()
  const [fetchedUser, setFetchedUser] = React.useState(null)
  const fetchOtherUser = async () => {
    const fetchedPatient: any = await API.graphql(graphqlOperation(queries.getPatientProfile, { id: 63360 }))
    setFetchedUser(fetchedPatient.data.getPatientProfile)
  }

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
          <div className={styles.info}>
            <h2>Server Side Rendered API Call</h2>
            <Patient patient={patientProfile} />
          </div>

          <div className={styles.info}>
            <h2>Client Side API Call</h2>
            <button type="button" onClick={fetchOtherUser}>
              Query from Client
            </button>
            <span>{fetchedUser ? <Patient patient={fetchedUser} /> : <p>User has not been fetched</p>}</span>
          </div>
        </main>
      </AppLayout>
      <footer className={styles.footer}>@{moment().format('YYYY')} TherapeuticsMS, Inc. All rights reserved.</footer>
    </div>
  )
}

export const getServerSideProps = async ({ req }) => {
  const { API: SSR_API } = withSSRContext({ req })
  const { data } = await SSR_API.graphql(graphqlOperation(queries.getPatientProfile, { id: 63359 }))
  return {
    props: {
      patientProfile: data.getPatientProfile,
      ...getHomePageInitialValues(),
    },
  }
}

export default Home

// Sample Query
// export async function getServerSideProps({ req, res }) {
//   const { Auth, API } = withSSRContext({ req });
//   try {
//     const user = await Auth.currentAuthenticatedUser();
//     const response = await API.graphql({
//       query: getUser,
//       variables: { id: user.attributes.sub },
//     });

//   if (response.data.getUser) {
//       return {
//         props: {
//           mode: "EDIT",
//           user: response.data.getUser,
//           error: false,
//         },
//       };
//     } else {
//       return {
//         props: {
//           mode: "ADD",
//           error: false,
//         },
//       };
//     }
//   } catch (err) {
//     console.log(err);
//     return {
//       props: {
//         error: true,
//       },
//     };
//   }
// }
