import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import { useSelector, useDispatch } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';

function SignIn() {

  const [formData, setFormData] = useState({});
  const {loading, error: errorMessage} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log(e.target.value);
    setFormData({ ...formData, [e.target.id]: e.target.value.trim()})
  };

  const handleSubmit = async (e) => {
    e.preventDefault() // Thus will not refresh the page after we click the sign up button
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure("Please fill out all the required fields"))
    }

    try {
      dispatch(signInStart());
      const res = await fetch ('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success === false){
        dispatch(signInFailure(data.message));
      }

      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate('/')
      }

    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  }

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
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value='Your E-mail'/>
              <TextInput type='email' placeholder='example@email.com' id='email' onChange={handleChange} />
            </div>
            <div>
              <Label value='Your password'/>
              <TextInput type='password' placeholder='**********' id='password' onChange={handleChange} />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading}>
              {
                loading ? (
                  <>
                  <Spinner size='sm'/>
                  <span className='pl-3'>Loading....</span>
                  </>
                ) : 'Sign In'
              }
            </Button>
          </form>
          <div className='flex gap-1 text-sm mt-3 md:mx-16 font-medium'>
            <span>Don't Have an account?</span>
            <Link to='/sign-up' className='text-purple-600 font-bold'>
              Sign Up
            </Link>
          </div>
          {errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  )
}

export default SignIn