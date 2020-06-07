import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';


const initialState = {
    regList : null,
  }
  
  
  const reducer = (state = initialState, action) => {
    switch(action.type){
      case actionTypes.REGLIST_UPDATE : return updateObject(state, {regList : action.regList});
      default: return state;
    }
  }
  
  export default reducer;