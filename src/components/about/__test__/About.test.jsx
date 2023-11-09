import About from "../About";
import { screen, render, fireEvent } from "@testing-library/react";



describe("About", () => {
    it("renders correctly", () => {
        render(
            <About/>
        )
        const aboutElement = screen.getByTestId("about")
        expect(aboutElement).toBeInTheDocument()
    })
    
    it("has a know 'know more' button", () => {
        render(
            <About/>
        )
            
        const knowMoreButton = screen.getByText(/know more/i)
        expect(knowMoreButton).toBeInTheDocument()
        // fireEvent.click(knowMoreButton)
    })
})
