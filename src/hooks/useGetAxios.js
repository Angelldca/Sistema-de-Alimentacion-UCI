



async function axiosGet(url) {

    let data=null
    let isLoading=true
    let error=null
  
      const fetchData = async () => {
        try {
            await axios.get(url,{ 
                headers: { 'Content-Type': 'application/json' }
              })
            .then(response => {
                 data = response.data
            })
            .catch(er => {
            error = er
            });
        } catch (e) {
          error = e;
        }
      };
  
     await fetchData();
    return { data, isLoading, error };
  }
  
  export default axiosGet;