type HEADING_SUBTYPE = {
  fontSize: string
  fontWeight: string
}

export type HEADING_TYPE = {
  baseStyle: {
    fontFamily: string
  }
  sizes: Record<string, unknown>
  variants: {
    h1: HEADING_SUBTYPE
    h2: HEADING_SUBTYPE
    h3: HEADING_SUBTYPE
    h4: HEADING_SUBTYPE
    h5: HEADING_SUBTYPE
    h6: HEADING_SUBTYPE
    display1: HEADING_SUBTYPE
    display2: HEADING_SUBTYPE
    display3: HEADING_SUBTYPE
  }
  defaultProps: Record<string, unknown>
}

export const HEADING: HEADING_TYPE = {
  baseStyle: {
    fontFamily: 'Barlow Condensed, sans-serif',
  },
  sizes: {},
  variants: {
    h1: {
      fontSize: '21px',
      fontWeight: '600',
    },
    h2: {
      fontSize: '18px',
      fontWeight: '600',
    },
    h3: {
      fontSize: '16px',
      fontWeight: '600',
    },
    h4: {
      fontSize: '16px',
      fontWeight: '400',
    },
    h5: {
      fontSize: '15px',
      fontWeight: '600',
    },
    h6: {
      fontSize: '15px',
      fontWeight: '400',
    },
    display1: {
      fontWeight: '200',
      fontSize: '60px',
    },
    display2: {
      fontWeight: '200',
      fontSize: '45px',
    },
    display3: {
      fontWeight: '200',
      fontSize: '25px',
    },
  },
  defaultProps: {},
}
