import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {

  const dispatch = useDispatch();
  const cash = useSelector(state => state.cashReducer.cash);

  const addCash = (cash) => {
    dispatch({type: "ADD_CASH", payload: cash})
  }
  const getCash = (cash) => {
    dispatch({type: "GET_CASH", payload: cash})
  }

  return (
    <div className="App">
      <div className="cash">{cash}</div>
      <div className="cash-change">
        <button onClick={() => addCash(Number(prompt()))}>add cash</button>
        <button onClick={() => getCash(Number(prompt()))}>get cash</button>
      </div>
    </div>
  );
}

export default App;
