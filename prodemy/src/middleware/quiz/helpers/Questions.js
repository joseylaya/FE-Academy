import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

export default function Questions() {
  const [examDataExport, setExamData] = useState({ id: '', moduleId: '', examContent: '' });

  const { id } = useParams();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await Axios.get(`http://localhost:8000/fetchQuiz/${id}`);
        const examData = response.data;
        // console.log(examData);
        if (examData.length > 0) {
          const dataExam = examData[0];
          // console.log(dataExam)
          setExamData({ id: dataExam.id, moduleId: dataExam.moduleId, examContent: dataExam.examContent });
        }
      } catch (error) {
        console.error('Error fetching exam data:', error);
      }

    };

    if (id) {
      fetchUserData();
      // console.log(storedUserId);
    }
  }, [id]);

  return examDataExport;
}

