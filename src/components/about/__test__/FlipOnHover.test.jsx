import FlipOnHover from "../FlipOnHover";
import { screen, render, fireEvent } from "@testing-library/react";



function isFacingScreen(element) {
    const transform = element.style.transform
    console.log(transform)
    const deg = transform.match(/rotateY\((.+)deg\)/)[1]
    if (deg === '0') {
        return true
    } else if (deg === '180') {
        return false
    }
}


describe("FlipOnHover", () => {
    it("renders initial state correctly", () => {
        render(
            <FlipOnHover>
                <div>front</div>
                <div>back</div>
            </FlipOnHover>
        )
        const frontElement = screen.getByText(/front/i)
        const backElements = screen.getAllByText(/back/i)
        expect(frontElement).toBeInTheDocument()
        expect(backElements.length).toBe(2)
        expect(backElements[0]).toBeInTheDocument()
        expect(backElements[1]).toBeInTheDocument()
    })

    it("flips when hovered", () => {
        render(
            <FlipOnHover>
                <div>front</div>
                <div>back</div>
            </FlipOnHover>
        )
       
        const hoverContainer = screen.getByTestId('on-hover-container')

        expect(isFacingScreen(hoverContainer)).toBeTruthy()
        fireEvent.mouseEnter(hoverContainer)
        expect(isFacingScreen(hoverContainer)).not.toBeTruthy()
    })
})
