import { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, getTodoTaskDraft, Stage } from "features/todo";

export interface UseFormProps {
  stage?: Stage;
}

export const useForm = ({ stage }: UseFormProps) => {
  const dispatch = useDispatch();

  const [name, setName] = useState<string>("");

  const onNameChange = (inputName: string) => {
    setName(inputName);
  };

  const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(addTask(getTodoTaskDraft({ name, stage })));

    setName("");
  };

  return { name, onNameChange, onSubmit };
};
