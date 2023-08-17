import { useEffect, useState } from 'react';
import Axios from 'axios';

const useBookmarkData = () => {
     const storedUserId = sessionStorage.getItem('userId');
     const [bookmarkData, setBookmarkData] = useState();

     useEffect(() => {
          const fetchBookmark = async () => {
               try {
                    const response = await Axios.get(`http://localhost:8000/savedCourses/${storedUserId}`);
                    setBookmarkData(response.data);

               } catch (error) {
                    console.error('Error fetching user data:', error);
               }
          };
          fetchBookmark();
     }, []);

     return bookmarkData;
}

export default useBookmarkData;
