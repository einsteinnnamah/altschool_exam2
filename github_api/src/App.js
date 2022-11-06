import './App.css';
import Header from './Components/Header';
import Landingpage from './Pages/Landingpage';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Portfolio from './Pages/Portfolio'
import Error from './Pages/Error';
import Repoinfo from './Pages/Repoinfo';

function App() {
  return (
    <div className="bg-[url('./Assets/background.png')] bg-no-repeat h-cover bg-cover w-screen">
       <Router>
       <Header /> 
      <Routes>
          <Route path='*' element={ <Error />} />
          <Route path='/' element={ <Landingpage />} />
          <Route path='/Portfolio' element={ <Portfolio />} />
          <Route path='Portfolio/Repoinfo/:id' element={ <Repoinfo />} />
      </Routes>
    </Router>
    </div>
   
  );
}

export default App;
