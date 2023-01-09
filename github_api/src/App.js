import './App.css';
import Header from './Components/Header';
import LandingPage from './Pages/LandingPage';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Repo from './Pages/Repo'
import Error from './Pages/Error';
import RepoInfo from './Pages/RepoInfo';

function App() {
  return (
    <div className="bg-[url('./Assets/background.png')] bg-no-repeat bg-cover h-screen  ">
       <Router>
       <Header /> 
      <Routes>
          <Route path='*' element={ <Error />} />
          <Route path='/' element={ <LandingPage />} />
          <Route path='/Repo' element={ <Repo />} />
          <Route path='Repo/repo-info/:name' element={ <RepoInfo />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
