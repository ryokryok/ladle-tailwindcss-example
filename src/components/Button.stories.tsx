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
  disabled = false,
}: ButtonParameter) => (
  <Button
    className={`${disabled ? `bg-gray-600` : `bg-blue-600 hover:bg-blue-700`} ${
      size === 'small'
        ? `px-2 py-1 text-sm`
        : size === 'medium'
        ? `px-3 py-2 text-base`
        : `px-6 py-3 text-xl`
    }
      font-sans text-white rounded-full w-full`}
    type={'submit'}
    disabled={disabled}
  >
    {label}
  </Button>
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
