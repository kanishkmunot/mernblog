import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
function SignIn() {

  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log(e.target.value);
    setFormData({ ...formData, [e.target.id]: e.target.value.trim()})
  };

  const handleSubmit = async (e) => {
    e.preventDefault() // Thus will not refresh the page after we click the sign up button
    if (!formData.email || !formData.password) {
      return setErrorMessage('Please fill out all the fields')
    }

    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch ('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success === false){
        return setErrorMessage(data.message)
      }
      setLoading(false);

      if (res.ok) {
        navigate('/')
      }

    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
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

// continue from 1:53:00 onwards