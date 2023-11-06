import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { colorPallete as cp } from "../../variables";

const NavLink = ({children, isActive, ...props}) => {
    const [isHovered, setIsHovered] = useState(false)

    const getStyle = () => {
        if (isActive) {
            return {
                borderBottom: `3px solid ${cp.secondary1}`
            }
        }
        if (isHovered) {
            return {
                color: cp.secondary1
            }
        }
    }

    return (
        <Box 
            style={getStyle()}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            cursor="pointer"
            {...props}
        >
            {children}
        </Box>
    )
}


export default NavLink;