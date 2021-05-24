import { TranslationContextType } from "@/@types/initializations/translations/common"

export const translationContext: TranslationContextType  =  {
    initialI18nStore: {
      "en": {
        "common": {}
      },
      "es": {
        "common": {}
      },
    },
    userConfig: {
      default: {
        i18n: {
          defaultLocale: 'en',
          locales: ['en', 'es']
        }
      }
    },
  }
