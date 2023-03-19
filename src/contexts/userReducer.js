import { createUserDb, authUser, updateHis } from './types';

 export default (state, actions) =>{
  const {types, payload} = actions;
   
  
  switch (types) {
        case createUserDb:
            return {
                ...state,
                user: payload
            }
        
        case authUser:
            return {
                ...state,
                user: payload
            }
            case updateHis:
                return {
                    ...state,
                    historial:payload
                }
    
        default: 
            return{
                ...state
            }
            
    }
 }
