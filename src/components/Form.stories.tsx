import { useState, MouseEvent } from 'react'
import { Button } from './Button'
import { FormItemWrapper, FormWrapper, Input, Label } from './Form'

export const Text = () => (
  <FormItemWrapper>
    <Label htmlFor={`username`}>Username</Label>
    <Input type={'text'} placeholder={'username'} id={`username`} />
  </FormItemWrapper>
)

export const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const isDisabled = !email || !password
  const submitHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    alert("This is demo, don't send anything")
  }
  return (
    <FormWrapper>
      <FormItemWrapper>
        <Label htmlFor={`email`}>Email</Label>
        <Input
          type={'email'}
          placeholder={'email'}
          id={`email`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormItemWrapper>
      <FormItemWrapper>
        <Label htmlFor={`password`}>Password</Label>
        <Input
          type={'password'}
          placeholder={'password'}
          id={`password`}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormItemWrapper>
      <Button
        className={`${
          isDisabled ? `bg-gray-700` : `bg-green-700`
        }  rounded font-mono text-white p-2 w-full`}
        disabled={isDisabled}
        onClick={submitHandler}
      >
        Login
      </Button>
    </FormWrapper>
  )
}

export const LoginPage = () => (
  <div className="m-auto flex flex-col items-center">
    <h1 className={`text-center text-2xl text-bold pb-4`}>Login</h1>
    <LoginForm />
  </div>
)
