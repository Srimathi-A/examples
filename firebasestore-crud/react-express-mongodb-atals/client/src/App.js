import {Routes,Route,Link}from 'react-router-dom'
import Read from'./components/Read'
import Write from './components/Write'


function App() {
  return (
    <div >
      <div>
        <span><Link to="/read">Read data from server</Link></span>
        {""}{""}{""}{""}
        <span><Link to ="/write"> write data from server</Link></span>
      
    </div>
    </div>
  );
}

export default App;
