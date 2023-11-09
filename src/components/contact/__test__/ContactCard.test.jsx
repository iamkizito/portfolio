import ContactCard from "../ContactCard";
import { ChakraProvider } from "@chakra-ui/react";
import { screen, render, fireEvent } from "@testing-library/react";
import { faPhone } from "@fortawesome/free-solid-svg-icons";



describe("ContactCard", () => {
    it("renders initial state correctly", () => {
        render(
            <ChakraProvider>
                <ContactCard
                    icon={faPhone}
                    name="phone"
                    values={['+123-238900332323']}
                />
            </ChakraProvider>
        )
        const cardElement = screen.getByRole('contact-card')
        const phoneElement = screen.getByText(/phone/i)
        const valueElement = screen.getByText("+123-238900332323")
        expect(cardElement).toBeInTheDocument()
        expect(phoneElement).toBeInTheDocument()
        expect(valueElement).toBeInTheDocument()
    })

    it("icon animates when hovered", async () => {
        render(
            <ChakraProvider>
                <ContactCard
                    icon={faPhone}
                    name="phone"
                    values={['+123-238900332323']}
                />
            </ChakraProvider>
        )
       
        const cardElement = screen.getByRole("contact-card")
        const iconBoxElement = screen.getByTestId("icon-box")

        const initialPadding = window.getComputedStyle(iconBoxElement).padding

        fireEvent.mouseEnter(cardElement)
        expect(initialPadding).not.toBe(window.getComputedStyle(iconBoxElement).padding)
        
        fireEvent.mouseLeave(cardElement)
        expect(initialPadding).toBe(window.getComputedStyle(iconBoxElement).padding)
    })
})
