import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import { colorPallete as cp } from "../../variables";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';

const FormModal = ({children, ...props}) => {
    const [isHovered, setIsHovered] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
      <Box {...props}>
        <Button
            onClick={onOpen}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            cursor="pointer"
            padding="10px"
            borderRadius="16px"
            border={`1px solid ${cp.secondary1}`}
            color="black"
            backgroundColor={isHovered ? 'grey' : cp.secondary1}
        >
            Leave me a message
        </Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent width="95%" data-testid="modal">
                <ModalHeader textAlign="center">Message Form</ModalHeader>
                <ModalCloseButton />
                <ModalBody paddingBottom="30px">
                    {children}
                </ModalBody>
            </ModalContent>
        </Modal>
      </Box>
    )
}

export default FormModal;