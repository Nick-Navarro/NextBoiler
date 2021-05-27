import App, { AppProps } from 'next/app'
import { IntlProvider } from 'react-intl'
import Router, { useRouter } from 'next/router'
import NProgress from 'nprogress'
import '@/styles/generals/global.scss'
import { localeCopy } from 'public/locales'

// Page Loader Config
NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const AppBase = ({ Component, pageProps }: AppProps) => {
  const { locale, defaultLocale } = useRouter()
  console.warn({ locale, defaultLocale })
  const messages = localeCopy[locale]
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
