import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { colorPallete as cp } from "../../variables";

const NavLink = ({children, isActive, ...props}) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <Box 
            color={isHovered || isActive ? cp.secondary1 : ''}
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