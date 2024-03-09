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
                  sportName : selectedValues,
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
              console.log(responseData);
            }
          } catch (error) {
            console.log(error);
          }
    }
    return {addEvent}
}