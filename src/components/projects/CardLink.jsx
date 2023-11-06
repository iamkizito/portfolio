import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { colorPallete as cp } from "../../variables";

const CardLink = ({children, isActive, url, ...props}) => {
    const [isHovered, setIsHovered] = useState(false)

    const getStyle = () => {
        if (isActive) {
            return {
                borderBottom: `3px solid ${cp.primary2}`
            }
        }
        if (isHovered) {
            return {
                color: 'white',
                backgroundColor: 'grey',
            }
        }
    }

    return (
        <Box target="_blank" rel="noopener noreferrer"
            as="a"
            href={url}
            style={getStyle()}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            cursor="pointer"
            bg={cp.secondary1}
            padding="10px"
            borderRadius="16px"
            border={`1px solid ${cp.secondary1}`}
            {...props}
        >
            {children}
        </Box>
    )
}


export default CardLink;