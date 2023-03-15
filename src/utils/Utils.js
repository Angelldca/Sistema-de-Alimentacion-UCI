

export const generateArr = ({count, min, max})=>{
      
    const arr=[];
    for (let i=min; i< max;i+= count){
        arr.push(i);
    }
    return arr;
}



export const generarListaMenuXfehca = (menu=[])=>{
 
  const arr = [];
 
  console.log("Este es el menu " + menu);
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
      // console.log(menuXfecha)
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
  
  console.log(array);
}