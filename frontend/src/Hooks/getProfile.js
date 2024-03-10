import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';


export function useGetProfile() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authToken = localStorage.getItem("token");
        const resp = await fetch(
          "http://localhost:8000/api/v1/details/getdetails",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        if (!resp.ok) {
          throw new Error(`HTTP error! Status: ${resp.status}`);
        } else {
          const respInJson = await resp.json();
          if (!respInJson) {
            console.log("no data found");
          }
          setdata(respInJson);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(); // Call the async function immediately
  }, []); // Empty dependency array means it will only run once when the component mounts

  return { data };
}



export function useGetProfileByUserId() {
  const [profile , setProfile] = useState([])
  const [getUserId , setGetUserId] = useState([])

  
  const getProfileByUserId = async(userId)=>{
      try {
        const authToken = localStorage.getItem('token');
        if (authToken) {
          const base64Url = authToken.split('.')[1];
          const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
          const decodedToken = JSON.parse(atob(base64));
          
          
          setGetUserId(decodedToken.user._id)
      }



        const response = await fetch(`http://localhost:8000/api/v1/details/getProfileByUserId/${userId}` ,{
          headers: {
            "Content-Type": "application/JSON",
            Authorization: `Bearer ${authToken}`,

          },
          method : 'GET'
 
        })
        const responseData = await response.json()
        if (response.ok) {
          setProfile(responseData.user)
        }
      } catch (error) {
        toast.error(error)
      }
    
  }
  return {profile ,getProfileByUserId ,getUserId}
}
