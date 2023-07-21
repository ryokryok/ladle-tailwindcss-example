import { ComponentProps, ComponentPropsWithRef, FC, forwardRef } from 'react'

type InputProps = ComponentPropsWithRef<'input'>

export const Input: FC<InputProps> = forwardRef((props, ref) => (
  <input
    className={`block border border-solid rounded border-slate-400 p-2 w-full`}
    ref={ref}
    {...props}
  />
))

type LabelProps = ComponentProps<'label'>

export const Label: FC<LabelProps> = (props) => (
  <label className={`block font-bold pb-1 w-full`} {...props} />
)

type FormItemWrapperProps = ComponentProps<'div'>

export const FormItemWrapper: FC<FormItemWrapperProps> = (props) => (
  <div className={`pb-4`} {...props} />
)

type FormWrapperProps = ComponentProps<'form'>

export const FormWrapper: FC<FormWrapperProps> = (props) => (
  <form
    className={`border-2 border-solid rounded-xl border-slate-500 p-4 w-80`}
    {...props}
  />
)
