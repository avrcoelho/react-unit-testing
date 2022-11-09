import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Form } from "..";

describe('Form component', () => {
  it('should be able to submit form', async () => {
    const props = {
      onSubmit: jest.fn()
    }
    render(<Form {...props} />);

    await userEvent.type(screen.getByRole('textbox'), 'first task')
    await userEvent.click(screen.getByRole('button', {
      name: /add/i
    }))

    expect(props.onSubmit).toBeCalled();
  })
})
