export type TranslationContextType = {
  initialI18nStore: {
    en: { common: Record<string, unknown> }
    es: { common: Record<string, unknown> }
  }
  userConfig: {
    default: {
      i18n: {
        defaultLocale: string
        locales: string[]
      }
    }
  }
}
