const initialState = {
  contactus: []
}

const reducer = (state = initialState, action) => {
  if(action.type === 'CONTACTUS'){
    return{
      ...state,
      contactus: state.contactus.concat(action.value)
    }
  }
  return state
}

export default reducer