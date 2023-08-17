import { useEffect, useState } from 'react';
import Axios from 'axios';

function CourseData() {
    const [courseData, setCourseData]  = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const response = await Axios.get(`http://localhost:8000/fetchCourse`);
            const courses = response.data;
            if (courses.length > 0) {
              console.log(courses);
            //   const { courseName, courseDesc } = courses[0];
              setCourseData({courses});
            }
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        };
      
        fetchUserData()
      
    },[]);
    
 
    return courseData;
}

export default CourseData


