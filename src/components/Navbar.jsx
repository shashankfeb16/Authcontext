import React, { useContext } from 'react'
import styles from './App.module.css'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
    const {isAuth,login,logout} = useContext(AuthContext)
  return (
    <div className={styles.navbar}>
        <h2 className={styles.margin}>Logo</h2>
        <Button colorScheme='blue' marginTop="30px" onClick={()=>{
            if(isAuth){
                logout();
            }
            else{
                login();
            }
        }}>{isAuth?"Logout" : "Login"}</Button>
    </div>
  )
}

export default Navbar