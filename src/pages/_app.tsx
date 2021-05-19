import App, { AppProps } from 'next/app'

import Router from 'next/router'
import NProgress from 'nprogress'

import '@/styles/generals/global.scss'

// Page Loader Config
NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const AppBase = ({ Component, pageProps }: AppProps) => {
  // do more logic here...
  return <Component {...pageProps} />
}


AppBase.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}

export default AppBase
