import FormModal from "../FormModal";
import { screen, render, fireEvent} from "@testing-library/react";



describe("FormModal", () => {
    it("renders correctly: only renders trigger button initially", async () => {
        render(
            <FormModal>
                <div>Hello</div>
            </FormModal>
        )
		
		const modalTriggerButton = screen.getByText(/Leave me a message/i)
        expect(modalTriggerButton).toBeInTheDocument()

        const modalElement = screen.queryByText(/hello/i)
        expect(modalElement).toBe(null)
    })


    it("modal shows up with the trigger button is clicked", async () => {
        render(
            <FormModal>
                <div>Hello</div>
            </FormModal>
        )	

		const modalTriggerButton = await screen.findByText(/Leave me a message/i)
		fireEvent.click(modalTriggerButton)

        const modalElement = screen.getByText(/hello/i)
        expect(modalElement).toBeInTheDocument()
    })
});