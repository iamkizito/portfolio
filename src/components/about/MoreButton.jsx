import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { colorPallete as cp } from "../../variables";

const MoreButton = ({children, ...props}) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <Box
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            cursor="pointer"
            padding="10px"
            borderRadius="16px"
            border={`1px solid ${cp.secondary1}`}
            color={isHovered ? 'white' : ''}
            style={{backgroundColor: isHovered ? 'grey' : cp.secondary1}}  
            {...props}
        >
            {children}
        </Box>
    )
}


export default MoreButton;