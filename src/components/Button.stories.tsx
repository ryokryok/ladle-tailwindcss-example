import type { Story } from '@ladle/react'
import { Button } from './Button'

type ButtonParameter = {
  label: string
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
}

export const Submit: Story<ButtonParameter> = ({
  label,
  size = 'medium',
  disabled,
}: ButtonParameter) => (
  <Button label={label} size={size} disabled={disabled} rounded="full" />
)

Submit.args = {
  label: 'Submit',
  disabled: false,
  size: 'medium',
}

Submit.argTypes = {
  size: {
    control: { type: 'radio' },
    defaultValue: 'medium',
    options: ['small', 'medium', 'large'],
  },
}
