import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Status = () => {
    const {isAuth} = useContext(AuthContext)
  return (
    <h1>Status:{isAuth?"Logged In" : "Logged out"}</h1>
  )
}

export default Status