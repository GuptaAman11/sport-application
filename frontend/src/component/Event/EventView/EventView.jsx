import React, { useEffect, useState } from 'react'
import '../../../Styles/Eventview.css'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';


const EventView = () => {
    const [event , setEvent] = useState("")
    const {eventId} = useParams()
    console.log(" hiiiiiiiii",event)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const authToken = localStorage.getItem('token');

                const resp = await fetch(
                    `http://localhost:8000/api/v1/event/eventsByevntId/${eventId}`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${authToken}`,

                        },
                    }
                );
                const respInJson = await resp.json();
                if (!respInJson) {
                    toast.error("no data found");
                }else{
                  toast.success("here is the all event")
                  setEvent(respInJson.eventByEventId);
  
                }
            } catch (error) {
                console.log(error);
            }
        };
  
        fetchData(); 
    }, []); 
  return (
    <div className="container">
    
     <div className="content">
     <div className="image">
         <img
           src="https://as2.ftcdn.net/v2/jpg/02/89/78/17/1000_F_289781730_0OJWSY2pS9Q69KT4g2pr5liE8dmW9CL0.jpg"
           alt="not found"
           className="eventimage"
         />
       </div>
       <div className="left-container">
         <span className="text1">Event NAME </span>
         <span className="text2">Event Location</span>
         <div className='pricemoney'><h1>Price Pool Of Event is {event}</h1></div>
         <p className="para">
           Event description Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis neque dolor quam
           consequatur ipsam unde perspiciatis corporis quasi at sapiente!
         </p>
         <button className="button2">Register Yourself For tournament</button>
       </div>
       
     </div>
   </div>
  )
}

export default EventView