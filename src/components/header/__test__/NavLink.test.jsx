import NavLink from "../NavLink";
import { screen, render, fireEvent } from "@testing-library/react";



describe("NavLink", () => {
    it("renders correctly", () => {
        render(
            <NavLink>
                link
            </NavLink>
        )
        const linkElement = screen.getByText(/link/i)
        expect(linkElement).toBeInTheDocument()
        expect(linkElement.textContent).toBe('link')
    })

    it("color changes when hovered", () => {
        render(
            <NavLink>
                link
            </NavLink>
        )
       
        const linkElement = screen.getByText(/link/i)
        const initialColor = window.getComputedStyle(linkElement).color 
        fireEvent.mouseEnter(linkElement)
        expect(initialColor).not.toBe(window.getComputedStyle(linkElement).color )
    })

    it("color remains thesame when active, same as when hover", () => {
        render(
            <NavLink isActive={true}>
                link
            </NavLink>
        )
       
        const linkElement = screen.getByText(/link/i)
        const initialColor = window.getComputedStyle(linkElement).color  
        fireEvent.mouseEnter(linkElement)
        expect(initialColor).toBe(window.getComputedStyle(linkElement).color )
    })
})

