import './App.css'

import { createContext } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import ResultPage from './components/ResultPage'
import UIGenerator from './components/UIGenerator'
import { initialState } from './reducer/FormReducer'

const FormContext = createContext(initialState)

export default function App() {
  return (
    <div className="App">
      <FormContext.Provider value={null}>
        <Router>
          <Routes>
            <Route path="/" element={<UIGenerator />} />
            <Route path="/result" element={<ResultPage />} />
          </Routes>
        </Router>
      </FormContext.Provider>
    </div>
  )
}
