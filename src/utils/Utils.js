

export const generateArr = ({count, min, max})=>{
      
    const arr=[];
    for (let i=min; i< max;i+= count){
        arr.push(i);
    }
    return arr;
}



export const generarListaMenuXfehca = (menu=[])=>{
 
  const arr = [];
 
 
  if(menu.length === 0)
      return arr;
    
      let menuXfecha =  menu.reduce(function(obj, item) {
          if(!obj[item.fecha]) {
            obj[item.fecha] = [];
          }
          obj[item.fecha].push({
            id_menu: item.id_menu,
            estado: item.estado,
            fecha:item.fecha,
            evento: item.evento,
            platos: item.platos,
            precio: item.precio
          });

         
          return obj;
        }, {});
     
       for (let prop in menuXfecha) {
        arr.push(menuXfecha[prop])
       }
      
        orderArray(arr);
       
        return arr;
}


export const generarListaMenuXfehcaReserva = (menu=[])=>{
 
  const arr = [];
 
 
  //if( menu === null) return arr;
    if(menu.length === 0 ) return arr;
      let menuXfecha =  menu.reduce(function(obj, item) {
          if(!obj[item.fecha]) {
            obj[item.fecha] = [];
          }
          obj[item.fecha].push({
            id_menu: item.id_menu,
            estado: item.estado,
            fecha:item.fecha,
            evento: item.evento,
            platos: item.platos,
            precio: item.precio,
            id_platosMenu: item.id_platosMenu,
            id_reserva: item.id_reserva
          });

         
          return obj;
        }, {});
     
       for (let prop in menuXfecha) {
        arr.push(menuXfecha[prop])
       }
      
        orderArray(arr);
       
        return arr;
}

const orderArray = (array = [])=>{
  
  const orden = ["Desayuno", "Almuerzo", "Comida"];

  array.forEach(function(arreglo) {
    arreglo.sort(function(a, b) {
      return orden.indexOf(a.evento) - orden.indexOf(b.evento);
    });
  });
  
 
}


export const formatFechaES = (fecha)=>{
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const newfecha  = new Date(fecha).toLocaleString('es-ES',options)
  return newfecha;
}