const defaultState = {
  customers: []
}

const ADD_CUSTOMER = "ADD_CUSTOMER";
const REMOVE_CUSTOMER = "REMOVE_CUSTOMER";

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CUSTOMER:
      return {...state, customers: [...state.customers, action.payload]}
    case REMOVE_CUSTOMER:
      return {...state, customers: state.customers.filter(i => i.name !== action.payload)}
    default: return state;
  }
}

export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload: payload})
export const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOMER, payload: payload})