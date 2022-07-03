
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import WarningSign from './components/WarningSign';
import MyBadge from './components/MyBadge';
import SingleBook from './components/SingleBook';
import fantasyBooks from './fantasyBooks.json'

function App() {
  return (
    <div className='App'> 
    <header className='App-header'>
    <WarningSign text="Watch Out!" />
    <MyBadge text="NEW!!" color="info" />
    <SingleBook book={fantasyBooks[0]} />
    </header>
    </div> 
  );
    }


export default App;
