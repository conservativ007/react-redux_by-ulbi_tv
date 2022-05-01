import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addCashAction, getCashAction } from './store/cashReducer';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';

function App() {

  const dispatch = useDispatch();
  const cash = useSelector(state => state.cashReducer.cash);
  const customers = useSelector(state => state.customerReducer.customers);

  // console.log(customers)

  const addCash = (cash) => {
    dispatch(addCashAction(cash))
  }
  const getCash = (cash) => {
    dispatch(getCashAction(cash))
  }
  const addCustomer = (name = "Vasia") => {
    const newCustomer = {
      name: name,
      id: Date.now()
    }
    dispatch(addCustomerAction(newCustomer));
  }

  function removeCustomer(name) {
    dispatch(removeCustomerAction(name));
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
              <div onClick={(e) => removeCustomer(e.target.innerHTML)} key={customer.id}>{customer.name}</div>
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
