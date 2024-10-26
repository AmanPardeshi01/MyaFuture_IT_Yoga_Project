import './App.css'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from './components/auth/layout'
import AuthLogin from './pages/auth/login'
import AuthRegister from './pages/auth/register'
import Header from './components/Client/Header/Header'
import HomePage from './components/Client/HomePage'

function App() {

  return (
    <div >
      { /* Common */}
      {/* <h1>Header Component</h1> */}
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        <Route path="/header" element={<Header />}>

        </Route>

        <Route path="/" element={<HomePage />}>

        </Route>
      </Routes>


    </div>
  )
}

export default App
