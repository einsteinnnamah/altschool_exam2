import './App.css';
import Header from './Components/Header';
import Landingpage from './Pages/Landingpage';
import './chubbo.css'

function App() {
  return (
    <div className="bg-[url('./Assets/background.png')] bg-no-repeat h-screen bg-cover w-screen">
      <Landingpage />
    </div>
  );
}

export default App;
