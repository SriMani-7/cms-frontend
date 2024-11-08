import { SimpleFormField } from "@/components/formfield";
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";

export default function CourseSubjectDialog({ handleSubmit }) {
  const { control, ...rest } = useForm({});

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>New subject</DialogTitle>
      </DialogHeader>
      <Form control={control} {...rest}>
        <form method="post" onSubmit={rest.handleSubmit(handleSubmit)}>
          <SimpleFormField control={control} name="name" label="Subject name" />
          <SimpleFormField control={control} name="type" label="Subject type" />
          <DialogFooter className="pt-3">
            <Button>Close</Button>
            <Button>Submit</Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  );
}
