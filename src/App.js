import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {

  const dispatch = useDispatch();
  const cash = useSelector(state => state.cashReducer.cash);
  const customers = useSelector(state => state.customerReducer.customers);

  // console.log(customers)

  const addCash = (cash) => {
    dispatch({type: "ADD_CASH", payload: cash})
  }
  const getCash = (cash) => {
    dispatch({type: "GET_CASH", payload: cash})
  }
  const addCustomer = (name = "Vasia") => {
    const newCustomer = {
      name: name,
      id: Date.now()
    }
    dispatch({type: "ADD_CUSTOMER", payload: newCustomer})
  }

  function removeCustomer(name) {
    dispatch({type: "REMOVE_CUSTOMER", payload: name})
  }

  return (
    <div className="App">
      <div className="cash">{cash}</div>
      <div className="cash-change">
        <button onClick={() => addCash(Number(prompt()))}>add cash</button>
        <button onClick={() => getCash(Number(prompt()))}>get cash</button>
        <button onClick={() => addCustomer(prompt())}>add customer</button>
        <button onClick={() => removeCustomer(prompt())}>remove customer</button>
      </div>
      <div className="customers">
        {
          customers.length > 0 ? 
          <div>
            {customers.map(customer => 
              <div key={customer.id}>{customer.name}</div>
            )}
          </div>
          :
          <div>
            no customers
          </div>
        }
      </div>
    </div>
  );
}

export default App;
