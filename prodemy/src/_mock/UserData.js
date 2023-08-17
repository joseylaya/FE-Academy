import { useEffect, useState } from 'react';
import Axios from 'axios';

export default function useUserData() {
  const [userData, setUserData] = useState({ name: '', email: '' });
  const storedUserId = sessionStorage.getItem('userId');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await Axios.get(`http://localhost:8000/user/${storedUserId}`);
        const users = response.data;
        if (users.length > 0) {
          const user = users[0];
          setUserData({ name: user.Name, email: user.Email, role: user.Role });
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (storedUserId) {
      fetchUserData();
      // console.log(storedUserId);
    }
  }, [storedUserId]);

  return userData;
}
