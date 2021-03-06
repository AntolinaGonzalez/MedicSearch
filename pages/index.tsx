import React from 'react'
import MobileNavBar from '../components/MobileNavBar'
import NavBar from '../components/NavBar'
import useMobile from '../hooks/responsive'

export default function Index() {
  const mobile = useMobile()
  return (
    <>
    { mobile ? <MobileNavBar/> : <NavBar></NavBar>}
    </>
    
  )
}