



export function reducerPlatosMenu(state, action) {
    switch (action.type) {
      case 'AGREGAR_PLATO':
          
        return {
          ...state,
          numeros: [...state, action.plato]
        };
      default:
        return state;
    }
  }