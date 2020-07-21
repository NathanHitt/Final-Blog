import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

import MyNavbar from '../components/Navbar'
import MyFooter from '../components/Footer'

export default function Home() {
  return (
    <React.Fragment>
      <MyNavbar />

      <MyFooter />
    </React.Fragment>
  )
}
