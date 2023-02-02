
import { useEffect, useState } from 'react';
import './App.css';
import TicTacToe from './component/TictTactToe';
import Loading from './component/Loading';
// import TicTacToe from './component/TicTacToeTwo';

function App() {
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setTimeout((e) => {
      setIsLoading(true);
    }, 2500);
  }, []);
  return (
    <div className="App">
      
      {
        isLoading ? <TicTacToe/> : <Loading/>
      }
        


    </div>
  );
}

export default App;
