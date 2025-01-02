import React from 'react'
import "./LogOut.css";
import {ReactComponent as ArrowLeftIcon} from "../../../../assets/images/left-arrow.svg";

export const LogOut = ({setIsLoggedIn}) => {

function Exit(){
  localStorage.removeItem("isLoggedIn")
  setIsLoggedIn(false)
}

  return (
    <section className='sidebaBottom'>
        <button onClick={Exit}>
            <ArrowLeftIcon/>
            <span>Выход</span>
        </button>
    </section>
  )
}
