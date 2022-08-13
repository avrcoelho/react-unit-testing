import { TodoListProvider } from "@/contexts/TodoListContext";
import { Home } from "@/pages/Home";

export const App = (): JSX.Element => {
  return (
    <TodoListProvider>
      <Home />
    </TodoListProvider>
  );
};
