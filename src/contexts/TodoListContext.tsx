import {
  createContext,
  useState,
  useContext,
  useCallback,
  ReactNode,
} from "react";

type TodoListContextData = {
  items: string[];
  addItem(item: string): void;
  removeItem(item: string): void;
};

type TodoListProviderProps = {
  children: ReactNode;
};

const TodoListContext = createContext<TodoListContextData>(
  {} as TodoListContextData
);

export const TodoListProvider = ({ children }: TodoListProviderProps) => {
  const [items, setTodoLists] = useState<string[]>([]);

  const addItem = useCallback((item: string) => {
    setTodoLists((prevItems) => [...prevItems, item]);
  }, []);

  const removeItem = useCallback((item: string) => {
    setTodoLists((prevItems) =>
      prevItems.filter((prevItem) => prevItem !== item)
    );
  }, []);

  return (
    <TodoListContext.Provider
      value={{
        items,
        addItem,
        removeItem,
      }}
    >
      {children}
    </TodoListContext.Provider>
  );
};

export const useTodoList = (): TodoListContextData =>
  useContext(TodoListContext);
