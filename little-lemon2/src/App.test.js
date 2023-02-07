import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import BookingPage from './layout/Main/BookingPage/BookingPage';
import BookingForm from './layout/Main/BookingPage/BookingForm/BookingForm';
import App from './App';



test('Renders the BookingForm heading', () => {
  render(<BookingPage />);
  const headingElement = screen.getByText("Reserve a table");
  expect(headingElement).toBeInTheDocument();
})

describe("Booking Form", ()=> {
  test("Submition is disabled if date is not selected", () => {
    const handleSubmit = jest.fn();
    const updateForm = '';
    render(<BookingForm updateForm={updateForm}  onSubmit={handleSubmit}/>);

    const dateInput = screen.getByLabelText('Choose date');
    fireEvent.change(dateInput, {target: {value: 'dd/mm/yyyy'}});

    const submitButton = screen.getByRole('button');
    fireEvent.click(submitButton);

    expect(handleSubmit).not.toHaveBeenCalled();
    expect(submitButton).toHaveAttribute("disabled")
  })
})
