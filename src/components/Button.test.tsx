import { it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

beforeEach(() => {
  vi.resetAllMocks()
})

it('Button.tsx call function from props', async () => {
  const user = userEvent.setup()
  const testClick = vi.fn()
  render(<Button onClick={testClick}>Like</Button>)
  await user.click(await screen.findByText('Like'))
  expect(testClick).toBeCalled()
})
