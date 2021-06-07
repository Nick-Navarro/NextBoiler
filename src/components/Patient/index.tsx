const Patient = ({ patient }) => (
  <div>
    <p>
      Patient Id: <strong>{patient.patientId}</strong>{' '}
    </p>
    <p>
      Patient Email: <strong>{patient.email}</strong>{' '}
    </p>
    <p>
      Patient First: <strong>{patient.firstName}</strong>{' '}
    </p>
    <p>
      Patient Last: <strong>{patient.lastName}</strong>{' '}
    </p>
    <p>
      Patient DOB: <strong>{patient.dob}</strong>{' '}
    </p>
    <p>
      Patient City, State, Zip:{' '}
      <strong>
        {patient.shippingAddress.city}, {patient.shippingAddress.state}, {patient.shippingAddress.zip}
      </strong>{' '}
    </p>
  </div>
)

export default Patient
