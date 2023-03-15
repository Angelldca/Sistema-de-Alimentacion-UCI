import Swal from 'sweetalert2'

async function useFetchPost  (url, options) {
  let data=null;
  let errorResult=null;
  let isLoading =true;

    const fetchData = async () => {
      try {
        
        const response = await fetch(url, options);
        data = await response.json();
        isLoading = false
      } catch (error) {
        errorResult =error;
      
        
       
      }
  };

  
  await fetchData() ;
  //await loadData();

  return { data, isLoading, errorResult };
}



export default useFetchPost;