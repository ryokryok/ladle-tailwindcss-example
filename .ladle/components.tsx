import type { GlobalProvider } from '@ladle/react'
import '../src/index.css'
import React from 'react'

export const Provider: GlobalProvider = ({ children, globalState }) => (
  <>{children}</>
)
