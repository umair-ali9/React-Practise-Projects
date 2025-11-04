import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'
import './App.css'

function App() {
 

  return (
    <UserContextProvider>
      <h1>Mini Context</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
