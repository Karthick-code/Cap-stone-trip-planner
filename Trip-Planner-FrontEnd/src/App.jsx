import Layout from './components/Layout'
import {Route,BrowserRouter, Routes} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import {AuthProvider} from './context/AuthContext'
import User from './components/user/User'
import Updateuser from './components/user/Updateuser'
import Addtravel from './components/travelplan/Addtravel'
import Travelplan from './components/travelplan/Travelplan'
import Todo from './components/todo/Todo'
import Addtodo from './components/todo/Addtodo'

function App() {

  return (
    <AuthProvider>
    <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>{/*wecan use also for destinations*/}
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/user" element={<User />}></Route> 
            <Route path="/update-user" element={<Updateuser />}></Route>
            <Route path="/travelplan" element={<Travelplan />}></Route>
            <Route path="/addtravel" element={<Addtravel />}></Route>
            <Route path="/todo" element={<Todo/>}></Route>
            <Route path="/addtodo" element={<Addtodo/>}></Route>
            <Route></Route>
          </Routes>
        </Layout>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App
