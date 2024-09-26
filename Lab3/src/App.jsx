import React from 'react'
import './styles/App.css'
import Layout from './components/Container'
import PageTitle from './components/PageTitle'

function App() {
  return (
    <div className="App">
      <PageTitle />
      <Layout />
    </div>
  )
}

export default App
