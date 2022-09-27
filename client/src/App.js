import './App.css';
//import Register from './Views/Register';
import SelectorMenu from './Components/SelectorMenu';
//import Home from './Views/Home';
import LogIn from './Views/LogIn';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <div>
      <LogIn />
    </div>
  )
}

export default App;
