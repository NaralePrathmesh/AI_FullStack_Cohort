import {BrowserRouter , Routes , Route} from 'react-router-dom'
import './App.css'
import Home from './component/Home'
import Contact from './component/Contact'
import Navbar from './component/Navbar'

function App() {

  return (
    <>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact/:1234/:name' element={<Contact/>}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App


// Hooks - Hooks are special function in react functional components
// used to perform additional operations like validation , data manipulation and state management
// React hooks must be called inside react functional component
// always start with use


// 3 steps to use hooks
  // 1. Import hooks
  // 2. All hook as a function
  // 3. Use the hook inside component logic

// useNavigate()
  // use to navigate form one component to another component

// useLocation()
  // return location object representing the current URL

// useParams()
  // Use to access current url data in object format