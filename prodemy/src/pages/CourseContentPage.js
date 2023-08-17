import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Materials from '../middleware/contentCourse/Materials';

export default function CourseContentPage() {
     
     return (
          <>
               <Helmet>
                    <title>COURSE_NAME | Minimal UI</title>
               </Helmet>
               <Materials />
          </>
     );
}
