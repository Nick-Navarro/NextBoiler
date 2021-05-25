import App, { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { ChakraProvider } from '@chakra-ui/react'
import Router from 'next/router'
import NProgress from 'nprogress'

import '@/styles/generals/global.scss'
import BRAND_THEME from '@/styles/brandTheme'

// Page Loader Config
NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const AppBase = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider resetCSS theme={BRAND_THEME}>
    <Component {...pageProps} />
  </ChakraProvider>
)

AppBase.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}

export default appWithTranslation(AppBase)
