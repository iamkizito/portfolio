import {Social} from "../Socials";
import { ChakraProvider } from "@chakra-ui/react";
import { screen, render, fireEvent } from "@testing-library/react";
import { faPhone } from "@fortawesome/free-solid-svg-icons";



describe("Social", () => {
    it("renders initial state correctly", () => {
        render(
            <ChakraProvider>
                <Social
                    href="https://facebook.com"
                    icon={faPhone}
                />
            </ChakraProvider>
        )
        const socialMediaElement = screen.getByRole('social-media-link')
        expect(socialMediaElement).toBeInTheDocument()
        expect(socialMediaElement.getAttribute('target')).toBe('_blank')
        expect(socialMediaElement.getAttribute('href')).toBe('https://facebook.com')
    })
})

