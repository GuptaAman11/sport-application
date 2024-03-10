import { useState , useEffect} from "react";
import { toast } from 'react-toastify';


export function useAddEvent(){
    const addEvent =async(selectedValues,organizerName,location,date,time,prize,description)=>{
        try {
            console.log("first",selectedValues,organizerName,location,date,time,prize,description)
                

            const authToken = localStorage.getItem('token');
            const response = await fetch(
              "http://localhost:8000/api/v1/event/createEvent",
              {
                headers: {

                  "Content-Type": "application/json",
                  Authorization: `Bearer ${authToken}`,

                },
                method: "POST",
                body: JSON.stringify({
                  // email, name, password ,typeOfUser , phoneNumber , address
                  sportname : selectedValues,
                  orgname : organizerName,
                  location:location,
                  description:description,
                  date:date,
                  time:time,
                  prize:prize

                }),
              }
            );
            const responseData = await response.json();
            if (response.ok) {
              toast.sucess("Event created sucessfully");
            }
          } catch (error) {
            toast.error(error);
          }
    }
    return {addEvent}
}
export function useGetAllEvent(){
    const [event, setEvent] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch(
                    "http://localhost:8000/api/v1/event/events",
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
                const respInJson = await resp.json();
                if (!respInJson) {
                    toast.error("no data found");
                }else{
                  toast.success("here is the all event")
                  setEvent(respInJson);

                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchData(); // Call the async function immediately
    }, []); // Empty dependency array to ensure useEffect runs only once

    return { event };
}




