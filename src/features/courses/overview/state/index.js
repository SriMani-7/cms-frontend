import { useEffect, useState } from "react";
import { createCourseSubject, fetchCourse } from "../../services";

export function useCourse(id) {
  const [info, setInfo] = useState({});
  const [students, setStudents] = useState([]);
  const [subjects, setSubjects] = useState([]);

  async function handleAddSubject(data) {
    createCourseSubject(id, data).then(res => {
      setSubjects([...subjects, res.data]);
    })
  }

  useEffect(() => {
    (async function () {
      try {
        console.log("fetching courses");
        let res = await fetchCourse(id);
        if (res.status == 200) {
          let data = res.data;
          console.log(data);
          setInfo({
            id: data.id,
            name: data.name,
            description: data.description,
          });
          setStudents(data.students);
          setSubjects(data.subjects);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [id]);

  return { info, students, subjects, handleAddSubject };
}
