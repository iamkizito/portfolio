import DrawerNavLink from "../DrawerNavLink";
import { screen, render, fireEvent } from "@testing-library/react";



describe("DrawerNavLink", () => {
    it("renders correctly", () => {
        render(
            <DrawerNavLink>
                link
            </DrawerNavLink>
        )
        const linkElement = screen.getByText(/link/i)
        expect(linkElement).toBeInTheDocument()
        expect(linkElement.textContent).toBe('link')
    })

    it("bg color changes when pointer down and returns when pointer up", () => {
        render(
            <DrawerNavLink>
                link
            </DrawerNavLink>
        )
       
        const linkElement = screen.getByText(/link/i)
        const initialBg = window.getComputedStyle(linkElement).backgroundColor 

        fireEvent.pointerDown(linkElement)
        expect(initialBg).not.toBe(window.getComputedStyle(linkElement).backgroundColor)

        fireEvent.pointerUp(linkElement)
        expect(initialBg).toBe(window.getComputedStyle(linkElement).backgroundColor)
    })
})

