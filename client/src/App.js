import Inputs from './components/Inputs';
import List from './components/List';
import ListContext from './contexts/ListContext';
import GlobalContext from './contexts/GlobalContext';
import './css/bootstrap.min.css';
import './css/responsive.css';
import './css/style.css';
function App() {
  return (
    <div  >
      <h1>Listing people</h1>
      <GlobalContext>
        <ListContext>
          <Inputs/> <List />
        </ListContext>
      </GlobalContext>
      
     
       
    </div>
  );
}

export default App;
