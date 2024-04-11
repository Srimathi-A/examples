import React,{useState}from 'react'
import axios from 'axios';
import {Link}from 'react-router-dom';
import styles from './style.module.css'

const Signup =()=>{
    const [data,setdata]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:""
    })
    const[eror,setError]=useState("")

    const handleChange=({currentTarget:input})=>{
        setdata({...data,[input.name]:input.value})
        
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const url="http://localhost:8080/api/users"
            const{data:res}=await axios.post(url,data)
            Navigate("/login")
            console.log(res.data)
        }
        catch (error){
            if(
                error.response &&
                error.response.status>=400 &&
                error.response.status<=500
            ) {
                setError(error.response.data.message)
            }
        }
    }

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






