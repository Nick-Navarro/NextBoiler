import { useRouter } from 'next/router'

export type Languages = 'en' | 'es'
export const defaultLanguage: Languages = 'en'

export const useLang = (): Languages => {
  const { locale } = useRouter()
  return (locale as Languages) || defaultLanguage
}
