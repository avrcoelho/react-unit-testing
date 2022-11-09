import { renderHook, act } from "@testing-library/react";

import { useTodoList, TodoListProvider } from "../TodoListContext";


describe('todo list hook', () => {
  it('should be able to add item', () => {
    const { result } = renderHook(useTodoList, {
      wrapper: TodoListProvider
    });

    act(() => {
      result.current.addItem('task 1');
    })

    expect(result.current.items).toEqual(['task 1'])
  })

  it('should be able to remove item', () => {
    const { result } = renderHook(useTodoList, {
      wrapper: TodoListProvider
    });

    act(() => {
      result.current.addItem('task 1');
    });
    act(() => {
      result.current.removeItem('task 1');
    });

    expect(result.current.items).toEqual([])
  })
})
