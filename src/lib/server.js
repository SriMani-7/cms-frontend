import { belongsTo, createServer, hasMany, Model } from "miragejs";
import { fakeDb } from "./fakedata";

export default function runMockServer() {
  let server = createServer({
    models: {
      faculty: Model.extend({
        courses: hasMany(),
      }),
      course: Model.extend({
        students: hasMany(),
        subjects: hasMany(),
      }),
      student: Model.extend({
        course: belongsTo(),
      }),
      subject: Model.extend({
        course: belongsTo(),
        faculty: belongsTo(),
      }),
    },

    routes() {
      this.namespace = "/api";

      this.get("/courses", ({ courses }) => {
        console.log("hi  bro");
        return courses.all().models;
      });
    },
  });

  server.urlPrefix = "http://localhost:5173";
  server.db.loadData(fakeDb);

  server.post("/courses", ({ courses }, request) => {
    let data = JSON.parse(request.requestBody);
    return courses.create(data).attrs;
  });

  server.get("/courses/:id", (s, request) => {
    let courseId = request.params.id;
    let course = s.courses.find(courseId);

    console.log(course);

    let { name, id, description } = course.attrs;

    return {
      name: name,
      id: id,
      description: description,
      subjects: course.subjects.models.map((subject) => {
        return {
          ...subject.attrs,
          facultyName: subject.faculty.name,
        };
      }),
      students: course.students.models,
    };
  });

  return server;
}
