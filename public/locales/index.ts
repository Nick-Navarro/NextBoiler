import en from './en'
import es from './es'
import Translations from '@/@types/translations/index'

interface LocaleInt {
  en: Translations
  es: Translations
}

export const LOCALE_COPY: LocaleInt = {
  en,
  es,
}