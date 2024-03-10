import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';

export function useGetAllUser() {
  const [data, setdata] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const resp = await fetch(
          "http://localhost:8000/api/v1/users/getAllUsers",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              
            },
          }
        );
        if (!resp.ok) {
          throw new Error(`HTTP error! Status: ${resp.status}`);
        } else {
          const respInJson = await resp.json();
          if (!respInJson) {

            toast.error("no data found");
          }else{
            toast.sucess("get All person")
          setdata(respInJson);
        }
        }
      } catch (error) {
        toast.error(error);
      }
    };

    fetchData(); // Call the async function immediately
  }, []);
  return {data};

}
