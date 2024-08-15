import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import { AddFacultyDialogContent } from "./add-faculty";
import { Dialog } from "@/components/ui/dialog";
import { useFaculties } from "./state";

export const FacultyListPage = () => {
  const { faculties, handleNewFaculty } = useFaculties();
  const [openFacultyDialog, setOpenFacultyDialog] = useState(false);

  return (
    <>
      <Dialog open={openFacultyDialog} onOpenChange={setOpenFacultyDialog}>
        <AddFacultyDialogContent handleNewFaculty={handleNewFaculty} />
      </Dialog>
      <FacultyListCard
        faculties={faculties}
        onNewFacultyClick={() => setOpenFacultyDialog(true)}
      />
    </>
  );
};

export const FacultyListCard = ({ faculties, onNewFacultyClick }) => (
  <div>
    <h4>Faculty</h4>
    <Button onClick={onNewFacultyClick}>
      <PlusIcon /> New Faculty
    </Button>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>S.No</TableHead>
          <TableHead>Email id</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Mobile number</TableHead>
          <TableHead>Gender</TableHead>
          <TableHead>Designation</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {faculties.map((faculty, index) => (
          <TableRow key={index}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{faculty.email}</TableCell>
            <TableCell>{faculty.name}</TableCell>
            <TableCell>{faculty.mobileNumber}</TableCell>
            <TableCell>{faculty.gender}</TableCell>
            <TableCell>{faculty.designation}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);
