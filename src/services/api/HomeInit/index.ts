import { AxiosResponse } from 'axios'
import homeData from '@/../mock-data/user-data.json'

// Example of dummy api
// export const fetchHomepageData = (): Promise<AxiosResponse> => axios.get('/v1/home-data/')
export const fetchHomepageData = (): Promise<AxiosResponse> =>
  Promise.resolve(
    // Mock init Homepage Data
    { status: 200, data: homeData, statusText: '', headers: '', config: {} },
  )
