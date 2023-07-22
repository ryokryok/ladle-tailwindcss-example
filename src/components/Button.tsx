import { ComponentPropsWithRef, FC, forwardRef } from 'react'
import { clsx } from 'clsx'

type ButtonCustomProps = {
  label: string
  size?: 'small' | 'medium' | 'large'
  rounded?: 'none' | 'rounded' | 'full'
}

type ButtonProps = ComponentPropsWithRef<'button'>

// clsx for merge custom style into default style
export const Button: FC<ButtonProps & ButtonCustomProps> = forwardRef(
  (
    { className, rounded = 'rounded', size = 'medium', label, ...props },
    ref
  ) => (
    <button
      className={clsx(
        className,
        `
    font-sans text-white w-full
    ${
      rounded !== 'none'
        ? rounded === 'rounded'
          ? 'rounded'
          : 'rounded-full'
        : ''
    }
    ${props.disabled ? `bg-gray-600` : `bg-blue-600 hover:bg-blue-700`}
    ${
      size === 'small'
        ? `px-2 py-1 text-sm`
        : size === 'medium'
        ? `px-3 py-2 text-base`
        : `px-6 py-3 text-xl`
    }
    `
      )}
      ref={ref}
      {...props}
    >
      {label}
    </button>
  )
)
