import React from 'react'

type ButtonProps = React.ComponentProps<'button'>

export const Button = (props: ButtonProps) => <button {...props} />
