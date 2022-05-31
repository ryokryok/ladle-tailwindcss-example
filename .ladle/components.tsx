import type { GlobalProvider } from '@ladle/react'
import '../src/index.css'

export const Provider: GlobalProvider = ({ children, globalState }) => (
  <>{children}</>
)
