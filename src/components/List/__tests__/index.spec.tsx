import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { List } from "..";

describe('List component', () => {
  const props = {
    items: ['Task 1', 'task 2'],
    onRemoveItem: jest.fn()
  }

  it('should be able to render list items', () => {
    render(<List {...props} />);

    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  })

  it('should be able to call remove item function', async () => {
    render(<List {...props} />);

    await userEvent.click(screen.getByLabelText('remove item Task 1'))

    expect(props.onRemoveItem).toBeCalledWith('Task 1');
  })
})
