import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test("the counter starts at 0", () => {
  render(<App />)
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(0);
})

test("minus button has correct text", () => {
  render(<App />)
  const buttonElement = screen.getByTestId("minus-button");
  expect(buttonElement).toHaveTextContent('-')
})

test("plus button has correct text", () => {
  render(<App />)
  const buttonElement = screen.getByTestId("plus-button");
  expect(buttonElement).toHaveTextContent('+')
})

test("on-off button has correct text", () => {
  render(<App/>)
  const buttonElement = screen.getByTestId("on-off-button")
  expect(buttonElement).toHaveTextContent("on/off")
})

test("After pressing + button, counter chagned 1", () => {
	render(<App/>);
	const buttonElement = screen.getByTestId("plus-button");
	fireEvent.click(buttonElement);

	const counterElement = screen.getByTestId("counter");
	expect(counterElement).toHaveTextContent(1);
})

test("After pressing - button, counter chagned -1", () => {
	render(<App/>);
	const buttonElement = screen.getByTestId("minus-button");
	fireEvent.click(buttonElement);

	const counterElement = screen.getByTestId("counter");
	expect(counterElement).toHaveTextContent(-1);
})

test("on/off button has blud background", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("on-off-button");
  expect(buttonElement).toHaveStyle({ backgroundColor: "blue" })
})

test("Prevent -,+ Buttons from being pressed when the o/off button is clicked", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("on-off-button");
  userEvent.click(buttonElement);
  const plusButtonElement = screen.getByTestId("plus-button")
  const minusButtonElement = screen.getByTestId("minus-button")

  expect(plusButtonElement).toBeDisabled()
  expect(minusButtonElement).toBeDisabled()
})