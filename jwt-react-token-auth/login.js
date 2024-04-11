import React,{useState}from 'react'
import axios from 'axios';
import {Link}from 'react-router-dom';
import styles from './style.module.css'

const Login =()=>{
    const [data,setData]=useState({email:"",password:""})
    const[eror,setError]=useState("")

    return(
        <div className={styles.login.container}>
            <div className={styles.login_form_container}>
                <div className={styles.left}>
                    <form className={styles.form_container}>
                        <h1>Login to your account</h1>

                        <input type="email"placeholder='Email' name='email'
                        onChange={handleChange}value ={data.email}required
                        className={styles.input}/>

                  <input type="password"placeholder='Password' name='password'
                        onChange={handleChange}value ={data.password}required
                        className={styles.input}/>

                        <button type="submit" className={styles.green_btn}>
                            SignIn
                        </button>


                    </form>

                </div>
                <div className={styles.right}>
                    <h1>New Here?</h1>
                    <Link to ='/signup'>
                        <button type="button" className={styles.white_}></button>
                    </Link>
                </div>
            </div>
        </div>
    )
}


// style .modules.css



