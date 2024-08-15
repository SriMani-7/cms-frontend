import { useEffect, useReducer } from "react";
import { createFaculty, fetchFaculty } from "../services";

function facultyReducer(state, action) {
  switch (action.type) {
    case "load": {
      console.log("loding faculties", action.data);
      return {
        faculties: action.data,
      };
    }
    case "error": {
      console.error("error in faculty reducer", action.error);
      return {
        ...state,
        error: action.error,
      };
    }

    case "add": {
      return {
        faculties: [...state.faculties, action.data],
      };
    }

    default:
      break;
  }
}

function useFaculties() {
  const [{ faculties, error }, dispatch] = useReducer(facultyReducer, {
    faculties: [],
    error: null,
  });

  async function handleNewFaculty(data) {
    try {
      let res = await createFaculty(data);
      dispatch({
        type: "add",
        data: res.data,
        status: res.status,
      });
    } catch (error) {
      console.error("While in creating faculty", error);
    }
  }

  useEffect(() => {
    (async function () {
      console.log("loading all faculties")
      try {
        let response = await fetchFaculty();
        dispatch({
          type: "load",
          status: response.status,
          data: response.data,
        });
      } catch (error) {
        console.error("While in loading faculties", error);
      }
    })();
  }, []);

  return { faculties, error, handleNewFaculty };
}

export { useFaculties };
