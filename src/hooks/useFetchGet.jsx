import { useState, useEffect } from 'react';

async function useFetchGet(url) {

  let data=null
  let isLoading=true
  let error=null

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        data = await response.json();
       isLoading = false;
      } catch (e) {
        error = e;
      }
    };

   await fetchData();
  return { data, isLoading, error };
}

export default useFetchGet;