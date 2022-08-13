import { useRef, FormEvent } from "react";

import styles from "./styles.module.scss";

type FormProps = {
  onSubmit(value: string): void;
};

export const Form = ({ onSubmit }: FormProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const inputValue = inputRef.current!.value.trim();
    if (inputValue) {
      onSubmit(inputRef.current!.value);
      inputRef.current!.value = "";
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input
        ref={inputRef}
        type="text"
        name="item"
        placeholder="New item"
        autoComplete="off"
      />

      <button type="submit">Add</button>
    </form>
  );
};
