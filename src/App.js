
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Highlight from './components/Highlight'

function App() {
  return (
    <div>
      <Navbar/>
      <div className="mt-14 sm:mt-16">
        <Highlight />
      </div>
    </div>
  );
}

export default App;
