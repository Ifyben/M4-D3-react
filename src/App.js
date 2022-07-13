
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import BookList from './components/BookList';
import fantasyBooks from './fantasyBooks.json'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Registration from './components/Registration';

function App() {
  return (
    <Router>
      <div className='App'> 
        <header className='App-header'>
          <Route path="/" exact render={(routerProps) => <BookList {...routerProps} books={fantasyBooks} />} />
          <Route path="/registration" exact component={Registration} />
        </header>
      </div> 
    </Router>
  )
}


export default App;
