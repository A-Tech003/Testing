import { fireEvent, render } from "@testing-library/react"
import Counter from "./App"

describe(Counter, () => {
    it("counter display correct initial count", () => {
        const {getByTestId} = render(<Counter/>)
        const countValue = Number(getByTestId("count").textContent);
        expect(countValue).toBe(0);
    });

    it("count should increment by one if the button is clicked", () => {
        const {getByTestId, getByRole} = render(<Counter/>)
        const btnIncrement = getByRole("button", {name: "Increase"});
        fireEvent.click(btnIncrement);
        const countValue = Number(getByTestId("count").textContent);
        expect(countValue).toEqual(1);
    });
});