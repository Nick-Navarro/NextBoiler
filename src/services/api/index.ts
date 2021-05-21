import axios from 'axios'
// Config
import { API_URL } from '@/../config/constants'

axios.defaults.baseURL = API_URL
export * from './HomeInit'
