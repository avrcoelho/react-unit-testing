import { render, screen } from "@testing-library/react";

import { Home } from "..";

const mockUseTodoList = {
  items: ['Task 1', 'task 2'],
  addItem: jest.fn(),
  removeItem: jest.fn(),
}
jest.mock('@/contexts/TodoListContext', () => ({
  useTodoList: () => mockUseTodoList,
}))

describe('Home page', () => {
  it('should be able to render list items', () => {
    render(<Home />);

    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  })
})
