import { toast } from 'react-toastify';

export function useAddProfile(){
    const addProfile = async(name, phone, address,insteredSports, skill, city) => {
            try {
                

                const authToken = localStorage.getItem('token');
                const response = await fetch(
                  "http://localhost:8000/api/v1/details/createdetails",
                  {
                    headers: {

                      "Content-Type": "application/json",
                      Authorization: `Bearer ${authToken}`,

                    },
                    method: "POST",
                    body: JSON.stringify({
                      city:city,
                      phoneNumber : phone,
                      interestedSports : insteredSports,
                      skillLevel:skill,
                      address : address,
                      name:name

                    }),
                  }
                );
                const responseData = await response.json();
                if (response.ok) {
                  toast.success("add profile sucessfully")
                }
              } catch (error) {
                toast.error(error);
              }
    }
    return {addProfile} ;
}

