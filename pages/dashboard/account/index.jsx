import React from 'react'

export default function AccountDetails() {
  React.useEffect(() => {
    // get lrn from localStorage
    // get account details from api
    // set account details to state
    console.log(window.sessionStorage.getItem('lrn'))
  }, [])

  return <div>Account Details</div>
}
