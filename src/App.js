
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import WarningSign from './components/WarningSign';

function App() {
  return (
    <div className='App'> 
    <header className='App-header'>
    <WarningSign text="Watch Out!" />
    </header>
    </div> 
  );
    }


export default App;
