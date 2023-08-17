import { useEffect, useState } from 'react';
import Axios from 'axios';

function ContentData() {
    const [contentData, setContentData]  = useState({ data:[]});

    useEffect(() => {

        const fetchContentData = async () => {
          try {
            const response = await Axios.get(`http://localhost:8000/content/4`);
            const content = response.data;
            if (content.length > 0) {
              // console.log(content);
            //   const { courseName, courseDesc } = courses[0];
            setContentData({ data:content});
            }else(
              console.log("there is an error")
            )
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        };
      
        fetchContentData()
      
    },[]);
    
 
    return contentData;
}

export default ContentData