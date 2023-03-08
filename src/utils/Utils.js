

export const generateArr = ({count, min, max})=>{
      
    const arr=[];
    for (let i=min; i< max;i+= count){
        arr.push(i);
    }
    return arr;
}