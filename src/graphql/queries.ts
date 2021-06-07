/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPatientProfile = /* GraphQL */ `
  query GetPatientProfile($id: Int) {
    getPatientProfile(id: $id) {
      id
      patientId
      email
      firstName
      lastName
      gender
      dob
      primaryPhone {
        number
      }
      shippingAddress {
        city
        state
        zip
      }
    }
  }
`
