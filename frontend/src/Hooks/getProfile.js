import React, { useState, useEffect } from "react";

export function useGetProfile() {
  const [data, setdata] = useState({});

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
          console.log("profile>>>", respInJson);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(); // Call the async function immediately
  }, []); // Empty dependency array means it will only run once when the component mounts

  return { data };
}
