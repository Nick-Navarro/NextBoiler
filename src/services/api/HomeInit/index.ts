import axios, { AxiosResponse } from 'axios'

// Example of dummy api
export const fetchHomepageData = (): Promise<AxiosResponse> => axios.get(`/v1/home-data/`)
