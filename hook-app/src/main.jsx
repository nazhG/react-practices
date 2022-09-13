import React from 'react'
import ReactDOM from 'react-dom/client'
import { HooksApp } from './HooksApp'
import { CounterApp } from './01-UseState/CounterApp'
import { CounterWithCustomHook } from './01-UseState/CounterWithCustomHook'
import { SimpleForm } from './02-UseEffect/SimpleForm'
import { FormCustomHook } from './02-UseEffect/FormCustomHook'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HooksApp />
    <CounterApp />
    <CounterWithCustomHook /> */}
    {/* <SimpleForm /> */}
    <FormCustomHook />
  </React.StrictMode>
)
