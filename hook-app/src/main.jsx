import React from 'react'
import ReactDOM from 'react-dom/client'
import { HooksApp } from './HooksApp'
import { CounterApp } from './01-UseState/CounterApp'
import { CounterWithCustomHook } from './01-UseState/CounterWithCustomHook'
import { SimpleForm } from './02-UseEffect/SimpleForm'
import { FormCustomHook } from './02-UseEffect/FormCustomHook'
import { MultipleHooks } from './03-examples/MultipleHooks'
import { FocusScreen } from './04-useRef/FocusScreen'
import { Layout } from './05-useLayoutEffect/Layout'
import { Memorize } from './06-memos/Memorize'
import { MemoHook } from './06-memos/MemoHook'
import { CallHook } from './06-memos/CallHook'
import { Padre } from './07-tarea-memo/Padre'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HooksApp />
    <CounterApp />
    <CounterWithCustomHook /> */}
    {/* <SimpleForm /> */}
    {/* <FormCustomHook /> */}
    {/* <MultipleHooks /> */}
    {/* <FocusScreen /> */}
    {/* <Layout /> */}
    {/* <Memorize /> */}
    {/* <MemoHook /> */}
    {/* <CallHook /> */}
    <Padre />
  </React.StrictMode>
)
