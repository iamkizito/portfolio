import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import { colorPallete as cp } from "../../variables";
import ContactForm from "./Contactform";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';

const FormModal = ({...props}) => {
    const [isHovered, setIsHovered] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
      <Box {...props}>
        <Box as="button" onClick={onOpen}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            cursor="pointer"
            padding="10px"
            borderRadius="16px"
            border={`1px solid ${cp.secondary1}`}
            color={isHovered ? 'white' : ''}
            backgroundColor={isHovered ? 'grey' : cp.secondary1}
        >
            Leave me a message
        </Box>
  
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader textAlign="center">Message Form</ModalHeader>
                <ModalCloseButton />
                <ModalBody paddingBottom="30px">
                    <ContactForm/>
                </ModalBody>
            </ModalContent>
        </Modal>
      </Box>
    )
}

export default FormModal;