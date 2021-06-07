import App, { AppProps } from 'next/app'
import { IntlProvider } from 'react-intl'
import Amplify from 'aws-amplify'
import Router, { useRouter } from 'next/router'
import NProgress from 'nprogress'
import '@/styles/generals/global.scss'
import { LOCALE_COPY } from 'public/locales'
import awsmobile from '../aws-exports'

// import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
// // export const client = new AWSAppSyncClient({
// //   disableOffline: true,
// //   url: awsExports.aws_appsync_graphqlEndpoint,
// //   region: awsExports.aws_appsync_region,
// //   auth: {
// //     type: AUTH_TYPE.API_KEY, // or type: awsconfig.aws_appsync_authenticationType,
// //     apiKey: awsExports.aws_appsync_apiKey,
// //   }
// // });
// Page Loader Config
Amplify.configure({ ...awsmobile, ssr: true })
NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const AppBase = ({ Component, pageProps }: AppProps) => {
  const { locale, defaultLocale } = useRouter()
  const messages = LOCALE_COPY[locale]
  return (
    <IntlProvider locale={locale} defaultLocale={defaultLocale} messages={messages}>
      <Component {...pageProps} />
    </IntlProvider>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.

AppBase.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}

export default AppBase
