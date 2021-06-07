import { HomepageInitResponseData } from '@/@types/api'

export interface HomeInitials {
  homeData: HomepageInitResponseData
  patientProfile: {
    patientId: string
    firstName: string
    lastName: string
    email: string
    dob: string
  }
}
