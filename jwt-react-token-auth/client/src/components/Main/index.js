import React from 'react'
import style from './style.module.css'

const Main =()=>{
    const handleLogout = ()=>{
        localStorage.removeItem("token")
        window.location.reload();

    }
    return(
        <div className={style.main_container}>
            <nav className={StyleSheet.navbar}>
                <h1>Facebook</h1>
                <button className={StyleSheet.white_btn}onClick={handleLogout}>
                    LogOut
                </button>
            </nav>
        </div>
    )
}
export default Main;