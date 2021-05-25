export type Colors = {
  brand: {
    primary: {
      blue: string
      green: string
      gray: string
      orange: string
    }
    secondary: {
      darkBlue: string
      mediumBlue: string
      lightBlue: string
      darkOrange: string
      lightOrange: string
      gray: string
      borderGray: string
      bgGray: string
      disabledGray: string
      disabledText: string
    }
    alert: {
      success: string
      successBg: string
      info: string
      infoBg: string
      warning: string
      warningBg: string
      error: string
      errorBg: string
    }
  }
}

export const BRAND_COLORS: Colors = {
  brand: {
    primary: {
      blue: '#517EC3',
      green: '#B6BC3C',
      gray: '#64666A',
      orange: '#F5694E',
    },
    secondary: {
      darkBlue: '#2F4050',
      mediumBlue: '#264575',
      lightBlue: '#85B6FF',
      darkOrange: '#D85339',
      lightOrange: '#F7917E',
      gray: '#EEEEEE',
      borderGray: '#C7C7C7',
      bgGray: '#F7F7F7',
      disabledGray: '#EEEEEE',
      disabledText: '#919191',
    },
    alert: {
      success: '#005959',
      successBg: '#E5F2F2',
      info: '#084298',
      infoBg: '#CFE2FF',
      warning: '#084298',
      warningBg: '#FFEEBA',
      error: '#084298',
      errorBg: '#F5C6CB',
    },
  },
}
