import './App.css';
import {Route, Routes} from 'react-router-dom'
import {useState} from 'react';
import Landing from './components/pages/Landing';
import Home from './components/pages/Home';
import About from './components/pages/About';
import UpdateBlog from './components/forms/UpdateBlog';

function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="container">
      <h1>Blog Frontend</h1>

      <Routes>
        <Route exact path='/' render={routerProps => <Landing {...routerProps} setUser={setUser}/> } />
        <Route path='/home' render={routerProps => <Home {...routerProps} user={user} />} />
        <Route path='/about' component={About} />
        <Route path='/update/:id' component={UpdateBlog}/>
      </Routes>
    </div>
  );
}

export default App;