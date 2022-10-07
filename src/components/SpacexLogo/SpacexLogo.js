import React from 'react'
import "../SpacexLogo/SpacexLogo.css"
import logoImg from "../../assets/images/spacexLogo.png"

function SpacexLogo() {
  return (
    <img className='spacex__Logo' src={logoImg} alt='spacex__Logo'/>
  )
}

export default SpacexLogo