import React from 'react'

type InputProps = React.ComponentProps<'input'>

export const Input = (props: InputProps) => (
  <input
    className={`block border border-solid rounded border-slate-400 p-2 w-full`}
    {...props}
  />
)

type LabelProps = React.ComponentProps<'label'>

export const Label = (props: LabelProps) => (
  <label className={`block font-bold pb-1 w-full`} {...props} />
)

type FormItemWrapperProps = React.ComponentProps<'div'>

export const FormItemWrapper = (props: FormItemWrapperProps) => (
  <div className={`pb-4`} {...props} />
)

type FormWrapperProps = React.ComponentProps<'form'>

export const FormWrapper = (props: FormWrapperProps) => (
  <form
    className={`border-2 border-solid rounded-xl border-slate-500 p-4 w-80`}
    {...props}
  />
)
