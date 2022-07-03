
import './App.css';
import WarningSign from './components/Alert/WarningSign';
import MyFooter from './components/Footer/MyFooter';
import   MyHeader  from './components/Header/MyHeader';

function App() {
  return (
    <div >
    <MyHeader />
    <WarningSign text="warning you now" />
     <p> Welcome to react</p>

     <MyFooter />
        
    </div>
  );
}

export default App;
