import Translations from '@/@types/translations'
import { common } from './common'
import { homePage } from './pages/home'

// MAKE SURE ALL KEYS ARE UNIQUE
// IF NOT THEY WILL GET OVERRIDEN BY LAST FILE
// FOLLOW PAGE||COMPONENT.HTML_ATTRIBUTE.NAME
// page example: home.h1.greeting = 'Starting Patient Portal'
// component example: footer.link.privacy = 'Privacy Policy'

const EN_TRANSLATIONS: Translations = {
  ...common,
  ...homePage,
}

export default EN_TRANSLATIONS