import { useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import { NewCourseDialog } from "./add-programme";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useCourses } from "./state";

export default function AcadamicsCoursesPage() {
  const { courses, handleNewCourse } = useCourses();
  const navigate = useNavigate();
  const [newCourse, setNewCourse] = useState(false);

  return (
    <section>
      <Dialog open={newCourse} onOpenChange={setNewCourse}>
        <NewCourseDialog handleSubmit={handleNewCourse} />
      </Dialog>
      <section>
        <div className="flex justify-between">
          <h3 className=" text-xl p-3">All Courses</h3>
          <Button
            variant="secondary"
            onClick={() => {
              setNewCourse(true);
            }}
          >
            New Course
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-4 p-3 grow-0">
          {courses.map((course) => (
            <Card key={course.id} className="">
              <CardHeader className="">
                <CardTitle className="text-lg">{course.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{course.description}</p>
              </CardContent>
              <CardHeader>
                <Button
                  variant="outline"
                  onClick={() => {
                    navigate(""+course.id);
                  }}
                >
                  View Course
                </Button>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </section>
  );
}
