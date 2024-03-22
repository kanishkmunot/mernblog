import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Label, TextInput } from 'flowbite-react'
function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
      
        <div className='flex-1'>
        <Link to="/" className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-2 bg-gradient-to-r from-rose-400 via-purple-400 to-indigo-400 rounded-lg text-white'>Kanishk's Blog</span>
        </Link>
        <p className='text-sm mt-5'>
        Saitama's Punch, Genos's Precision, My AI insights!!.
        </p>
        </div>

        <div className='flex-1'>
          <form className='flex flex-col gap-4'>
            <div>
              <Label value='Your username'/>
              <TextInput type='text' placeholder='username' id='username' />
            </div>
            <div>
              <Label value='Your E-mail'/>
              <TextInput type='text' placeholder='email' id='email' />
            </div>
            <div>
              <Label value='Your password'/>
              <TextInput type='text' placeholder='password' id='password' />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit'>
              Sign Up
            </Button>
          </form>
          <div className='flex gap-1 text-sm mt-3 md:mx-16 font-medium'>
            <span>Already Have an account?</span>
            <Link to='/sign-in' className='text-purple-600 font-bold'>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp

// continue from 1:53:00 onwards