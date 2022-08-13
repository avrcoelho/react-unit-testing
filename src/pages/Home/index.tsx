import { Form } from "@/components/Form";
import { List } from "@/components/List";
import { useTodoList } from "@/contexts/TodoListContext";
import styles from "./styles.module.scss";

export const Home = (): JSX.Element => {
  const { addItem, removeItem, items } = useTodoList();

  return (
    <main className={styles.container}>
      <Form onSubmit={addItem} />
      <List items={items} onRemoveItem={removeItem} />
    </main>
  );
};
