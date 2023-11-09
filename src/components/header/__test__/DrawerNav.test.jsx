import DrawerNav from "../DrawerNav";
import { screen, render, fireEvent, act } from "@testing-library/react";
import { faHouse, faNewspaper } from "@fortawesome/free-solid-svg-icons";


const navLinksList = [
    {
        name: "home",
        url: "#home",
        icon: faHouse,
    },
    {
        name: "about",
        url: "#about",
        icon: faNewspaper,
    },
]

describe("NavLink", () => {
    it("renders correctly: only button renders", () => {
        render(
            <DrawerNav
				handleClick={jest.fn()}
				navLinksList={navLinksList}
			/>
        )
		
		const drawerTriggerButton = screen.getByTestId('trigger-button')
        expect(drawerTriggerButton).toBeInTheDocument()

        const drawerElement = screen.queryByTestId("drawer-nav")
        expect(drawerElement).toBe(null)
    })


    it("drawer shows up with 2 links when trigger is clicked", async () => {
        render(
            <DrawerNav
				handleClick={jest.fn()}
				navLinksList={navLinksList}
			/>
        )	

		const drawerTriggerButton = screen.queryByTestId('trigger-button')
		fireEvent.click(drawerTriggerButton)

        const drawerElement = await screen.findByTestId("drawer-nav")
        expect(drawerElement).toBeInTheDocument()

		const drawerNavLinkElement = screen.getAllByTestId('drawer-nav-link')
        expect(drawerNavLinkElement.length).toBe(2)
    })

	
    it("calls handleclick when a navlink is clicked", async () => {
		const mockHandleClick = jest.fn()

        render(
            <DrawerNav
				handleClick={mockHandleClick}
				navLinksList={navLinksList}
			/>
        )

		const drawerTriggerButton = screen.queryByTestId('trigger-button')
		fireEvent.click(drawerTriggerButton)

        const linkElement = await screen.findByText(/home/i)
		fireEvent.click(linkElement)
        expect(mockHandleClick).toHaveBeenCalled()
    })
});