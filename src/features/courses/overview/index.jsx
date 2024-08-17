import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useCourse } from "./state";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import CourseSubjectDialog from "../CourseSubjectDialog";

export function CourseOverviewPage() {
  const { id } = useParams();
  const { info, students, subjects, handleAddSubject } = useCourse(id);
  const [newSubject, setNewSubject] = useState(false);


  async function onAddSubject(data) {
    handleAddSubject(data)
    setNewSubject(false)
  }

  return (
    <>
      <p>Courses / {info.name}</p>
      <p>{info.description}</p>
      <Button onClick={() => setNewSubject(true)}>New subject</Button>
      <div>
        <h3>Subjects</h3>
        <CourseSubjectsTable subjects={subjects} />
      </div>
      <div>
        <h3>Students</h3>
        <CourseStudentsTable students={students} />
      </div>


      <Dialog open={newSubject} onOpenChange={setNewSubject}>
          <CourseSubjectDialog handleSubmit={onAddSubject}/>
      </Dialog>
    </>
  );
}

const CourseSubjectsTable = ({ subjects }) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Subject id</TableHead>
        <TableHead>Subject name</TableHead>
        <TableHead>Subject type</TableHead>
        <TableHead>Faculty name</TableHead>
        <TableHead>Actions</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {subjects.map((subject) => (
        <TableRow key={subject.id}>
          <TableCell>{subject.id}</TableCell>
          <TableCell>{subject.name}</TableCell>
          <TableCell>{subject.type}</TableCell>
          <TableCell>{subject.facultyName}</TableCell>
          <TableCell>
            <Button>Edit</Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

const CourseStudentsTable = ({ students }) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Admission number</TableHead>
        <TableHead>First name</TableHead>
        <TableHead>Last name</TableHead>
        <TableHead>Email address</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {students.map((student) => (
        <TableRow key={student.id}>
          <TableCell>{student.id}</TableCell>
          <TableCell>{student.firstName}</TableCell>
          <TableCell>{student.lastName}</TableCell>
          <TableCell>{student.email}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);
