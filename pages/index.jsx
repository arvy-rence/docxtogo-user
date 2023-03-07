import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Label, TextInput, Button } from 'flowbite-react'
import { BiUserCircle } from 'react-icons/bi'
import { RiLockPasswordFill } from 'react-icons/ri'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    console.log(username)
    console.log(password)
  }, [username, password])

  return (
    <div className='h-screen flex items-center justify-center'>
      <img className='absolute top-10 left-20 w-[10rem] h-[10rem]' src='logo.jpg' alt='' />
      <div className='mx-[15%] px-[5%] font-work pb-[6rem] pt-[5rem] rounded-3xl bg-primary'>
        <h1 className='text-center mb-5 font-bold text-2xl text-white'>
          LOG IN TO STUDENT
          <br /> DASHBOARD
        </h1>
        <form className='flex flex-col gap-4'>
          <div>
            <div className='mb-2 block'>
              <Label htmlFor='lrn' value='Username' className='text-white font-work' />
            </div>
            <TextInput
              id='lrn'
              type='text'
              icon={BiUserCircle}
              placeholder='LRN'
              required={true}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div>
            <div className='mb-2 block'>
              <Label htmlFor='password1' value='Password' className='text-white font-work' />
            </div>
            <TextInput
              id='password1'
              type='password'
              icon={RiLockPasswordFill}
              placeholder='**********'
              required={true}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className='flex justify-end'>
            <Button
              color='gray'
              className='text-black font-work font-bold bg-white w-1/2'
              href='/dashboard'
              onClick={() => {
                window.sessionStorage.setItem('lrn', username)
              }}
            >
              LOG IN
            </Button>
          </div>

          {/*TODO change to Button after adding backend logic*/}
          {/*<Button type="submit" color="light">*/}
          {/*  LOG IN*/}
          {/*</Button>*/}
        </form>
      </div>
    </div>
  )
}

export default Login
