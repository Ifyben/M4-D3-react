
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import WarningSign from './components/WarningSign';
import MyBadge from './components/MyBadge';

function App() {
  return (
    <div className='App'> 
    <header className='App-header'>
    <WarningSign text="Watch Out!" />
    <MyBadge text="NEW!!" color="info" />
    </header>
    </div> 
  );
    }


export default App;
