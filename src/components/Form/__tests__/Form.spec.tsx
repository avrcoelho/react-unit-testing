import { render, screen, fireEvent } from "@testing-library/react";

import { Form } from "..";

describe('Form component', () => {
  it('should be able to submit form', () => {
    const props = {
      onSubmit: jest.fn()
    }
    render(<Form {...props} />);

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'first task'
    }});
    fireEvent.click(screen.getByRole('button', {
      name: /add/i
    }));

    expect(props.onSubmit).toBeCalled();
  })
})
