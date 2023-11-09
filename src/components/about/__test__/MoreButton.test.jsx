import MoreButton from "../MoreButton";
import { screen, render, fireEvent } from "@testing-library/react";



describe("MoreButton", () => {
    it("renders correctly", () => {
        render(
            <MoreButton>
                button
            </MoreButton>
        )
        const buttonElement = screen.getByText(/button/i)
        expect(buttonElement).toBeInTheDocument()
        expect(buttonElement.textContent).toBe('button')
    })

    it("color changes when hovered", () => {
        render(
            <MoreButton>
                button
            </MoreButton>
        )
       
        const buttonElement = screen.getByText(/button/i)
        const initialBg = buttonElement.style.backgroundColor 
        fireEvent.mouseEnter(buttonElement)
        expect(initialBg).not.toBe(buttonElement.style.backgroundColor)
    })
})
