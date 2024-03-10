
import { useState } from "react";
import { toast } from 'react-toastify';

export function useFollowUnfollow() {
    const [isfollowLoading, setisfollowLoading] = useState(true);
    const [error, setError] = useState();



    const followUnfollow = async (userID) => {
        setisfollowLoading(true);

        try {
            const authToken = localStorage.getItem('token');
            const response = await fetch(`http://localhost:8000/api/v1/users/userfollowunfollow/${userID}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`,
                },
            });
            const responseData = await response.json();
            if (response.ok) {
                toast.success(responseData.msg)
            }
            else {
                toast.error(responseData.msg);
                throw new Error(responseData.message);
            }
            setisfollowLoading(false);

        } catch (error) {
            console.error('error following/unfollowing !!');
            toast.error(error)
            setError(error.message);
            setisfollowLoading(false);

        }
    }

    return { isfollowLoading, error, followUnfollow };

}