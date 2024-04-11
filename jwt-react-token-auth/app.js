import {Routes,Route}from'react-router-dom'
import Main from "./components/Main";
import Login from "./components/Login";
import Signup from "./components/Signup";
function App(){
    return(
        <div>
            <Routes>
                {user && <Route path='/' element={<Main/>}/>}
                <Route path='/login'element={<Login/>}/>
                <Route path='/register'element={<Signup/>}/>
                <Route path='/'element={<Navigator/>}/>
            <h1>React JWT Token Authentication</h1>
        </div>
    )
}
export default App;