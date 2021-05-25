import { extendTheme } from '@chakra-ui/react'
import { GLOBAL_STYLES as global, GLOBAL_STYLES_TYPE } from './global'
import { HEADING as Heading, HEADING_TYPE } from './components/index'
import { BRAND_COLORS as colors, Colors } from './colors'

type THEME = {
  colors: Colors
  components: {
    Heading: HEADING_TYPE
  }
  styles: {
    global: GLOBAL_STYLES_TYPE
  }
}

const BRAND_THEME: THEME = extendTheme({
  // provide custom brand colors that can be references as brand.primary.blue
  colors,
  // provide custom styles to predetermined components
  components: {
    Heading,
  },
  // provide global styles e.g. font-family
  styles: {
    global,
  },
})

export default BRAND_THEME
