import React from "react";
import FullScreenSection from "../FullScreenSection";
import { Box, Flex } from "@chakra-ui/react";
import { fonts, colorPallete as cp } from "../../variables";
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import ContactCard from "./ContactCard";
import FormModal from "./FormModal";
import ContactForm from "./ContactForm";

const contactList = [
	{
		icon: faPhone,
		name: "Phone",
		values: ['+123-238900332323', '+123-238900332323']
	},
	{
		icon: faEnvelope,
		name: "Email",
		values: ['iamkizito@gmail.com']
	},
	{
		icon: faLocationDot,
		name: "Address",
		values: ['+123-238900332323', '+123-238900332323']
	},
	
];


const Contact = () => {
	return (
        <Flex id="contact"
            justify="center"
            align="center"
            padding={{base: "25px 20px", md:""}}
        >
            <FullScreenSection>
                <Box as="h1" fontFamily={fonts.heading} fontSize="1.7rem" fontWeight="bold" textAlign="center">
                    Contact
                </Box>
                <Box fontSize="1.3rem" margin="50px 0"> Want to get in touch?</Box>
                <Box
                    display="grid"
                    gridTemplateColumns={{base:"repeat(1, minmax(0,1fr))", md:"repeat(3, minmax(0,1fr))"}}
                    gap="60px"
                >
                    {contactList.map((contact, index) => (
                        <ContactCard
                            key={index}
                            icon={contact.icon}
                            name={contact.name}
                            values={contact.values}
                        />
                    ))}
                </Box>

                <Flex justifyContent="end" paddingTop="50px" justifyself="end">				
                    <FormModal>
                        <ContactForm/>
                    </FormModal>
                </Flex>
            </FullScreenSection>
        </Flex>
	);
};

export default Contact;
