/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type PatientProfile = {
  __typename: 'PatientProfile'
  id?: string | null
  patientId?: number
  email?: string
  firstName?: string
  lastName?: string
  gender?: string | null
  dob?: string | null
}

export type GetPatientProfileQueryVariables = {
  id?: number | null
}

export type GetPatientProfileQuery = {
  getPatientProfile?: {
    __typename: 'PatientProfile'
    id?: string | null
    patientId: number
    email: string
    firstName: string
    lastName: string
    gender?: string | null
    dob?: string | null
  } | null
}
