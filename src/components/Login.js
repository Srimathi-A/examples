import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import { Form,Alert } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import GoogleButton from 'react-google-button'
import {useUserAuth} from '../context/UserAuthContext'

export default function Login() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState('')
    const navigate=useNavigate()
    const {logIn,googleSignIn}=useUserAuth()

    const handleSubmit=async(e)=>{
        e.preventDefault()
        setError('')
        try{
            await logIn(email,password)
            navigate("/home")
        }catch(err){
            setError(err.message)
        }
    }

    const handleGoolgeSignIn=async(e)=>{
        e.preventDefault()
        try{
            await googleSignIn()
            navigate('/home')
        }catch(error){
            console.log(error.message)
        }
    }

  return (
    <>
    <div className='p-4 box'>
        <h2 className='mb-3'>Firebase Auth Login</h2>
        {error && <Alert variant='danger'>{error}</Alert>}
        <From onSubmit = {handleSubmit}>
            <From.Group className="mb-3" controlId="formBasicEamil">
                <From.Control type="email" placeholder="Email address" onChange={(e)=>setEmail(e.target,value)}/>
            </From.Group>
            <From.Group className="mb-3" controlId="formBasicPassword">
                <From.Control type="password" placeholder="password" onChange={(e)=>setPassword(e.target,value)}/>
            </From.Group>

            <div className='d-grid gap-2'>
                <Button variant='primary' type='Submit'>
                    Log In
                </Button>
            </div>
        </From>

        <hr/>

        <div>
            <GoogleButton className='g-btn' type='dark' onClick={handleGoolgeSignIn}/>
        </div>
    </div>
    <div className='p-4 box mt-3 text-center'>
        Don't have an account?<Link to ="/signup">Sign Up</Link>
    </div>
    </>
  )
}