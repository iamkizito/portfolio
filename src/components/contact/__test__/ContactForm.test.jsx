import ContactForm from "../ContactForm";
import { ChakraProvider } from "@chakra-ui/react";
import { screen, render, fireEvent, act } from "@testing-library/react";


jest.mock("../../../context/alertContext", ()=> {
    return {
        useAlertContext: () => ({onOpen: jest.fn()})
    }
})


describe("ContactForm", () => {
    it("renders initial state correctly", () => {
        render(
            <ChakraProvider>
                <ContactForm/>
            </ChakraProvider>
        )
        const formElement = screen.getByRole('contact-form')
        expect(formElement).toBeInTheDocument()

        const nameInput = screen.getByLabelText(/name/i)
        const emailInput = screen.getByLabelText(/email address/i)
        const enquiryInput = screen.getByLabelText(/type of enquiry/i)
        const messageInput = screen.getByLabelText(/your message/i)

        expect(nameInput.value).toBe('')
        expect(emailInput.value).toBe('')
        expect(enquiryInput.value).not.toBe('')
        expect(messageInput.value).toBe('')
    })


    it("shows error on all required inputs, when submitted without filling any", async () => {
        render(
            <ChakraProvider>
                <ContactForm/>
            </ChakraProvider>
        )

        fireEvent.click(screen.getByText(/submit/i))

        const requiredMessages = await screen.findAllByText(/required/i)
        expect(requiredMessages.length).toBe(3)   
    })


    it("input fields accepts user input entered correctly", () => {
        render(
            <ChakraProvider>
                <ContactForm/>
            </ChakraProvider>
        )

        const nameInput = screen.getByLabelText(/name/i)
        const emailInput = screen.getByLabelText(/email address/i)
        const enquiryInput = screen.getByLabelText(/type of enquiry/i)
        const messageInput = screen.getByLabelText(/your message/i)
        
        act(() => {
            fireEvent.change(nameInput, {target: {value: "obiora"}})
            fireEvent.change(emailInput, {target: {value: "obiora@eze.com"}})
            fireEvent.change(enquiryInput, {target: {value: "other"}})
            fireEvent.change(messageInput, {target: {value: "hskeksdsds"}})
        })
        expect(nameInput.value).toBe('obiora')
        expect(emailInput.value).toBe('obiora@eze.com')
        expect(enquiryInput.value).toBe('other')
        expect(messageInput.value).toBe('hskeksdsds')
    })


    it("shows error when invalid email address is entered", async () => {
        render(
            <ChakraProvider>
                <ContactForm/>
            </ChakraProvider>
        )

        const emailInput = screen.getByLabelText(/email address/i)
        fireEvent.change(emailInput, {target: {value: "iamm"}})
        fireEvent.blur(emailInput)

        const validationMessage = await screen.findByText(/invalid/i)
        expect(validationMessage).toBeInTheDocument()   
    })


    it("shows error when minimum characters for message is not reached", async () => {
        render(
            <ChakraProvider>
                <ContactForm/>
            </ChakraProvider>
        )

        const messageInput = screen.getByLabelText(/your message/i)
        fireEvent.change(messageInput, {target: {value: "iamm"}})
        fireEvent.blur(messageInput)

        const validationMessage = await screen.findByText(/at least/i)
        expect(validationMessage).toBeInTheDocument()   
    })
})
