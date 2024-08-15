import { useEffect, useReducer } from "react";
import { createCourse, fetchCourses } from "../services";

function coursesReducer(state, action) {
  switch (action.type) {
    case "load": {
      console.log("loding courses", action.data);
      return {
        courses: action.data,
      };
    }
    case "error": {
      console.error("error in courses reducer", action.error);
      return {
        ...state,
        error: action.error,
      };
    }

    case "add": {
      return {
        courses: [...state.courses, action.data],
      };
    }

    default:
      break;
  }
}

function useCourses() {
  const [{ courses, error }, dispatch] = useReducer(coursesReducer, {
    courses: [],
    error: null,
  });

  async function handleNewCourse(data) {
    try {
      let res = await createCourse(data);
      dispatch({
        type: "add",
        data: res.data,
        status: res.status,
      });
    } catch (error) {
      console.error("While in creating course", error);
    }
  }

  useEffect(() => {
    (async function () {
      console.log("loading all courses");
      try {
        let response = await fetchCourses();
        dispatch({
          type: "load",
          status: response.status,
          data: response.data,
        });
      } catch (error) {
        console.error("While in loading courses", error);
      }
    })();
  }, []);

  return { courses, error, handleNewCourse };
}

export { useCourses };
