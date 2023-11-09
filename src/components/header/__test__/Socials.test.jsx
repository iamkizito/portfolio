import Socials from "../Socials";
import { ChakraProvider } from "@chakra-ui/react";
import { screen, render } from "@testing-library/react";
import { faEnvelope, faGithub } from "@fortawesome/free-solid-svg-icons";


const socialMediaList = [
    {
        icon: faEnvelope,
        url: "mailto: hello@example.com",
    },
    {
        icon: faGithub,
        url: "https://github.com",
    },
]

describe("Socials", () => {
    it("renders 2 social media elements when 2 social media list is passed as parameter", () => {
        render(
            <ChakraProvider>
                <Socials
                    socialMediaList={socialMediaList}
                />
            </ChakraProvider>
        )
        const socialMediaElements = screen.getAllByRole('social-media-link')
        expect(socialMediaElements.length).toBe(2)
    })
})
