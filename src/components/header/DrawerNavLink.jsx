import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { colorPallete as cp } from "../../variables";


const DrawerNavLink = ({children, ...props}) => {
    const [isPointerDown, setIsPointerDown] = useState(false)

    return (
        <Box
            style={{
                display: 'block',
                padding: "15px"
            }}
            bg={isPointerDown? cp.primary1: ''}
            onPointerDown={() => setIsPointerDown(true)}
            onPointerUp={() => setIsPointerDown(false)}
            data-testid="drawer-nav-link"
            {...props}
        >
            {children}
        </Box>
    )
}


export default DrawerNavLink;