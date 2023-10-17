import { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTask } from "features/todo";
import { Stage } from "features/todo/stages";

export interface UseFormProps {
  stage: Stage;
}

export const useForm = ({ stage }: UseFormProps) => {
  const dispatch = useDispatch();

  const [name, setName] = useState<string>("");

  const onNameChange = (e: SyntheticEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(
      addTask({
        id: uuidv4(),
        date: new Date().toLocaleString(),
        name,
        stage,
      })
    );

    setName("");
  };

  return { name, onNameChange, onSubmit };
};
